import { Reveal } from './Reveal';

const steps = [
  {
    n: '01',
    title: 'Incontro',
    description:
      'Ci conosciamo, ti presento un primo report sulla situazione virtuale del tuo negozio o della tua attività e vediamo se ha senso collaborare.',
  },
  {
    n: '02',
    title: 'Strategia e Realizzazione',
    description: 'In caso di accordo, iniziamo subito con la strategia stabilita.',
  },
  {
    n: '03',
    title: 'Ottimizzazione',
    description: 'Monitoriamo, miglioriamo e cresciamo nel tempo.',
  },
];

export function Process() {
  return (
    <section className="bg-brand-ivory py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-14">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-terracotta font-semibold">
            Come lavoro
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 80}>
              <div className="relative h-full p-6 lg:p-7 rounded-2xl bg-white border border-black/5 shadow-card">
                <div className="font-display font-bold text-5xl text-brand-terracotta/25 mb-4 leading-none">
                  {step.n}
                </div>
                <h3 className="font-display text-lg text-brand-navy mb-2">{step.title}</h3>
                <p className="text-sm text-brand-gray leading-relaxed">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
