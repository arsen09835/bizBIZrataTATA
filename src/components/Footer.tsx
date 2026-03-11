export function Footer() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-brand-gray">
          Rank My Biz Up · © 2025           
          <div className="text-xs text-brand-gray/70 mt-2">Visibilità su Google per attività locali a Firenze.</div>
          <div className="text-sm text-brand-gray">info@rankmybizup.com</div>
        </div>
        <button
          onClick={scrollToForm}
          className="text-sm text-brand-gray hover:text-brand-blue transition-colors"
        >
          Contatto
        </button>
      </div>
    </footer>
  );
}
