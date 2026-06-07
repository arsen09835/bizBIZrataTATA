import { Reveal } from './Reveal';
import { ServicesDropdownButton } from './ServicesDropdownButton';

export function FinalCTA() {
  return (
    <section id="contatto-section" className="relative overflow-hidden bg-brand-navy">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 right-1/4 w-[500px] h-[500px] rounded-full bg-brand-terracotta/25 blur-3xl" />
        <div className="absolute -bottom-40 left-1/4 w-[450px] h-[450px] rounded-full bg-brand-terracotta/15 blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto px-8 lg:px-8 py-24 sm:py-32 text-center">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.1] mb-8">
            Pronto a dare una svolta alla tua attività su Google?
          </h2>
          <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
            Consulta i servizi o prenota una consulenza (senza impegno) via email su{' '}
            <a
              href="mailto:info@rankmybizup.com"
              className="text-brand-terracotta-soft underline underline-offset-4 decoration-brand-terracotta-soft/40 hover:decoration-brand-terracotta-soft transition-colors"
            >
              info@rankmybizup.com
            </a>{' '}
            oppure telefonicamente a{' '}
            <a
              href="tel:+393317600310"
              className="text-brand-terracotta-soft underline underline-offset-4 decoration-brand-terracotta-soft/40 hover:decoration-brand-terracotta-soft transition-colors"
            >
              +39 331 760 0310
            </a>
            , in cui ti darò 3 consigli gratuiti applicabili immediatamente su come migliorare la visibilità nelle ricerche organiche (SEO).
          </p>

          <div className="flex justify-center">
            <ServicesDropdownButton label="Guarda i servizi" variant="dark" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
