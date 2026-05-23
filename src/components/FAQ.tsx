import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Reveal } from './Reveal';

const faqs = [
  {
    question: 'Lavorate solo con attività di Firenze?',
    answer:
      'Principalmente sì. Lavoriamo con attività locali del territorio fiorentino, perché ci permette di costruire un rapporto diretto e di conoscere davvero il contesto in cui operate.',
  },
  {
    question: 'Realizzate anche siti web?',
    answer:
      'Sì. Il sito è uno dei tre pilastri del nostro lavoro, insieme alla visibilità organica su Google e alle campagne sponsorizzate.',
  },
  {
    question: 'Devo capire qualcosa di marketing o tecnologia?',
    answer:
      'No. Ci occupiamo noi della parte tecnica e strategica. Tu ti concentri sulla tua attività, noi ti spieghiamo in modo semplice cosa stiamo facendo e perché.',
  },
  {
    question: 'Come funziona il primo contatto?',
    answer:
      'Ci scrivi tramite il modulo, ci raccontiamo brevemente la tua attività e fissiamo una chiamata. Da lì capiamo se ha senso lavorare insieme.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-brand-ivory py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 sm:mb-14">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-terracotta font-semibold mb-3">
            Domande frequenti
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-brand-navy leading-[1.1]">
            Le risposte alle domande<br className="hidden sm:block" /> più comuni.
          </h2>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={index} delay={index * 60}>
                <div
                  className={`rounded-2xl bg-white border transition-all ${
                    isOpen ? 'border-brand-terracotta/30 shadow-card' : 'border-black/5 shadow-pill'
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
                        isOpen ? 'bg-brand-terracotta text-white rotate-45' : 'bg-brand-ivory text-brand-navy'
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
