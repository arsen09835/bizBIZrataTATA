import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { Reveal } from '../components/Reveal';

export function Contact() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-navy pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full bg-brand-terracotta/20 blur-3xl" />
          <div className="absolute -bottom-32 left-0 w-[400px] h-[400px] rounded-full bg-brand-navy-dark/40 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.18em] text-brand-terracotta-soft font-semibold mb-4">
              Contatto
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] mb-5">
              Parliamo della tua attività.
            </h1>
            <p className="text-lg text-white/75 leading-relaxed max-w-2xl mx-auto">
              Raccontaci cosa fai e cosa vorresti migliorare. Ti ricontattiamo personalmente.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white pt-12 sm:pt-16 pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {[
            { icon: Mail, label: 'Email', value: 'info@rankmybizup.com', href: 'mailto:info@rankmybizup.com' },
            { icon: Phone, label: 'Telefono', value: '+39 331 760 0310', href: 'tel:+393317600310' },
            { icon: MapPin, label: 'Area', value: 'Firenze e dintorni' },
          ].map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="p-5 rounded-2xl bg-brand-ivory border border-black/5 shadow-pill">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white shadow-pill mb-3">
                <Icon className="w-4 h-4 text-brand-terracotta" />
              </div>
              <div className="text-xs uppercase tracking-wider text-brand-navy/55 font-semibold mb-1">
                {label}
              </div>
              {href ? (
                <a href={href} className="text-brand-navy font-medium hover:text-brand-terracotta transition-colors">
                  {value}
                </a>
              ) : (
                <div className="text-brand-navy font-medium">{value}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      <div className="pb-20 sm:pb-28">
        <ContactForm />
      </div>
    </>
  );
}
