import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-brand-ivory px-4">
      <div className="text-center max-w-md">
        <p className="text-xs uppercase tracking-[0.18em] text-brand-terracotta font-semibold mb-4">
          Errore 404
        </p>
        <h1 className="font-display text-4xl sm:text-5xl text-brand-navy mb-4">
          Pagina non trovata.
        </h1>
        <p className="text-brand-gray leading-relaxed mb-8">
          La pagina che cerchi non esiste o è stata spostata.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-brand-navy text-white font-semibold px-6 py-3.5 rounded-full hover:bg-brand-navy-dark transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Torna alla home
        </Link>
      </div>
    </section>
  );
}
