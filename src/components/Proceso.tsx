/** Lista numerada con título fijo a la izquierda (se usa en el inicio y en Proyectos). */
export function Proceso({ id, etiqueta, titulo, lista, claro = true }: {
  id: string; etiqueta: string; titulo: string; lista: { nombre: string; descripcion: string }[]; claro?: boolean;
}) {
  return (
    <section className={`sec-pad ${claro ? "bg-blanco" : "bg-papel"}`} id={id} aria-labelledby={`${id}-titulo`}>
      <div className="ancho grid items-start gap-[clamp(32px,6vw,120px)] compu:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div className="compu:sticky compu:top-[calc(var(--nav)+24px)]" data-reveal>
          <p className="etiqueta text-gris-oscuro">{etiqueta}</p>
          <h2 id={`${id}-titulo`} className="mt-5 text-titulo compu:max-w-[9ch]">{titulo}</h2>
        </div>
        <ol data-reveal>
          {lista.map((s, i) => (
            <li key={s.nombre} className="grid grid-cols-[44px_1fr] items-start gap-4 border-t border-tinta/22 pt-5 pb-[22px] last:border-b">
              <span className="pt-1.5 font-mono text-[11px] leading-none text-acento">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-sub">{s.nombre}</h3>
                <p className="mt-2 max-w-136 text-chico leading-[1.55] text-gris-oscuro">{s.descripcion}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
