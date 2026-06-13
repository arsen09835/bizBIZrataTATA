import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
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

  // Robust scroll lock while the mobile menu is open.
  useEffect(() => {
    if (!mobileOpen) return;
    const scrollY = window.scrollY;
    const body = document.body;
    const html = document.documentElement;
    const prevBody = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow,
    };
    const prevHtmlOverflow = html.style.overflow;

    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.left = '0';
    body.style.right = '0';
    body.style.width = '100%';
    body.style.overflow = 'hidden';
    html.style.overflow = 'hidden';

    const onTouchMove = (e: TouchEvent) => {
      const scroller = document.getElementById('mobile-menu-scroll');
      if (scroller && scroller.contains(e.target as Node)) return;
      e.preventDefault();
    };
    document.addEventListener('touchmove', onTouchMove, { passive: false });

    return () => {
      document.removeEventListener('touchmove', onTouchMove);
      body.style.position = prevBody.position;
      body.style.top = prevBody.top;
      body.style.left = prevBody.left;
      body.style.right = prevBody.right;
      body.style.width = prevBody.width;
      body.style.overflow = prevBody.overflow;
      html.style.overflow = prevHtmlOverflow;
      window.scrollTo(0, scrollY);
    };
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
          <Link to="/" className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-g-blue" />
            <Wordmark />
          </Link>

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

          <div className="hidden md:flex items-center">
            <a
              href="tel:+393317600310"
              className="bg-brand-blue text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-brand-blue-dark transition-colors"
            >
              Contattami
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Apri menu"
            aria-expanded={mobileOpen}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-ink"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* MOBILE — full-screen overlay (covers everything, its own header + X) */}
      {mobileOpen &&
        createPortal(
          <div
            className="md:hidden fixed inset-0 z-[60] bg-white flex flex-col"
            style={{ animation: 'mobileMenuIn 180ms ease-out both' }}
          >
            <div className="flex items-center justify-between h-16 px-4 border-b border-black/5 flex-shrink-0">
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2"
              >
                <MapPin className="w-5 h-5 text-g-blue" />
                <Wordmark />
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Chiudi menu"
                className="inline-flex items-center justify-center w-10 h-10 rounded-md text-ink"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div id="mobile-menu-scroll" className="flex-1 overflow-y-auto overscroll-contain">
              <nav className="px-4 pt-3 pb-4 flex flex-col">
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
            </div>

            <div className="px-4 pb-8 pt-3 border-t border-black/5 flex-shrink-0">
              <a
                href="tel:+393317600310"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center w-full bg-brand-blue text-white font-semibold py-3.5 rounded-md hover:bg-brand-blue-dark transition-colors"
              >
                Contattami
              </a>
            </div>
          </div>,
          document.body
        )}

      <style>{`
        @keyframes serviziIn {
          from { opacity: 0; transform: translate(-50%, -4px) scale(0.98); }
          to   { opacity: 1; transform: translate(-50%, 0) scale(1); }
        }
        @keyframes mobileMenuIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </header>
  );
}
