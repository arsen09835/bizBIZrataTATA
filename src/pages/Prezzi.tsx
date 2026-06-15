import {
  Globe,
  Layers,
  ShoppingBag,
  Search,
  Megaphone,
  Check,
  ShieldCheck,
  SlidersHorizontal,
  MapPin,
  ArrowRight,
} from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { FinalCTA } from '../components/FinalCTA';

const PHONE = 'tel:+393317600310';

/* ── SITI WEB (una tantum) ───────────────────────────── */
const siti = [
  {
    name: 'Sito Vetrina',
    icon: Globe,
    price: '€400–500',
    tagline: 'Il biglietto da visita digitale della tua attività.',
    features: [
      'Design professionale',
      'Fino a ~5 sezioni',
      'Ottimizzato per smartphone',
      'Collegamenti diretti: WhatsApp, telefono, mappa',
      'Configurazione base per Google',
    ],
    featured: false,
  },
  {
    name: 'Sito Tecnico',
    icon: Layers,
    price: '€500–800',
    tagline: 'Un sito completo.',
    features: [
      'Tutto del Sito Vetrina',
      'Più pagine e sezioni dedicate',
      'Funzionalità personalizzate (prenotazioni, gallerie…)',
      'Integrazioni',
      'Struttura ottimizzata per la SEO',
    ],
    featured: true,
    badge: 'Più richiesto',
  },
  {
    name: 'Sito E-commerce',
    icon: ShoppingBag,
    price: '€800–1200',
    tagline: 'Un negozio online pronto a vendere.',
    features: [
      'Catalogo prodotti e schede ottimizzate',
      'Carrello e pagamenti online',
      'Gestione ordini e spedizioni',
      'Area clienti',
      'Pronto a crescere con il tuo negozio',
    ],
    featured: false,
  },
];

/* ── VISIBILITÀ (mensile · min. 3 mesi) ──────────────── */
const servizi = [
  {
    name: 'SEO — Visibilità Organica',
    icon: Search,
    pricePrefix: '',
    price: '€600',
    suffix: '/mese',
    note: 'Impegno minimo 3 mesi',
    breakdown: null,
    features: [
      'Analisi del settore e dei concorrenti',
      'Ottimizzazione on-page e contenuti',
      'Calibrazione e monitoraggio mensile',
      'Report sui progressi',
    ],
  },
  {
    name: 'Sponsorizzazioni — Google Ads',
    icon: Megaphone,
    pricePrefix: 'da ',
    price: '€500',
    suffix: '/mese',
    note: 'Su 3 mesi · il 1° mese include il setup',
    breakdown: ['1° mese €700', '2° mese €600', '3° mese €500'],
    features: [
      'Creazione e configurazione campagne',
      'Targeting per la tua zona',
      'Gestione e ottimizzazione continua',
      'Report mensile sui risultati',
    ],
  },
];

/* ── PACCHETTI ───────────────────────────────────────── */
const pacchetti = [
  {
    name: 'Sito + SEO',
    icon: Search,
    price: '€1000',
    note: '€1500 con sito e-commerce',
    desc: 'Lancia il tuo nuovo sito e scala i risultati organici su Google, in un unico percorso.',
  },
  {
    name: 'Sito + Google Ads',
    icon: Megaphone,
    price: '€1100',
    note: 'il 1° mese, poi €600 e €500',
    desc: 'Sito nuovo e clienti da subito: le campagne ti portano in cima ai risultati mentre il sito convince.',
  },
];

const reassurance = [
  { icon: ShieldCheck, title: 'Nessun costo nascosto', desc: 'Quello che concordiamo è quello che paghi.' },
  { icon: SlidersHorizontal, title: 'Soluzioni su misura', desc: 'Il prezzo finale si modella sulle tue esigenze.' },
  { icon: MapPin, title: 'Referente unico a Firenze', desc: 'Segui tutto con me, in prima persona.' },
];

function SectionHead({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <Reveal>
      <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
        <div className="text-xs uppercase tracking-[0.15em] text-brand-blue font-semibold mb-3">{kicker}</div>
        <h2 className="font-display font-bold text-ink text-3xl sm:text-4xl tracking-tight leading-[1.1]">{title}</h2>
        {sub && <p className="mt-4 text-ink/60 text-lg leading-relaxed">{sub}</p>}
      </div>
    </Reveal>
  );
}

export function Prezzi() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-blue/[0.04] to-white">
        <div className="relative max-w-3xl mx-auto px-6 pt-16 pb-14 sm:pt-24 sm:pb-20 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/8 bg-white shadow-sm text-xs font-medium text-ink/70 mb-5">
              <span className="w-2 h-2 rounded-full bg-g-green" />
              Prezzi trasparenti
            </div>
            <h1 className="font-display font-bold text-ink tracking-tight leading-[1.08] text-[2.5rem] sm:text-5xl lg:text-6xl">
              Prezzi chiari, pensati per la tua attività.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-ink/65 leading-relaxed">
              Questi sono i punti di partenza. Dopo un primo confronto — gratuito e senza impegno — definiamo insieme la soluzione più adatta a te.
            </p>
          </Reveal>
        </div>
      </section>

      {/* REASSURANCE */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 pb-4 sm:pb-8">
          <div className="grid sm:grid-cols-3 gap-5">
            {reassurance.map((r, i) => {
              const Icon = r.icon;
              return (
                <Reveal key={r.title} delay={i * 80}>
                  <div className="flex items-start gap-3 rounded-xl border border-black/8 bg-white p-4 shadow-sm">
                    <div className="w-9 h-9 rounded-lg bg-brand-blue/8 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4.5 h-4.5 text-brand-blue" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-ink">{r.title}</div>
                      <div className="text-xs text-ink/55 mt-0.5 leading-relaxed">{r.desc}</div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SITI WEB */}
      <section id="siti-web" className="bg-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <SectionHead
            kicker="Siti Web"
            title="Il tuo sito, costruito per te"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {siti.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.name} delay={i * 90} className="h-full">
                  <div
                    className={`relative h-full flex flex-col rounded-2xl bg-white p-7 transition-all duration-300 hover:-translate-y-1 ${
                      s.featured
                        ? 'border-2 border-brand-blue shadow-[0_20px_50px_rgba(42,82,190,0.12)]'
                        : 'border border-black/8 shadow-sm hover:shadow-lg'
                    }`}
                  >
                    {s.featured && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-blue text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm whitespace-nowrap">
                        {s.badge}
                      </span>
                    )}
                    <div className="w-12 h-12 rounded-xl bg-brand-blue/8 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-brand-blue" />
                    </div>
                    <h3 className="font-display font-bold text-ink text-xl">{s.name}</h3>
                    <p className="mt-2 text-sm text-ink/60 leading-relaxed">{s.tagline}</p>
                    <div className="mt-5">
                      <span className="font-display font-bold text-ink text-4xl tracking-tight">{s.price}</span>
                      <p className="mt-1 text-xs text-ink/45">una tantum</p>
                    </div>
                    <ul className="mt-6 space-y-3 flex-1">
                      {s.features.map((f) => (
                        <li key={f} className="flex gap-2.5 text-sm text-ink/75">
                          <Check className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={PHONE}
                      className={`mt-7 inline-flex items-center justify-center w-full py-3 rounded-lg font-semibold text-sm transition-colors ${
                        s.featured
                          ? 'bg-brand-blue text-white hover:bg-brand-blue-dark'
                          : 'border border-black/10 text-ink hover:bg-black/[0.04]'
                      }`}
                    >
                      Richiedi un preventivo
                    </a>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* VISIBILITÀ */}
      <section id="visibilita" className="bg-[#F8F9FB] py-16 sm:py-24 border-y border-black/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <SectionHead
            kicker="Visibilità su Google"
            title="Fatti trovare, mese dopo mese"
          />
          <div className="grid sm:grid-cols-2 gap-6 items-stretch">
            {servizi.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.name} delay={i * 90} className="h-full">
                  <div className="h-full flex flex-col rounded-2xl bg-white p-7 border border-black/8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="w-12 h-12 rounded-xl bg-brand-blue/8 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-brand-blue" />
                    </div>
                    <h3 className="font-display font-bold text-ink text-xl">{s.name}</h3>
                    <div className="mt-5 flex items-baseline gap-1">
                      {s.pricePrefix && <span className="text-ink/50 text-lg font-medium">{s.pricePrefix}</span>}
                      <span className="font-display font-bold text-ink text-4xl tracking-tight">{s.price}</span>
                      <span className="text-ink/50 text-base font-medium">{s.suffix}</span>
                    </div>
                    <p className="mt-1 text-xs text-ink/45">{s.note}</p>
                    {s.breakdown && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {s.breakdown.map((b) => (
                          <span key={b} className="text-xs font-medium text-ink/70 bg-black/[0.04] rounded-full px-3 py-1">
                            {b}
                          </span>
                        ))}
                      </div>
                    )}
                    <ul className="mt-6 space-y-3 flex-1">
                      {s.features.map((f) => (
                        <li key={f} className="flex gap-2.5 text-sm text-ink/75">
                          <Check className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={PHONE}
                      className="mt-7 inline-flex items-center justify-center w-full py-3 rounded-lg font-semibold text-sm border border-black/10 text-ink hover:bg-black/[0.04] transition-colors"
                    >
                      Richiedi un preventivo
                    </a>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* PACCHETTI */}
      <section id="pacchetti" className="relative overflow-hidden bg-gradient-to-b from-brand-blue/[0.05] to-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <SectionHead
            kicker="Pacchetti completi"
            title="Sito + visibilità, in un solo percorso"
          />
          <div className="grid sm:grid-cols-2 gap-6 items-stretch">
            {pacchetti.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.name} delay={i * 90} className="h-full">
                  <div className="h-full flex flex-col rounded-2xl bg-white p-8 border border-black/8 shadow-[0_12px_40px_rgba(15,23,34,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(42,82,190,0.12)]">
                    <div className="flex items-center gap-2 mb-5">
                      <div className="w-10 h-10 rounded-lg bg-brand-blue/8 flex items-center justify-center">
                        <Globe className="w-5 h-5 text-brand-blue" />
                      </div>
                      <span className="text-ink/30 font-bold text-lg">+</span>
                      <div className="w-10 h-10 rounded-lg bg-brand-blue/8 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-brand-blue" />
                      </div>
                    </div>
                    <h3 className="font-display font-bold text-ink text-2xl">{p.name}</h3>
                    <p className="mt-2 text-sm text-ink/60 leading-relaxed flex-1">{p.desc}</p>
                    <div className="mt-6">
                      <span className="font-display font-bold text-ink text-4xl tracking-tight">{p.price}</span>
                      <p className="mt-1 text-xs text-ink/45">{p.note}</p>
                    </div>
                    <a
                      href={PHONE}
                      className="mt-7 inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg font-semibold text-sm bg-brand-blue text-white hover:bg-brand-blue-dark transition-colors"
                    >
                      Parliamone <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}

export default Prezzi;
