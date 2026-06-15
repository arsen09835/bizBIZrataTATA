import { Link } from 'react-router-dom';
import { Globe, Search, Megaphone, ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';

const items = [
  {
    icon: Globe,
    text: 'Sito web professionale e aggiornato che trasformi ogni visitatore in interessato.',
    label: 'Scopri come posso aiutarti',
    to: '/servizi/siti-web',
  },
  {
    icon: Search,
    text: 'SEO che ti porti fra i primi 3 per importanza su Google',
    label: 'Scopri come posso aiutarti',
    to: '/servizi/visibilita-organica',
  },
  {
    icon: Megaphone,
    text: 'Campagne Google Ads che dirigano il maggior numero di utenti giusti verso il profilo della tua impresa.',
    label: 'Scopri come posso aiutarti',
    to: '/servizi/visibilita-sponsorizzata',
  },
];

export function CosaTiServe() {
  return (
    <section
      id="cosa-ti-serve"
      className="bg-[#F8F9FA] py-20 sm:py-28 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <Reveal duration={450}>
          <p className="text-xs uppercase tracking-[0.18em] text-brand-brown font-semibold mb-3">
            La base
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ink">
            Cosa ti serve
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {items.map((it, i) => (
            <Reveal key={it.to} delay={i * 50} duration={450}>
              <Link
                to={it.to}
                className="group block h-full p-7 rounded-xl bg-white border border-black/8 shadow-sm hover:shadow-[0_20px_45px_rgba(15,23,34,0.10)] hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-md border border-black/8 bg-white shadow-sm flex items-center justify-center mb-5">
                  <it.icon className="w-5 h-5 text-brand-blue" />
                </div>
                <p className="text-ink/85 font-medium leading-relaxed">{it.text}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue">
                  {it.label}
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
