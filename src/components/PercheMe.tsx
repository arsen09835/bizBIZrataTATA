import { MapPin, LineChart, Wallet } from 'lucide-react';
import { Reveal } from './Reveal';

const points = [
  {
    icon: MapPin,
    text: 'Vivo e lavoro a Firenze. Con me hai la serenità di essere seguito da una persona facilmente reperibile, che segue con cura le tue esigenze in prima persona, senza passaggi di reparti.',
  },
  {
    icon: LineChart,
    text: 'Analizzo giornalmente l\'andamento della strategia, calibrandola regolarmente per avere un passo in più rispetto alla concorrenza. Nessun lavoro è «definitivo», «accantonato» o «lasciato andare da sé». Ti aggiornerò settimanalmente.',
  },
  {
    icon: Wallet,
    text: 'Il prezzo su cui ci si accorda per sito, campagna sponsorizzata o SEO è l\'unica spesa per te. Niente spese annuali, abbonamenti, o altre «sorprese».',
  },
];

export function PercheMe() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-xl border border-black/8 shadow-[0_20px_50px_rgba(15,23,34,0.10)] overflow-hidden">
          <Reveal duration={450}>
            <div className="px-6 sm:px-8 pt-8 pb-4">
              <h2 className="font-display text-2xl sm:text-3xl lg:text-[2rem] text-ink leading-[1.15] text-center">
                Perché scegliere me
                <span className="block text-ink/45 font-semibold">(e non il fai da te o le mega agenzie)</span>
              </h2>
            </div>
          </Reveal>

          <div className="p-2 max-w-2xl mx-auto w-full">
            {points.map((p, i) => (
              <Reveal key={i} delay={i * 50} duration={450}>
                <div className="flex gap-4 p-4 sm:p-5 rounded-lg hover:bg-black/[0.03] transition">
                  <div className="w-12 h-12 rounded-md border border-black/8 shadow-sm flex-shrink-0 flex items-center justify-center">
                    <p.icon className="w-5 h-5 text-brand-brown" />
                  </div>
                  <p className="text-ink/80 leading-relaxed">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
