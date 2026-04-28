export function AALogo({ size = 40, idPrefix = 'logo' }: { size?: number; idPrefix?: string }) {
  const topId = `${idPrefix}-top`
  const botId = `${idPrefix}-bot`

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="AA Windows & Doors — Installs & Repairs"
    >
      <defs>
        {/* Top arc: r=35, clockwise from left through top to right — text appears outward (in outer yellow band) */}
        <path id={topId} d="M 50,50 m -35,0 a 35,35 0 1,1 70,0" fill="none" />
        {/* Bottom arc: r=42, counterclockwise from left through bottom to right — text appears inward (in outer yellow band) */}
        <path id={botId} d="M 50,50 m -42,0 a 42,42 0 1,0 84,0" fill="none" />
      </defs>

      {/* Outer black ring */}
      <circle cx="50" cy="50" r="49" fill="#111110" />
      {/* Yellow fill */}
      <circle cx="50" cy="50" r="44" fill="#FACC15" />
      {/* Inner black ring */}
      <circle cx="50" cy="50" r="34" fill="none" stroke="#111110" strokeWidth="2.5" />

      {/* WINDOWS & DOORS — top arc */}
      <text fontFamily="Arial, Helvetica, sans-serif" fontWeight="800" fontSize="8" fill="#111110">
        <textPath href={`#${topId}`} startOffset="50%" textAnchor="middle" letterSpacing="1.5">
          WINDOWS &amp; DOORS
        </textPath>
      </text>

      {/* INSTALLS & REPAIRS — bottom arc */}
      <text fontFamily="Arial, Helvetica, sans-serif" fontWeight="800" fontSize="7" fill="#111110">
        <textPath href={`#${botId}`} startOffset="50%" textAnchor="middle" letterSpacing="1">
          INSTALLS &amp; REPAIRS
        </textPath>
      </text>

      {/* Centre AA */}
      <text
        x="50" y="58"
        textAnchor="middle"
        fontFamily="Arial Black, Impact, sans-serif"
        fontWeight="900"
        fontSize="30"
        fill="#111110"
        letterSpacing="-2"
      >
        AA
      </text>
    </svg>
  )
}
