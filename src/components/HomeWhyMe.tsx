import { Reveal } from './Reveal';

const points = [
  "Vivo e lavoro a Firenze, facilmente reperibile. Ti aggiornerò regolarmente sull'andamento del lavoro, passo per passo.",
  "Unendo la mia capacità di comunicazione virtuale con un'attenzione maniacale per ogni dettaglio, ti garantisco risultati concreti già entro 20 giorni.",
  'Il prezzo è unicamente quello concordato, senza spese nascoste o «sorprese».',
  'Ho modo di lavorare con un numero ristretto di responsabili, dandoti la sicurezza e serenità di avere una persona che ti segue da vicino, senza persone di mezzo, con la stessa energia e voglia di crescere il tuo business, quanta ne hai tu.',
];

export function HomeWhyMe() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-brand-navy leading-[1.1] mb-10">
            Perché affidarsi a me?
          </h2>
          <ul className="space-y-5">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span aria-hidden className="mt-2.5 w-1.5 h-1.5 rounded-full bg-brand-terracotta flex-shrink-0" />
                <span className="text-brand-navy/85 text-base sm:text-lg leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
