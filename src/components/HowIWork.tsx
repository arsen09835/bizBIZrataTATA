import { Send, Search, Phone, Handshake } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: Send,
    title: 'Contatto iniziale',
    description: 'Mi invii le informazioni della tua attività.',
  },
  {
    number: 2,
    icon: Search,
    title: 'Analisi',
    description: 'Guardo la presenza online della tua attività.',
  },
  {
    number: 3,
    icon: Phone,
    title: 'Confronto diretto',
    description: 'Ti ricontatto e ti spiego cosa vedo e cosa si può migliorare.',
  },
  {
    number: 4,
    icon: Handshake,
    title: 'Collaborazione',
    description: 'Se ha senso per entrambi, iniziamo a lavorare.',
  },
];

export function HowIWork() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-content mx-auto">
        <h2 className="text-2xl sm:text-3xl mb-12">
          Come funziona
        </h2>
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={step.number} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-blue text-white font-bold">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-px h-8 bg-gray-200 mx-auto mt-2" />
                )}
              </div>
              <div className="pt-2">
                <div className="flex items-center gap-3 mb-2">
                  <step.icon className="w-5 h-5 text-brand-green" />
                  <h3 className="text-lg font-semibold text-brand-blue">
                    {step.title}
                  </h3>
                </div>
                <p className="text-brand-gray">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
