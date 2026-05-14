import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
await mkdir('docs/design-references/riteplumbingnyc.com/final', { recursive: true });
const browser = await chromium.launch({ headless: true });
const targets = [
  ['home-desktop', '/', 1440, 1200],
  ['home-mobile', '/', 390, 1000],
  ['service-desktop', '/bathroom-plumbing-shower-repair/', 1440, 1000],
  ['service-mobile', '/bathroom-plumbing-shower-repair/', 390, 1000],
  ['contact-desktop', '/contact/', 1440, 1000],
];
for (const [name, path, width, height] of targets) {
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
  await page.goto(`http://localhost:3000${path}`, { waitUntil: 'networkidle' });
  await page.screenshot({ path: `docs/design-references/riteplumbingnyc.com/final/${name}.png`, fullPage: true });
  await page.close();
}
await browser.close();
