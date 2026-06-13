import { Globe, Search, Megaphone, TrendingUp, BarChart3 } from 'lucide-react';

export function NewHero() {
  const handleScrollToCosaTiServe = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('cosa-ti-serve')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle radial tint */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(26,86,219,0.06) 0%, transparent 60%)',
        }}
      />

      {/* Floating icon visuals — no background, transparent */}
      <div
        aria-hidden
        className="absolute left-[4%] top-[20%] hidden sm:flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-white/80 backdrop-blur-sm border border-black/8 shadow-card rotate-[-6deg] animate-float-slow"
      >
        <Globe className="w-7 h-7 lg:w-8 lg:h-8 text-brand-blue" />
      </div>
      <div
        aria-hidden
        className="absolute right-[3%] top-[14%] hidden md:flex items-center justify-center w-18 h-18 lg:w-24 lg:h-24 rounded-2xl bg-white/80 backdrop-blur-sm border border-black/8 shadow-card rotate-[4deg] animate-float-slower"
      >
        <Search className="w-8 h-8 lg:w-10 lg:h-10 text-brand-blue" />
      </div>
      <div
        aria-hidden
        className="absolute right-[10%] bottom-[10%] hidden lg:flex items-center justify-center w-14 h-14 lg:w-18 lg:h-18 rounded-2xl bg-white/80 backdrop-blur-sm border border-black/8 shadow-card rotate-[-3deg] animate-float-slow"
      >
        <Megaphone className="w-6 h-6 lg:w-8 lg:h-8 text-brand-blue" />
      </div>
      <div
        aria-hidden
        className="absolute left-[12%] bottom-[14%] hidden lg:flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 rounded-2xl bg-white/80 backdrop-blur-sm border border-black/8 shadow-card rotate-[3deg] animate-float-slower"
      >
        <TrendingUp className="w-5 h-5 lg:w-7 lg:h-7 text-g-green" />
      </div>
      <div
        aria-hidden
        className="absolute right-[22%] top-[8%] hidden xl:flex items-center justify-center w-12 h-12 rounded-2xl bg-white/80 backdrop-blur-sm border border-black/8 shadow-card rotate-[2deg] animate-float-slow"
      >
        <BarChart3 className="w-5 h-5 text-brand-brown" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 pt-4 pb-12 sm:pt-28 sm:pb-32 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Eyebrow pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/8 bg-white shadow-sm text-xs font-medium text-ink/70 mb-4 sm:mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-g-green" />
            Da Firenze · per attività locali
          </div>

          {/* H1 */}
          <h1 className="font-display font-bold text-ink tracking-tight leading-[1.08] text-3xl sm:text-5xl lg:text-6xl">
            Realizzo Siti Web.
            <span className="block mt-1">
              Imposto SEO e Campagne Annunci su Google Ads.
            </span>
          </h1>

          {/* Paragraph */}
          <p className="mt-4 sm:mt-6 text-base sm:text-xl text-ink/65 leading-relaxed max-w-2xl mx-auto">
            Ritieni di non ricevere abbastanza attenzione online? Incontriamoci e troverò la soluzione più adatta alle tue esigenze.
          </p>

          {/* Buttons */}
          <div className="mt-5 sm:mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#cosa-ti-serve"
              onClick={handleScrollToCosaTiServe}
              className="bg-brand-blue text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-brand-blue-dark transition shadow-[0_8px_24px_rgba(26,86,219,0.25)]"
            >
              Scopri i Servizi
            </a>
            <a
              href="tel:+393317600310"
              className="border border-black/12 bg-white text-ink font-semibold px-7 py-3.5 rounded-lg hover:border-brand-brown hover:text-brand-brown transition"
            >
              Contattami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
