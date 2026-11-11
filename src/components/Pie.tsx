import { SITIO_KRSP, contacto, nav, pie, sitio, type Ruta } from "../contenido";
import { Flecha, MarcaNDL, archivo, enlace, ir, whatsapp } from "./Detalles";

/** Firma de KRSp: el logo en blanco y chico (como en Pereda), sobre el pie oscuro */
const logoKrsp = <img src={archivo("img/logo-krsp-blanco.png")} alt="KRSp" width={339} height={72} loading="lazy" className="h-4.5 w-auto opacity-90" />;
const mensaje = "Hola! Quería hacer una consulta.";
const pastilla = "inline-flex min-h-11 items-center gap-2 rounded-full border border-white/25 px-4 text-sm text-white/90 hover:border-white hover:text-white";


/** Fondo del pie, detrás del vidrio esmerilado: manchas suaves de bordó, rosa viejo y lila
 *  sobre el bordó noche (solo colores de la marca; el vidrio necesita color atrás para lucirse). */
function Fondo() {
  return (
    <span aria-hidden="true" className="absolute inset-0 -z-10 bg-negro bg-[radial-gradient(40%_60%_at_15%_20%,rgb(97_3_38/.9),transparent),radial-gradient(35%_55%_at_80%_30%,rgb(242_184_198/.45),transparent),radial-gradient(45%_60%_at_55%_95%,rgb(185_170_174/.55),transparent)]" />
  );
}

const titulo = "etiqueta mb-2 text-gris";
const link = "inline-flex min-h-11 items-center gap-2 text-sm text-white/85 hover:text-white";

/** Pie: fondo con un degradé de los colores de la marca y encima un panel de vidrio esmerilado
 *  oscuro con las secciones en una línea; abajo, la marca con su frase, la dirección y los
 *  canales como botones; y al final el ©, el crédito de KRSp y volver arriba.
 *  Sin teléfonos ni mails escritos: van como botones con texto. */
export function Pie({ ruta }: { ruta: Ruta }) {
  return (
    <footer className="relative isolate overflow-hidden text-white">
      <Fondo />
      <div className="ancho py-[clamp(56px,7vw,112px)]">
        <div className="rounded-[14px] border border-white/15 bg-negro/70 px-[clamp(22px,3vw,40px)] pt-2 pb-2 shadow-[0_20px_60px_-20px_rgb(26_11_16/.6)] backdrop-blur-md">
          <nav aria-label={pie.secciones} className="flex flex-wrap gap-x-[clamp(20px,3vw,44px)] border-b border-white/15 py-3">
            {nav.map((n) => <a key={n.href} href={ir(ruta, n.href)} className="inline-flex min-h-11 items-center text-[clamp(16px,1.4vw,19px)] text-white/90 hover:text-white">{n.texto}</a>)}
            <a href={enlace("contacto")} className="inline-flex min-h-11 items-center text-[clamp(16px,1.4vw,19px)] text-white/90 hover:text-white">Contacto</a>
          </nav>

          <div className="mt-8 grid gap-10 compu:grid-cols-[1.2fr_1fr_1.6fr]">
            <div>
              <a href={enlace("")} className="inline-flex min-h-11 items-center gap-3">
                <MarcaNDL />
                <span className="text-[19px] font-medium tracking-[-.03em]">{sitio.nombreCompleto}</span>
              </a>
              <p className="mt-3 max-w-72 text-chico leading-[1.55] text-white/75">{pie.lema}</p>
            </div>
            <section aria-labelledby="pie-donde" className="grid content-start">
              <h2 id="pie-donde" className={titulo}>{pie.donde}</h2>
              <p className="pt-2.5 text-sm leading-[1.6]">{contacto.direccion}<br />{contacto.localidad}</p>
              <a href={contacto.mapa} target="_blank" rel="noreferrer" className={link}>{pie.comoLlegar} <Flecha diagonal className="w-3.5" /></a>
            </section>
            <section aria-labelledby="pie-escribinos" className="grid content-start">
              <h2 id="pie-escribinos" className={titulo}>{pie.escribinos}</h2>
              <div className="mt-1 flex flex-wrap gap-2">
                {contacto.telefonos.map((tel) => <a key={tel.numero} href={whatsapp(tel.numero, mensaje)} target="_blank" rel="noreferrer" className={pastilla}>{tel.etiqueta}</a>)}
                {contacto.mails.map((m) => <a key={m.direccion} href={`mailto:${m.direccion}`} className={pastilla}>{m.etiqueta}</a>)}
                {contacto.redes.map((r) => <a key={r.nombre} href={r.url} target="_blank" rel="noreferrer" className={pastilla}>{r.nombre}</a>)}
              </div>
            </section>
          </div>

          {/* El cierre va adentro del vidrio, así se lee igual sobre cualquier parte del degradé */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-x-7 gap-y-1 border-t border-white/15 py-2 text-[13px] text-white/72 max-[620px]:flex-col max-[620px]:items-start">
            <span className="inline-flex min-h-11 items-center">© {new Date().getFullYear()} {pie.derechos}</span>
            <span className="inline-flex items-center gap-2.5">
              Página creada por
              {SITIO_KRSP ? <a href={SITIO_KRSP} target="_blank" rel="noreferrer">{logoKrsp}</a> : logoKrsp}
            </span>
            <a href="#main" className="inline-flex min-h-11 items-center hover:text-white">{pie.volver} ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
