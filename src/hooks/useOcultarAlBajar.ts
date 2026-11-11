import { useEffect, useRef, useState } from "react";

/** true cuando el usuario baja (para esconder el header), false cuando sube o está arriba. */
export function useOcultarAlBajar(pausado = false) {
  const [oculto, setOculto] = useState(false);
  const ultimoY = useRef(0);

  useEffect(() => {
    ultimoY.current = window.scrollY;
    const alScrollear = () => {
      const y = window.scrollY;
      const delta = y - ultimoY.current;
      ultimoY.current = y;
      setOculto((actual) => {
        if (pausado || y < 48 || delta < -3) return false;
        if (delta > 3) return true;
        return actual;
      });
    };
    window.addEventListener("scroll", alScrollear, { passive: true });
    return () => window.removeEventListener("scroll", alScrollear);
  }, [pausado]);

  return [oculto, setOculto] as const;
}
