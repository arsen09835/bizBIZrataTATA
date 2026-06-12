import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-navy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-white/10">
                <MapPin className="w-4 h-4 text-brand-terracotta-soft" />
              </span>
              <span className="font-display font-bold text-white text-lg">Rank My Biz Up</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Aiuto le attività di Firenze a farsi trovare online. Con calma, e una persona alla volta.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-white/40 font-semibold mb-4">
              Servizi
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/servizi/siti-web" className="text-white/70 hover:text-white transition-colors">
                  Siti web
                </Link>
              </li>
              <li>
                <Link to="/servizi/visibilita-organica" className="text-white/70 hover:text-white transition-colors">
                  Visibilità organica (SEO)
                </Link>
              </li>
              <li>
                <Link to="/servizi/visibilita-sponsorizzata" className="text-white/70 hover:text-white transition-colors">
                  Visibilità sponsorizzata
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-white/40 font-semibold mb-4">
              Contatti
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:info@rankmybizup.com"
                  className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@rankmybizup.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+393317600310"
                  className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +39 331 760 0310
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-white/40 font-semibold mb-4">
              Area
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Firenze e dintorni.
              <br />
              Lavoro direttamente con attività locali del territorio.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-white/40">Rank My Biz Up · © 2025 · Firenze, Italia</p>
          <p className="text-xs text-white/40">Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}
