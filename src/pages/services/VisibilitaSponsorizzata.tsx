import { Link } from 'react-router-dom';
import { ArrowRight, SlidersHorizontal, MapPin, Wallet, Activity } from 'lucide-react';
import { Reveal } from '../../components/Reveal';
import { Divider } from '../../components/Divider';
import { FinalCTA } from '../../components/FinalCTA';

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
      {/* Hero — navy gradient bg + flow card on the right */}
      <section
        className="relative min-h-[58vh] flex items-center"
        style={{ background: 'linear-gradient(135deg, #16212F 0%, #0B1119 100%)' }}
      >
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

            <div className="lg:col-span-5">
              <div className="max-w-md mx-auto lg:mx-0 lg:ml-auto">
                <div className="bg-white rounded-2xl shadow-card-hover p-5 sm:p-6">
                  <svg
                    viewBox="0 0 480 340"
                    role="img"
                    aria-labelledby="flussoTitle flussoDesc"
                    className="w-full h-auto"
                  >
                    <title id="flussoTitle">Flusso clic, conversioni e fatturato</title>
                    <desc id="flussoDesc">
                      I clic entrano da sinistra, passano per un imbuto di conversione e diventano barre di fatturato crescenti.
                    </desc>
                    <defs>
                      <marker id="flow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </marker>
                    </defs>
                    <circle cx="60" cy="198" r="5.5" fill="#B26B3E" />
                    <circle cx="84" cy="178" r="6.5" fill="#B26B3E" />
                    <circle cx="104" cy="160" r="5" fill="#B26B3E" />
                    <line x1="120" y1="152" x2="172" y2="144" stroke="#9FB0CF" strokeWidth="2" markerEnd="url(#flow)" />
                    <circle cx="146" cy="148" r="2.4" fill="#B26B3E" fillOpacity="0.7" />
                    <path d="M178 140 L252 140 L223 198 L223 214 L207 214 L207 198 Z" fill="#2A52BE" />
                    <line x1="252" y1="196" x2="328" y2="220" stroke="#9FB0CF" strokeWidth="2" markerEnd="url(#flow)" />
                    <circle cx="290" cy="208" r="2.4" fill="#5E82E0" fillOpacity="0.8" />
                    <line x1="334" y1="238" x2="426" y2="238" stroke="#0F1722" strokeOpacity="0.1" strokeWidth="1" />
                    <rect x="338" y="212" width="18" height="26" rx="3" fill="#AFC2EE" />
                    <rect x="366" y="184" width="18" height="54" rx="3" fill="#5E82E0" />
                    <rect x="394" y="152" width="18" height="86" rx="3" fill="#2A52BE" />
                    <line x1="403" y1="148" x2="403" y2="134" stroke="#B26B3E" strokeWidth="3" strokeLinecap="round" />
                    <path d="M397 141 L403 132 L409 141" fill="none" stroke="#B26B3E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
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
