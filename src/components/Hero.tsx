import { Link } from 'react-router-dom';
import { ArrowRight, Star, TrendingUp, MapPin, Globe } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden hero-placeholder">
      {/* Subtle warm glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-32 w-[600px] h-[600px] rounded-full bg-brand-terracotta/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 w-[500px] h-[500px] rounded-full bg-brand-navy-dark/40 blur-3xl" />
      </div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-ink/40 via-transparent to-brand-ink/60" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-32 lg:pb-24 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* LEFT: copy */}
          <div className="lg:col-span-6 text-left animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-terracotta animate-pulse" />
              <span className="text-xs font-medium text-white/85 tracking-wide">Studio digitale · Firenze</span>
            </div>

            <h1 className="font-display font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-6">
              Aiuto aziende di Firenze a <span className="text-brand-terracotta-soft">crescere online</span> sul territorio.
            </h1>

            <ul className="space-y-3 mb-10 max-w-xl">
              {[
                'Realizzo Siti Web professionali e su misura.',
                'Miglioro la tua visibilità su Google.',
                'Imposto e gestisco campagne sponsorizzate mirate a presentarti lì dove serve.',
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-white/85 text-base sm:text-lg leading-relaxed"
                >
                  <span
                    aria-hidden
                    className="mt-2 sm:mt-2.5 inline-block w-1.5 h-1.5 rounded-full bg-brand-terracotta-soft flex-shrink-0"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to="/contatto"
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-navy font-semibold text-base px-6 py-3.5 rounded-full hover:bg-white/95 hover:scale-[1.02] transition-all shadow-glow"
              >
                Vediamoci!
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#servizi"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white font-medium text-base px-6 py-3.5 rounded-full border border-white/20 hover:bg-white/15 transition-all"
              >
                Guarda i servizi
              </a>
            </div>
          </div>

          {/* RIGHT: floating mockup cards */}
          <div className="lg:col-span-6 relative h-[380px] sm:h-[460px] lg:h-[520px] hidden sm:block">
            {/* Site preview card */}
            <div className="absolute top-0 right-0 w-[78%] bg-white rounded-2xl shadow-card-hover overflow-hidden animate-float-slow">
              <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-black/5 bg-brand-ivory/60">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-terracotta/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-brand-terracotta/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-brand-navy/20" />
                <div className="ml-3 flex-1 h-5 rounded-md bg-brand-navy/5" />
              </div>
              <div className="p-4 sm:p-5">
                <div className="h-3 w-2/3 rounded bg-brand-navy/10 mb-2.5" />
                <div className="h-2.5 w-full rounded bg-brand-navy/5 mb-1.5" />
                <div className="h-2.5 w-5/6 rounded bg-brand-navy/5 mb-4" />
                <div className="grid grid-cols-3 gap-2">
                  <div className="aspect-square rounded-lg bg-brand-terracotta/15" />
                  <div className="aspect-square rounded-lg bg-brand-navy/8" />
                  <div className="aspect-square rounded-lg bg-brand-terracotta/10" />
                </div>
              </div>
            </div>

            {/* Visibility / map card */}
            <div className="absolute top-[28%] left-0 w-[58%] bg-white rounded-2xl shadow-card-hover p-4 sm:p-5 animate-float-slower">
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-terracotta/12">
                  <MapPin className="w-5 h-5 text-brand-terracotta" />
                </div>
                <div className="flex-1">
                  <div className="text-[11px] uppercase tracking-wider text-brand-gray font-semibold">Visibilità Google</div>
                  <div className="font-display font-bold text-brand-navy text-lg leading-tight">1ª posizione</div>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-1.5">
                <span className="text-[11px] text-brand-gray">Firenze · estetista</span>
              </div>
            </div>

            {/* Reviews card */}
            <div className="absolute bottom-4 right-[6%] w-[52%] bg-white rounded-2xl shadow-card-hover p-4 sm:p-5 animate-float-slow">
              <div className="flex items-center gap-1.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-terracotta text-brand-terracotta" />
                ))}
              </div>
              <div className="font-display font-bold text-brand-navy text-2xl leading-none">4,9</div>
              <div className="text-xs text-brand-gray mt-1">128 recensioni Google</div>
            </div>

            {/* Analytics card */}
            <div className="absolute bottom-0 left-[8%] w-[44%] bg-brand-navy rounded-2xl shadow-card-hover p-4 sm:p-5 animate-float-slower">
              <div className="flex items-center justify-between mb-3">
                <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/10">
                  <TrendingUp className="w-4 h-4 text-brand-terracotta-soft" />
                </div>
                <span className="text-xs text-white/60">30 gg</span>
              </div>
              <div className="font-display font-bold text-white text-xl leading-none">+184%</div>
              <div className="text-[11px] text-white/60 mt-1">Contatti dal sito</div>
              <svg viewBox="0 0 100 28" className="w-full mt-3" preserveAspectRatio="none">
                <path
                  d="M0 22 L15 18 L30 20 L45 12 L60 14 L75 6 L100 2"
                  fill="none"
                  stroke="#E0A07A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Tiny floating chip */}
            <div className="absolute top-[10%] left-[18%] inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur shadow-pill animate-float-slow">
              <Globe className="w-3.5 h-3.5 text-brand-terracotta" />
              <span className="text-[11px] font-semibold text-brand-navy">rankmybizup.com</span>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-white/60">
          <span className="text-[10px] uppercase tracking-[0.2em]">Scorri</span>
          <div className="w-px h-8 bg-white/30 animate-bounce-soft" />
        </div>
      </div>
    </section>
  );
}
