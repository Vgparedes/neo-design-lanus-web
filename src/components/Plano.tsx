/** Plano de una cocina vista de frente, en trazo fino y con cotas (medidas en metros).
 *  Es decoración: va al costado del texto, nunca detrás. El color sale de "text-..." */
export function Plano({ className = "" }: { className?: string }) {
  const modulos = [60, 170, 280, 390, 500]; // cortes de los módulos (2.40 m en 440 px)
  return (
    <svg viewBox="0 0 560 440" fill="none" aria-hidden="true" className={className}>
      <g stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" className="[&_*]:[vector-effect:non-scaling-stroke]">
        {/* Alacenas: 4 módulos; el tercero más bajo para la campana */}
        <path d="M60 60h440v90H390M280 150H60V60M170 60v90M280 60v60h110V60M390 60v90" />
        <path d="M292 120l-8 30h102l-8-30" />
        <path d="M150 100v12M188 100v12M418 100v12" />
        {/* Mesada y bajo mesada: puertas, cajonera y zócalo */}
        <path d="M54 252h452v8H54z" />
        <path d="M60 260v112h440V260M60 372h440v8H60z" />
        {modulos.slice(1, -1).map((x) => <path key={x} d={`M${x} 260v112`} />)}
        <path d="M170 297h110M170 334h110M210 279h30M210 316h30M210 353h30" />
        <path d="M150 300v14M430 300v14M300 300v14" />
        {/* Bacha y grifería */}
        <path d="M318 252v-22c0-8 14-8 14 0" />
        {/* Piso */}
        <path d="M20 380h520" strokeDasharray="2 5" />
      </g>

      {/* Cotas */}
      <g stroke="currentColor" strokeWidth="1" opacity=".8">
        <path d="M60 408h440M60 400v16M500 400v16" />
        <path d="M30 260v120M22 260h16M22 380h16" />
        <path d="M30 60v90M22 60h16M22 150h16" />
        <path d="M530 150v102M522 150h16M522 252h16" />
      </g>
      <g fill="currentColor" className="font-mono text-[12px] tracking-[.08em]">
        <text x="280" y="430" textAnchor="middle">2.40</text>
        <text x="18" y="324" textAnchor="middle" transform="rotate(-90 18 320)">0.90</text>
        <text x="18" y="109" textAnchor="middle" transform="rotate(-90 18 105)">0.70</text>
        <text x="550" y="205" textAnchor="middle" transform="rotate(90 546 201)">0.60</text>
        <text x="60" y="32">COCINA · VISTA FRONTAL · ESC 1:20</text>
      </g>
    </svg>
  );
}
