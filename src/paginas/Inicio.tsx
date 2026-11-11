import { Contacto } from "../components/Contacto";
import { Hero } from "../components/Hero";
import { Nosotros } from "../components/Nosotros";
import { Proceso } from "../components/Proceso";
import { Rubros } from "../components/Rubros";
import { proceso } from "../contenido";

/** La página de inicio. El orden de las secciones se cambia acá; para sacar una, borrá su línea. */
export function Inicio() {
  return (
    <>
      <Hero />
      <Rubros />
      <Proceso id="proceso" {...proceso} dibujos={["plano", "piezas", "armado", "caja"]} />
      <Nosotros />
      <Contacto />
    </>
  );
}
