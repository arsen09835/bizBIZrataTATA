import { Link } from 'react-router-dom';
import { ArrowRight, Check, type LucideIcon } from 'lucide-react';
import { Reveal } from './Reveal';

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type ServicePageLayoutProps = {
  eyebrow: string;
  title: string;
  intro: string;
  features: Feature[];
  includes: string[];
  closing: string;
};

export function ServicePageLayout({
  eyebrow,
  title,
  intro,
  features,
  includes,
  closing,
}: ServicePageLayoutProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-navy pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full bg-brand-terracotta/20 blur-3xl" />
          <div className="absolute -bottom-32 left-0 w-[400px] h-[400px] rounded-full bg-brand-navy-dark/40 blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.18em] text-brand-terracotta-soft font-semibold mb-4">
              {eyebrow}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] mb-6 max-w-3xl">
              {title}
            </h1>
            <p className="text-lg sm:text-xl text-white/75 leading-relaxed max-w-2xl mb-10">
              {intro}
            </p>
            <Link
              to="/contatto"
              className="inline-flex items-center gap-2 bg-white text-brand-navy font-semibold px-6 py-3.5 rounded-full hover:bg-brand-ivory transition-colors shadow-glow"
            >
              Parliamo della tua attività
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl mb-14">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-terracotta font-semibold mb-3">
              Cosa otteniamo
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-brand-navy leading-[1.1]">
              Come ti aiutiamo nel concreto.
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <div className="h-full p-7 rounded-2xl bg-white border border-black/5 shadow-card">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-brand-terracotta/10 mb-5">
                    <f.icon className="w-5 h-5 text-brand-terracotta" />
                  </div>
                  <h3 className="font-display text-lg text-brand-navy mb-2">{f.title}</h3>
                  <p className="text-brand-gray leading-relaxed text-sm">{f.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Includes */}
      <section className="bg-brand-ivory py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <Reveal className="lg:col-span-5">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-terracotta font-semibold mb-3">
                Cosa includiamo
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-brand-navy leading-[1.1] mb-5">
                Tutto quello che serve, niente di superfluo.
              </h2>
              <p className="text-brand-gray leading-relaxed">{closing}</p>
            </Reveal>

            <Reveal className="lg:col-span-7" delay={120}>
              <ul className="bg-white rounded-2xl border border-black/5 shadow-card divide-y divide-black/5 overflow-hidden">
                {includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 px-6 py-4">
                    <span className="mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand-terracotta/12 flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-brand-terracotta" />
                    </span>
                    <span className="text-brand-navy/90 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 right-1/4 w-[500px] h-[500px] rounded-full bg-brand-terracotta/20 blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl text-white leading-[1.1] mb-5">
              Vuoi capire se fa per te?
            </h2>
            <p className="text-lg text-white/75 leading-relaxed mb-8">
              Raccontaci la tua attività. Ti diciamo se ha senso lavorare insieme.
            </p>
            <Link
              to="/contatto"
              className="inline-flex items-center gap-2 bg-white text-brand-navy font-semibold px-7 py-4 rounded-full hover:bg-brand-ivory hover:scale-[1.02] transition-all shadow-glow"
            >
              Richiedi una consulenza
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
