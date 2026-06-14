import { useState, useEffect } from 'react';
import { ChevronDown, Search, MapPin, Star } from 'lucide-react';
import { Reveal } from './Reveal';

const SERVICES = [
  'idraulico',
  'elettricista',
  'rigattiere',
  'dentista',
  'agenzia immobiliare',
  'ditta pulizie',
  'studio tattoo',
];

function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    let delay: number;
    if (!deleting && text === word) {
      delay = 1500; // hold when fully typed
    } else if (deleting && text === '') {
      delay = 250; // brief gap before next word
    } else {
      delay = deleting ? 45 : 90;
    }

    const t = window.setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === '') {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText((prev) =>
          deleting ? word.slice(0, prev.length - 1) : word.slice(0, prev.length + 1)
        );
      }
    }, delay);

    return () => window.clearTimeout(t);
  }, [text, deleting, index, words]);

  return text;
}

function SearchVisual() {
  const typed = useTypewriter(SERVICES);

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div
        aria-hidden
        className="absolute -inset-6 bg-gradient-to-tr from-brand-blue/[0.06] via-transparent to-g-green/[0.06] blur-2xl rounded-[2.5rem]"
      />
      <div className="relative rounded-2xl border border-black/8 bg-white shadow-[0_24px_60px_rgba(15,23,34,0.10)] p-5 sm:p-6">
        {/* Search bar */}
        <div className="flex items-center gap-3 rounded-full border border-black/10 bg-white shadow-sm px-4 py-3">
          <Search className="w-5 h-5 text-ink/40 flex-shrink-0" />
          <div className="flex-1 min-w-0 text-[15px] text-ink/80 truncate">
            {typed}
            <span className="inline-block w-[2px] h-4 align-middle bg-brand-blue mx-0.5 animate-pulse" />
            {' a Firenze'}
          </div>
          <div className="grid grid-cols-2 gap-0.5 flex-shrink-0" aria-hidden>
            <span className="w-1.5 h-1.5 rounded-full bg-g-blue" />
            <span className="w-1.5 h-1.5 rounded-full bg-g-red" />
            <span className="w-1.5 h-1.5 rounded-full bg-g-yellow" />
            <span className="w-1.5 h-1.5 rounded-full bg-g-green" />
          </div>
        </div>

        {/* Results */}
        <div className="mt-5 space-y-3">
          {/* Your business — first result */}
          <div className="relative rounded-xl border border-brand-blue/30 bg-brand-blue/[0.04] ring-1 ring-brand-blue/10 p-3.5">
            <span className="absolute -top-2.5 right-3 bg-white border border-g-green/30 text-g-green text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-sm">
              1° risultato
            </span>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white border border-black/8 shadow-sm flex items-center justify-center flex-shrink-0">
                <MapPin className="w-[18px] h-[18px] text-g-blue" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-semibold text-ink">La tua attività</div>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="flex items-center gap-0.5">
                    {[0, 1, 2, 3, 4].map((n) => (
                      <Star key={n} className="w-3 h-3 text-g-yellow fill-current" />
                    ))}
                  </span>
                  <span className="text-[11px] text-ink/50">5,0 · Firenze</span>
                </div>
              </div>
            </div>
          </div>

          {/* Faded competitors */}
          {[0, 1].map((i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-xl border border-black/5 bg-white p-3.5 opacity-60"
            >
              <div className="w-9 h-9 rounded-lg bg-black/[0.05] flex-shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="h-2.5 rounded-full bg-black/10" style={{ width: i === 0 ? '52%' : '44%' }} />
                <div className="h-2 rounded-full bg-black/[0.06]" style={{ width: i === 0 ? '74%' : '66%' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function HomeIntro() {
  return (
    <>
      {/* Scroll cue */}
      <div className="bg-white pt-16 sm:pt-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-center">
          <ChevronDown
            aria-hidden
            strokeWidth={2.5}
            className="w-10 h-10 text-brand-blue/60 animate-bounce-soft"
          />
        </div>
      </div>

      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <Reveal className="mb-12 lg:mb-0">
              <SearchVisual />
            </Reveal>

            <Reveal delay={120}>
              <div className="space-y-6 text-lg sm:text-xl text-ink/80 leading-relaxed">
                <p>
                  Centinaia di utenti al giorno perlustrano Google per trovare la soluzione che potresti offrire tu.
                </p>
                <p>
                  In un mondo sempre più digitalizzato, impostare efficientemente la propria impresa online è tanto importante quanto la maestria stessa nella propria professione.
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
