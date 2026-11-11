import { paneles } from "../contenido";
import { Flecha, Foto, Ruido, TituloAcento } from "./Detalles";

/** Primer panel de cada página: a pantalla completa, texto a la izquierda (arranca a la
 *  misma altura en todas las páginas, con --arranque) y tres fotos de muestra a la derecha. */
export function PanelPagina({ id, cantidad, textoCantidad }: { id: keyof typeof paneles; cantidad: number; textoCantidad: string }) {
  const p = paneles[id];
  return (
    <section className="oscuro flex min-h-svh flex-col overflow-hidden bg-(image:--hero-fondo) pt-[calc(var(--nav)+var(--arranque))] pb-[clamp(32px,6vh,72px)]" aria-labelledby="panel-titulo">
      <Ruido id="ruido-panel" />
      <div className="ancho grid flex-1 items-start gap-[clamp(36px,5vw,88px)] compu:grid-cols-[minmax(0,6fr)_minmax(0,5fr)]">
        <div>
          <p className="etiqueta text-gris">{p.etiqueta}</p>
          <h1 id="panel-titulo" className="mt-[clamp(18px,2.4vw,30px)] max-w-[12ch] text-[clamp(2.9rem,6.6vw,6.6rem)] leading-[.96] font-medium tracking-[-.065em]">
            <TituloAcento lineas={p.titulo} acento={p.acento} />
          </h1>
          <p className="mt-[clamp(24px,3vw,36px)] max-w-128 text-[clamp(16px,1.3vw,19px)] leading-[1.55] text-white/84">{p.bajada}</p>
          <a className="boton mt-8" href="#galeria">
            {textoCantidad.replace("{n}", String(cantidad))}
            <Flecha className="w-4 rotate-90" />
          </a>
        </div>

        {/* Collage: una foto alta y dos chicas apiladas */}
        <div className="grid h-[clamp(300px,52vh,560px)] grid-cols-[1.3fr_1fr] grid-rows-2 gap-2.5 max-compu:h-[min(78vw,440px)]" aria-hidden="true">
          {p.fotos.map((src, i) => (
            <Foto
              key={src} src={src} alt="" grande prioridad={i === 0}
              sizes="(max-width: 900px) 60vw, 28vw"
              className={`size-full rounded-[6px] object-cover ${i === 0 ? "row-span-2" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
