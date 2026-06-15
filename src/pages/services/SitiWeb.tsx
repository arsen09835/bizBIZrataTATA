import { useState } from 'react';
import { Store, PhoneCall, ShoppingBag } from 'lucide-react';
import { Reveal } from '../../components/Reveal';
import { Divider } from '../../components/Divider';
import { FinalCTA } from '../../components/FinalCTA';
import { Button } from '../../components/Button';
import { sitiHeroLqip } from '../../sitiHeroLqip';

const siteTypes = [
  {
    icon: Store,
    title: 'Sito vetrina',
    description:
      'Presenta la tua attività nella sua unicità e nei suoi valori. Ideale per botteghe artigiane o per chi non si avvale di produzione di massa e lavora con il passaggio di persone.',
  },
  {
    icon: PhoneCall,
    title: 'Sito lead',
    description:
      'Presenta il tuo servizio in maniera convincente e professionale, con l\'obiettivo di generare chiamate di interesse. Ideale per chi ha una clinica privata o per tecnici che eseguono appuntamenti a domicilio.',
  },
  {
    icon: ShoppingBag,
    title: 'Sito eCommerce',
    description: 'Pensato per chi vuole massimizzare ordini e acquisti online.',
  },
];

function LaptopFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Lid: dark bezel + screen */}
      <div className="w-full rounded-t-xl rounded-b-md bg-[#0F1722] p-2 shadow-[0_24px_60px_rgba(15,23,34,0.18)]">
        {/* Camera */}
        <div className="flex justify-center pb-1">
          <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-white/20" />
        </div>
        {/* Screen — bottom corners only slightly rounded so it seats on the hinge */}
        <div className="rounded-t-md rounded-b-sm overflow-hidden bg-white aspect-[16/10]">
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
      {/* Base / hinge deck — centered on the same axis as the screen */}
      <div className="relative h-3.5 w-[112%] rounded-b-xl bg-[#C2C5CC] shadow-[0_8px_18px_rgba(15,23,34,0.12)]">
        {/* Lid groove notch, centered */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1 w-10 rounded-b-md bg-[#A6AAB3]" />
      </div>
    </div>
  );
}

function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-full">
      <div className="relative mx-auto rounded-[34px] bg-[#0F1722] p-2 shadow-[0_24px_60px_rgba(15,23,34,0.18)]">
        {/* Dynamic island */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-10 h-5 w-20 rounded-full bg-black" />
        {/* Screen */}
        <div className="rounded-[26px] overflow-hidden bg-white aspect-[9/19.5]">
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}

export function SitiWeb() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[58vh] flex items-center bg-brand-ink">
        <div className="absolute inset-0 overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 bg-cover bg-center scale-105 blur-xl"
            style={{ backgroundImage: `url(${sitiHeroLqip})` }}
          />
          <img
            src="/siti-hero.jpg"
            srcSet="/siti-hero-960.jpg 960w, /siti-hero-1440.jpg 1440w, /siti-hero.jpg 1920w"
            sizes="100vw"
            alt=""
            aria-hidden
            fetchPriority="high"
            loading="eager"
            decoding="async"
            onLoad={() => setLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover object-[center_25%] transition-opacity duration-700 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent" />
        </div>

        <div className="relative max-w-6xl mx-auto px-8 lg:px-4 pt-32 pb-20 sm:pt-40 sm:pb-24 w-full">
          <Reveal>
            <h1 className="font-display font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-10 max-w-3xl">
              Siti Web che catturano il cliente e lo invogliano a cercarti.
            </h1>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="white" href="tel:+393317600310">
                Contattami
              </Button>
              <Button variant="white" to="/preventivo">
                Richiedi un preventivo
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 2 — intro */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-[60rem] mx-auto px-8 lg:px-8">
          <Reveal>
            <p className="text-lg sm:text-xl text-brand-navy/85 leading-relaxed">
              Il sito web è il motore del tuo business online, dove i visitatori decidono se contattare te o uscire e passare al risultato successivo.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Section 2b — Perché me? */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-[60rem] mx-auto px-8 lg:px-8">
          <Reveal className="mb-8">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-brand-navy leading-[1.1]">
              Perché me?
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-lg sm:text-xl text-brand-navy/85 leading-relaxed">
              Curo ogni progetto con passione sartoriale e attenzione maniacale per i dettagli. Il sito viene realizzato tenendo conto del tuo valore e del mercato locale, uniti alle migliori tecnologie, garantendoti quel passo in più che i tuoi concorrenti non hanno.
            </p>
          </Reveal>
        </div>
      </section>

      <Divider />

      {/* Section 3 — Un Design adatto ad ogni dispositivo */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-8 lg:px-8">
          <Reveal className="mb-12">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-brand-navy leading-[1.1]">
              Un Design adatto ad ogni dispositivo.
            </h2>
          </Reveal>

          {/* Device mockup row */}
          <Reveal>
            <div className="flex flex-col lg:flex-row lg:items-center justify-center gap-10 lg:gap-14">
              <div className="w-full max-w-[640px] lg:flex-1">
                <LaptopFrame src="/device-desktop.png" alt="Anteprima del sito su computer" />
              </div>
              <div className="w-[200px] sm:w-[220px] mx-auto lg:mx-0 lg:flex-none">
                <PhoneFrame src="/device-mobile.jpg" alt="Anteprima del sito su smartphone" />
              </div>
            </div>
          </Reveal>

          {/* Two-column: donut + caption (left) · paragraph (right) */}
          <Reveal className="mt-16" delay={120}>
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-12 items-center">
              {/* LEFT — donut (transparent, no card chrome) + caption below */}
              <div className="flex flex-col">
                <img
                  src="/container_transparent.png"
                  alt="Diagramma analisi visite per dispositivi"
                  className="w-full max-w-[358px] mx-auto lg:mx-0 h-auto block"
                />
                <p className="mt-6 text-sm italic text-brand-gray text-center lg:text-left max-w-[358px] mx-auto lg:mx-0">
                  Dati sul progetto corrente{' '}
                  <a
                    href="https://brunoantichita.it/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-terracotta underline underline-offset-4 decoration-brand-terracotta/40 hover:decoration-brand-terracotta transition-colors not-italic font-medium"
                  >
                    https://brunoantichita.it/
                  </a>
                </p>
              </div>

              {/* RIGHT — paragraph */}
              <div>
                <p className="text-lg sm:text-xl text-brand-navy/85 leading-relaxed">
                  La maggior parte degli utenti ti cercheranno sul telefono. Per questo ogni design è costruito per calzare a pennello su ogni dispositivo, garantendo un'esperienza fluida e impeccabile per ogni potenziale cliente.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Divider />

      {/* Section 4 — Quali siti web realizzo (kept) + new paragraph */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-8 lg:px-8">
          <Reveal className="mb-14">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-terracotta font-semibold mb-3">
              Tipologie
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-brand-navy leading-[1.1]">
              Quali siti web realizzo.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {siteTypes.map((t, i) => (
              <Reveal key={t.title} delay={i * 80}>
                <div className="h-full p-7 lg:p-8 rounded-2xl bg-white border border-black/8 shadow-card">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-terracotta/10 mb-6">
                    <t.icon className="w-6 h-6 text-brand-terracotta" />
                  </div>
                  <h3 className="font-display text-xl text-brand-navy mb-3">{t.title}</h3>
                  <p className="text-brand-gray leading-relaxed">{t.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-brand-navy/85 leading-relaxed text-center">
              Se hai un sito creato da un'agenzia e nasce il bisogno di apportare modifiche per una migliore coordinazione col Profilo oppure Annunci, mi metterò d'accordo con l'agenzia di riferimento, effettuando il restyling gratuitamente, se già stiamo lavorando sul SEO oppure Campagne di annunci.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Section 5 — Final CTA (same as home) */}
      <FinalCTA />
    </>
  );
}
