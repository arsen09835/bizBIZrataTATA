import { useState } from 'react';
import { Eye, Gift, Infinity as InfinityIcon, type LucideIcon } from 'lucide-react';
import { Reveal } from '../../components/Reveal';
import { Divider } from '../../components/Divider';
import { FinalCTA } from '../../components/FinalCTA';
import { seoHeroLqip } from '../../seoHeroLqip';

type Pro = { icon: LucideIcon; title: string; description: string };

const pros: Pro[] = [
  {
    icon: Eye,
    title: 'Più utenti ti vedono, più utenti ti scelgono',
    description:
      'I primi 3 risultati ritengono il 75 percento del traffico online. Posizionarsi bene significa ricevere una fetta di quel traffico.',
  },
  {
    icon: Gift,
    title: 'Completamente Gratis',
    description:
      'A differenza degli annunci sponsorizzati dove paghi per ogni click, qui non hai bisogno di alcun budget. Google decide che sei più rilevante di altri, per questo ti mette in cima.',
  },
  {
    icon: InfinityIcon,
    title: 'Strategia a lungo termine',
    description:
      'Una volta raggiunti i risultati sperati, resti fra i primi per anni, senza spese annuali o costi aggiuntivi [se ti affidi a me].',
  },
];

const beforeStats = [
  { label: 'Posizione media', value: '86' },
  { label: 'Quota di mercato', value: '1%' },
  { label: 'Click mensili', value: '5' },
  { label: 'Clienti mensili', value: '1–2' },
];

const afterStats = [
  { label: 'Posizione media', value: '2–3' },
  { label: 'Quota di mercato', value: '75%' },
  { label: 'Click mensili', value: '200+' },
  { label: 'Clienti mensili', value: '25–40' },
];

function PrimaDopo() {
  const [tab, setTab] = useState<'before' | 'after'>('before');
  const isAfter = tab === 'after';
  const stats = isAfter ? afterStats : beforeStats;
  const mapSrc = isAfter ? '/map-after.png' : '/map-before.png';
  const badgeBg = isAfter ? 'bg-emerald-600' : 'bg-red-700';

  return (
    <div className="rounded-3xl bg-white border border-brand-navy/8 shadow-card p-5 sm:p-7 lg:p-8">
      <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        <div className="lg:col-span-5 flex flex-col">
          <div className="inline-flex p-1 rounded-xl bg-brand-navy/5 mb-5 self-start">
            {(['before', 'after'] as const).map((t) => {
              const active = tab === t;
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTab(t)}
                  aria-pressed={active}
                  className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                    active ? 'bg-white shadow-pill text-brand-navy' : 'text-brand-navy/55 hover:text-brand-navy'
                  }`}
                >
                  {t === 'before' ? 'Prima' : 'Dopo'}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-brand-navy/5 mb-5">
            <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-brand-navy text-white font-display font-bold text-base flex-shrink-0">
              R
            </div>
            <div className="min-w-0">
              <p className="font-display font-semibold text-brand-navy leading-tight">La tua attività</p>
              <p className="text-sm text-brand-gray truncate">Via Esempio 123, 50123 Firenze</p>
            </div>
          </div>

          <div className="space-y-3 flex-1">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center justify-between gap-4 px-5 py-3 rounded-xl bg-brand-navy/5">
                <span className="text-sm text-brand-navy/85">{s.label}</span>
                <span className={`inline-flex items-center justify-center min-w-[3.25rem] px-3 py-1 rounded-md text-sm font-display font-bold text-white transition-colors ${badgeBg}`}>
                  {s.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="relative rounded-2xl overflow-hidden bg-brand-navy/5 aspect-[4/3] lg:aspect-auto lg:h-full">
            <img
              key={mapSrc}
              src={mapSrc}
              alt={isAfter ? "Posizionamenti dopo l'ottimizzazione SEO" : "Posizionamenti prima dell'ottimizzazione SEO"}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Brand-styled location pin used in the SEO intro section.
 * Original design in our palette (navy / ivory / terracotta) — not a
 * reproduction of any specific brand mark.
 */
function LocationPin({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const isDark = variant === 'dark';
  const gradId = isDark ? 'seoPinGradDark' : 'seoPinGradLight';
  return (
    <div className="relative w-full max-w-[200px] mx-auto animate-float-slow">
      <svg
        viewBox="0 0 220 280"
        className="w-full h-auto"
        style={{ filter: 'drop-shadow(0 24px 32px rgba(30,53,87,0.22))' }}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={isDark ? '#3a6090' : '#2A4670'} />
            <stop offset="100%" stopColor={isDark ? '#2A4670' : '#1E3557'} />
          </linearGradient>
        </defs>
        {/* Decorative outer ring */}
        {isDark ? (
          <circle cx="110" cy="105" r="100" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" strokeDasharray="2 6" />
        ) : (
          <circle cx="110" cy="105" r="100" fill="none" stroke="#C9784A" strokeWidth="1.2" strokeDasharray="2 6" strokeOpacity="0.35" />
        )}
        {/* Pin body */}
        <path
          d="M110 8 C55 8, 16 47, 16 102 C16 178, 110 268, 110 268 C110 268, 204 178, 204 102 C204 47, 165 8, 110 8 Z"
          fill={`url(#${gradId})`}
        />
        {/* Inner ivory */}
        <circle cx="110" cy="100" r="36" fill="#F7F4EF" />
        {/* Inner terracotta dot */}
        <circle cx="110" cy="100" r="15" fill="#C9784A" />
      </svg>
    </div>
  );
}

export function VisibilitaOrganica() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* Hero — dark photo bg + card_seo on the right */}
      <section className="relative min-h-[78vh] flex items-center bg-brand-ink">
        <div className="absolute inset-0 overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 bg-cover bg-center scale-105 blur-xl"
            style={{ backgroundImage: `url(${seoHeroLqip})` }}
          />
          <img
            src="/seo-hero.jpg"
            srcSet="/seo-hero-960.jpg 960w, /seo-hero-1440.jpg 1440w, /seo-hero.jpg 1920w"
            sizes="100vw"
            alt=""
            aria-hidden
            fetchPriority="high"
            loading="eager"
            decoding="async"
            onLoad={() => setLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20" />
        </div>

        <div className="relative max-w-6xl mx-auto px-8 lg:px-8 pt-32 pb-20 sm:pt-40 sm:pb-24 w-full">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <Reveal className="lg:col-span-7">
              <h1 className="font-display font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-8 max-w-4xl">
                Più Traffico.<br />
                Più Clienti.<br />
                Risultati garantiti entro 90 giorni.
              </h1>
              <p className="text-lg sm:text-xl text-white/85 leading-relaxed max-w-3xl">
                Il tuo profilo sarà fra i primi 3 risultati nei risultati di ricerca dei tuoi clienti.
              </p>
            </Reveal>

            <Reveal className="lg:col-span-5 hidden lg:block" delay={120}>
              <LocationPin variant="dark" />
            </Reveal>
          </div>
        </div>
      </section>

      <Divider />

      {/* Intro — text on the left, brand-styled location pin on the right */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-8 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <Reveal className="lg:col-span-5 flex justify-center" delay={120}>
              <LocationPin />
            </Reveal>
            <Reveal className="lg:col-span-7">
              <p className="text-lg sm:text-xl text-brand-navy/85 leading-relaxed">
                Presentarsi bene potrebbe non bastare, se non abbastanza utenti vedono il tuo profilo. Se sei in fondo ai risultati, è come avere il miglior negozio in mezzo ad una strada poco trafficata.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <Divider />

      {/* Pros */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-8 lg:px-8">
          <Reveal className="mb-12 sm:mb-14">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-brand-navy leading-[1.1] max-w-4xl">
              I Vantaggi nell'essere posizionati fra i primi 3.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {pros.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="h-full p-7 lg:p-8 rounded-2xl bg-white border border-brand-navy/8 shadow-card">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-terracotta/10 mb-6">
                    <p.icon className="w-6 h-6 text-brand-terracotta" />
                  </div>
                  <h3 className="font-display text-lg text-brand-navy mb-3 leading-snug">{p.title}</h3>
                  <p className="text-brand-gray leading-relaxed text-sm">{p.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* Prima / Dopo */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-8 lg:px-8">
          <Reveal>
            <PrimaDopo />
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </>
  );
}
