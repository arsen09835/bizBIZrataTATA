export function Prezzi() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-md">
        <p className="text-xs uppercase tracking-[0.18em] text-brand-brown font-semibold mb-4">
          Prezzi
        </p>
        <h1 className="font-display text-4xl text-ink mb-4">In arrivo.</h1>
        <p className="text-ink/60 leading-relaxed">
          Questa pagina è in preparazione. Nel frattempo, contattami direttamente per un preventivo su misura.
        </p>
        <a
          href="tel:+393317600310"
          className="bg-brand-blue text-white font-semibold px-6 py-3 rounded-lg inline-block mt-8 hover:bg-brand-blue-dark transition"
        >
          Contattami
        </a>
      </div>
    </section>
  );
}
