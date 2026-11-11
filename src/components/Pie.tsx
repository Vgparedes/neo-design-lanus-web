import { SITIO_KRSP, contacto, nav, pie, sitio, type Ruta } from "../contenido";
import { Flecha, MarcaNDL, archivo, enlace, ir, whatsapp } from "./Detalles";

const t = { fondo: "bg-negro text-white", suave: "text-gris", link: "text-white/80 hover:text-white", linea: "border-white/16", boton: "border-white/30 hover:border-white", marca: "" };

/** Pie: marca con botones de contacto, secciones, dirección y canales (sin teléfonos ni
 *  mails escritos: van en botones). Abajo, el crédito de KRSp. */
export function Pie({ ruta }: { ruta: Ruta }) {
  const titulo = `etiqueta mb-2 ${t.suave}`;
  const link = `inline-flex min-h-11 items-center gap-2 text-sm ${t.link}`;
  const logoKrsp = <img src={archivo("img/logo-krsp.png")} alt="KRSp" width="96" height="32" loading="lazy" className="h-[30px] w-auto" />;

  return (
    <footer className={`${t.fondo} pt-[clamp(64px,8vw,104px)] pb-6`}>
      <div className="ancho">
        <div className="grid gap-x-[clamp(32px,4vw,72px)] gap-y-12 compu:grid-cols-[minmax(0,1.5fr)_repeat(3,minmax(0,1fr))]">
          {/* Marca y accesos rápidos */}
          <div>
            <a href={enlace("")} className="inline-flex min-h-11 items-center gap-3">
              <MarcaNDL className={t.marca} />
              <span className="text-[20px] font-medium tracking-[-.03em]">{sitio.nombreCompleto}</span>
            </a>
            <p className={`mt-3 max-w-80 text-chico leading-[1.55] ${t.suave}`}>{pie.lema}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <a href={whatsapp(contacto.whatsapp, "Hola! Quería hacer una consulta.")} target="_blank" rel="noreferrer" className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 text-sm ${t.boton}`}>
                WhatsApp <Flecha diagonal className="w-3.5" />
              </a>
              {contacto.redes.map((r) => (
                <a key={r.nombre} href={r.url} target="_blank" rel="noreferrer" className={`inline-flex min-h-11 items-center rounded-full border px-4 text-sm ${t.boton}`}>{r.nombre}</a>
              ))}
            </div>
          </div>

          <nav aria-labelledby="pie-secciones" className="grid content-start">
            <h2 id="pie-secciones" className={titulo}>{pie.secciones}</h2>
            {nav.map((n) => <a key={n.href} href={ir(ruta, n.href)} className={link}>{n.texto}</a>)}
            <a href={enlace("contacto")} className={link}>Contacto</a>
          </nav>

          <section aria-labelledby="pie-donde" className="grid content-start">
            <h2 id="pie-donde" className={titulo}>{pie.donde}</h2>
            <p className="pt-2.5 text-sm leading-[1.6]">{contacto.direccion}<br />{contacto.localidad}</p>
            <a href={contacto.mapa} target="_blank" rel="noreferrer" className={link}>{pie.comoLlegar} <Flecha diagonal className="w-3.5" /></a>
          </section>

          <section aria-labelledby="pie-escribinos" className="grid content-start">
            <h2 id="pie-escribinos" className={titulo}>{pie.escribinos}</h2>
            {contacto.telefonos.map((tel) => (
              <a key={tel.numero} href={whatsapp(tel.numero, "Hola! Quería hacer una consulta.")} target="_blank" rel="noreferrer" className={link}>{tel.etiqueta}</a>
            ))}
            {contacto.mails.map((m) => <a key={m.direccion} href={`mailto:${m.direccion}`} className={link}>{m.etiqueta}</a>)}
          </section>
        </div>

        <div className={`mt-[clamp(48px,6vw,88px)] flex flex-wrap items-center justify-between gap-x-7 gap-y-2 border-t pt-5 text-[13px] ${t.linea} ${t.suave} max-[620px]:flex-col max-[620px]:items-start`}>
          <span>© {new Date().getFullYear()} {pie.derechos}</span>
          <span className="inline-flex items-center gap-2.5">
            Página creada por
            {SITIO_KRSP ? <a href={SITIO_KRSP} target="_blank" rel="noreferrer">{logoKrsp}</a> : logoKrsp}
          </span>
          <a href="#main" className={`inline-flex min-h-11 items-center ${t.link}`}>{pie.volver} ↑</a>
        </div>
      </div>
    </footer>
  );
}
