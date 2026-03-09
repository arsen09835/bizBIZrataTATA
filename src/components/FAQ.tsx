import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Lavori solo con attività di Firenze?',
    answer: 'Principalmente sì, perché questo permette un rapporto diretto.',
  },
  {
    question: 'Fai anche siti web?',
    answer: 'Sì, quando serve per migliorare la presenza online.',
  },
  {
    question: 'Devo capire qualcosa di marketing?',
    answer: 'No, mi occupo io della parte tecnica.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-content mx-auto">
        <h2 className="text-2xl sm:text-3xl mb-12">
          Domande frequenti
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-brand-blue">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-brand-gray transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-brand-gray">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
