type RayGlyphProps = {
  className?: string;
};

/**
 * The recurring brand mark across the site: a small fan of five rays,
 * taken directly from the light fixture in the RAYNEX logo. Used in
 * place of generic bullets/eyebrow-dots wherever the design needs a
 * small structural accent.
 */
export function RayGlyph({ className = "" }: RayGlyphProps) {
  return (
    <svg
      viewBox="0 0 40 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <line x1="4" y1="22" x2="8" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="13" y1="22" x2="15.5" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="22" y1="22" x2="22" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      <line x1="31" y1="22" x2="28.5" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <line x1="36" y1="22" x2="32" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
    </svg>
  );
}

/**
 * Large ambient ray field used behind hero/CTA copy — wide, faint,
 * fanning from an off-canvas source, echoing a downlight's throw.
 */
export function RayField({ className = "" }: RayGlyphProps) {
  const rays = Array.from({ length: 9 });
  return (
    <svg
      viewBox="0 0 1200 700"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="rayFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--rx-blue-light)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--rx-blue-light)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {rays.map((_, i) => {
        const originX = 120 + i * 8;
        const spread = 60 + i * 90;
        return (
          <line
            key={i}
            x1={originX}
            y1={-40}
            x2={spread}
            y2={760}
            stroke="url(#rayFade)"
            strokeWidth={i === 4 ? 3 : 1.5}
          />
        );
      })}
    </svg>
  );
}

/**
 * Thin angled beam used as a section divider — a quiet nod to a beam
 * of light cutting across the page rather than a plain horizontal rule.
 */
export function RayDivider({ className = "" }: RayGlyphProps) {
  return (
    <div className={`relative h-px w-full ${className}`} aria-hidden="true">
      <div className="absolute inset-0 rx-hairline" />
      <svg
        viewBox="0 0 200 20"
        className="absolute left-1/2 top-1/2 h-5 w-36 -translate-x-1/2 -translate-y-1/2 text-rx-blue"
        fill="none"
      >
        <line x1="0" y1="18" x2="70" y2="2" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
        <line x1="130" y1="18" x2="200" y2="2" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      </svg>
    </div>
  );
}
