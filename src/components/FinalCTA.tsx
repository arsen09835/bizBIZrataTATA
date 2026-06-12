import { Phone } from 'lucide-react';
import { Reveal } from './Reveal';

function GrowthPaths() {
  // Generate paths flowing from bottom-left to top-right (growth direction)
  const paths = Array.from({ length: 28 }, (_, i) => {
    const offset = i * 18;
    const yStart = 400 + offset;
    const xStart = -100 - offset * 0.8;
    const yEnd = -50 - offset;
    const xEnd = 800 + offset * 0.6;
    // Cubic bezier control points for smooth upward curve
    const cx1 = xStart + 300;
    const cy1 = yStart - 150;
    const cx2 = xEnd - 250;
    const cy2 = yEnd + 180;
    return {
      id: i,
      d: `M${xStart} ${yStart} C${cx1} ${cy1} ${cx2} ${cy2} ${xEnd} ${yEnd}`,
      opacity: 0.04 + i * 0.012,
      width: 0.4 + i * 0.025,
      delay: i * 0.6,
      duration: 18 + Math.random() * 8,
    };
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 696 400"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        {paths.map((p) => (
          <path
            key={p.id}
            d={p.d}
            stroke="white"
            strokeWidth={p.width}
            strokeOpacity={p.opacity}
            fill="none"
            className="growth-path"
            style={{
              '--path-delay': `${p.delay}s`,
              '--path-duration': `${p.duration}s`,
            } as React.CSSProperties}
          />
        ))}
      </svg>
    </div>
  );
}

export function FinalCTA() {
  return (
    <section id="contatto-section" className="relative overflow-hidden bg-ink">
      <GrowthPaths />

      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-brand-blue/15 blur-3xl pointer-events-none"
      />

      <div className="relative max-w-3xl mx-auto px-6 py-24 sm:py-32 text-center">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.15]">
            La tua passione per il mestiere, unita alla mia per il digitale, porteranno la tua impresa allo step successivo.
          </h2>
          <div className="mt-10">
            <a
              href="tel:+393317600310"
              className="inline-flex items-center gap-2 bg-white text-ink font-semibold px-8 py-4 rounded-lg hover:bg-white/90 hover:scale-[1.02] transition-all"
            >
              <Phone className="w-4 h-4" />
              Contattami
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
