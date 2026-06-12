// Diagnóstico headless: captura la landing y reporta errores de consola.
// Uso: node scripts/snap.mjs [url]
import { chromium } from 'playwright';

const url = process.argv[2] ?? 'http://localhost:5174';
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

const errors = [];
page.on('console', (msg) => {
  if (msg.type() === 'error') errors.push(msg.text());
});
page.on('pageerror', (err) => errors.push(`PAGEERROR: ${err.message}`));

await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForTimeout(2500);

await page.screenshot({ path: 'scripts/hero.png' });
await page.screenshot({ path: 'scripts/full.png', fullPage: true });

const stylesheets = await page.evaluate(() =>
  [...document.styleSheets].map((s) => s.href ?? 'inline').length
);
const heroTitle = await page.evaluate(() => {
  const el = document.querySelector('.hero__title');
  if (!el) return 'NO EXISTE';
  const cs = getComputedStyle(el);
  return `texto="${el.textContent}" opacity=${cs.opacity} display=${cs.display} fontSize=${cs.fontSize} clases="${el.className}"`;
});

console.log(`stylesheets: ${stylesheets}`);
console.log(`hero__title: ${heroTitle}`);
console.log(`errores de consola (${errors.length}):`);
for (const e of errors.slice(0, 10)) console.log(`  - ${e}`);

await browser.close();
