import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
await mkdir('docs/design-references/riteplumbingnyc.com', { recursive: true });
const browser = await chromium.launch({ headless: true });
for (const [name, width, height] of [['clone-desktop', 1440, 1200], ['clone-mobile', 390, 1000]]) {
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.screenshot({ path: `docs/design-references/riteplumbingnyc.com/${name}.png`, fullPage: true });
  await page.close();
}
await browser.close();
