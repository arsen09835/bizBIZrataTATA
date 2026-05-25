import { Reveal } from './Reveal';

const tags = ['Telefonate.', 'Costi.', 'Fatture.', 'IVA.'];

export function ProblemReality() {
  return (
    <section className="bg-brand-ivory py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <Reveal className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-terracotta font-semibold mb-3">
              Realtà
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-brand-navy leading-[1.1]">
              Hai già abbastanza da gestire.
            </h2>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={120}>
            <div className="flex flex-wrap gap-2.5 mb-8">
              {tags.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-black/5 text-brand-navy font-medium text-sm shadow-pill"
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="text-lg sm:text-xl text-brand-navy/85 leading-relaxed">
              L'ultima cosa che serve è trasformare anche Web Design e Google in secondi lavori.
            </p>
            <p className="text-base text-brand-gray leading-relaxed mt-4">
              Me ne occupo io. Tu continui a fare quello che fai per passione.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
