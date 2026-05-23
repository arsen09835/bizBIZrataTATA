import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '../components/Reveal';

const projects = [
  {
    category: 'Studio tattoo',
    title: 'Restyling sito + visibilità Google',
    description: 'Nuovo sito vetrina e ottimizzazione della scheda Google Business per posizionarsi tra i primi risultati nella zona.',
    tags: ['Sito web', 'SEO locale', 'Google Business'],
    gradient: 'from-brand-navy via-brand-navy-dark to-brand-ink',
  },
  {
    category: 'Centro estetico',
    title: 'Nuovo sito + campagne Google Ads',
    description: 'Sito web focalizzato sulle prenotazioni e campagne sponsorizzate per intercettare richieste in zona Firenze.',
    tags: ['Sito web', 'Google Ads', 'Prenotazioni'],
    gradient: 'from-brand-terracotta via-brand-terracotta to-[#8a4a25]',
  },
  {
    category: 'Impresa locale',
    title: 'Ottimizzazione presenza online',
    description: 'Riorganizzazione della presenza su Google Maps e miglioramento della visibilità organica per servizi territoriali.',
    tags: ['SEO locale', 'Google Maps'],
    gradient: 'from-[#2A4670] via-brand-navy to-brand-navy-dark',
  },
  {
    category: 'Artigiano',
    title: 'Sito web professionale',
    description: 'Sito web moderno per presentare lavori, ricevere richieste di preventivo e dare un volto digitale all\'attività.',
    tags: ['Sito web', 'Lead generation'],
    gradient: 'from-[#3a5d8a] via-brand-navy to-brand-navy-dark',
  },
  {
    category: 'Professionista',
    title: 'Restyling + SEO',
    description: 'Aggiornamento completo del sito esistente e lavoro di ottimizzazione per le ricerche locali più rilevanti.',
    tags: ['Restyling', 'SEO locale'],
    gradient: 'from-brand-terracotta via-[#a55f33] to-[#5a3220]',
  },
  {
    category: 'Locale',
    title: 'Visibilità Google end-to-end',
    description: 'Strategia integrata tra sito, scheda Google e campagne sponsorizzate per massimizzare i contatti.',
    tags: ['Sito web', 'SEO', 'Google Ads'],
    gradient: 'from-brand-navy via-[#2A4670] to-brand-terracotta',
  },
];

export function Portfolio() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-navy pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-terracotta/15 blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.18em] text-brand-terracotta-soft font-semibold mb-4">
              Portfolio
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] mb-5 max-w-3xl">
              Progetti per attività del territorio.
            </h1>
            <p className="text-lg text-white/75 leading-relaxed max-w-2xl">
              Una selezione di lavori realizzati per attività locali a Firenze e dintorni.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {projects.map((p, i) => (
              <Reveal key={p.title + i} delay={(i % 3) * 100}>
                <article className="group rounded-2xl overflow-hidden border border-black/5 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 bg-white h-full flex flex-col">
                  <div className={`relative aspect-[4/3] bg-gradient-to-br ${p.gradient} overflow-hidden`}>
                    <div className="absolute inset-0 opacity-30 photo-placeholder mix-blend-overlay" />
                    <div className="absolute top-4 left-4 inline-flex items-center px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white text-[11px] font-medium tracking-wide">
                      {p.category}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-display text-lg text-brand-navy mb-2 leading-snug">{p.title}</h3>
                    <p className="text-sm text-brand-gray leading-relaxed mb-4">{p.description}</p>
                    <div className="mt-auto flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center px-2.5 py-1 rounded-full bg-brand-ivory text-brand-navy/75 text-[11px] font-medium border border-black/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-ivory py-20 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl text-brand-navy leading-[1.1] mb-5">
              Hai un progetto in mente?
            </h2>
            <p className="text-lg text-brand-gray leading-relaxed mb-8">
              Raccontaci la tua attività. Vediamo insieme se possiamo aiutarti.
            </p>
            <Link
              to="/contatto"
              className="inline-flex items-center gap-2 bg-brand-navy text-white font-semibold px-7 py-4 rounded-full hover:bg-brand-navy-dark transition-colors"
            >
              Parliamo della tua attività
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
