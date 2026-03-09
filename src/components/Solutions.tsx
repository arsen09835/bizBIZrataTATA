import { User, Users, Building2 } from 'lucide-react';

const solutions = [
  {
    icon: User,
    title: 'Fare tutto da soli',
    description:
      'Serve tempo per studiare, testare e capire cosa funziona davvero. Per chi gestisce già un\'attività è difficile dedicarci le ore necessarie.',
  },
  {
    icon: Users,
    title: 'Assumere qualcuno',
    description:
      'Serve trovare la persona giusta, formarla e seguirla. Non sempre è semplice.',
  },
  {
    icon: Building2,
    title: 'Affidarsi a una grande agenzia',
    description:
      'Per molte attività locali significa diventare solo uno dei tanti clienti. Spesso il progetto viene gestito da persone diverse e il rapporto diventa distante.',
  },
];

export function Solutions() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl mb-12 text-center max-w-content mx-auto">
          Di solito le strade che si provano sono tre
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <div key={solution.title} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gray-100 mb-6">
                <solution.icon className="w-7 h-7 text-brand-blue" />
              </div>
              <h3 className="text-lg font-semibold text-brand-blue mb-4">
                {solution.title}
              </h3>
              <p className="text-brand-gray leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
