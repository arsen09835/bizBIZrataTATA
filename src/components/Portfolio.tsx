import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';

const projects = [
  {
    category: 'Studio tattoo',
    title: 'Restyling sito + visibilità Google',
    tags: ['Sito web', 'SEO locale'],
    gradient: 'from-brand-navy via-brand-navy-dark to-brand-ink',
  },
  {
    category: 'Centro estetico',
    title: 'Nuovo sito + campagne Google Ads',
    tags: ['Sito web', 'Google Ads'],
    gradient: 'from-brand-terracotta via-brand-terracotta to-[#8a4a25]',
  },
  {
    category: 'Impresa locale',
    title: 'Ottimizzazione presenza online',
    tags: ['SEO locale', 'Google Maps'],
    gradient: 'from-[#2A4670] via-brand-navy to-brand-navy-dark',
  },
];

export function Portfolio() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-brand-terracotta font-semibold mb-3">
              Lavori recenti
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-brand-navy leading-[1.1]">
              Progetti per attività<br className="hidden sm:block" /> del territorio.
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy hover:text-brand-terracotta transition-colors"
          >
            Vedi tutto il portfolio
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-7">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <article className="group rounded-2xl overflow-hidden border border-black/5 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 bg-white h-full flex flex-col">
                <div
                  className={`relative aspect-[4/3] bg-gradient-to-br ${p.gradient} overflow-hidden`}
                >
                  <div className="absolute inset-0 opacity-30 photo-placeholder mix-blend-overlay" />
                  <div className="absolute top-4 left-4 inline-flex items-center px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white text-[11px] font-medium tracking-wide">
                    {p.category}
                  </div>
                  <div className="absolute bottom-4 right-4 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display text-lg text-brand-navy mb-3 leading-snug">{p.title}</h3>
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
  );
}
