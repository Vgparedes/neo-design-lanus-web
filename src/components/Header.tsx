import { useEffect, useState } from "react";
import { contacto, nav, sitio, type Ruta } from "../contenido";
import { useOcultarAlBajar } from "../hooks/useOcultarAlBajar";
import { Flecha, MarcaNDL, enlace, ir, whatsapp } from "./Detalles";

/** Clases de cada link del menú: chicos en compu, grandes y con línea abajo en el menú del celu.
 *  La página actual lleva una rayita abajo en compu y "●" adelante en el celu (no solo color). */
const claseLink =
  "relative py-3 whitespace-nowrap text-[13px] text-white/72 hover:text-white aria-[current=page]:text-white compu:aria-[current=page]:after:absolute compu:aria-[current=page]:after:inset-x-0 compu:aria-[current=page]:after:bottom-1.5 compu:aria-[current=page]:after:h-px compu:aria-[current=page]:after:bg-acento-claro max-compu:border-b max-compu:border-white/18 max-compu:py-4 max-compu:text-[clamp(28px,8vw,44px)] max-compu:tracking-[-.05em] max-compu:text-white max-compu:aria-[current=page]:before:mr-3 max-compu:aria-[current=page]:before:text-[.5em] max-compu:aria-[current=page]:before:align-middle max-compu:aria-[current=page]:before:text-acento-claro max-compu:aria-[current=page]:before:content-['●']";

/** Header flotante semitransparente: se esconde al bajar y vuelve al subir.
 *  En celu y tablet abre un menú a pantalla completa (se cierra con la X, con Esc o al elegir). */
export function Header({ ruta }: { ruta: Ruta }) {
  const [abierto, setAbierto] = useState(false);
  const [oculto, setOculto] = useOcultarAlBajar(abierto);

  useEffect(() => {
    document.body.style.overflow = abierto ? "hidden" : "";
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setAbierto(false);
    addEventListener("keydown", esc);
    return () => removeEventListener("keydown", esc);
  }, [abierto]);

  return (
    // Con el menú abierto se apaga el desenfoque (backdrop-filter): si no, el panel del menú
    // (position: fixed) se mide contra el header en vez de contra la pantalla y queda cortado.
    <header
      onFocusCapture={() => setOculto(false)}
      className={`sticky top-0 z-50 -mb-(--nav) grid h-(--nav) grid-cols-[auto_1fr_auto] items-center gap-8 border-b border-white/6 px-[max(var(--gutter),calc((100vw_-_1440px)/2_+_var(--gutter)))] text-white transition-[translate,background-color] duration-[260ms] max-compu:grid-cols-[1fr_auto_auto] max-compu:gap-2
        ${oculto && !abierto ? "pointer-events-none -translate-y-[105%]" : ""}
        ${abierto ? "bg-negro" : "bg-negro/80 backdrop-blur-md"}`}
    >
      {/* Sin aria-label: el lector de pantalla lee el mismo texto que se ve, más "ir al inicio" */}
      <a href={enlace("")} className="flex min-h-11 items-center gap-3 leading-none">
        <MarcaNDL />
        <span className="grid">
          <span className="text-[15px] font-semibold tracking-[.08em]">{sitio.nombre.toUpperCase()}</span>
          {/* Entre 901 y 1100 px la bajada se esconde para que entre el menú en una línea */}
          <small className="mt-1 font-mono text-[9.5px] tracking-[.16em] text-gris compu:max-[1100px]:hidden">{sitio.bajada}</small>
        </span>
        <span className="sr-only">, ir al inicio</span>
      </a>

      <button
        type="button"
        aria-expanded={abierto}
        aria-controls="nav-principal"
        aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setAbierto((v) => !v)}
        className="relative order-3 size-11 compu:hidden"
      >
        <span className={`absolute inset-x-3 top-[18px] h-[1.5px] bg-current transition-transform ${abierto ? "translate-y-[3.5px] rotate-45" : ""}`} />
        <span className={`absolute inset-x-3 top-[25px] h-[1.5px] bg-current transition-transform ${abierto ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
      </button>

      <nav
        id="nav-principal"
        aria-label="Principal"
        className={`flex justify-end gap-[clamp(16px,2vw,38px)]
          max-compu:fixed max-compu:inset-x-0 max-compu:top-(--nav) max-compu:h-[calc(100svh-var(--nav))] max-compu:flex-col max-compu:justify-start max-compu:gap-0 max-compu:overflow-y-auto max-compu:bg-negro max-compu:px-(--gutter) max-compu:pt-3 max-compu:pb-8 max-compu:transition-[opacity,visibility] max-compu:duration-200
          ${abierto ? "" : "max-compu:invisible max-compu:opacity-0"}`}
      >
        {nav.map((item) => (
          <a
            key={item.href}
            href={ir(ruta, item.href)}
            aria-current={!item.href.startsWith("#") && item.ruta === ruta ? "page" : undefined}
            onClick={() => setAbierto(false)}
            className={claseLink}
          >
            {item.texto}
          </a>
        ))}
        <a href={enlace("contacto")} aria-current={ruta === "contacto" ? "page" : undefined} onClick={() => setAbierto(false)} className={`${claseLink} compu:hidden`}>
          Contacto
        </a>
        <a
          href={whatsapp(contacto.whatsapp)}
          target="_blank"
          rel="noreferrer"
          className="mt-auto inline-flex min-h-11 items-center pt-6 font-mono text-[13px] text-gris hover:text-white compu:hidden"
        >
          WhatsApp · {contacto.telefonoVisible}
        </a>
      </nav>

      <a
        href={enlace("contacto")}
        aria-current={ruta === "contacto" ? "page" : undefined}
        className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-white/25 px-4 text-[13px] hover:border-white max-[420px]:hidden"
      >
        Contacto
        <Flecha diagonal className="w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </header>
  );
}
