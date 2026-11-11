// Después del build arma el HTML real de CADA página (dist/index.html, dist/empresa/index.html...).
// Así Google y la vista previa de WhatsApp ven todo el contenido, y cada página tiene su título.
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const raiz = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = resolve(raiz, "dist");
const distServer = resolve(raiz, "dist-server");
const { render, sitio, paginas, fotos, ambientes, idFoto, paginaDeFotos } = await import(pathToFileURL(resolve(distServer, "entry-server.js")).href);

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
// Una página chiquita por foto (/foto/sillones-03/): es el link que va en el mensaje de
// WhatsApp. Tiene la vista previa de ESA foto (og:image) y lleva a su galería con la foto abierta.
let nFotos = 0;
for (const [carpeta, lista] of Object.entries(fotos)) {
  const ruta = paginaDeFotos[carpeta];
  if (ruta === undefined) continue;
  const grupo = ambientes.find((a) => a.id === carpeta)?.nombre ?? paginas[ruta].menu;
  for (const f of lista) {
    const id = idFoto(f.src);
    const titulo = `${f.t || grupo} · ${sitio.nombreCompleto}`;
    const desc = f.d || `${grupo}: trabajo hecho a medida por ${sitio.nombreCompleto}. Consultanos por WhatsApp.`;
    const destino = `../../${ruta ? `${ruta}/` : ""}?foto=${encodeURIComponent(f.src)}#galeria`;
    const html = `<!doctype html><html lang="es-AR"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(titulo)}</title><meta name="description" content="${esc(desc)}"><meta name="robots" content="noindex, follow">
<link rel="canonical" href="${esc(sitio.url + (ruta ? `${ruta}/` : ""))}">
<meta property="og:type" content="website"><meta property="og:site_name" content="${esc(sitio.nombreCompleto)}">
<meta property="og:title" content="${esc(titulo)}"><meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${esc(`${sitio.url}foto/${id}/`)}"><meta property="og:locale" content="es_AR">
<meta property="og:image" content="${esc(`${sitio.url}${f.src}-c.jpg`)}"><meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#1a0b10"><script>location.replace(${JSON.stringify(destino)})</script></head>
<body style="background:#1a0b10;color:#fff;font-family:Arial,sans-serif;padding:24px"><a href="${esc(destino)}" style="color:#f2b8c6">Ver la foto en la galería</a></body></html>`;
    const carpetaFoto = resolve(dist, "foto", id);
    await mkdir(carpetaFoto, { recursive: true });
    await writeFile(resolve(carpetaFoto, "index.html"), html);
    nFotos++;
  }
}
console.log("prerender ->", nFotos, "páginas de fotos");

// GitHub Pages: si alguien entra a una dirección que no existe, ve el inicio
await writeFile(resolve(dist, "404.html"), await readFile(resolve(dist, "index.html"), "utf8"));
await rm(distServer, { recursive: true, force: true });
