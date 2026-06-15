import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';

function FloatingPaths() {
  // Evenly-spaced family of rising lines spanning the whole viewBox (with
  // overdraw past every edge) so the animation fills top-left AND bottom-right.
  const N = 30;
  const gap = 30;
  const paths = Array.from({ length: N }, (_, k) => {
    const b = -120 + k * gap; // vertical offset; sweeps the family across the panel
    return {
      id: k,
      // left (lower) -> right (higher) = rises up to the right
      d: `M-250 ${b} C150 ${b - 120}, 550 ${b - 360}, 950 ${b - 480}`,
      width: 0.5 + (k % 5) * 0.18,
      opacity: 0.05 + (k % 6) * 0.02, // subtle backdrop — knob for visibility
    };
  });

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-white"
        viewBox="0 0 696 316"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={path.opacity}
            initial={{ pathLength: 0.35, pathOffset: 0 }}
            // One-way flow up the line. If it appears to flow DOWN, change [0, 1] to [1, 0].
            animate={{ pathOffset: [0, 1] }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'linear',
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function FinalCTA() {
  return (
    <section id="contatto-section" className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <FloatingPaths />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 py-24 sm:py-32 text-center">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.15]">
            La tua passione per il mestiere, unita alla mia per il digitale, porteranno la tua impresa in cima al mercato locale.
          </h2>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href="tel:+393317600310"
              className="inline-flex items-center gap-2 bg-white text-ink font-semibold px-8 py-4 rounded-lg hover:bg-white/90 hover:scale-[1.02] transition-all"
            >
              <Phone className="w-4 h-4" />
              Contattami
            </a>
            <Link
              to="/preventivo"
              className="inline-flex items-center gap-2 bg-white text-ink font-semibold px-8 py-4 rounded-lg hover:bg-white/90 hover:scale-[1.02] transition-all"
            >
              Richiedi un preventivo
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
