import { nosotros } from "../contenido";
import { ConAcento, Foto } from "./Detalles";

const num = (i: number) => String(i + 1).padStart(2, "0");

/** Nosotros: la foto del equipo ocupa todo el ancho de la pantalla con el título encima;
 *  abajo, la frase y los principios dibujados como una cajonera. */
export function Nosotros() {
  return (
    <section className="bg-papel pb-[clamp(88px,10vw,160px)]" id="nosotros" aria-labelledby="nosotros-titulo">
      {/* Foto a todo el ancho */}
      <div className="relative isolate flex min-h-[min(100svh,880px)] items-end overflow-hidden bg-negro text-white max-compu:min-h-[78svh]">
        <Foto src={nosotros.imagen} alt={nosotros.imagenAlt} grande sizes="100vw" className="absolute inset-0 -z-10 size-full object-cover brightness-[.7]" />
        <span aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgb(26_11_16/.85),transparent_55%)]" />
        <div className="ancho pb-[clamp(32px,5vw,72px)]" data-reveal>
          <p className="etiqueta text-white/80">{nosotros.etiqueta}</p>
          <h2 id="nosotros-titulo" className="mt-4 max-w-[12ch] text-titulo font-medium">{nosotros.titulo}</h2>
        </div>
      </div>

      <div className="ancho pt-[clamp(64px,8vw,120px)]">
        <div className="grid items-start gap-[clamp(40px,6vw,104px)] compu:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
          <Frase />
          <Cajonera />
        </div>
      </div>
    </section>
  );
}

function Frase() {
  return (
    <div data-reveal>
      <p className="text-[clamp(30px,3.2vw,46px)] leading-[1.1] tracking-[-.05em]"><ConAcento texto={nosotros.intro} acento={nosotros.acento} /></p>
      <p className="mt-7 max-w-120 text-chico leading-[1.65] text-gris-oscuro">{nosotros.apoyo}</p>
    </div>
  );
}

/* Cajonera: cada principio es un cajón con su tirador; tapa arriba y patas abajo --- */
function Cajonera() {
  return (
    <div data-reveal>
      <div className="h-3 rounded-t-[3px] bg-tinta" aria-hidden="true" />
      <ol className="border-x-[6px] border-tinta bg-blanco">
        {nosotros.principios.map((p, i) => (
          <li key={p.titulo} className="group relative grid grid-cols-[auto_1fr] gap-x-5 border-b-[6px] border-tinta px-[clamp(20px,3vw,40px)] pt-9 pb-7 transition-transform duration-300 ease-krsp hover:translate-x-1.5">
            {/* Tirador */}
            <span aria-hidden="true" className="absolute top-3.5 left-1/2 h-[5px] w-16 -translate-x-1/2 rounded-full bg-tinta/80" />
            <span className="pt-1 font-mono text-[11px] tracking-[.12em] text-acento">{num(i)}</span>
            <div>
              <h3 className="text-sub">{p.titulo}</h3>
              <p className="mt-2 text-chico leading-[1.55] text-gris-oscuro">{p.detalle}</p>
            </div>
          </li>
        ))}
      </ol>
      {/* Zócalo y patas */}
      <div aria-hidden="true" className="flex justify-between px-4">
        <span className="h-4 w-3 bg-tinta" />
        <span className="h-4 w-3 bg-tinta" />
      </div>
    </div>
  );
}
