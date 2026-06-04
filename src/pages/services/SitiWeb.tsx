import { Link } from 'react-router-dom';
import { ArrowRight, Store, PhoneCall, ShoppingBag } from 'lucide-react';
import { Reveal } from '../../components/Reveal';
import { Divider } from '../../components/Divider';
import { FinalCTA } from '../../components/FinalCTA';

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
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[58vh] flex items-center overflow-hidden bg-brand-ink">
        <img
          src="/pexels-eren-li-7241413.jpg"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-ink/85 via-brand-ink/65 to-brand-ink/35" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 sm:pt-40 sm:pb-24 w-full">
          <Reveal>
            <h1 className="font-display font-bold text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight mb-10 max-w-3xl">
              Siti Web che catturano, trattengono e spingono a voler sapere di più
            </h1>
            <Link
              to="/contatto"
              className="inline-flex items-center gap-2 bg-white text-brand-navy font-semibold px-6 py-3.5 rounded-full hover:bg-brand-ivory hover:scale-[1.02] transition-all shadow-glow"
            >
              Contattami
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Section 2 — paragraph */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-[60rem] mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-12">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-brand-navy leading-[1.1]">
              Un Design Responsive <em className="italic">alla mano</em>.
            </h2>
          </Reveal>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10">
            <Reveal className="w-full max-w-[440px]">
              <figure>
                <img
                  src="/container_transparent.png"
                  alt="Diagramma analisi visite per dispositivi"
                  className="w-full h-auto block rounded-2xl"
                  style={{ filter: 'drop-shadow(0 10px 24px rgba(15,26,42,0.08))' }}
                />
                <figcaption className="mt-4 text-sm italic text-brand-gray text-center">
                  Diagramma preso dall'analisi sul progetto corrente{' '}
                  <a
                    href="https://brunoantichita.it/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-terracotta underline underline-offset-4 decoration-brand-terracotta/40 hover:decoration-brand-terracotta transition-colors not-italic font-medium"
                  >
                    https://brunoantichita.it/
                  </a>
                </figcaption>
              </figure>
            </Reveal>

            <Reveal className="w-full max-w-sm" delay={120}>
              <p className="text-lg sm:text-xl text-brand-navy/85 leading-relaxed">
                La maggior parte dei tuoi clienti ti troveranno dal cellulare. Attraverso un design che calza a pennello sia sul computer, che tablet, che sul più piccolo dei cellulari, si garantisce un'esperienza di navigazione impeccabile per ogni utente che entra nel tuo sito web.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <Divider />

      {/* Section 4 — Quali siti web realizzo (kept) + new paragraph */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

          <Reveal className="mt-12 max-w-3xl">
            <p className="text-base sm:text-lg text-brand-navy/85 leading-relaxed">
              Se hai un sito creato da un'agenzia e nasce il bisogno di apportare modifiche per una migliore coordinazione col Profilo oppure Annunci, mi metterò d'accordo con l'agenzia di riferimento, effettuando il restyling gratuitamente, se già stiamo lavorando sul SEO oppure Campagne di annunci.
            </p>
          </Reveal>
        </div>
      </section>

      <Divider />

      {/* Section 5 — Prima vs Dopo */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-12">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-brand-navy leading-[1.1] text-center">
              Esempio
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.18em] text-brand-navy/55 font-semibold mb-3">
                Prima
              </p>
              <div className="aspect-[4/3] rounded-2xl border border-brand-navy/10 shadow-pill bg-brand-navy/[0.03]" />
            </Reveal>
            <Reveal delay={120}>
              <p className="text-xs uppercase tracking-[0.18em] text-brand-terracotta font-semibold mb-3">
                Dopo
              </p>
              <div className="aspect-[4/3] rounded-2xl border border-brand-terracotta/20 shadow-pill bg-brand-navy/[0.03]" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section 6 — Final CTA (same as home) */}
      <FinalCTA />
    </>
  );
}
