import { useState, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import { Reveal } from './Reveal';

type Faq = { question: string; answer: ReactNode };

const faqs: Faq[] = [
  {
    question: "Utilizzi l'IA?",
    answer: (
      <>
        Sì, utilizzo l'IA per gli elementi di backend [le funzionalità che stanno dietro alla parte visibile al pubblico]. Titoli, testi, design sono fatti rigorosamente «a mano». Utilizzo l'IA per implementare i miei <em>contenuti</em>, portando risultati in giorni, non settimane.
      </>
    ),
  },
  {
    question: "Che differenza c'è fra Sponsorizzazioni e visibilità organica?",
    answer: (
      <>
        La visibilità organica [SEO] consiste nel risultato visibile quando clicchi «nascondi sponsorizzazioni». L'algoritmo di Google ti sceglie perché ti considera più rilevante. Le sponsorizzazioni ti fanno comparire primo finché paghi per ogni click sull'annuncio «sponsorizzato» da Google. Spariscono una volta smesso di pagare.
      </>
    ),
  },
  {
    question: 'Quanto ci vuole per apparire primi?',
    answer: 'Dai 30 ai 90 giorni organicamente, dopo 1/2 giorni con le sponsorizzazioni.',
  },
  {
    question: 'Devo sapere qualcosa di Marketing o Web Design?',
    answer:
      'No, mi occupo io di tutta la parte digitale. Sono a completa disponibilità per qualsiasi dubbio o chiarimento. Le uniche cose di cui ho bisogno sono un accesso sicuro al profilo Google sotto al quale è presente la tua attività, ed eventuale accesso al dominio o piattaforma di design per poter facilmente migliorare il sito Internet.',
  },
  {
    question: 'Lavori anche su Instagram e Facebook?',
    answer:
      'Sto studiando su come funziona Meta e Meta Ads, ma per ora opero solo sul sistema di Google.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-8 lg:px-8">
        <Reveal>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="w-full flex items-center justify-between gap-4 text-left"
            aria-expanded={open}
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-brand-navy leading-[1.1]">
              Domande Frequenti
            </h2>
            <span
              className={`flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-navy/5 text-brand-navy transition-transform duration-300 ${
                open ? 'rotate-180' : ''
              }`}
            >
              <ChevronDown className="w-6 h-6" />
            </span>
          </button>
        </Reveal>

        <div
          className={`grid transition-all duration-500 ease-out ${
            open ? 'grid-rows-[1fr] opacity-100 mt-10' : 'grid-rows-[0fr] opacity-0 mt-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-t border-brand-navy/8 pt-6 first:border-t-0 first:pt-0"
                >
                  <h3 className="font-display font-semibold text-brand-navy text-lg sm:text-xl mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-brand-gray leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
