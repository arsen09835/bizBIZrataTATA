import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-brand-navy">
      {/* Warm glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 right-1/4 w-[500px] h-[500px] rounded-full bg-brand-terracotta/25 blur-3xl" />
        <div className="absolute -bottom-40 left-1/4 w-[450px] h-[450px] rounded-full bg-brand-terracotta/15 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.18em] text-brand-terracotta-soft font-semibold mb-4">
            Iniziamo
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.1] mb-6">
            Vuoi migliorare la presenza online<br className="hidden sm:block" /> della tua attività?
          </h2>
          <p className="text-lg text-white/75 leading-relaxed mb-10 max-w-2xl mx-auto">
            Raccontaci la tua attività. Ti ricontattiamo personalmente per capire come possiamo aiutarti.
          </p>
          <Link
            to="/contatto"
            className="inline-flex items-center gap-2 bg-white text-brand-navy font-semibold text-base px-7 py-4 rounded-full hover:bg-brand-ivory hover:scale-[1.02] transition-all shadow-glow"
          >
            Richiedi un contatto
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
