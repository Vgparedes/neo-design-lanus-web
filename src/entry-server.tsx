import { renderToString } from "react-dom/server";
import App from "./App";
import type { Ruta } from "./contenido";

export { ambientes, fotos, idFoto, paginaDeFotos, paginas, sitio } from "./contenido";

/** Lo usa scripts/prerender.mjs al compilar para generar el HTML real de cada página. */
export function render(ruta: Ruta): string {
  return renderToString(<App ruta={ruta} />);
}
