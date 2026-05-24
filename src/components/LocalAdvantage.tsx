import { Link } from 'react-router-dom';
import { MapPin, MessageCircle, Handshake, ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

const points = [
  { icon: MessageCircle, text: 'Rapporto diretto, niente call center.' },
  { icon: Handshake, text: 'Una persona che segue il tuo progetto.' },
  { icon: MapPin, text: 'Presenza sul territorio fiorentino.' },
];

export function LocalAdvantage() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <Reveal className="lg:col-span-6 order-2 lg:order-1">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-terracotta font-semibold mb-3">
              Il nostro approccio
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-brand-navy leading-[1.1] mb-6">
              Lavoriamo direttamente con<br className="hidden sm:block" /> attività locali.
            </h2>
            <p className="text-lg text-brand-gray leading-relaxed mb-8">
              No call center. No passaggi tra reparti. Una persona reale con cui parlare, presente sul territorio.
            </p>

            <ul className="space-y-3 mb-10">
              {points.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex items-center justify-center w-8 h-8 rounded-lg bg-brand-terracotta/10 flex-shrink-0">
                    <Icon className="w-4 h-4 text-brand-terracotta" />
                  </span>
                  <span className="text-brand-navy/85 leading-relaxed pt-1">{text}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/contatto"
              className="inline-flex items-center gap-2 bg-brand-navy text-white font-semibold px-6 py-3.5 rounded-full hover:bg-brand-navy-dark transition-colors"
            >
              Parliamo della tua attività
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>

          <Reveal className="lg:col-span-6 order-1 lg:order-2" delay={120}>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden photo-placeholder shadow-card-hover">
                <div className="w-full h-full bg-gradient-to-br from-brand-navy/15 via-transparent to-brand-terracotta/20 flex items-end p-8">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-pill">
                    <div className="text-xs uppercase tracking-wider text-brand-terracotta font-semibold mb-1">
                      Firenze
                    </div>
                    <div className="font-display font-bold text-brand-navy">
                      Attività locale<br />del territorio
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-white rounded-2xl shadow-card-hover p-5 border border-black/5 max-w-[220px] hidden sm:block">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-brand-terracotta" />
                  <span className="text-xs font-semibold text-brand-navy uppercase tracking-wider">Sul posto</span>
                </div>
                <p className="text-sm text-brand-gray leading-snug">
                  Incontri di persona quando serve.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
