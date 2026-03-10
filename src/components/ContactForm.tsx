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

const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('sending');
    const data = new FormData();
    data.append('access_key', '6ae479b2-c7eb-4ff2-a617-9e433252e5cb');
    data.append('subject', 'Nuovo contatto da RankMyBizUp');
    data.append('nome', formData.nome);
    data.append('email', formData.email);
    data.append('Google Maps Link', formData.googleMapsLink);
    data.append('Preoccupazione', formData.preoccupazione);
    try {
      const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ nome: '', email: '', googleMapsLink: '', preoccupazione: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    }
  };
  
  return (
    <section id="contact-form" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-content mx-auto">
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <input type="hidden" name="botcheck" className="hidden" />

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
            disabled={submitStatus === 'sending'}
            className="disabled:opacity-60 w-full bg-brand-blue text-white font-semibold text-lg py-4 rounded-lg hover:bg-brand-blue/90 transition-colors"
          >
            {submitStatus === 'sending' ? 'Invio in corso...' : 'Richiedi un contatto'}
          </button>

          {submitStatus === 'success' && (
            <p className="text-sm text-green-600 text-center font-medium">Grazie! Ti ricontatto il prima possibile.</p>
          )}
          {submitStatus === 'error' && (
            <p className="text-sm text-red-600 text-center font-medium">Qualcosa è andato storto. Riprova.</p>
          )}
          {submitStatus === 'idle' && (
            <p className="text-sm text-brand-gray text-center">Ti ricontatto personalmente.</p>
          )}
        </form>
      </div>
    </section>
  );
}
