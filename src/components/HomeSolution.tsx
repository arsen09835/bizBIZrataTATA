import { Reveal } from './Reveal';

export function HomeSolution() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        <Reveal>
          <div className="max-w-2xl mx-auto text-lg sm:text-xl text-brand-navy/85 leading-relaxed">
            <p>La soluzione immediata è sedersi e capire se:</p>
            <ol className="mt-3 space-y-2 list-none">
              <li>1) il sito comunica valore all'utente.</li>
              <li>2) Se la tua attività compare fra almeno i primi 3–4 posti nelle ricerche organiche (SEO).</li>
            </ol>
            <p className="mt-5">
              Nel caso, se gestisci una campagna sponsorizzata, vedere per quali utenti hai deciso di mostrarti e in che località.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="max-w-4xl mx-auto text-lg sm:text-xl text-brand-navy/85 leading-relaxed">
            Trovare la persona giusta che non solo capisca cosa non va, ma che ti segua a lungo termine è importante per valorizzare il tuo negozio e acquisire sicurezza.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
