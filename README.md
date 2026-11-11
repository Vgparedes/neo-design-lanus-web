# Neo Design Lanús

Web de **Neo Design Lanús** (muebles de melamina a medida, Gral. Ferré 2101, Lanús Este), rehecha por KRSp a partir de la web anterior en Wix (neodesignlanus.com.ar).

Hecha en **React + Vite + TypeScript + Tailwind v4** sobre la plantilla `~/krs/reutilizable/react-base`, con la estética técnica/premium de KRSp y el **bordó del logo NDL** (`#610326`) en vez del negro.

## Páginas

| Ruta | Qué tiene |
|---|---|
| `/` | Portada, "Qué hacemos" (4 tarjetas que se ensanchan), "Del plano a tu casa", Nosotros y contacto |
| `/hogar/` | Galería con filtros por ambiente (cocinas, placares, dormitorios, living, escritorios, baños, espejos, sillones, mesas) |
| `/comercios/` | Comercios y oficinas |
| `/proyectos-inmobiliarios/` | Cómo trabajan con constructoras + galería |
| `/decoracion/` | Productos agrupados con botón "Consultar" por WhatsApp |
| `/contacto/` | Dirección, teléfonos, mails, redes y formulario que arma el mensaje de WhatsApp |

## Qué completar → Dónde

| Qué | Dónde |
|---|---|
| Textos, teléfonos, WhatsApp, mails, dirección, redes | `src/contenido.ts` (arriba de todo) |
| Fotos de cada ambiente o página | `src/contenido.ts`, al final (`fotos`), y los archivos en `public/img/<carpeta>/` |
| Colores y fuentes | `src/estilos/base.css` (`@theme`) |
| URL final publicada | `sitio.url` en `src/contenido.ts` |
| Link de la web de KRSp en el pie | `SITIO_KRSP` en `src/contenido.ts` |
| Datos para Google (dirección, teléfono) | `index.html`, bloque `application/ld+json` |
| Imagen al compartir por WhatsApp (1200x630) | `public/img/compartir.jpg` |

**Fotos nuevas:** WebP de 800 px de ancho (`01.webp`) y, si la original es grande, otra de 1600 px (`01-g.webp`, y en la lista `grande: true`). Además, una copia JPG de 600 px (`01-c.jpg`): es la miniatura que muestra WhatsApp cuando alguien consulta por esa foto.

**Link de cada foto:** al compilar se arma `/foto/<carpeta>-<número>/` por cada foto de las galerías. Ese link va en el mensaje de WhatsApp ("Consultar por WhatsApp"), muestra la vista previa de la foto y lleva a su galería con la foto abierta. El texto del mensaje está en `galeriaTextos.mensaje` de `src/contenido.ts`.

## Probar y publicar

```bash
npm install
npm run dev                         # localhost:5173, para editar
npm run build && npm run preview    # localhost:4173, la versión final
```

Para publicar en GitHub Pages: repo público, **Settings › Pages › Source: GitHub Actions** y push a `main` (el workflow está en `.github/workflows/deploy.yml`).
