import { Phone } from 'lucide-react';
import { Reveal } from './Reveal';

function DiagonalLines() {
  // Straight, parallel diagonal lines that drift continuously.
  // Lines are spaced by the perpendicular vector n = (sin θ, cos θ);
  // the CSS keyframe translates the whole group by exactly one spacing
  // along n, so the loop is seamless. θ = 30° → up-right orientation.
  const angle = 30;
  const rad = (angle * Math.PI) / 180;
  const gap = 26;
  const count = 44;
  const W = 696;
  const H = 400;
  const len = 1500;
  const dx = Math.cos(rad) * len;
  const dy = -Math.sin(rad) * len;
  const nx = Math.sin(rad) * gap;
  const ny = Math.cos(rad) * gap;

  const lines = Array.from({ length: count }, (_, i) => {
    const k = i - count / 2;
    const cx = W / 2 + nx * k;
    const cy = H / 2 + ny * k;
    return {
      id: i,
      x1: cx - dx / 2,
      y1: cy - dy / 2,
      x2: cx + dx / 2,
      y2: cy + dy / 2,
      opacity: 0.05 + (i % 6) * 0.018,
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
        <g className="diag-lines">
          {lines.map((l) => (
            <line
              key={l.id}
              x1={l.x1}
              y1={l.y1}
              x2={l.x2}
              y2={l.y2}
              stroke="white"
              strokeWidth="1"
              strokeOpacity={l.opacity}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}

export function FinalCTA() {
  return (
    <section id="contatto-section" className="relative overflow-hidden bg-ink">
      <DiagonalLines />

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
