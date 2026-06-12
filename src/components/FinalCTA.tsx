import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
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
        <g transform="translate(0,316) scale(1,-1)">
          {paths.map((p) => (
            <motion.path
              key={p.id}
              d={p.d}
              stroke="currentColor"
              strokeWidth={p.width}
              strokeOpacity={0.1 + p.id * 0.03}
              initial={{ pathLength: 0.3, opacity: 0.6 }}
              animate={{
                pathLength: 1,
                opacity: [0.3, 0.6, 0.3],
                pathOffset: [0, 1, 0],
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
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
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

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
