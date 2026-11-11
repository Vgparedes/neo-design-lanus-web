import { useEffect } from "react";

/** Hace aparecer (suben un poco + fade) los elementos con data-reveal al entrar en pantalla.
 *  Sin JS o con "reducir movimiento" todo se ve normal. Se llama una vez en App. */
export function useAparecer() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const objetivos = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!objetivos.length) return;

    objetivos.forEach((o) => (o.dataset.revealState = "pending"));
    document.documentElement.classList.add("has-reveal");

    const obs = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (e.isIntersecting && e.target instanceof HTMLElement) {
            e.target.dataset.revealState = "visible";
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" },
    );
    objetivos.forEach((o) => obs.observe(o));
    return () => obs.disconnect();
  }, []);
}
