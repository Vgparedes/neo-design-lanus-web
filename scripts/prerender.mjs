// Después del build arma el HTML real de CADA página (dist/index.html, dist/empresa/index.html...).
// Así Google y la vista previa de WhatsApp ven todo el contenido, y cada página tiene su título.
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const raiz = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = resolve(raiz, "dist");
const distServer = resolve(raiz, "dist-server");
const { render, sitio, paginas } = await import(pathToFileURL(resolve(distServer, "entry-server.js")).href);

const esc = (v) => v.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const molde = await readFile(resolve(dist, "index.html"), "utf8");
if (!molde.includes("<!--app-html-->")) throw new Error("Falta <!--app-html--> en index.html");

for (const [ruta, p] of Object.entries(paginas)) {
  const url = sitio.url + (ruta ? `${ruta}/` : "");
  const html = molde
    .replace("<!--app-html-->", render(ruta))
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(p.titulo)}</title>`)
    .replaceAll("__TITULO__", esc(p.titulo))
    .replaceAll("__DESCRIPCION__", esc(p.descripcion))
    .replaceAll("__URL_PAGINA__", esc(url))
    .replaceAll("__URL__", esc(sitio.url))
    .replaceAll("__NOMBRE__", esc(sitio.nombre));
  const carpeta = ruta ? resolve(dist, ruta) : dist;
  await mkdir(carpeta, { recursive: true });
  await writeFile(resolve(carpeta, "index.html"), html);
  console.log("prerender ->", ruta || "inicio");
}
// GitHub Pages: si alguien entra a una dirección que no existe, ve el inicio
await writeFile(resolve(dist, "404.html"), await readFile(resolve(dist, "index.html"), "utf8"));
await rm(distServer, { recursive: true, force: true });
