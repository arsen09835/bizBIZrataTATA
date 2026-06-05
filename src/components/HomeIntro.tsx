import { Reveal } from './Reveal';

export function HomeIntro() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-lg sm:text-xl text-brand-navy/85 leading-relaxed">
            Essere bravi nel proprio mestiere non basta più. Bisogna essere rilevante su Internet (specialmente su Google), dove gli utenti navigano ogni secondo cercando di trovare una soluzione per le proprie esigenze.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
