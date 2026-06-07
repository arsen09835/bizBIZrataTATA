import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { MapPin, Menu, X, Phone, Mail } from 'lucide-react';

const services = [
  { to: '/servizi/siti-web', label: 'Siti web' },
  { to: '/servizi/visibilita-organica', label: 'Visibilità organica (SEO)' },
  { to: '/servizi/visibilita-sponsorizzata', label: 'Visibilità sponsorizzata' },
];

const transparentRoutes = [
  '/',
  '/servizi/siti-web',
  '/servizi/visibilita-organica',
  '/servizi/visibilita-sponsorizzata',
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
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
  }, [location.pathname]);

  const transparent = transparentRoutes.includes(location.pathname) && !scrolled;

  const headerClass = transparent
    ? 'bg-transparent border-transparent'
    : 'bg-brand-ivory/90 backdrop-blur-md border-black/5 shadow-[0_1px_0_rgba(15,26,42,0.04)]';

  const linkBase = 'text-sm font-medium tracking-wide transition-colors';
  const linkColor = transparent ? 'text-white/90 hover:text-white' : 'text-brand-navy/80 hover:text-brand-navy';
  const contactColor = transparent ? 'text-white/90 hover:text-white' : 'text-brand-navy/80 hover:text-brand-terracotta';

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `${linkBase} ${linkColor} ${isActive && !transparent ? 'text-brand-navy' : ''}`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${headerClass}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <span className={`inline-flex items-center justify-center w-8 h-8 rounded-md transition-colors ${transparent ? 'bg-white/15' : 'bg-brand-navy/8'}`}>
              <MapPin className={`w-4 h-4 ${transparent ? 'text-white' : 'text-brand-terracotta'}`} />
            </span>
            <span className={`font-display font-bold text-base sm:text-lg tracking-tight ${transparent ? 'text-white' : 'text-brand-navy'}`}>
              Rank My Biz Up
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-7">
            <NavLink to="/" end className={navLinkClass}>Home</NavLink>
            {services.map((s) => (
              <NavLink key={s.to} to={s.to} className={navLinkClass}>{s.label}</NavLink>
            ))}
            <div className="flex flex-col items-end leading-tight pl-2">
              <a href="tel:+393317600310" className={`text-sm font-semibold transition-colors ${contactColor}`}>+39 331 760 0310</a>
              <a href="mailto:info@rankmybizup.com" className={`text-xs transition-colors ${contactColor}`}>info@rankmybizup.com</a>
            </div>
          </nav>

          <button type="button" onClick={() => setMobileOpen((o) => !o)} className={`md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md ${transparent ? 'text-white' : 'text-brand-navy'}`} aria-label="Apri menu">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 bg-white border-t border-black/5 ${mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="px-4 sm:px-6 py-4 flex flex-col">
          <NavLink to="/" end className="py-3 text-brand-navy font-medium border-b border-black/5">Home</NavLink>
          {services.map((s) => (
            <NavLink key={s.to} to={s.to} className="py-3 text-brand-navy font-medium border-b border-black/5">{s.label}</NavLink>
          ))}
          <a href="tel:+393317600310" className="mt-4 inline-flex items-center gap-2 text-brand-navy font-semibold">
            <Phone className="w-4 h-4 text-brand-terracotta" />+39 331 760 0310
          </a>
          <a href="mailto:info@rankmybizup.com" className="mt-2 inline-flex items-center gap-2 text-brand-navy font-medium">
            <Mail className="w-4 h-4 text-brand-terracotta" />info@rankmybizup.com
          </a>
        </nav>
      </div>
    </header>
  );
}
