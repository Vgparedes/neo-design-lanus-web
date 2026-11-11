import { useState } from "react";
import { rubros } from "../contenido";
import { ConAcento, Flecha, Foto, ir } from "./Detalles";

/** Las 4 líneas de trabajo en tarjetas altas lado a lado, con foto real.
 *  La elegida se ensancha y muestra el detalle y el link a su página. En celu se apilan.
 *  Toda la tarjeta es un botón invisible (funciona con teclado y tocando); el link va encima. */
export function Rubros() {
  const [activa, setActiva] = useState(0);

  return (
    <section className="sec-pad bg-papel" id="que-hacemos" aria-labelledby="rubros-titulo">
      <div className="ancho">
        <div className="mb-[clamp(40px,5vw,72px)] grid gap-8 compu:grid-cols-[1fr_minmax(0,26rem)] compu:items-end" data-reveal>
          <div>
            <p className="etiqueta text-gris-oscuro">{rubros.etiqueta}</p>
            <h2 id="rubros-titulo" className="mt-5 text-titulo">{rubros.titulo}</h2>
          </div>
          <p className="text-[clamp(18px,1.6vw,22px)] leading-[1.35] tracking-[-.02em] text-gris-oscuro">
            <ConAcento texto={rubros.intro} acento={rubros.acento} />
          </p>
        </div>

        <ol className="flex gap-2.5 max-compu:flex-col compu:h-[clamp(440px,38vw,560px)]" data-reveal>
          {rubros.lista.map((r, i) => {
            const abierta = activa === i;
            return (
              <li
                key={r.nombre}
                onMouseEnter={() => setActiva(i)}
                className={`group relative min-w-0 overflow-hidden rounded-[6px] bg-negro text-white transition-[flex-grow,min-height] duration-[460ms] ease-krsp compu:basis-0
                  ${abierta ? "compu:grow-[2.4] max-compu:min-h-96" : "compu:grow max-compu:min-h-36"}`}
              >
                <Foto
                  src={r.imagen} alt="" grande sizes="(max-width: 900px) 100vw, 40vw"
                  className={`absolute inset-0 size-full object-cover transition-[scale,filter] duration-800 ease-krsp group-hover:scale-103 ${abierta ? "brightness-[.62]" : "brightness-[.45] saturate-[.7]"}`}
                />
                <span aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_top,rgb(26_11_16/.9),rgb(26_11_16/.1)_60%)]" />

                <button
                  type="button"
                  aria-expanded={abierta}
                  aria-controls={`rubro-${i}`}
                  onClick={() => setActiva(i)}
                  className="absolute inset-0 z-10"
                >
                  <span className="sr-only">{r.nombre}: ver detalle</span>
                </button>

                <div className="pointer-events-none relative flex size-full flex-col justify-between gap-6 p-[clamp(18px,2vw,28px)]">
                  <span className="flex items-center justify-between gap-3">
                    <span className="font-mono text-[11px] tracking-[.12em] text-acento-claro">{String(i + 1).padStart(2, "0")}</span>
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`w-[22px] flex-none transition-transform duration-[460ms] ease-krsp ${abierta ? "rotate-45" : ""}`}>
                      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </span>
                  <div className="grid gap-3.5" id={`rubro-${i}`}>
                    <h3 className="text-[clamp(26px,2.4vw,38px)] leading-none tracking-[-.05em]">{r.nombre}</h3>
                    {/* Se despliega animando grid-template-rows de 0fr a 1fr (sin medir alturas) */}
                    <span className={`grid transition-[grid-template-rows,opacity] duration-[460ms] ease-krsp ${abierta ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                      <span className="overflow-hidden">
                        <span className="block max-w-104 text-chico leading-normal text-white/86">{r.detalle}</span>
                        <a
                          href={ir("", r.href)}
                          tabIndex={abierta ? 0 : -1}
                          className="pointer-events-auto relative z-20 mt-3 inline-flex min-h-11 items-center gap-2.5 text-chico font-medium underline decoration-white/40 underline-offset-6 hover:decoration-white [&:hover_svg]:translate-x-1"
                        >
                          Ver trabajos <Flecha />
                        </a>
                      </span>
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
