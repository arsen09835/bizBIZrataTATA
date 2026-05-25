import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { MapPin, ChevronDown, Menu, X } from 'lucide-react';

const services = [
  { to: '/servizi/siti-web', label: 'Siti web' },
  { to: '/servizi/visibilita-organica', label: 'Visibilità organica' },
  { to: '/servizi/visibilita-sponsorizzata', label: 'Visibilità sponsorizzata' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';
  const transparent = isHome && !scrolled;

  const headerClass = transparent
    ? 'bg-transparent border-transparent'
    : 'bg-brand-ivory/90 backdrop-blur-md border-black/5 shadow-[0_1px_0_rgba(15,26,42,0.04)]';

  const linkBase = 'text-sm font-medium tracking-wide transition-colors';
  const linkColor = transparent
    ? 'text-white/90 hover:text-white'
    : 'text-brand-navy/80 hover:text-brand-navy';

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `${linkBase} ${linkColor} ${isActive && !transparent ? 'text-brand-navy' : ''}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${headerClass}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <span
              className={`inline-flex items-center justify-center w-8 h-8 rounded-md transition-colors ${
                transparent ? 'bg-white/15' : 'bg-brand-navy/8'
              }`}
            >
              <MapPin className={`w-4 h-4 ${transparent ? 'text-white' : 'text-brand-terracotta'}`} />
            </span>
            <span
              className={`font-display font-bold text-base sm:text-lg tracking-tight ${
                transparent ? 'text-white' : 'text-brand-navy'
              }`}
            >
              Rank My Biz Up
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesOpen((o) => !o)}
                className={`${linkBase} ${linkColor} inline-flex items-center gap-1`}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Servizi
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className={`absolute right-0 top-full pt-3 w-64 transition-all duration-200 ${
                  servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'
                }`}
              >
                <div className="bg-white rounded-xl shadow-card border border-black/5 overflow-hidden">
                  {services.map((s) => (
                    <Link
                      key={s.to}
                      to={s.to}
                      className="block px-5 py-3 text-sm text-brand-navy/85 hover:bg-brand-ivory hover:text-brand-navy transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <NavLink to="/portfolio" className={navLinkClass}>
              Portfolio
            </NavLink>

            <NavLink
              to="/contatto"
              className={`text-sm font-semibold tracking-wide px-5 py-2.5 rounded-full transition-all whitespace-nowrap ${
                transparent
                  ? 'bg-white text-brand-navy hover:bg-white/90'
                  : 'bg-brand-navy text-white hover:bg-brand-navy-dark'
              }`}
            >
              Richiedi un Appuntamento
            </NavLink>
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className={`md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md ${
              transparent ? 'text-white' : 'text-brand-navy'
            }`}
            aria-label="Apri menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 bg-white border-t border-black/5 ${
          mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-4 sm:px-6 py-4 flex flex-col">
          <NavLink to="/" end className="py-3 text-brand-navy font-medium border-b border-black/5">
            Home
          </NavLink>
          <div className="py-3 border-b border-black/5">
            <div className="text-xs uppercase tracking-wider text-brand-gray mb-2">Servizi</div>
            <div className="flex flex-col">
              {services.map((s) => (
                <Link key={s.to} to={s.to} className="py-2 text-brand-navy/90">
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
          <NavLink to="/portfolio" className="py-3 text-brand-navy font-medium border-b border-black/5">
            Portfolio
          </NavLink>
          <NavLink
            to="/contatto"
            className="mt-4 inline-flex items-center justify-center bg-brand-navy text-white font-semibold py-3 rounded-full"
          >
            Richiedi un Appuntamento
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
