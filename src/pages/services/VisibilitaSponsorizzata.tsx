import { Link } from 'react-router-dom';
import { ArrowRight, SlidersHorizontal, MapPin, Wallet, Activity } from 'lucide-react';
import { Reveal } from '../../components/Reveal';
import { Divider } from '../../components/Divider';
import { FinalCTA } from '../../components/FinalCTA';

const controls = [
  {
    icon: SlidersHorizontal,
    text: 'Quali ricerche coprire e quali pagine del sito mostrare.',
  },
  {
    icon: MapPin,
    text: 'In che area specifica essere / non essere mostrati.',
  },
  {
    icon: Wallet,
    text: 'Quanto spendere per la visibilità.',
  },
  {
    icon: Activity,
    text: 'Andamento in tempo reale di spese, ricerche associate, andamento, garantendo la possibilità immediata di cambiamento.',
  },
];

export function VisibilitaSponsorizzata() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="font-display font-bold text-brand-navy text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight mb-10 max-w-4xl">
              Campagne AdWords [ora Google Ads] persuasive che minimizzano le spese, massimizzando le conversioni.
            </h1>
            <Link
              to="/contatto"
              className="inline-flex items-center gap-2 bg-brand-navy text-white font-semibold px-6 py-3.5 rounded-full hover:bg-brand-navy-dark hover:scale-[1.02] transition-all shadow-card"
            >
              Contattami
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <Divider />

      {/* Intro + control bullets */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-lg sm:text-xl text-brand-navy/85 leading-relaxed">
              Google Ads è lo strumento di visibilità più complesso ed efficace attualmente disponibile su internet. Se usato in maniera corretta, ha un potenziale incalcolabile nel crescere il tuo business.
            </p>
            <p className="text-lg sm:text-xl text-brand-navy/85 leading-relaxed mt-6">
              A differenza del SEO dove è l'algoritmo di Google a decidere dove e a quali utenti apparire, con le sponsorizzazioni si ha il pieno controllo su:
            </p>
          </Reveal>

          <ul className="mt-8 space-y-3">
            {controls.map(({ icon: Icon, text }, i) => (
              <Reveal key={text} delay={i * 70}>
                <li className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-brand-navy/8 shadow-pill">
                  <span className="mt-0.5 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-terracotta/10 flex-shrink-0">
                    <Icon className="w-5 h-5 text-brand-terracotta" />
                  </span>
                  <span className="text-brand-navy/85 leading-relaxed pt-1.5">{text}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <Divider />

      {/* Precedence paragraph */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-lg sm:text-xl text-brand-navy/85 leading-relaxed">
              Gli annunci sponsorizzati hanno la precedenza sui risultati organici, con più del 1000 percento in più di impressioni medie.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </>
  );
}
