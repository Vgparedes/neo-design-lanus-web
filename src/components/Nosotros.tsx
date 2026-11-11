import { nosotros } from "../contenido";
import { ConAcento, Foto } from "./Detalles";

/** Foto grande del equipo con el título encima, frase con acento, tres principios
 *  numerados y dos fotos chicas del taller. */
export function Nosotros() {
  return (
    <section className="sec-pad bg-papel" id="nosotros" aria-labelledby="nosotros-titulo">
      <div className="ancho">
        <div className="relative flex min-h-[clamp(340px,44vw,620px)] items-end overflow-hidden rounded-[6px] bg-negro p-[clamp(20px,3vw,44px)] text-white" data-reveal>
          <Foto src={nosotros.imagen} alt={nosotros.imagenAlt} grande sizes="(max-width: 1440px) 100vw, 1440px" className="absolute inset-0 size-full object-cover brightness-[.62]" />
          <span aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_top,rgb(26_11_16/.75),transparent_55%)]" />
          <div className="relative">
            <p className="etiqueta text-white/80">{nosotros.etiqueta}</p>
            <h2 id="nosotros-titulo" className="mt-4 max-w-[12ch] text-titulo font-medium">{nosotros.titulo}</h2>
          </div>
        </div>

        <div className="mt-[clamp(56px,7vw,100px)] grid items-end gap-[clamp(28px,5vw,96px)] compu:grid-cols-[minmax(0,8fr)_minmax(0,4fr)]" data-reveal>
          <p className="text-[clamp(30px,3.5vw,50px)] leading-[1.08] tracking-[-.05em]"><ConAcento texto={nosotros.intro} acento={nosotros.acento} /></p>
          <p className="text-chico leading-[1.6] text-gris-oscuro">{nosotros.apoyo}</p>
        </div>

        <div className="mt-[clamp(56px,7vw,96px)] grid gap-2.5 compu:grid-cols-[repeat(3,1fr)_1.3fr]" data-reveal>
          {nosotros.principios.map((p, i) => (
            <article key={p.titulo} className="rounded-[6px] border border-tinta/14 bg-blanco p-[clamp(22px,2.6vw,36px)]">
              <span className="font-mono text-[11px] tracking-[.12em] text-acento">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-6 text-[22px] leading-[1.15] tracking-[-.04em]">{p.titulo}</h3>
              <p className="mt-2.5 text-chico leading-[1.55] text-gris-oscuro">{p.detalle}</p>
            </article>
          ))}
          <div className="grid grid-cols-2 gap-2.5 max-compu:min-h-56">
            {nosotros.fotos.map((f) => (
              <Foto key={f.src} src={f.src} alt={f.alt} sizes="(max-width: 900px) 50vw, 15vw" className="size-full rounded-[6px] object-cover" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
