export function Hero() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-content text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight mb-8">
          Più visibilità su Google per attività locali a Firenze
        </h1>
        <div className="text-lg sm:text-xl text-brand-gray leading-relaxed mb-10 space-y-6">
          <p>
            Molte persone cercano servizi come il tuo su Google ogni giorno.
            <br />
            Il problema è che spesso trovano prima i tuoi concorrenti.
          </p>
          <p>
            Aiuto attività locali a migliorare la propria presenza su Google così più clienti possono trovarle e contattarle.
          </p>
        </div>
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
