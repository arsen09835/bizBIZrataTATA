import { Link } from 'react-router-dom';
import { Globe, Search, Target, ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';

const services = [
  {
    icon: Globe,
    title: 'Siti web',
    description: 'Professionali e dinamici, progettati per trasformare i visitatori curiosi in clienti che ti contattano.',
    to: '/servizi/siti-web',
    accent: 'from-brand-terracotta/15 to-brand-terracotta/0',
  },
  {
    icon: Search,
    title: 'Visibilità organica',
    description: 'Comparirai fra i primi risultati quando le persone cercano i servizi che offri.',
    to: '/servizi/visibilita-organica',
    accent: 'from-brand-navy/10 to-brand-navy/0',
  },
  {
    icon: Target,
    title: 'Visibilità sponsorizzata',
    description: 'Sfrutteremo al massimo lo strumento di visibilità più potente (sì, letteralmente) per spingere le tue offerte in prima linea.',
    to: '/servizi/visibilita-sponsorizzata',
    accent: 'from-brand-terracotta/15 to-brand-terracotta/0',
  },
];

export function Services() {
  return (
    <section id="servizi" className="bg-white py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl mb-14 sm:mb-16">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-terracotta font-semibold mb-3">
            Cosa facciamo
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-brand-navy leading-[1.1] mb-5">
            Tre pilastri per aumentare i clienti che usufruiscono del tuo servizio.
          </h2>
          <p className="text-lg text-brand-gray leading-relaxed">
            Un unico interlocutore per renderti il preferito dal motore di ricerca Google.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-7">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 100}>
              <Link
                to={service.to}
                className="group relative block h-full p-7 lg:p-8 rounded-2xl bg-white border border-black/5 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity`}
                />
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-terracotta/10 mb-6 group-hover:bg-brand-terracotta/15 transition-colors">
                    <service.icon className="w-6 h-6 text-brand-terracotta" />
                  </div>
                  <h3 className="font-display text-xl text-brand-navy mb-3">{service.title}</h3>
                  <p className="text-brand-gray leading-relaxed mb-6">{service.description}</p>
                  <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy group-hover:text-brand-terracotta transition-colors">
                    Scopri di più
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
