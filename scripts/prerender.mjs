// Prerender post-build: captura el HTML ya renderizado y lo escribe en
// dist/index.html, para que bots e IAs sin JS reciban el contenido real.
// Los usuarios con JS siguen viendo la SPA (React re-renderiza encima).
//
// Corre como parte de `npm run build`. Si no hay navegador disponible
// (p. ej. CI sin Chrome), avisa y conserva el shell SPA sin fallar.
import { createServer } from 'node:http';
import { readFile, writeFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const dist = fileURLToPath(new URL('../dist', import.meta.url));

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml',
  '.json': 'application/json',
};

const server = createServer(async (req, res) => {
  const urlPath = decodeURIComponent((req.url ?? '/').split('?')[0]);
  const rel = urlPath === '/' ? 'index.html' : urlPath.slice(1);
  const filePath = normalize(join(dist, rel));
  if (!filePath.startsWith(normalize(dist))) {
    res.writeHead(403);
    return res.end();
  }
  try {
    const data = await readFile(filePath);
    res.writeHead(200, {
      'content-type': TYPES[extname(filePath)] ?? 'application/octet-stream',
    });
    res.end(data);
  } catch {
    res.writeHead(404);
    res.end();
  }
});
await new Promise((r) => server.listen(0, '127.0.0.1', r));
const { port } = server.address();

let browser;
try {
  browser = await chromium.launch({ channel: 'chrome', headless: true });
} catch {
  try {
    browser = await chromium.launch({ headless: true });
  } catch (e) {
    console.warn(`[prerender] sin navegador disponible — se conserva el shell SPA (${e.message.split('\n')[0]})`);
    server.close();
    process.exit(0);
  }
}

const page = await browser.newPage();
// Sin tooltip de primera visita en el snapshot
await page.addInitScript(() => localStorage.setItem('iskandar-visited', 'true'));
await page.goto(`http://127.0.0.1:${port}/`, { waitUntil: 'networkidle' });
await page.waitForTimeout(1000);
const html = await page.content();
await browser.close();
server.close();

// Sanidad: no sobreescribir el index si el render salió vacío
if (!html.includes('ISKANDAR') || !html.includes('ERPProvider')) {
  console.warn('[prerender] el HTML capturado no contiene el contenido esperado — se conserva el shell SPA');
  process.exit(0);
}

await writeFile(join(dist, 'index.html'), html, 'utf8');
const kb = Math.round(Buffer.byteLength(html, 'utf8') / 1024);
console.log(`[prerender] dist/index.html ahora contiene el contenido completo (${kb} KB)`);
