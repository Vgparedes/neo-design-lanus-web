/** Piezas chiquitas que se usan en varias secciones. */
import type { Ruta } from "../contenido";

/** Ruta a un archivo de public/ respetando la base de GitHub Pages. */
export const archivo = (a: string) => `${import.meta.env.BASE_URL}${a.replace(/^\//, "")}`;

/** Link a otra página de la web ("" es el inicio). Ej.: enlace("empresa"), enlace("", "#contacto"). */
export const enlace = (r: Ruta, ancla = "") => `${import.meta.env.BASE_URL}${r ? `${r}/` : ""}${ancla}`;

/** Arma los links del menú y del pie desde cualquier página:
 *  "#seccion" es una sección del inicio, "empresa/" otra página y "https://..." queda igual. */
export const ir = (actual: Ruta, href: string) => {
  if (href.startsWith("#")) return actual === "" ? href : enlace("", href);
  return /^[a-z]+:/i.test(href) ? href : `${import.meta.env.BASE_URL}${href.replace(/^\//, "")}`;
};

export function Flecha({ diagonal = false, className = "w-4" }: { diagonal?: boolean; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`shrink-0 transition-transform duration-300 ease-krsp ${className}`}>
      <path d={diagonal ? "M7 17 17 7M8 7h9v9" : "M4 12h15m-6-6 6 6-6 6"} stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

/** Textura de grano sobre fondos oscuros. Necesita un id distinto en cada sección. */
export function Ruido({ id, className = "" }: { id: string; className?: string }) {
  return (
    <div className={`ruido ${className}`} aria-hidden="true">
      <svg className="size-full">
        <filter id={id}>
          <feTurbulence type="fractalNoise" baseFrequency=".82" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter={`url(#${id})`} />
      </svg>
    </div>
  );
}

/** Pinta en color de acento una parte de un texto. */
export function ConAcento({ texto, acento }: { texto: string; acento: string }) {
  const i = acento ? texto.indexOf(acento) : -1;
  if (i < 0) return <>{texto}</>;
  return (
    <>
      {texto.slice(0, i)}
      <span className="acento">{acento}</span>
      {texto.slice(i + acento.length)}
    </>
  );
}

/** Link de WhatsApp con el mensaje ya armado. */
export const whatsapp = (numero: string, texto = "") =>
  `https://wa.me/${numero}${texto ? `?text=${encodeURIComponent(texto)}` : ""}`;

/** Foto de public/img: "img/x/01" carga 01.webp (800 px) y, si es grande, 01-g.webp (1600 px)
 *  para pantallas que la necesitan. "sizes" dice qué ancho ocupa en pantalla. */
export function Foto({ src, alt, w, h, grande = false, sizes = "(max-width: 900px) 100vw, 50vw", className = "", prioridad = false }: {
  src: string; alt: string; w?: number; h?: number; grande?: boolean; sizes?: string; className?: string; prioridad?: boolean;
}) {
  return (
    <img
      src={archivo(`${src}.webp`)}
      srcSet={grande ? `${archivo(`${src}.webp`)} 800w, ${archivo(`${src}-g.webp`)} 1600w` : undefined}
      sizes={grande ? sizes : undefined}
      alt={alt} width={w} height={h}
      loading={prioridad ? "eager" : "lazy"} decoding="async"
      className={className}
    />
  );
}

/** Título en varias líneas con una palabra resaltada en Cormorant itálica y color de acento. */
export function TituloAcento({ lineas, acento }: { lineas: string[] | string; acento: string }) {
  const lista = Array.isArray(lineas) ? lineas : [lineas];
  return (
    <>
      {lista.map((linea, i) => {
        const j = acento ? linea.indexOf(acento) : -1;
        return (
          <span key={linea}>
            {i > 0 && <br />}
            {j < 0 ? linea : (
              <>
                {linea.slice(0, j)}
                <span className="acento acento-serif">{acento}</span>
                {linea.slice(j + acento.length)}
              </>
            )}
          </span>
        );
      })}
    </>
  );
}

/** Logo de Neo Design: "NDL" en contorno dentro de un marco, como el logo original. */
export function MarcaNDL({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`grid place-items-center rounded-[5px] border-[1.5px] border-acento-claro px-[7px] font-mono text-[12px] leading-[26px] font-medium tracking-[.14em] ${className}`}>
      NDL
    </span>
  );
}
