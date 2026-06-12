import { Reveal } from './Reveal';

export function HomeIntro() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-5">
            <img
              src="/visual-phone.png"
              alt=""
              aria-hidden
              loading="lazy"
              className="w-full max-w-[340px] mx-auto animate-float-slow"
            />
          </Reveal>

          <Reveal className="lg:col-span-7" delay={120}>
            <div className="space-y-6 text-lg sm:text-xl text-ink/80 leading-relaxed">
              <p>
                Centinaia di utenti al giorno perlustrano il motore di ricerca per trovare la soluzione che potresti offrire tu.
              </p>
              <p>
                In un mondo sempre più digitalizzato, impostare efficientemente la propria impresa su Google è tanto importante quanto la maestria stessa nella propria professione.
              </p>
              <p>
                Se non ricevi abbastanza richieste è probabile che tu abbia un sito datato o scarsamente comunicante, oppure non compari nelle ricerche dei tuoi utenti.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
