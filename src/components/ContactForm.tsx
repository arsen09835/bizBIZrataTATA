import { useState } from 'react';

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
    <section id="contact-form" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-content mx-auto">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="space-y-6"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Non compilare: <input name="bot-field" />
            </label>
          </p>

          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-brand-blue mb-2">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              required
              value={formData.nome}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-shadow text-gray-900"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-brand-blue mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-shadow text-gray-900"
            />
          </div>

          <div>
            <label htmlFor="googleMapsLink" className="block text-sm font-medium text-brand-blue mb-2">
              Link Google Maps della tua attività
            </label>
            <input
              type="text"
              id="googleMapsLink"
              name="googleMapsLink"
              value={formData.googleMapsLink}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-shadow text-gray-900"
            />
          </div>

          <div>
            <label htmlFor="preoccupazione" className="block text-sm font-medium text-brand-blue mb-2">
              Cosa ti preoccupa oggi della tua attività?
            </label>
            <textarea
              id="preoccupazione"
              name="preoccupazione"
              rows={4}
              value={formData.preoccupazione}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-shadow resize-none text-gray-900"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-brand-blue text-white font-semibold text-lg py-4 rounded-lg hover:bg-brand-blue/90 transition-colors"
          >
            Richiedi un contatto
          </button>

          <p className="text-sm text-brand-gray text-center">
            Ti ricontatto personalmente.
          </p>
        </form>
      </div>
    </section>
  );
}
