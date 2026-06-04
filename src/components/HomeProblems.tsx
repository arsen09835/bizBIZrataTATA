import { Reveal } from './Reveal';

const items = [
  'Siti internet datati o poco comunicanti.',
  'Pagina Google [e il relativo SEO] che rimane in fondo alle ricerche organiche.',
  'Annunci che non «catturano» i clienti giusti, consumando denaro per ogni clic.',
];

export function HomeProblems() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-lg sm:text-xl text-brand-navy/85 leading-relaxed mb-10">
            È sorprendentemente frequente incontrare professionisti e proprietà di attività «buone» non ricevere i clienti che normalmente meriterebbero via Google per via di più fra questi motivi:
          </p>
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span aria-hidden className="mt-2.5 w-1.5 h-1.5 rounded-full bg-brand-terracotta flex-shrink-0" />
                <span className="text-brand-navy/85 text-base sm:text-lg leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
