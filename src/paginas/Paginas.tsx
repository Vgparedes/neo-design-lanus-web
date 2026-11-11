import { Contacto } from "../components/Contacto";
import { ContactoPagina } from "../components/ContactoPagina";
import { Galeria, Productos, type Grupo } from "../components/Galeria";
import { PanelPagina } from "../components/PanelPagina";
import { Proceso } from "../components/Proceso";
import { ambientes, fotos, proyectos } from "../contenido";

/** Las páginas internas. Cada una: panel a pantalla completa, sus fotos y el contacto al final. */

export function Hogar() {
  const grupos: Grupo[] = ambientes.map((a) => ({ id: a.id, nombre: a.nombre, fotos: fotos[a.id] }));
  const total = grupos.reduce((n, g) => n + g.fotos.length, 0);
  return (
    <>
      <PanelPagina id="hogar" cantidad={total} textoCantidad="Ver los {n} trabajos" />
      <Galeria grupos={grupos} titulo="Hogar" />
      <Contacto />
    </>
  );
}

export function Comercios() {
  return (
    <>
      <PanelPagina id="comercios" cantidad={fotos.comercios.length} textoCantidad="Ver los {n} trabajos" />
      <Galeria grupos={[{ id: "comercios", nombre: "Comercios y oficinas", fotos: fotos.comercios }]} titulo="Comercios y oficinas" />
      <Contacto />
    </>
  );
}

export function Proyectos() {
  return (
    <>
      <PanelPagina id="proyectos-inmobiliarios" cantidad={fotos.proyectos.length} textoCantidad="Ver las {n} fotos" />
      <Proceso id="como" etiqueta={proyectos.etiqueta} titulo={proyectos.titulo} lista={proyectos.puntos} />
      <Galeria grupos={[{ id: "proyectos", nombre: "Proyectos inmobiliarios", fotos: fotos.proyectos }]} titulo="Proyectos inmobiliarios" />
      <Contacto />
    </>
  );
}

export function Decoracion() {
  return (
    <>
      <PanelPagina id="decoracion" cantidad={new Set(fotos.decoracion.map((f) => f.t?.toLowerCase())).size} textoCantidad="Ver los productos" />
      <Productos fotos={fotos.decoracion} titulo="Decoración" />
      <Contacto />
    </>
  );
}

export function PaginaContacto() {
  return <ContactoPagina />;
}
