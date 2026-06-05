import { Reveal } from './Reveal';

const paragraphs = [
  'In me troverai la fiducia e serenità di un collaboratore disponibile, facile da reperire e soprattutto che ti segue con cura e attenzione.',
  'Essendo io e basta, posso lavorare con un numero ristretto di responsabili (2–3). Seguo personalmente tutti i progetti, con la stessa voglia di raggiungere nuovi obiettivi quanta ne hai tu.',
  'Riguardo al piano economico, il prezzo concordato è quello su cui si lavora. Niente spese aggiuntive, iscrizioni annuali, o altre «sorprese».',
];

export function HomeWhyMe() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-brand-navy leading-[1.1] mb-8">
            Perché affidarti a me?
          </h2>
        </Reveal>
        <div className="space-y-6">
          {paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 80}>
              <p className="text-base sm:text-lg text-brand-navy/85 leading-relaxed">{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
