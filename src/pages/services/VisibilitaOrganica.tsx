import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '../../components/Reveal';

export function VisibilitaOrganica() {
  return (
    <>
      {/* Hero — unchanged */}
      <section className="relative overflow-hidden bg-brand-navy pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full bg-brand-terracotta/20 blur-3xl" />
          <div className="absolute -bottom-32 left-0 w-[400px] h-[400px] rounded-full bg-brand-navy-dark/40 blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.18em] text-brand-terracotta-soft font-semibold mb-4">
              Servizio · Visibilità organica (SEO)
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] mb-6 max-w-3xl">
              Comparire su Google quando le persone cercano la tua attività.
            </h1>
            <p className="text-lg sm:text-xl text-white/75 leading-relaxed max-w-2xl mb-10">
              Lavoriamo sulla tua presenza organica per farti trovare nelle ricerche locali rilevanti: Google Maps, risultati di ricerca, scheda dell'attività.
            </p>
            <Link
              to="/contatto"
              className="inline-flex items-center gap-2 bg-white text-brand-navy font-semibold px-6 py-3.5 rounded-full hover:bg-brand-ivory transition-colors shadow-glow"
            >
              Parliamo della tua attività
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Scenario — Bisogna essere visti */}
      <section className="bg-brand-ivory py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.18em] text-brand-terracotta font-semibold mb-3">
              Lo scenario
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-brand-navy leading-[1.1] mb-8">
              Bisogna essere visti.
            </h2>
            <p className="text-lg sm:text-xl text-brand-navy/85 leading-relaxed">
              Essere ben presentati non basta. Se i potenziali clienti non vedono il tuo profilo fra le loro ricerche, è come avere un negozio bellissimo in una via deserta.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Final CTA — preserved from previous layout */}
      <section className="relative overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 right-1/4 w-[500px] h-[500px] rounded-full bg-brand-terracotta/20 blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl text-white leading-[1.1] mb-5">
              Vuoi capire se fa per te?
            </h2>
            <p className="text-lg text-white/75 leading-relaxed mb-8">
              Raccontaci la tua attività. Ti diciamo se ha senso lavorare insieme.
            </p>
            <Link
              to="/contatto"
              className="inline-flex items-center gap-2 bg-white text-brand-navy font-semibold px-7 py-4 rounded-full hover:bg-brand-ivory hover:scale-[1.02] transition-all shadow-glow"
            >
              Richiedi una consulenza
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
