import { Link } from 'react-router-dom';
import { ArrowRight, SlidersHorizontal, MapPin, Wallet, Activity, TrendingUp, TrendingDown } from 'lucide-react';
import { Reveal } from '../../components/Reveal';
import { Divider } from '../../components/Divider';
import { FinalCTA } from '../../components/FinalCTA';
import { adsHeroLqip } from '../../adsHeroLqip';

const controls = [
  { icon: SlidersHorizontal, text: 'Quali ricerche coprire e quali pagine del sito mostrare.' },
  { icon: MapPin, text: 'In che area specifica essere / non essere mostrati.' },
  { icon: Wallet, text: 'Quanto spendere per la visibilità.' },
  {
    icon: Activity,
    text: 'Andamento in tempo reale di spese, ricerche associate, andamento, garantendo la possibilità immediata di cambiamento.',
  },
];

export function VisibilitaSponsorizzata() {
  return (
    <>
      {/* Hero — dark photo bg + white title */}
      <section className="relative min-h-[58vh] flex items-center bg-brand-ink">
        <div className="absolute inset-0 overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 bg-cover bg-center scale-105 blur-xl"
            style={{ backgroundImage: `url(${adsHeroLqip})` }}
          />
          <img
            src="/ads-hero.jpg"
            srcSet="/ads-hero-960.jpg 960w, /ads-hero-1440.jpg 1440w, /ads-hero.jpg 1920w"
            sizes="100vw"
            alt=""
            aria-hidden
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/15" />
        </div>

        <div className="relative max-w-6xl mx-auto px-8 lg:px-8 pt-32 pb-20 sm:pt-40 sm:pb-24 w-full">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <h1 className="font-display font-bold text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight mb-10 max-w-4xl">
                Campagne AdWords (ora Google Ads) persuasive che minimizzano le spese, massimizzando le conversioni.
              </h1>
              <div className="flex flex-col sm:flex-row gap-3 items-start">
                <a
                  href="mailto:info@rankmybizup.com"
                  className="inline-flex items-center gap-2 bg-brand-blue text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-brand-blue-dark transition-colors"
                >
                  Contattami
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  to="/preventivo"
                  className="inline-flex items-center justify-center bg-white text-ink font-semibold px-7 py-3.5 rounded-lg hover:bg-white/90 transition-colors"
                >
                  Richiedi un preventivo
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 hidden lg:block">
              <div className="bg-white rounded-2xl shadow-card-hover p-5 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-brand-gray font-semibold">
                      Andamento campagna
                    </div>
                    <div className="font-display font-bold text-brand-navy text-lg leading-tight">
                      Più risultati, meno spesa
                    </div>
                  </div>
                  <span className="text-xs text-brand-gray whitespace-nowrap">90 gg</span>
                </div>

                <svg viewBox="0 0 300 150" className="w-full h-auto" aria-hidden>
                  <line x1="0" y1="38" x2="300" y2="38" stroke="#1E3557" strokeOpacity="0.06" strokeWidth="1" />
                  <line x1="0" y1="75" x2="300" y2="75" stroke="#1E3557" strokeOpacity="0.06" strokeWidth="1" />
                  <line x1="0" y1="112" x2="300" y2="112" stroke="#1E3557" strokeOpacity="0.06" strokeWidth="1" />
                  <polyline points="0,92 50,98 100,106 150,114 200,122 250,131 300,140" fill="none" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <polyline points="0,138 50,132 100,122 150,110 200,98 250,86 300,76" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <polyline points="0,134 50,126 100,110 150,92 200,75 250,58 300,46" fill="none" stroke="#C9784A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <polyline points="0,128 50,118 100,95 150,72 200,52 250,32 300,18" fill="none" stroke="#1E3557" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 mt-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#1E3557' }} />
                    <span className="text-xs font-medium text-brand-navy flex-1">Impressioni</span>
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#C9784A' }} />
                    <span className="text-xs font-medium text-brand-navy flex-1">Click</span>
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#10B981' }} />
                    <span className="text-xs font-medium text-brand-navy flex-1">Conversioni</span>
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#EF4444' }} />
                    <span className="text-xs font-medium text-brand-navy flex-1">Costo</span>
                    <TrendingDown className="w-3.5 h-3.5 text-red-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* Intro + control bullets — two-column with the Google Ads card on the right */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-8 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-7">
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

            <Reveal className="lg:col-span-5 flex justify-center" delay={120}>
              <div className="w-full max-w-[306px] animate-float-slow" style={{ transform: 'rotate(-2deg)' }}>
                <img
                  src="/card_google_ads.png"
                  alt=""
                  aria-hidden
                  className="w-full h-auto rounded-2xl shadow-card-hover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Divider />

      {/* Precedence paragraph */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-8 lg:px-8">
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
