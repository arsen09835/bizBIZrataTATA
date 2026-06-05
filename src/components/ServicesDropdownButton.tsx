import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const services = [
  { to: '/servizi/siti-web', label: 'Siti web' },
  { to: '/servizi/visibilita-organica', label: 'Visibilità organica (SEO)' },
  { to: '/servizi/visibilita-sponsorizzata', label: 'Visibilità sponsorizzata' },
];

type Props = {
  label: string;
  variant?: 'light' | 'dark';
};

export function ServicesDropdownButton({ label, variant = 'light' }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  const buttonClasses =
    variant === 'dark'
      ? 'bg-white/10 text-white border-white/20 hover:bg-white/15'
      : 'bg-white/70 text-brand-navy border-brand-navy/10 hover:bg-white';

  return (
    <div ref={ref} className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="true"
        className={`inline-flex items-center justify-center gap-2 ${buttonClasses} backdrop-blur-sm font-medium text-base px-6 py-3.5 rounded-full border transition-all`}
      >
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <div
        className={`absolute left-0 top-full mt-2 w-64 sm:w-72 z-40 transition-all duration-200 ${
          open ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'
        }`}
      >
        <div className="bg-white rounded-xl shadow-card-hover border border-black/5 overflow-hidden">
          {services.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              onClick={() => setOpen(false)}
              className="block px-5 py-3 text-sm text-brand-navy/85 hover:bg-brand-ivory hover:text-brand-navy transition-colors"
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
