import { Reveal } from './Reveal';

export function HomeIntro() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-lg sm:text-xl text-brand-navy/85 leading-relaxed">
            Avere passione ed esperienza nel proprio mestiere non basta più. Oggigiorno più della metà dei tuoi potenziali clienti si informano estensivamente su internet [in particolar modo Google ed IA]. Ogni utente impiega 2/3 secondi sul tuo sito [o pagina, o annuncio] prima di decidere se fai per loro o meno [pensa alle volte in cui tu stesso passi fra i contenuti online]. Il saper comunicare valore efficacemente diviene fondamentale per trattenere il visitatore e trasformarlo in un cliente.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
