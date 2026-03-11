import { MapPin } from 'lucide-react';

export function Header() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <MapPin className="w-6 h-6 text-brand-blue" />
            <span className="font-bold text-brand-blue text-lg">Rank My Biz Up</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+393317600310" className="text-sm font-medium text-brand-blue hover:text-brand-green transition-colors hidden sm:block">+39 331 760 0310</a>
            <button
              onClick={scrollToForm}
              className="text-sm font-medium text-brand-blue hover:text-brand-green transition-colors hidden sm:block"
            >
              Contatto
            </button>
            <a href="tel:+393317600310" className="text-sm font-medium text-brand-blue hover:text-brand-green transition-colors sm:hidden">+39 331 760 0310</a>
          </div>
        </div>
      </div>
    </header>
  );
}
