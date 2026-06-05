import { useState, type ReactNode } from 'react';
import { Plus } from 'lucide-react';
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
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <Reveal className="mb-12 sm:mb-14">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-brand-navy leading-[1.1]">
            Domande Frequenti
          </h2>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={index} delay={index * 60}>
                <div
                  className={`rounded-2xl bg-white border transition-all ${
                    isOpen ? 'border-brand-terracotta/30 shadow-card' : 'border-brand-navy/8 shadow-pill'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-semibold text-brand-navy text-base sm:text-lg">
                      {faq.question}
                    </span>
                    <span
                      className={`flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full transition-all ${
                        isOpen ? 'bg-brand-terracotta text-white rotate-45' : 'bg-brand-navy/5 text-brand-navy'
                      }`}
                    >
                      <Plus className="w-4 h-4" />
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-brand-gray leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
