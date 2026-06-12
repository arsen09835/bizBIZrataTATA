import { Reveal } from './Reveal';

export function HomeIntro() {
  return (
    <>
      {/* Divider */}
      <div className="bg-white pt-16 sm:pt-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-center gap-4">
          <span aria-hidden className="flex-1 h-px bg-ink/8" />
          <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-brand-blue/50" />
          <span aria-hidden className="flex-1 h-px bg-ink/8" />
        </div>
      </div>

      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flow-root lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
            <Reveal className="float-left mr-4 mb-2 w-28 sm:w-32 lg:float-none lg:mr-0 lg:mb-0 lg:w-auto lg:col-span-5 lg:flex lg:justify-center">
              <img
                src="/phone_google.svg"
                alt=""
                aria-hidden
                loading="lazy"
                className="w-full h-auto lg:w-auto lg:max-h-[200px] animate-float-slow"
                style={{ mixBlendMode: 'multiply' }}
              />
            </Reveal>

            <Reveal className="lg:col-span-7" delay={120}>
              <div className="space-y-6 text-lg sm:text-xl text-ink/80 leading-relaxed max-w-2xl">
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
    </>
  );
}
