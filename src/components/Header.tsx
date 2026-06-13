import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { MapPin, Menu, X, ChevronDown, Globe, Search, Megaphone } from 'lucide-react';

const services = [
  {
    to: '/servizi/siti-web',
    icon: Globe,
    title: 'Creazione e Restyling di Siti Web',
    desc: 'Siti professionali che comunicano valore e convertono visite in clienti.',
  },
  {
    to: '/servizi/visibilita-organica',
    icon: Search,
    title: 'SEO visibilità organica',
    desc: 'Comparire fra i primi risultati su Google, senza pagare per ogni click.',
  },
  {
    to: '/servizi/visibilita-sponsorizzata',
    icon: Megaphone,
    title: 'Sponsorizzazioni tramite Campagne Google Ads',
    desc: 'Annunci mirati che portano gli utenti giusti verso la tua attività.',
  },
];

function Wordmark() {
  return (
    <span className="font-display font-bold text-lg tracking-tight text-ink">
      RankMyBizUp
    </span>
  );
}

function ServiceCard({
  to,
  icon: Icon,
  title,
  desc,
  onClick,
}: {
  to: string;
  icon: typeof Globe;
  title: string;
  desc: string;
  onClick?: () => void;
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="flex flex-row gap-3 p-3 rounded-lg hover:bg-black/[0.04] transition"
    >
      <div className="w-12 h-12 rounded-md border border-black/8 bg-white shadow-sm flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-brand-blue" />
      </div>
      <div className="min-w-0">
        <div className="text-sm font-semibold text-ink">{title}</div>
        <div className="text-xs text-ink/55 mt-0.5">{desc}</div>
      </div>
    </Link>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [serviziOpen, setServiziOpen] = useState(false);
  const serviziWrapRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServiziOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!serviziOpen) return;
    const onClick = (e: MouseEvent) => {
      if (serviziWrapRef.current && !serviziWrapRef.current.contains(e.target as Node)) {
        setServiziOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setServiziOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [serviziOpen]);

  useEffect(() => {
    if (mobileOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [mobileOpen]);

  const openServizi = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setServiziOpen(true);
  };
  const scheduleCloseServizi = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setServiziOpen(false), 150);
  };

  const headerClass = scrolled
    ? 'bg-white/85 backdrop-blur-lg border-b border-black/5 shadow-[0_1px_0_rgba(15,23,34,0.04)]'
    : 'bg-white/70 backdrop-blur-md border-b border-transparent';

  const linkBase =
    'px-4 py-2 rounded-md text-sm font-medium text-ink/75 hover:text-ink hover:bg-black/[0.04] transition';

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `${linkBase} ${isActive ? 'text-ink' : ''}`;

  return (
    <header className={`sticky top-0 z-50 transition-colors ${headerClass}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-g-blue" />
            <Wordmark />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>

            <div
              ref={serviziWrapRef}
              className="relative"
              onMouseEnter={openServizi}
              onMouseLeave={scheduleCloseServizi}
            >
              <button
                type="button"
                onClick={() => setServiziOpen((o) => !o)}
                aria-expanded={serviziOpen}
                aria-haspopup="true"
                className={`${linkBase} inline-flex items-center gap-1.5`}
              >
                Servizi
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${serviziOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {serviziOpen && (
                <div
                  className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-[560px] bg-white rounded-xl border border-black/8 shadow-[0_20px_50px_rgba(15,23,34,0.12)] p-2 origin-top"
                  style={{ animation: 'serviziIn 180ms ease-out both' }}
                >
                  <div className="flex flex-col">
                    {services.map((s) => (
                      <ServiceCard
                        key={s.to}
                        to={s.to}
                        icon={s.icon}
                        title={s.title}
                        desc={s.desc}
                        onClick={() => setServiziOpen(false)}
                      />
                    ))}
                  </div>
                  <div className="px-3 py-2.5 mt-1 border-t border-black/5 text-xs text-ink/55">
                    Interessato?{' '}
                    <a href="tel:+393317600310" className="font-semibold text-brand-blue hover:underline">
                      Chiamami
                    </a>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/prezzi" className={navLinkClass}>
              Prezzi
            </NavLink>
          </nav>

          {/* RIGHT — desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:+393317600310"
              className="bg-brand-blue text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-brand-blue-dark transition-colors"
            >
              Contattami
            </a>
          </div>

          {/* MOBILE — toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? 'Chiudi menu' : 'Apri menu'}
            aria-expanded={mobileOpen}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-ink"
          >
            <span className="relative w-6 h-6 inline-block">
              <Menu
                className={`w-6 h-6 absolute inset-0 transition-all duration-200 ${
                  mobileOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                }`}
              />
              <X
                className={`w-6 h-6 absolute inset-0 transition-all duration-200 ${
                  mobileOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* MOBILE — panel (solid, reliable, flat list) */}
      <div
        className={`md:hidden fixed top-16 inset-x-0 bottom-0 z-40 bg-white border-t border-black/5 transition-[opacity,transform] duration-200 ${
          mobileOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="h-full overflow-y-auto flex flex-col">
          <nav className="flex-1 px-4 pt-3 pb-4 flex flex-col">
            <NavLink
              to="/"
              end
              onClick={() => setMobileOpen(false)}
              className="px-3 py-3 rounded-md text-base font-medium text-ink hover:bg-black/[0.04]"
            >
              Home
            </NavLink>

            <div className="px-3 pt-4 pb-1 text-xs uppercase tracking-wider text-ink/45 font-semibold">
              Servizi
            </div>
            <div className="flex flex-col">
              {services.map((s) => (
                <ServiceCard
                  key={s.to}
                  to={s.to}
                  icon={s.icon}
                  title={s.title}
                  desc={s.desc}
                  onClick={() => setMobileOpen(false)}
                />
              ))}
            </div>

            <NavLink
              to="/prezzi"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-3 mt-2 rounded-md text-base font-medium text-ink hover:bg-black/[0.04]"
            >
              Prezzi
            </NavLink>
          </nav>

          <div className="px-4 pb-8 pt-3 border-t border-black/5">
            <a
              href="tel:+393317600310"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center w-full bg-brand-blue text-white font-semibold py-3.5 rounded-md hover:bg-brand-blue-dark transition-colors"
            >
              Contattami
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes serviziIn {
          from { opacity: 0; transform: translate(-50%, -4px) scale(0.98); }
          to   { opacity: 1; transform: translate(-50%, 0) scale(1); }
        }
      `}</style>
    </header>
  );
}
