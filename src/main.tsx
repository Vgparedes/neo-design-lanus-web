import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import { paginas, type Ruta } from "./contenido";
import "./estilos/base.css";

// La ruta sale de la dirección: /repo/empresa/ -> "empresa"
const base = import.meta.env.BASE_URL;
const resto = location.pathname.startsWith(base) ? location.pathname.slice(base.length) : location.pathname.replace(/^\//, "");
const candidata = resto.replace(/\/?(index\.html)?$/, "");
const ruta: Ruta = candidata in paginas ? (candidata as Ruta) : "";

const raiz = document.getElementById("root")!;
const app = <StrictMode><App ruta={ruta} /></StrictMode>;

// En producción el HTML ya viene armado (scripts/prerender.mjs): se "hidrata".
if (raiz.firstElementChild) hydrateRoot(raiz, app);
else createRoot(raiz).render(app);

// En desarrollo el <head> todavía tiene los __TEXTOS__ sin completar.
if (document.title.startsWith("__")) document.title = paginas[ruta].titulo;
