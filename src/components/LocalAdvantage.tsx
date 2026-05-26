import { Link } from 'react-router-dom';
import { MapPin, User, Handshake, Award, ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

const points = [
  {
    icon: User,
    text: 'Non sono un call center nascosto in un angolo buio: vivo e lavoro a Firenze.',
  },
  {
    icon: Handshake,
    text:
      'Il mio «guadagno» dipende direttamente dal tuo. È nell\'interesse di entrambi raggiungere gli obiettivi e crescere.',
  },
  {
    icon: Award,
    text:
      'Posso lavorare solo con un numero limitato di proprietari e professionisti: non cerco «quantità».',
  },
];

export function LocalAdvantage() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <Reveal className="lg:col-span-6 order-2 lg:order-1">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-brand-navy leading-[1.1] mb-8">
              Perché io?
            </h2>

            <ul className="space-y-5 mb-10">
              {points.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-4">
                  <span className="mt-1 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-brand-terracotta/10 flex-shrink-0">
                    <Icon className="w-5 h-5 text-brand-terracotta" />
                  </span>
                  <span className="text-brand-navy/85 leading-relaxed pt-1.5">{text}</span>
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
