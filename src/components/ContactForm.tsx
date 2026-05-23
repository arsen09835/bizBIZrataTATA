import { useState } from 'react';
import { Reveal } from './Reveal';

export function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    googleMapsLink: '',
    preoccupazione: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact-form" className="bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="bg-white rounded-3xl border border-black/5 shadow-card p-6 sm:p-10 space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Non compilare: <input name="bot-field" />
              </label>
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-brand-navy mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-brand-ivory/60 border border-black/5 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-terracotta/40 focus:border-brand-terracotta/40 focus:outline-none transition-all text-brand-navy placeholder:text-brand-gray-soft"
                  placeholder="Il tuo nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-navy mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-brand-ivory/60 border border-black/5 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-terracotta/40 focus:border-brand-terracotta/40 focus:outline-none transition-all text-brand-navy placeholder:text-brand-gray-soft"
                  placeholder="nome@esempio.it"
                />
              </div>
            </div>

            <div>
              <label htmlFor="googleMapsLink" className="block text-sm font-medium text-brand-navy mb-2">
                Link Google Maps della tua attività
              </label>
              <input
                type="text"
                id="googleMapsLink"
                name="googleMapsLink"
                value={formData.googleMapsLink}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-brand-ivory/60 border border-black/5 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-terracotta/40 focus:border-brand-terracotta/40 focus:outline-none transition-all text-brand-navy placeholder:text-brand-gray-soft"
                placeholder="Opzionale"
              />
            </div>

            <div>
              <label htmlFor="preoccupazione" className="block text-sm font-medium text-brand-navy mb-2">
                Cosa ti preoccupa oggi della tua attività?
              </label>
              <textarea
                id="preoccupazione"
                name="preoccupazione"
                rows={5}
                value={formData.preoccupazione}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-brand-ivory/60 border border-black/5 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-terracotta/40 focus:border-brand-terracotta/40 focus:outline-none transition-all text-brand-navy placeholder:text-brand-gray-soft resize-none"
                placeholder="Raccontaci brevemente la tua situazione."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-brand-navy text-white font-semibold text-base py-4 rounded-full hover:bg-brand-navy-dark transition-colors shadow-card"
            >
              Richiedi un contatto
            </button>

            <p className="text-sm text-brand-gray text-center">
              Ti ricontattiamo personalmente entro poche ore.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
