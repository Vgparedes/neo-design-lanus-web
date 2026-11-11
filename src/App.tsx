import type { Ruta } from "./contenido";
import { Header } from "./components/Header";
import { Pie } from "./components/Pie";
import { useAparecer } from "./hooks/useAparecer";
import { Inicio } from "./paginas/Inicio";
import { Comercios, Decoracion, Hogar, PaginaContacto, Proyectos } from "./paginas/Paginas";

/** Qué página se muestra según la ruta. Al publicar, cada página es una carpeta propia
 *  (dist/index.html, dist/hogar/index.html...): se navega con links comunes y Google ve todo.
 *  Para sumar una página: agregala en "paginas" de contenido.ts, creá su componente
 *  y sumá su case acá. */
function Pagina({ ruta }: { ruta: Ruta }) {
  switch (ruta) {
    case "hogar": return <Hogar />;
    case "comercios": return <Comercios />;
    case "proyectos-inmobiliarios": return <Proyectos />;
    case "decoracion": return <Decoracion />;
    case "contacto": return <PaginaContacto />;
    default: return <Inicio />;
  }
}

export default function App({ ruta }: { ruta: Ruta }) {
  useAparecer();
  return (
    <>
      <a href="#main" className="fixed top-[-80px] left-4 z-[200] rounded-lg bg-white px-4.5 py-3 text-negro focus:top-4">Saltar al contenido</a>
      <Header ruta={ruta} />
      <main id="main">
        <Pagina ruta={ruta} />
      </main>
      <Pie ruta={ruta} />
    </>
  );
}
