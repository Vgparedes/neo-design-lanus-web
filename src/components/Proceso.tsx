import { Ruido } from "./Detalles";

type Paso = { nombre: string; descripcion: string };
type Props = {
  id: string; etiqueta: string; titulo: string; lista: Paso[];
  /** Un dibujo por paso (si no hay, solo números) */
  dibujos?: (keyof typeof dibujosModulo)[];
};

const num = (i: number) => String(i + 1).padStart(2, "0");

function Encabezado({ id, etiqueta, titulo, oscuro = false }: { id: string; etiqueta: string; titulo: string; oscuro?: boolean }) {
  return (
    <div className="mb-[clamp(40px,5vw,72px)]" data-reveal>
      <p className={`etiqueta ${oscuro ? "text-gris" : "text-gris-oscuro"}`}>{etiqueta}</p>
      <h2 id={`${id}-titulo`} className="mt-5 max-w-[16ch] text-titulo">{titulo}</h2>
    </div>
  );
}

/** Dibujos del módulo en cada etapa (trazo fino, el color sale de la clase del svg) */
const dibujosModulo = {
  // Plano: contorno punteado con cotas
  plano: <><path d="M20 20h80v90H20z" strokeDasharray="3 4" /><path d="M20 122h80M20 118v8M100 118v8M8 20v90M4 20h8M4 110h8" /></>,
  // Piezas: tablas sueltas, separadas
  piezas: <><path d="M14 22h14v86H14zM92 22h14v86H92zM34 16h52v10H34zM34 104h52v10H34zM40 38h40v50H40z" /></>,
  // Armado: módulo con puertas y tiradores
  armado: <><path d="M20 20h80v90H20zM60 20v90M20 104h80" /><path d="M52 52v14M68 52v14" /></>,
  // Envío: módulo embalado con la flecha de "este lado arriba"
  caja: <><path d="M16 30h88v80H16zM16 30l14-14h88l-14 14M104 110l14-14V16" /><path d="M54 80V56m-8 8 8-8 8 8" /></>,
};
/** Pasos sobre una "línea de obra" (fondo oscuro): un módulo dibujado se va armando paso a paso.
 *  Se usa en el inicio (Del plano a tu casa) y en Proyectos (Cómo acompañamos). */
export function Proceso({ id, etiqueta, titulo, lista, dibujos }: Props) {
  return (
    <section className="oscuro sec-pad overflow-hidden" id={id} aria-labelledby={`${id}-titulo`}>
      <Ruido id={`ruido-${id}`} />
      <div className="ancho">
        <Encabezado id={id} etiqueta={etiqueta} titulo={titulo} oscuro />
        <ol className="relative grid gap-10 compu:grid-cols-4 compu:gap-[clamp(20px,2.4vw,40px)]" data-reveal>
          {/* La línea que une los pasos: horizontal en compu, vertical en celu */}
          <span aria-hidden="true" className="absolute top-[7px] right-0 left-0 h-px bg-white/22 max-compu:top-0 max-compu:bottom-0 max-compu:left-[7px] max-compu:h-auto max-compu:w-px" />
          {lista.map((s, i) => (
            <li key={s.nombre} className="relative max-compu:pl-10">
              <span aria-hidden="true" className="absolute top-0 left-0 grid size-[15px] place-items-center rounded-full border border-acento-claro bg-negro">
                <span className="size-[5px] rounded-full bg-acento-claro" />
              </span>
              <p className="pt-8 font-mono text-[11px] tracking-[.12em] text-acento-claro max-compu:pt-0">{num(i)}</p>
              {dibujos?.[i] && (
                <svg viewBox="0 0 124 132" fill="none" aria-hidden="true" className="mt-6 h-[clamp(84px,8vw,120px)] w-auto stroke-white/60 stroke-[1.2] [&_*]:[vector-effect:non-scaling-stroke]">
                  {dibujosModulo[dibujos[i]]}
                </svg>
              )}
              <h3 className="mt-6 text-[clamp(28px,2.6vw,40px)] leading-none tracking-[-.05em]">{s.nombre}</h3>
              <p className="mt-3 max-w-80 text-chico leading-[1.55] text-white/75">{s.descripcion}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
