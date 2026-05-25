const items = [
  'Personal Trainer',
  'Botteghe Artigiane',
  'Tecnici e Idraulici',
  'Giardinieri',
  'Compra Oro',
  'Studi Fotografici',
  'Posturologi',
  'Piccoli Studi Professionali',
  'Dentisti',
];

export function TrustStrip() {
  // Duplicate the list so the translateX(-50%) animation loops seamlessly
  const loop = [...items, ...items];

  return (
    <section className="bg-brand-ivory border-y border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="flex items-center gap-6 sm:gap-8">
          <p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-brand-navy/55 font-semibold whitespace-nowrap flex-shrink-0">
            Cerco
          </p>

          <div
            className="relative flex-1 overflow-hidden"
            style={{
              maskImage:
                'linear-gradient(to right, transparent 0, black 6%, black 94%, transparent 100%)',
              WebkitMaskImage:
                'linear-gradient(to right, transparent 0, black 6%, black 94%, transparent 100%)',
            }}
            aria-label="Categorie di attività con cui lavoriamo"
          >
            <div className="flex items-center gap-x-10 sm:gap-x-12 animate-marquee whitespace-nowrap w-max">
              {loop.map((item, i) => (
                <div
                  key={`${item}-${i}`}
                  className="inline-flex items-center gap-x-10 sm:gap-x-12 text-brand-navy/75"
                  aria-hidden={i >= items.length}
                >
                  <span className="text-sm font-medium tracking-tight">{item}</span>
                  <span className="w-1 h-1 rounded-full bg-brand-terracotta/60 flex-shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
