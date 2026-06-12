// Captura solo el footer.
import { chromium } from 'playwright';

const url = process.argv[2] ?? 'http://localhost:5174';
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

const errors = [];
page.on('pageerror', (err) => errors.push(err.message));

await page.goto(url, { waitUntil: 'networkidle' });
await page.locator('footer').scrollIntoViewIfNeeded();
await page.waitForTimeout(800);
await page.locator('footer').screenshot({ path: 'scripts/footer.png' });

console.log(`errores: ${errors.length}`);
for (const e of errors) console.log(`  - ${e}`);
await browser.close();
