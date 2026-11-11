import { contacto, hero } from "../contenido";
import { Flecha, Ruido, TituloAcento, archivo, enlace, whatsapp } from "./Detalles";

/** Primera pantalla del inicio, a pantalla completa: título enorme a la izquierda y una foto
 *  real de una cocina a la derecha, con su epígrafe en monoespaciada. La foto original mide
 *  1280 px: por eso va en un recuadro y no a todo el ancho (se vería borrosa). */
export function Hero() {
  const base = archivo(hero.foto);
  return (
    <section
      id="inicio"
      aria-labelledby="hero-titulo"
      className="oscuro flex min-h-svh flex-col overflow-hidden bg-(image:--hero-fondo) pt-[calc(var(--nav)+var(--arranque))] pb-[clamp(32px,6vh,72px)]"
    >
      <Ruido id="ruido-hero" />
      <div className="ancho grid flex-1 items-start gap-[clamp(36px,5vw,88px)] compu:grid-cols-[minmax(0,6fr)_minmax(0,5fr)]">
        <div>
          <p className="etiqueta text-gris">{hero.etiqueta}</p>
          <h1 id="hero-titulo" className="mt-[clamp(18px,2.4vw,30px)] text-[clamp(3rem,7.4vw,7.4rem)] leading-[.94] font-medium tracking-[-.065em]">
            <TituloAcento lineas={hero.titulo} acento={hero.acento} />
          </h1>
          <p className="mt-[clamp(24px,3vw,36px)] max-w-128 text-[clamp(16px,1.3vw,19px)] leading-[1.55] text-white/84">{hero.bajada}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
            <a className="boton" href={enlace("hogar")}>
              {hero.accion.texto}
              <Flecha />
            </a>
            <a
              className="link-flecha text-white/84 hover:text-white"
              href={whatsapp(contacto.whatsapp, "Hola! Quería pedir un presupuesto.")}
              target="_blank" rel="noreferrer"
            >
              {hero.accion2}
              <Flecha diagonal />
            </a>
          </div>
        </div>

        <figure>
          <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[6px] bg-carbon">
            <img
              src={`${base}-1080.webp`}
              srcSet={`${base}-640.webp 640w, ${base}-1080.webp 1080w, ${base}-1280.webp 1280w`}
              sizes="(max-width: 900px) 640px, 46vw"
              alt={hero.fotoAlt}
              width={1280} height={960}
              fetchPriority="high"
              decoding="async"
              className="size-full object-cover"
            />
            <span aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_top,rgb(26_11_16/.55),transparent_45%)]" />
          </div>
          {/* Esquinas tipo visor alrededor de la foto (el mismo lenguaje que Lake) */}
          <span aria-hidden="true" className="pointer-events-none absolute -inset-2.5">
            {["top-0 left-0 border-t border-l", "top-0 right-0 border-t border-r", "bottom-0 left-0 border-b border-l", "right-0 bottom-0 border-r border-b"].map((p) => (
              <span key={p} className={`absolute size-4 border-acento-claro ${p}`} />
            ))}
          </span>
          </div>
          <figcaption className="mt-5 flex gap-3 font-mono text-[11px] leading-[1.5] tracking-[.08em] text-gris uppercase">
            <span aria-hidden="true" className="text-acento-claro">●</span>
            {hero.fotoEpigrafe}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
