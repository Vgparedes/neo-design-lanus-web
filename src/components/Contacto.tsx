import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { contacto, contactoSeccion as t } from "../contenido";
import { Flecha, Ruido, TituloAcento, whatsapp } from "./Detalles";
import { Plano } from "./Plano";

/** Campo del formulario: etiqueta arriba, "(opcional)" en gris y caja oscura. */
function Campo({ nombre, texto, opcional = false, tipo = "text", auto, area = false }: { nombre: string; texto: string; opcional?: boolean; tipo?: string; auto?: string; area?: boolean }) {
  // 16 px de letra en la caja evita el zoom automático en iPhone
  const caja = "min-h-[50px] w-full rounded-[10px] border border-borde bg-carbon-claro px-[15px] py-[13px] text-base focus:border-acento-claro focus:shadow-[0_0_0_3px_rgb(242_184_198/.22)] focus:outline-none";
  return (
    <label className="grid gap-2 text-sm">
      <span>
        {texto} {opcional && <span className="text-gris">({t.campos.opcional})</span>}
      </span>
      {area ? <textarea name={nombre} rows={4} required={!opcional} className={`${caja} resize-y`} /> : <input name={nombre} type={tipo} autoComplete={auto} required={!opcional} className={caja} />}
    </label>
  );
}

/** Formulario que arma el mensaje y abre WhatsApp. Lo usan el modal y la página Contacto.
 *  "encabezado" va arriba (título y botón de cerrar en el modal) y "cancelar" suma ese botón. */
export function Formulario({ encabezado, alEnviar, cancelar }: { encabezado?: ReactNode; alEnviar?: () => void; cancelar?: () => void }) {
  const [tema, setTema] = useState(contacto.temas[0]);
  const [error, setError] = useState("");

  const enviar = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) ?? "").trim();
    if (!v("nombre") || !v("mensaje")) {
      setError(t.error);
      return;
    }
    setError("");
    const texto = `Hola! Quiero pedir presupuesto.\nAmbiente: ${tema}\n\n${v("mensaje")}\n\nDe: ${v("nombre")}${v("zona") ? ` (${v("zona")})` : ""}${v("mail") ? `\nMail: ${v("mail")}` : ""}`;
    window.open(whatsapp(contacto.whatsapp, texto), "_blank", "noopener");
    e.currentTarget.reset();
    alEnviar?.();
  };

  return (
    <form className="grid gap-5" onSubmit={enviar} noValidate>
      {encabezado}
      <fieldset>
        <legend className="mb-3 text-sm text-gris">{t.temaPregunta}</legend>
        <div className="flex flex-wrap gap-2">
          {contacto.temas.map((x) => (
            // Elegido: fondo claro + ✓, no solo color
            <button
              key={x} type="button" aria-pressed={tema === x} onClick={() => setTema(x)}
              className="min-h-11 rounded-full border border-borde px-[18px] text-sm hover:border-gris aria-pressed:border-papel aria-pressed:bg-papel aria-pressed:text-negro aria-pressed:before:content-['✓_']"
            >
              {x}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <Campo nombre="nombre" texto={t.campos.nombre} auto="name" />
        <Campo nombre="zona" texto={t.campos.zona} auto="address-level2" opcional />
      </div>
      <Campo nombre="mail" texto={t.campos.mail} tipo="email" auto="email" opcional />
      <Campo nombre="mensaje" texto={t.campos.mensaje} area />
      {error && <p className="rounded-[10px] border border-error px-3.5 py-3 text-sm text-error-claro before:content-['⚠_']" role="alert">{error}</p>}

      <div className="mt-1.5 flex flex-wrap items-center justify-between gap-[18px]">
        <p className="max-w-88 text-[13px] text-gris">{t.nota}</p>
        <div className="flex flex-wrap gap-2.5 max-sm:w-full max-sm:*:flex-1 max-sm:*:justify-center">
          {cancelar && <button className="boton boton-borde" type="button" onClick={cancelar}>{t.cancelar}</button>}
          <button className="boton" type="submit">{t.enviar}<Flecha /></button>
        </div>
      </div>
    </form>
  );
}

/** "Contanos tu idea" gigante con el plano de una cocina al costado + modal (<dialog>)
 *  con el formulario. No necesita servidor. Va al final de cada página (menos Contacto). */
export function Contacto() {
  const [abierto, setAbierto] = useState(false);
  const dialogo = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = dialogo.current;
    if (!d) return;
    if (abierto && !d.open) d.showModal();
    if (!abierto && d.open) d.close();
  }, [abierto]);

  return (
    <section className="oscuro sec-pad overflow-hidden" id="contacto" aria-labelledby="contacto-titulo">
      <Ruido id="ruido-contacto" />
      <div className="ancho grid items-center gap-[clamp(40px,6vw,96px)] compu:grid-cols-[minmax(0,6fr)_minmax(0,5fr)]">
        <div data-reveal>
          <p className="etiqueta text-gris">{t.etiqueta}</p>
          <h2 id="contacto-titulo" className="mt-[22px] text-[clamp(52px,8vw,120px)] leading-[.94] tracking-[-.07em]">
            <TituloAcento lineas={t.titulo} acento={t.acento} />
          </h2>
          <p className="mt-[26px] max-w-120 text-[clamp(17px,1.5vw,21px)] text-white/80">{t.intro}</p>
          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3.5">
            <button className="boton" type="button" onClick={() => setAbierto(true)}>
              {t.boton}
              <Flecha />
            </button>
            <a className="inline-flex min-h-11 items-center font-mono text-sm leading-none text-white/80 underline decoration-white/40 underline-offset-6 hover:text-white hover:decoration-white" href={whatsapp(contacto.whatsapp)} target="_blank" rel="noreferrer">
              WhatsApp · {contacto.telefonoVisible}
            </a>
          </div>
        </div>
        {/* Plano de una cocina con sus cotas: la pieza "del rubro" (en Pereda eran lotes; acá, planos) */}
        <Plano className="w-full max-w-[560px] justify-self-end text-white/45 max-compu:max-w-[440px] max-compu:justify-self-start" />
      </div>

      {/* El reset de Tailwind le saca el margen al <dialog>: "inset-0 m-auto" lo vuelve a centrar */}
      <dialog
        ref={dialogo}
        aria-labelledby="dialogo-titulo"
        onClose={() => setAbierto(false)}
        onClick={(e) => { if (e.target === dialogo.current) setAbierto(false); }}
        className="inset-0 m-auto max-h-[min(92vh,940px)] w-[min(840px,calc(100vw-32px))] max-w-none overflow-auto rounded-[18px] border border-borde bg-carbon p-[clamp(24px,5vw,48px)] text-papel shadow-[0_24px_100px_rgb(0_0_0/.55)]
          backdrop:bg-black/78 backdrop:backdrop-blur-sm open:animate-[dialogo-entra_.22s_ease-out_both]"
      >
        {abierto && (
          <Formulario
            alEnviar={() => setAbierto(false)}
            cancelar={() => setAbierto(false)}
            encabezado={
              <div className="mb-2.5 flex items-start justify-between gap-6">
                <div>
                  <p className="etiqueta text-gris">{t.modalEtiqueta}</p>
                  <h3 id="dialogo-titulo" className="mt-3 text-[clamp(32px,5vw,54px)] leading-none tracking-[-.06em]">{t.modalTitulo}</h3>
                </div>
                <button type="button" aria-label="Cerrar" onClick={() => setAbierto(false)} className="size-11 flex-none rounded-full border border-borde text-[22px] leading-none hover:border-white">×</button>
              </div>
            }
          />
        )}
      </dialog>
    </section>
  );
}
