import { Phone } from 'lucide-react';
import { Reveal } from './Reveal';

export function FinalCTA() {
  return (
    <section id="contatto-section" className="relative overflow-hidden bg-ink">
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
