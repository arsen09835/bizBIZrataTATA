export function Hero() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-[92vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 relative bg-cover" style={{ backgroundPosition: 'center bottom' }}>
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat block sm:hidden" style={{ backgroundImage: "url('/pexels-i-clal-capoglu-cinal-202384677-14895618.jpg')" }}></div>
      <div className="absolute inset-0 bg-cover bg-bottom bg-no-repeat hidden sm:block" style={{ backgroundImage: "url('/pexels-kaip-1082809.jpg')" }}></div>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="max-w-content text-center relative z-10 mt-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight mb-8 text-white">
          Più visibilità su Google per attività locali a Firenze
        </h1>
        <div className="text-lg sm:text-xl text-white/90 leading-relaxed mb-10 space-y-6">
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
          className="bg-white text-black font-semibold text-lg px-8 py-4 rounded-lg hover:bg-white/90 transition-colors mix-blend-screen"
        >
          Richiedi un contatto
        </button>
      </div>
    </section>
  );
}
