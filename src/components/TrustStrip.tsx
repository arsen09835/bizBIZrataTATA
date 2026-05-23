import { Scissors, Hammer, Sparkles, Briefcase, Wrench, Coffee } from 'lucide-react';

const items = [
  { icon: Scissors, label: 'Studi tattoo' },
  { icon: Hammer, label: 'Artigiani' },
  { icon: Sparkles, label: 'Centri estetici' },
  { icon: Coffee, label: 'Locali e ristorazione' },
  { icon: Wrench, label: 'Tecnici e idraulici' },
  { icon: Briefcase, label: 'Professionisti' },
];

export function TrustStrip() {
  return (
    <section className="bg-brand-ivory border-y border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
          <p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-brand-navy/55 font-semibold whitespace-nowrap">
            Lavoriamo con
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 sm:gap-x-7">
            {items.map(({ icon: Icon, label }) => (
              <div key={label} className="inline-flex items-center gap-2 text-brand-navy/70">
                <Icon className="w-4 h-4 text-brand-terracotta" />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
