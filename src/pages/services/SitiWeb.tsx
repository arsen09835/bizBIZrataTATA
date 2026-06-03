import { Link } from 'react-router-dom';
import { ArrowRight, Store, PhoneCall, ShoppingBag } from 'lucide-react';
import { Reveal } from '../../components/Reveal';

const commonPaths = [
  {
    n: '01',
    title: 'Fai da te',
    description:
      'Niente spese, niente fastidi? Ci vuole tempo per imparare a progettare, capire cosa funziona e cosa no, dopodiché altri giorni per finire di crearne uno.',
  },
  {
    n: '02',
    title: 'Affidarti a un conoscente',
    description:
      'Se è del settore, sei a posto. Altrimenti rischi di non trovare la persona adatta, sprecando tempo e denaro e perdendo clienti.',
  },
  {
    n: '03',
    title: 'Mega agenzie',
    description:
      'Risultati probabilmente professionali, ma a meno che tu non abbia migliaia di euro da investire, faresti la fine di molti proprietari: messi in mano all\'assistente dell\'assistente, bloccati con spese annue.',
  },
];

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
      <section className="relative overflow-hidden bg-brand-navy pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full bg-brand-terracotta/20 blur-3xl" />
          <div className="absolute -bottom-32 left-0 w-[400px] h-[400px] rounded-full bg-brand-navy-dark/40 blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.18em] text-brand-terracotta-soft font-semibold mb-4">
              Servizio · Siti web
            </p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.15] mb-10 max-w-4xl">
              Siti internet pensati per comunicare il tuo valore in maniera immediata, trasformando visualizzazioni casuali in{' '}
              <span className="text-brand-terracotta-soft">telefonate di interesse</span>.
            </h1>
            <Link
              to="/contatto"
              className="inline-flex items-center gap-2 bg-white text-brand-navy font-semibold px-6 py-3.5 rounded-full hover:bg-brand-ivory transition-colors shadow-glow"
            >
              Parliamo della tua attività
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Siti internet nel 2026 */}
      <section className="bg-brand-ivory py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.18em] text-brand-terracotta font-semibold mb-3">
              Lo scenario
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-brand-navy leading-[1.1] mb-8">
              Siti internet nel 2026.
            </h2>
            <p className="text-lg sm:text-xl text-brand-navy/85 leading-relaxed">
              Avere un buon servizio o prodotto non basta. Se non viene presentato in maniera adeguata, se il visitatore non sente che{' '}
              <span className="font-semibold text-brand-navy">tu</span> sei quello che fa per lui, è come avere il miglior servizio dentro un negozio mal mantenuto.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Strade comuni */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-14">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-terracotta font-semibold mb-3">
              Le alternative
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-brand-navy leading-[1.1]">
              Strade comuni.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {commonPaths.map((p, i) => (
              <Reveal key={p.n} delay={i * 80}>
                <div className="h-full p-6 lg:p-7 rounded-2xl bg-brand-ivory/60 border border-black/5">
                  <div className="font-display font-bold text-5xl text-brand-terracotta/25 mb-4 leading-none">
                    {p.n}
                  </div>
                  <h3 className="font-display text-lg text-brand-navy mb-3">{p.title}</h3>
                  <p className="text-sm text-brand-gray leading-relaxed">{p.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Perché io */}
      <section className="bg-brand-ivory py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.18em] text-brand-terracotta font-semibold mb-3">
              L'alternativa
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-brand-navy leading-[1.1] mb-8">
              Perché io?
            </h2>
            <p className="text-lg text-brand-navy/85 leading-relaxed">
              Vivo e lavoro a Firenze. Posso lavorare solo con un numero limitato di proprietari, per non disperdere la relazione. Grazie alla passione e all'attenzione maniacale per i dettagli, ti garantisco risultati reali entro 30–60 giorni dal lancio del sito, rendendoti il professionista di fiducia di chi ti cerca.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Quali siti web realizzo */}
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
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 right-1/4 w-[500px] h-[500px] rounded-full bg-brand-terracotta/20 blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl text-white leading-[1.1] mb-8">
              Vuoi capire se fa per te?
            </h2>
            <Link
              to="/contatto"
              className="inline-flex items-center gap-2 bg-white text-brand-navy font-semibold px-7 py-4 rounded-full hover:bg-brand-ivory hover:scale-[1.02] transition-all shadow-glow"
            >
              Richiedi una consulenza
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
