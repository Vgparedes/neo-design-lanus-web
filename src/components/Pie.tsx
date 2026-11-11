import { SITIO_KRSP, contacto, nav, pie, sitio, type Ruta } from "../contenido";
import { archivo, enlace, ir, whatsapp } from "./Detalles";

const claseTitulo = "etiqueta mb-1.5 text-gris";

/** Pie oscuro: dirección, secciones, redes y contacto; marca de agua gigante y crédito de KRSp. */
export function Pie({ ruta }: { ruta: Ruta }) {
  const logoKrsp = <img src={archivo("img/logo-krsp.png")} alt="KRSp" width="96" height="32" loading="lazy" className="h-[30px] w-auto" />;
  return (
    <footer className="border-t border-white/8 bg-negro pt-[clamp(64px,8vw,110px)] pb-7 text-white">
      <div className="ancho">
        {/* Cada columna: título chico y links de 44 px de alto */}
        <div className="grid grid-cols-1 gap-9 min-[521px]:grid-cols-2 compu:grid-cols-[1.4fr_repeat(3,1fr)] *:grid *:content-start *:gap-0 [&_a]:inline-flex [&_a]:min-h-11 [&_a]:items-center [&_a]:text-sm [&_a]:text-white/78 [&_a:hover]:text-white">
          <section aria-labelledby="pie-donde">
            <h2 id="pie-donde" className={claseTitulo}>{pie.donde}</h2>
            <a href={contacto.mapa} target="_blank" rel="noreferrer" className="leading-snug">
              {contacto.direccion}<br />{contacto.localidad}
            </a>
          </section>
          <nav aria-labelledby="pie-navegar">
            <h2 id="pie-navegar" className={claseTitulo}>{pie.navegar}</h2>
            {nav.map((n) => <a key={n.href} href={ir(ruta, n.href)}>{n.texto}</a>)}
            <a href={enlace("contacto")}>Contacto</a>
          </nav>
          <nav aria-labelledby="pie-seguinos">
            <h2 id="pie-seguinos" className={claseTitulo}>{pie.seguinos}</h2>
            {contacto.redes.map((r) => <a key={r.nombre} href={r.url} target="_blank" rel="noreferrer">{r.nombre}</a>)}
          </nav>
          <section aria-labelledby="pie-contacto">
            <h2 id="pie-contacto" className={claseTitulo}>Contacto</h2>
            {contacto.telefonos.map((t) => (
              <a key={t.numero} href={whatsapp(t.numero)} target="_blank" rel="noreferrer" className="font-mono">{t.visible}</a>
            ))}
            <a href={`mailto:${contacto.mail}`}>{contacto.mail}</a>
          </section>
        </div>

        <div aria-hidden="true" className="mt-[clamp(48px,7vw,96px)] overflow-hidden text-[clamp(72px,15vw,220px)] leading-[.8] font-medium tracking-[-.08em] whitespace-nowrap text-carbon select-none">
          {sitio.nombre.toUpperCase()}
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-between gap-x-7 gap-y-3.5 border-t border-white/18 pt-[22px] text-[13px] text-gris max-[520px]:flex-col max-[520px]:items-start">
          <span>© {new Date().getFullYear()} {pie.derechos}</span>
          <span className="inline-flex items-center gap-2.5">
            Página creada por
            {SITIO_KRSP ? <a href={SITIO_KRSP} target="_blank" rel="noreferrer">{logoKrsp}</a> : logoKrsp}
          </span>
          <a href="#main" className="inline-flex min-h-11 items-center hover:text-white">{pie.volver} ↑</a>
        </div>
      </div>
    </footer>
  );
}
