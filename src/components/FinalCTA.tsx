export function FinalCTA() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-content mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl mb-6">
          Vuoi capire se la tua attività può migliorare la propria presenza su Google?
        </h2>
        <p className="text-lg text-brand-gray mb-10">
          Mandami le informazioni della tua attività. Ti ricontatto personalmente.
        </p>
        <button
          onClick={scrollToForm}
          className="bg-brand-blue text-white font-semibold text-lg px-8 py-4 rounded-lg hover:bg-brand-blue/90 transition-colors"
        >
          Richiedi un contatto
        </button>
      </div>
    </section>
  );
}
