export default function BackgroundDecor() {
  return (
    <>
      {/* fixed SVG fractal noise overlay */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[1]"
        style={{
          opacity: 0.22,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "220px 220px",
          mixBlendMode: "overlay",
        }}
      />

      {/* fixed grid */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[1] grid-overlay"
      />

      {/* radial spotlight at top */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 h-[80vh] z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(124,255,179,0.12), transparent 60%)",
        }}
      />
    </>
  );
}
