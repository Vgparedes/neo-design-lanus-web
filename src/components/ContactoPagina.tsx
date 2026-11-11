import { contacto, contactoPagina as t } from "../contenido";
import { Formulario } from "./Contacto";
import { Flecha, Ruido, TituloAcento, whatsapp } from "./Detalles";

const claseDato = "inline-flex min-h-11 items-center gap-2 text-[clamp(17px,1.4vw,20px)] tracking-[-.02em] text-white/90 underline decoration-white/25 underline-offset-6 hover:text-white hover:decoration-white";

/** Página de contacto: a la izquierda, dirección, teléfonos, mail y redes;
 *  a la derecha, el formulario que arma el mensaje de WhatsApp. */
export function ContactoPagina() {
  return (
    <section className="oscuro min-h-svh overflow-hidden bg-(image:--hero-fondo) pt-[calc(var(--nav)+var(--arranque))] pb-[clamp(72px,9vw,140px)]" aria-labelledby="panel-titulo">
      <Ruido id="ruido-contacto-pagina" />
      <div className="ancho">
        <p className="etiqueta text-gris">{t.etiqueta}</p>
        <h1 id="panel-titulo" className="mt-[clamp(18px,2.4vw,30px)] max-w-[16ch] text-[clamp(2.6rem,5.6vw,5.6rem)] leading-[.98] font-medium tracking-[-.06em]">
          <TituloAcento lineas={t.titulo} acento={t.acento} />
        </h1>
        <p className="mt-[clamp(20px,2.6vw,32px)] max-w-128 text-[clamp(16px,1.3vw,19px)] leading-[1.55] text-white/84">{t.bajada}</p>

        <div className="mt-[clamp(48px,6vw,88px)] grid items-start gap-[clamp(48px,6vw,104px)] compu:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <dl className="grid gap-8 border-t border-white/18 pt-8">
            <div>
              <dt className="etiqueta text-gris">{t.dondeTitulo}</dt>
              <dd className="mt-3">
                <p className="text-[clamp(20px,1.8vw,26px)] leading-tight tracking-[-.03em]">{contacto.direccion}</p>
                <p className="mt-1 text-white/75">{contacto.localidad}</p>
                <a className={`${claseDato} mt-2 text-chico`} href={contacto.mapa} target="_blank" rel="noreferrer">
                  {t.verMapa} <Flecha diagonal className="w-3.5" />
                </a>
              </dd>
            </div>
            <div>
              <dt className="etiqueta text-gris">{t.telefonosTitulo}</dt>
              <dd className="mt-2 grid justify-items-start">
                {contacto.telefonos.map((tel) => (
                  <a key={tel.numero} className={claseDato} href={whatsapp(tel.numero, "Hola! Quería hacer una consulta.")} target="_blank" rel="noreferrer">
                    {tel.etiqueta} <Flecha diagonal className="w-3.5" />
                  </a>
                ))}
              </dd>
            </div>
            <div>
              <dt className="etiqueta text-gris">{t.mailTitulo}</dt>
              <dd className="mt-2 grid justify-items-start">
                {contacto.mails.map((m) => (
                  <a key={m.direccion} className={claseDato} href={`mailto:${m.direccion}`}>{m.etiqueta} <Flecha diagonal className="w-3.5" /></a>
                ))}
              </dd>
            </div>
            <div>
              <dt className="etiqueta text-gris">{t.redesTitulo}</dt>
              <dd className="mt-2 flex flex-wrap gap-x-7">
                {contacto.redes.map((r) => <a key={r.nombre} className={claseDato} href={r.url} target="_blank" rel="noreferrer">{r.nombre}</a>)}
              </dd>
            </div>
          </dl>

          <div className="rounded-[14px] border border-borde bg-carbon p-[clamp(22px,3.4vw,44px)]">
            <Formulario />
          </div>
        </div>
      </div>
    </section>
  );
}
