import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { chromium } from "playwright";
import { getServicePage, serviceRouteSlugs } from "../src/lib/rite-content.ts";

// Run against a production build. No appointments or emails are sent.
const origin = "http://127.0.0.1:4310";
const server = spawn(
  process.execPath,
  [
    "node_modules/next/dist/bin/next",
    "start",
    "--hostname",
    "127.0.0.1",
    "--port",
    "4310",
  ],
  { stdio: "ignore" },
);
let browser;

try {
  let ready = false;
  for (let attempt = 0; attempt < 80; attempt += 1) {
    try {
      ready = (await fetch(origin)).ok;
    } catch {
      /* Server is still starting. */
    }
    if (ready) break;
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  assert(ready, "Production server did not start. Run npm run build first.");
  browser = await chromium.launch({
    headless: true,
    ...(process.env.BROWSER_EXECUTABLE
      ? { executablePath: process.env.BROWSER_EXECUTABLE }
      : {}),
    args: ["--no-sandbox", "--disable-dev-shm-usage"],
  });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));

  for (const width of [320, 375, 390, 768, 1024, 1280, 1440, 1920]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(origin, { waitUntil: "domcontentloaded" });
    assert(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      `Homepage overflows at ${width}px`,
    );
  }
  console.log("Responsive homepage: 320–1920px passed.");

  for (const route of [
    "/services",
    "/about-us",
    "/contact",
    "/blog",
    "/video",
    "/services/emergency-plumber-repair",
    "/blog/plumbing-mistakes-diy-ers-make",
  ]) {
    for (const width of [390, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      const response = await page.goto(`${origin}${route}`, {
        waitUntil: "domcontentloaded",
      });
      assert.equal(response.status(), 200, route);
      assert.equal(await page.locator("h1").count(), 1, route);
      assert(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        `${route} overflows at ${width}px`,
      );
    }
  }
  console.log("Main page layouts: mobile and desktop passed.");

  for (const slug of serviceRouteSlugs) {
    for (const prefix of ["/services/", "/"]) {
      const response = await fetch(`${origin}${prefix}${slug}`);
      assert.equal(response.status, 200, `${prefix}${slug}`);
      const html = await response.text();
      assert(
        html.includes(`/services/${getServicePage(slug).slug}`),
        `Missing canonical service path: ${slug}`,
      );
    }
  }
  console.log(
    `All ${serviceRouteSlugs.length * 2} current and legacy service URLs passed.`,
  );

  await page.goto(origin, { waitUntil: "domcontentloaded" });
  await page.locator("summary").filter({ hasText: "Services" }).click();
  assert(await page.getByText("How we can help", { exact: true }).isVisible());
  await page.keyboard.press("Escape");
  assert(
    !(await page.getByText("How we can help", { exact: true }).isVisible()),
  );
  const faq = page.locator("details.faq-row").first();
  await faq.locator("summary").click();
  assert(await faq.evaluate((element) => element.open));

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(origin, { waitUntil: "domcontentloaded" });
  await page
    .getByRole("button", { name: "Open navigation", exact: true })
    .click();
  assert(await page.getByRole("dialog").isVisible());
  await page.keyboard.press("Escape");
  assert(!(await page.getByRole("dialog").isVisible()));
  assert.equal(await page.evaluate(() => document.body.style.overflow), "");
  await page
    .getByRole("button", { name: "Open navigation", exact: true })
    .click();
  await page
    .getByRole("navigation", { name: "Mobile navigation" })
    .getByRole("link", { name: "Contact", exact: true })
    .click();
  await page.waitForURL("**/contact");
  assert(!(await page.getByRole("dialog").isVisible()));
  console.log("Navigation, keyboard dismissal, and FAQ passed.");

  await page.getByLabel("Your name").fill("QA Test");
  await page.getByLabel("Phone number").fill("2125550123");
  await page
    .getByLabel("Service needed")
    .selectOption({ label: "Drain cleaning" });
  await page.getByLabel("ZIP code").fill("123");
  await page
    .getByLabel("How can we help?")
    .fill("Local QA only. No request will be sent.");
  await page.getByRole("button", { name: "Prepare email request" }).click();
  assert(!(await page.getByText("Your email draft is ready.").isVisible()));
  await page.getByLabel("ZIP code").fill("10022");
  await page.getByRole("button", { name: "Prepare email request" }).click();
  assert(await page.getByText("Your email draft is ready.").isVisible());
  const draft = await page
    .getByRole("link", { name: "Open email app" })
    .getAttribute("href");
  assert(draft.startsWith("mailto:info@riteplumbingnyc.com?"));
  assert(decodeURIComponent(draft).includes("Drain cleaning"));
  assert(decodeURIComponent(draft).includes("10022"));
  assert(
    await page.getByText("Your request has not been sent yet.").isVisible(),
  );
  console.log("Form validation and email draft passed; no email sent.");

  const response = await page.goto(`${origin}/not-a-real-page`, {
    waitUntil: "domcontentloaded",
  });
  assert.equal(response.status(), 404);
  await page
    .getByRole("link", { name: "Back to home", exact: true })
    .waitFor({ state: "visible" });
  assert.equal((await fetch(`${origin}/sitemap.xml`)).status, 200);
  assert.equal((await fetch(`${origin}/robots.txt`)).status, 200);
  assert.deepEqual(errors, []);
  console.log("404, sitemap, robots.txt, and browser error checks passed.");
} finally {
  if (browser) await browser.close();
  server.kill("SIGTERM");
}
