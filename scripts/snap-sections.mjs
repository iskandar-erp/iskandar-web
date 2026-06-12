// Recorre la página con scroll (dispara las animaciones useInView) y
// captura las secciones clave.
import { chromium } from 'playwright';

const url = process.argv[2] ?? 'http://localhost:5174';
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

const errors = [];
page.on('pageerror', (err) => errors.push(err.message));

await page.goto(url, { waitUntil: 'networkidle' });

// Scroll progresivo para disparar todos los IntersectionObserver
await page.evaluate(async () => {
  const step = 600;
  for (let y = 0; y <= document.body.scrollHeight; y += step) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 120));
  }
});
await page.waitForTimeout(1500);

for (const id of ['why', 'what', 'ecosystem', 'architecture', 'stats', 'contribute']) {
  const el = page.locator(`#${id}`);
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await el.screenshot({ path: `scripts/section-${id}.png` });
}

console.log(`errores: ${errors.length}`);
for (const e of errors) console.log(`  - ${e}`);
await browser.close();
