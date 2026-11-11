import { useEffect, useRef, useState } from "react";
import { contacto, galeriaTextos as t, type Foto as TFoto } from "../contenido";
import { Flecha, Foto, archivo, whatsapp } from "./Detalles";

/** Un grupo de fotos con nombre (un ambiente de Hogar, una página o un producto). */
export type Grupo = { id: string; nombre: string; fotos: TFoto[] };

/* ------------------------------------------------------------------ */
/* Visor: la foto ampliada en un <dialog>, con anterior / siguiente,   */
/* flechas del teclado, Esc para cerrar y el link para consultar.      */
/* ------------------------------------------------------------------ */
export function Visor({ fotos, indice, nombre, alCambiar, alCerrar }: {
  fotos: TFoto[]; indice: number | null; nombre: string; alCambiar: (i: number) => void; alCerrar: () => void;
}) {
  const dialogo = useRef<HTMLDialogElement>(null);
  const abierto = indice !== null;
  const foto = abierto ? fotos[indice] : null;
  const total = fotos.length;
  const mover = (paso: number) => indice !== null && alCambiar((indice + paso + total) % total);

  useEffect(() => {
    const d = dialogo.current;
    if (!d) return;
    if (abierto && !d.open) d.showModal();
    if (!abierto && d.open) d.close();
  }, [abierto]);

  useEffect(() => {
    if (!abierto) return;
    const teclas = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") mover(1);
      if (e.key === "ArrowLeft") mover(-1);
    };
    addEventListener("keydown", teclas);
    return () => removeEventListener("keydown", teclas);
  });

  const titulo = foto?.t || nombre;
  const botonNav = "grid size-12 place-items-center rounded-full border border-white/25 bg-negro/60 text-white backdrop-blur-sm hover:border-white";

  return (
    <dialog
      ref={dialogo}
      aria-label={titulo}
      onClose={alCerrar}
      onClick={(e) => { if (e.target === dialogo.current) alCerrar(); }}
      className="inset-0 m-0 h-dvh max-h-none w-screen max-w-none bg-negro/96 text-white backdrop:bg-black/80"
    >
      {foto && (
        <div className="grid h-full grid-rows-[auto_1fr_auto] gap-3 p-[clamp(12px,2.4vw,28px)]">
          <div className="flex items-center justify-between gap-4">
            <p className="font-mono text-[12px] tracking-[.12em] text-gris">
              {String(indice! + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </p>
            <button type="button" onClick={alCerrar} aria-label={t.cerrar} className="grid size-12 place-items-center rounded-full border border-white/25 text-[24px] leading-none hover:border-white">×</button>
          </div>

          <div className="relative min-h-0">
            <img
              key={foto.src}
              src={archivo(`${foto.src}${foto.grande ? "-g" : ""}.webp`)}
              alt={titulo}
              className="mx-auto size-full object-contain"
            />
            {total > 1 && (
              <>
                <button type="button" onClick={() => mover(-1)} aria-label={t.anterior} className={`${botonNav} absolute top-1/2 left-0 -translate-y-1/2`}>
                  <Flecha className="w-5 rotate-180" />
                </button>
                <button type="button" onClick={() => mover(1)} aria-label={t.siguiente} className={`${botonNav} absolute top-1/2 right-0 -translate-y-1/2`}>
                  <Flecha className="w-5" />
                </button>
              </>
            )}
          </div>

          <div className="mx-auto flex w-full max-w-5xl flex-wrap items-end justify-between gap-x-8 gap-y-3">
            <div className="max-w-2xl">
              <p className="text-[clamp(18px,1.6vw,22px)] leading-tight tracking-[-.03em]">{titulo}</p>
              {foto.d && <p className="mt-1.5 text-chico text-white/75">{foto.d}</p>}
            </div>
            <a
              href={whatsapp(contacto.whatsapp, t.mensaje(foto.t ? `${foto.t} (${nombre})` : nombre))}
              target="_blank" rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 text-chico text-acento-claro underline decoration-acento-claro/50 underline-offset-6 hover:decoration-acento-claro"
            >
              {t.consultar} <Flecha diagonal className="w-3.5" />
            </a>
          </div>
        </div>
      )}
    </dialog>
  );
}

/* ------------------------------------------------------------------ */
/* Galería: filtros (si hay más de un grupo) y fotos en columnas, sin  */
/* recortar. Cada foto es un botón que la abre en el visor.            */
/* ------------------------------------------------------------------ */
export function Galeria({ grupos, titulo }: { grupos: Grupo[]; titulo: string }) {
  const [filtro, setFiltro] = useState("todo");
  const [indice, setIndice] = useState<number | null>(null);
  const inicio = useRef<HTMLDivElement>(null);

  const todas = grupos.flatMap((g) => g.fotos.map((f) => ({ ...f, grupo: g.nombre })));
  const visibles = filtro === "todo" ? todas : todas.filter((f) => grupos.find((g) => g.id === filtro)?.nombre === f.grupo);
  const nombreFiltro = grupos.find((g) => g.id === filtro)?.nombre ?? titulo;

  const elegir = (id: string) => {
    setFiltro(id);
    // Al cambiar de filtro, la vista vuelve al principio de la grilla
    const caja = inicio.current;
    if (caja && caja.getBoundingClientRect().top < 0) caja.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const chip = "inline-flex min-h-11 flex-none items-center gap-1.5 rounded-full border border-tinta/22 px-4 text-sm whitespace-nowrap hover:border-tinta aria-pressed:border-tinta aria-pressed:bg-tinta aria-pressed:text-papel aria-pressed:before:content-['✓']";

  return (
    <section className="bg-papel pt-[clamp(56px,7vw,104px)] pb-[clamp(88px,10vw,160px)]" id="galeria" aria-labelledby="galeria-titulo">
      <div className="ancho" ref={inicio}>
        <h2 id="galeria-titulo" className="sr-only">{titulo}</h2>

        {grupos.length > 1 && (
          // En celu los filtros son una fila que se desliza, pegada arriba
          <div className="sticky top-0 z-20 -mx-(--gutter) mb-[clamp(24px,3vw,40px)] bg-papel/94 px-(--gutter) py-3 backdrop-blur-sm" role="group" aria-label="Filtrar por ambiente">
            <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:thin] compu:flex-wrap">
              <button type="button" aria-pressed={filtro === "todo"} onClick={() => elegir("todo")} className={chip}>
                {t.todo} <span className="font-mono text-[11px] opacity-70">{todas.length}</span>
              </button>
              {grupos.map((g) => (
                <button key={g.id} type="button" aria-pressed={filtro === g.id} onClick={() => elegir(g.id)} className={chip}>
                  {g.nombre} <span className="font-mono text-[11px] opacity-70">{g.fotos.length}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        <p className="mb-5 font-mono text-[11px] tracking-[.12em] text-gris-oscuro uppercase" aria-live="polite">
          {nombreFiltro} · {visibles.length} {t.fotos}
        </p>

        <ul className="columns-2 gap-2.5 sm:columns-3 compu:columns-4">
          {visibles.map((f, i) => (
            <li key={f.src} className="mb-2.5 break-inside-avoid">
              <button
                type="button"
                onClick={() => setIndice(i)}
                className="group relative block w-full overflow-hidden rounded-[4px] bg-blanco text-left"
              >
                <Foto
                  src={f.src} w={f.w} h={f.h} alt={f.t || `${f.grupo}, foto ${i + 1}`}
                  sizes="(max-width: 640px) 50vw, (max-width: 900px) 33vw, 25vw"
                  className="h-auto w-full transition-[scale] duration-700 ease-krsp group-hover:scale-103"
                />
                {/* Esquinas tipo visor al pasar el mouse o con el foco del teclado */}
                <span aria-hidden="true" className="pointer-events-none absolute inset-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  {["top-0 left-0 border-t-2 border-l-2", "top-0 right-0 border-t-2 border-r-2", "bottom-0 left-0 border-b-2 border-l-2", "right-0 bottom-0 border-r-2 border-b-2"].map((p) => (
                    <span key={p} className={`absolute size-3.5 border-white ${p}`} />
                  ))}
                </span>
                <span className="sr-only">{t.ampliar}</span>
              </button>
              {f.t && <p className="mt-2 px-0.5 text-[13px] leading-snug text-gris-oscuro">{f.t}</p>}
            </li>
          ))}
        </ul>
      </div>

      <Visor fotos={visibles} indice={indice} nombre={nombreFiltro} alCambiar={setIndice} alCerrar={() => setIndice(null)} />
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Productos (Decoración): una tarjeta por producto, con sus fotos     */
/* agrupadas por nombre y el botón para consultar por WhatsApp.        */
/* ------------------------------------------------------------------ */
export function Productos({ fotos, titulo }: { fotos: TFoto[]; titulo: string }) {
  const [abierto, setAbierto] = useState<{ g: Grupo; i: number } | null>(null);

  // Agrupa por nombre (sin distinguir mayúsculas ni plurales tipo "Caja" / "Cajas")
  const clave = (s = "") => s.toLowerCase().replace(/s\b/g, "").replace(/\s+/g, " ").trim();
  const productos: Grupo[] = [];
  fotos.forEach((f) => {
    const k = clave(f.t);
    const g = productos.find((p) => p.id === k);
    if (g) g.fotos.push(f);
    else productos.push({ id: k, nombre: f.t || titulo, fotos: [f] });
  });

  return (
    <section className="bg-papel pt-[clamp(56px,7vw,104px)] pb-[clamp(88px,10vw,160px)]" id="galeria" aria-labelledby="galeria-titulo">
      <div className="ancho">
        <h2 id="galeria-titulo" className="mb-[clamp(28px,3vw,44px)] text-[clamp(28px,3vw,40px)] tracking-[-.05em]">
          {productos.length} productos
        </h2>
        <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 compu:grid-cols-4">
          {productos.map((p) => (
            <li key={p.id} className="flex flex-col rounded-[6px] border border-tinta/12 bg-blanco p-2.5">
              <button type="button" onClick={() => setAbierto({ g: p, i: 0 })} className="group relative aspect-square overflow-hidden rounded-[4px] bg-white">
                <Foto
                  src={p.fotos[0].src} w={p.fotos[0].w} h={p.fotos[0].h} alt={p.nombre}
                  sizes="(max-width: 640px) 50vw, (max-width: 900px) 33vw, 25vw"
                  className="size-full object-contain transition-[scale] duration-700 ease-krsp group-hover:scale-104"
                />
                {p.fotos.length > 1 && (
                  <span className="absolute right-2 bottom-2 rounded-full bg-negro/80 px-2.5 py-1 font-mono text-[11px] text-white">
                    {p.fotos.length} {t.fotos}
                  </span>
                )}
                <span className="sr-only">{t.ampliar}</span>
              </button>
              <h3 className="mt-3.5 px-1.5 text-[15px] leading-snug tracking-[-.01em]">{p.nombre}</h3>
              <a
                href={whatsapp(contacto.whatsapp, t.mensaje(p.nombre))}
                target="_blank" rel="noreferrer"
                className="mt-auto inline-flex min-h-11 items-center gap-1.5 px-1.5 pt-2 text-sm text-acento underline decoration-acento/40 underline-offset-5 hover:decoration-acento"
              >
                Consultar <Flecha diagonal className="w-3.5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <Visor
        fotos={abierto?.g.fotos ?? []} indice={abierto ? abierto.i : null} nombre={abierto?.g.nombre ?? ""}
        alCambiar={(i) => abierto && setAbierto({ ...abierto, i })} alCerrar={() => setAbierto(null)}
      />
    </section>
  );
}
