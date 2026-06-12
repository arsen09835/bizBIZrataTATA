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

      {/* Background visuals — small, decorative, transparent PNGs */}
      <img
        src="/visual-arrow.png"
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute left-[4%] top-[18%] w-24 lg:w-32 rotate-[-6deg] opacity-90 hidden sm:block animate-float-slow"
      />
      <img
        src="/visual-seo.png"
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute right-[3%] top-[14%] w-28 lg:w-40 rotate-[4deg] opacity-90 hidden md:block animate-float-slower"
      />
      <img
        src="/visual-ads.png"
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute right-[10%] bottom-[8%] w-20 lg:w-28 rotate-[-3deg] opacity-90 hidden lg:block animate-float-slow"
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Eyebrow pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/8 bg-white shadow-sm text-xs font-medium text-ink/70 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-g-green" />
            Da Firenze · per attività locali
          </div>

          {/* H1 */}
          <h1 className="font-display font-bold text-ink tracking-tight leading-[1.08] text-4xl sm:text-5xl lg:text-6xl">
            Realizzo Siti Web
            <span className="block mt-1">
              Imposto SEO e Campagne Annunci su Google Ads.
            </span>
          </h1>

          {/* Paragraph */}
          <p className="mt-6 text-lg sm:text-xl text-ink/65 leading-relaxed max-w-2xl mx-auto">
            Ritieni di non ricevere abbastanza attenzione online? Incontriamoci e troverò la soluzione più adatta alle tue esigenze.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
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
