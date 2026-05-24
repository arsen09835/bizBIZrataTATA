import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-ivory border-t border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-brand-navy/8">
                <MapPin className="w-4 h-4 text-brand-terracotta" />
              </span>
              <span className="font-display font-bold text-brand-navy text-lg">Rank My Biz Up</span>
            </div>
            <p className="text-sm text-brand-gray leading-relaxed">
              Studio digitale per attività locali. Siti web, visibilità su Google e campagne sponsorizzate.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-brand-navy/60 font-semibold mb-4">
              Servizi
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/servizi/siti-web" className="text-brand-navy/80 hover:text-brand-terracotta transition-colors">
                  Siti web
                </Link>
              </li>
              <li>
                <Link to="/servizi/visibilita-organica" className="text-brand-navy/80 hover:text-brand-terracotta transition-colors">
                  Visibilità organica
                </Link>
              </li>
              <li>
                <Link to="/servizi/visibilita-sponsorizzata" className="text-brand-navy/80 hover:text-brand-terracotta transition-colors">
                  Visibilità sponsorizzata
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-brand-navy/80 hover:text-brand-terracotta transition-colors">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-brand-navy/60 font-semibold mb-4">
              Contatti
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:info@rankmybizup.com"
                  className="inline-flex items-center gap-2 text-brand-navy/80 hover:text-brand-terracotta transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@rankmybizup.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+393317600310"
                  className="inline-flex items-center gap-2 text-brand-navy/80 hover:text-brand-terracotta transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +39 331 760 0310
                </a>
              </li>
              <li>
                <Link to="/contatto" className="text-brand-navy/80 hover:text-brand-terracotta transition-colors">
                  Richiedi una consulenza
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-brand-navy/60 font-semibold mb-4">
              Area
            </div>
            <p className="text-sm text-brand-navy/80 leading-relaxed">
              Firenze e dintorni.
              <br />
              Lavoriamo direttamente con attività locali del territorio.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-black/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-brand-gray">Rank My Biz Up · © 2025 · Firenze, Italia</p>
          <p className="text-xs text-brand-gray">Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}
