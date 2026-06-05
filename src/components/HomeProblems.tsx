import { Reveal } from './Reveal';

export function HomeProblems() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-8">
        <Reveal>
          <p className="text-lg sm:text-xl text-brand-navy/85 leading-relaxed">
            Se ritieni di non ricevere la quantità di clienti che meriteresti, è molto probabile che tu abbia un sito datato o scarsamente comunicante: essendo la tua vetrina digitale, è la destinazione finale dove un potenziale cliente decide se scegliere te o il successivo.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-lg sm:text-xl text-brand-navy/85 leading-relaxed">
            Se ritieni che ogni persona passata dal sito ti abbia contattato, allora non sei rilevante fra i risultati nel motore di ricerca. Semplicemente non sei visto da chi cerca servizi simili al tuo.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
