import { useState } from 'react';
import { ArrowRight, Store, PhoneCall, ShoppingBag } from 'lucide-react';
import { Reveal } from '../../components/Reveal';
import { Divider } from '../../components/Divider';
import { FinalCTA } from '../../components/FinalCTA';
import { sitiHeroLqip } from '../../sitiHeroLqip';

const siteTypes = [
  {
    icon: Store,
    title: 'Sito vetrina',
    description:
      'Presenta la tua attività nella sua unicità e nei suoi valori. Ideale per botteghe artigiane o per chi non si avvale di produzione di massa e lavora con il passaggio di persone.',
  },
  {
    icon: PhoneCall,
    title: 'Sito lead',
    description:
      'Presenta il tuo servizio in maniera convincente e professionale, con l\'obiettivo di generare chiamate di interesse. Ideale per chi ha una clinica privata o per tecnici che eseguono appuntamenti a domicilio.',
  },
  {
    icon: ShoppingBag,
    title: 'Sito eCommerce',
    description: 'Pensato per chi vuole massimizzare ordini e acquisti online.',
  },
];

export function SitiWeb() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[58vh] flex items-center bg-brand-ink">
        <div className="absolute inset-0 overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 bg-cover bg-center scale-105 blur-xl"
            style={{ backgroundImage: `url(${sitiHeroLqip})` }}
          />
          <img
            src="/siti-hero.jpg"
            srcSet="/siti-hero-960.jpg 960w, /siti-hero-1440.jpg 1440w, /siti-hero.jpg 1920w"
            sizes="100vw"
            alt=""
            aria-hidden
            fetchPriority="high"
            loading="eager"
            decoding="async"
            onLoad={() => setLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover object-[center_75%] transition-opacity duration-700 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent" />
        </div>

        <div className="relative max-w-6xl mx-auto px-8 lg:px-8 pt-32 pb-20 sm:pt-40 sm:pb-24 w-full">
          <Reveal>
            <h1 className="font-display font-bold text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight mb-10 max-w-3xl">
              Siti Web che catturano il cliente e lo invogliano a cercarti.
            </h1>
            <a
              href="mailto:info@rankmybizup.com"
              className="inline-flex items-center gap-2 bg-white text-brand-navy font-semibold px-6 py-3.5 rounded-full hover:bg-brand-ivory hover:scale-[1.02] transition-all shadow-glow"
            >
              Contattami
              <ArrowRight className="w-4 h-4" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* Section 2 — paragraph */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-[60rem] mx-auto px-8 lg:px-8">
          <Reveal>
            <p className="text-lg sm:text-xl text-brand-navy/85 leading-relaxed">
              Il sito internet sta alla base di gran parte della tua presenza non solo su Google, ma anche sui Social se ne fai uso. È dove un potenziale cliente decide se scegliere te o passare a quello successivo. È anche uno dei fattori principali che influenzano se appari fra i primi risultati o in fondo ai risultati sul motore di ricerca.
            </p>
            <p className="text-lg sm:text-xl text-brand-navy/85 leading-relaxed max-w-3xl mt-8">
              Avere un buon prodotto non basta, bisogna saper presentarlo in un contesto che amplifichi interesse. È come essere il miglior tatuatore ma avere la sala sottosopra.
            </p>
          </Reveal>
        </div>
      </section>

      <Divider />

      {/* Section 3 — Design Responsive */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-8 lg:px-8">
          <Reveal className="mb-12">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-brand-navy leading-[1.1]">
              Un Design Responsive <em className="italic">alla mano</em>.
            </h2>
          </Reveal>

          <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-12">
            {/* Left column — diagram (1) */}
            <Reveal className="w-full max-w-[440px]">
              <img
                src="/container_transparent.png"
                alt="Diagramma analisi visite per dispositivi"
                className="w-full h-auto block rounded-2xl"
                style={{ filter: 'drop-shadow(0 10px 24px rgba(15,26,42,0.08))' }}
              />
            </Reveal>

            {/* Right column — paragraph (3), caption (4), then the engagement card (2) below */}
            <Reveal className="w-full max-w-xl lg:pt-8" delay={120}>
              <p className="text-lg sm:text-xl text-brand-navy/85 leading-relaxed">
                La maggior parte dei tuoi clienti ti troveranno dal cellulare. Attraverso un design che calza a pennello sia sul computer, che tablet, che sul più piccolo dei cellulari, si garantisce un'esperienza di navigazione impeccabile per ogni utente che entra nel tuo sito web.
              </p>
              <p className="mt-8 text-sm italic text-brand-gray text-left">
                Diagramma preso dai dati sul progetto corrente{' '}
                <a
                  href="https://brunoantichita.it/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-terracotta underline underline-offset-4 decoration-brand-terracotta/40 hover:decoration-brand-terracotta transition-colors not-italic font-medium"
                >
                  https://brunoantichita.it/
                </a>
              </p>
              <img
                src="/card_engagement.png"
                alt=""
                aria-hidden
                className="mt-8 w-full max-w-[308px] h-auto block rounded-2xl"
                style={{ filter: 'drop-shadow(0 10px 24px rgba(15,26,42,0.08))' }}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <Divider />

      {/* Section 4 — Quali siti web realizzo (kept) + new paragraph */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-8 lg:px-8">
          <Reveal className="mb-14">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-terracotta font-semibold mb-3">
              Tipologie
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-brand-navy leading-[1.1]">
              Quali siti web realizzo.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {siteTypes.map((t, i) => (
              <Reveal key={t.title} delay={i * 80}>
                <div className="h-full p-7 lg:p-8 rounded-2xl bg-white border border-black/5 shadow-card">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-terracotta/10 mb-6">
                    <t.icon className="w-6 h-6 text-brand-terracotta" />
                  </div>
                  <h3 className="font-display text-xl text-brand-navy mb-3">{t.title}</h3>
                  <p className="text-brand-gray leading-relaxed">{t.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-brand-navy/85 leading-relaxed text-center">
              Se hai un sito creato da un'agenzia e nasce il bisogno di apportare modifiche per una migliore coordinazione col Profilo oppure Annunci, mi metterò d'accordo con l'agenzia di riferimento, effettuando il restyling gratuitamente, se già stiamo lavorando sul SEO oppure Campagne di annunci.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Section 5 — Final CTA (same as home) */}
      <FinalCTA />
    </>
  );
}
