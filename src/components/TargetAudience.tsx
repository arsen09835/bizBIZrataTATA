const audiences = [
  'Attività locali',
  'Artigiani',
  'Studi tattoo',
  'Idraulici',
  'Centri estetici',
  'Imprese di pulizie',
  'Attività che lavorano con clienti del territorio',
];

export function TargetAudience() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-content mx-auto">
        <h2 className="text-2xl sm:text-3xl mb-8">
          Questo servizio è pensato per
        </h2>
        <div className="flex flex-wrap gap-3 mb-8">
          {audiences.map((audience) => (
            <span
              key={audience}
              className="px-4 py-2 bg-white border border-gray-200 rounded-full text-brand-gray text-sm"
            >
              {audience}
            </span>
          ))}
        </div>
        <p className="text-lg text-brand-gray">
          Lavoro con un numero limitato di attività per poter seguire ogni progetto con attenzione.
        </p>
      </div>
    </section>
  );
}
