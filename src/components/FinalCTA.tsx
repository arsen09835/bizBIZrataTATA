import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';

function FloatingPaths() {
  const paths = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5} -${189 + i * 6}C-${380 - i * 5} -${189 + i * 6} -${
      312 - i * 5
    } ${216 - i * 6} ${152 - i * 5} ${343 - i * 6}C${616 - i * 5} ${
      470 - i * 6
    } ${684 - i * 5} ${875 - i * 6} ${684 - i * 5} ${875 - i * 6}`,
    width: 0.5 + i * 0.06,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-white"
        viewBox="0 0 696 316"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        {/* Vertical flip → every path rises from bottom-left to top-right */}
        <g transform="translate(0,316) scale(1,-1)">
          {paths.map((path) => (
            <motion.path
              key={path.id}
              d={path.d}
              stroke="currentColor"
              strokeWidth={path.width}
              // Subtle backdrop. Raise/lower these two numbers for more/less visible lines.
              strokeOpacity={0.05 + path.id * 0.015}
              initial={{ pathLength: 0.35, pathOffset: 0 }}
              // One-way upward flow. If the flow appears to travel DOWN, change [0, 1] to [1, 0].
              animate={{ pathOffset: [0, 1] }}
              transition={{
                duration: 12 + Math.random() * 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'linear',
              }}
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
      <div className="absolute inset-0">
        <FloatingPaths />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 py-24 sm:py-32 text-center">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.15]">
            La tua passione per il mestiere, unita alla mia per il digitale, porteranno la tua impresa in cima al mercato locale.
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
