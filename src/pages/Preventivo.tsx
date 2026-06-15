import { Reveal } from '../components/Reveal';
import { PreventivoForm } from '../components/PreventivoForm';

export function Preventivo() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        <Reveal>
          <h1 className="font-display font-bold text-ink tracking-tight leading-[1.1] text-3xl sm:text-4xl lg:text-5xl">
            Richiedi un preventivo
          </h1>
          <p className="mt-6 text-lg text-ink/65 leading-relaxed">
            La richiesta di preventivo è senza impegno e non è in alcun modo vincolante, sarà utile per approfondire i punti fondamentali del tuo progetto e avere una stima dei tempi di realizzazione e dei costi.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 rounded-2xl border border-black/8 bg-white shadow-sm p-6 sm:p-8">
            <PreventivoForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Preventivo;
