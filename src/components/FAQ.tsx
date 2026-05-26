import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Reveal } from './Reveal';

const faqs = [
  {
    question: 'Utilizzi l\'IA?',
    answer:
      'Sì, automatizzo elementi di backend e aspetti che richiederebbero settimane o mesi per essere completati da un umano. Design, titoli, annunci e tutti gli elementi che i tuoi clienti vedono sono 100% «vivi». Con nuovi aggiornamenti quasi giornalieri, utilizzarla dove serve fa la differenza.',
  },
  {
    question: 'Che differenza c\'è fra Google SEO e Google Ads?',
    answer:
      'Gli annunci su Google Ads ti mostrano in cima alle ricerche finché riesci a sostenere i costi per ogni click. Con il SEO organico vieni mostrato in cima perché l\'algoritmo di Google ritiene che tu sia il più competente. Tuttavia gli annunci sponsorizzati ricevono la precedenza sui risultati organici… ne parlerei per un\'ora di come sfruttarli al meglio.',
  },
  {
    question: 'Quanto tempo ci devo investire?',
    answer:
      'Poco — gestisco io. In caso di accordo avrei bisogno di 15 minuti del tuo tempo per avere un accesso sicuro al tuo dominio, profilo Google e profilo annunci. Per il resto ti sentirò regolarmente per comunicarti gli aggiornamenti.',
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
