import { useState } from 'react';

const ACCESS_KEY = '6ae479b2-c7eb-4ff2-a617-9e433252e5cb';

const fieldBase =
  'w-full rounded-lg border border-black/12 bg-white px-4 py-3 font-sans text-ink placeholder:text-ink/40 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-colors';
const labelText = 'block font-display text-sm font-semibold text-ink mb-2';

export function PreventivoForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    setStatus('sending');
    setErrorMsg('');
    const formData = new FormData(formEl);
    formData.append('access_key', ACCESS_KEY);
    formData.append('subject', 'Nuova richiesta di preventivo – RankMyBizUp');
    formData.append('from_name', 'RankMyBizUp');
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        formEl.reset();
      } else {
        setStatus('error');
        setErrorMsg(data.message || "Errore nell'invio. Riprova.");
      }
    } catch {
      setStatus('error');
      setErrorMsg('Qualcosa è andato storto. Riprova.');
    }
  };

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      {/* Honeypot */}
      <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      <div>
        <label className={labelText} htmlFor="f-nome">
          Nome e cognome
        </label>
        <input
          id="f-nome"
          type="text"
          name="Nome e cognome"
          required
          placeholder="Scrivi il tuo nome…"
          className={fieldBase}
        />
      </div>

      <div>
        <label className={labelText} htmlFor="f-tipo-cliente">
          Privato o Azienda?
        </label>
        <select id="f-tipo-cliente" name="Privato o Azienda" defaultValue="Sono un Privato" className={fieldBase}>
          <option>Sono un Privato</option>
          <option>Sono un'Azienda</option>
        </select>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className={labelText} htmlFor="f-telefono">
            Telefono
          </label>
          <input
            id="f-telefono"
            type="tel"
            name="Telefono"
            required
            placeholder="Un tuo recapito telefonico"
            className={fieldBase}
          />
        </div>
        <div>
          <label className={labelText} htmlFor="f-email">
            E-mail
          </label>
          <input
            id="f-email"
            type="email"
            name="email"
            required
            placeholder="Il tuo indirizzo e-mail"
            className={fieldBase}
          />
        </div>
      </div>

      <div>
        <label className={labelText} htmlFor="f-servizio">
          Tipologia di servizio
        </label>
        <select id="f-servizio" name="Tipologia di servizio" required defaultValue="" className={fieldBase}>
          <option value="" disabled>
            Seleziona un servizio
          </option>
          <option>Siti web</option>
          <option>Visibilità organica (SEO)</option>
          <option>Visibilità sponsorizzata</option>
        </select>
      </div>

      <div>
        <label className={labelText} htmlFor="f-descrizione">
          Descrivi la tua richiesta
        </label>
        <textarea
          id="f-descrizione"
          name="Descrizione"
          required
          rows={6}
          placeholder="Raccontami il tuo progetto…"
          className={`${fieldBase} resize-y`}
        />
      </div>

      <div className="rounded-lg border border-black/8 bg-[#F8F9FB] p-4">
        <label className="flex items-start gap-3 text-sm font-medium text-ink">
          <input
            type="checkbox"
            name="Consenso GDPR"
            value="Sì"
            required
            className="mt-0.5 h-4 w-4 flex-shrink-0 accent-brand-blue"
          />
          <span>Autorizzazione al trattamento dei dati personali</span>
        </label>
        <p className="mt-2 pl-7 text-xs text-ink/55 leading-relaxed">
          Dichiaro di aver letto l'informativa sul trattamento dei dati personali ai sensi del GDPR 2016/679.
        </p>
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex items-center justify-center bg-brand-blue text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-brand-blue-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'Invio in corso…' : 'Invia richiesta'}
      </button>

      {status === 'success' && (
        <p role="status" className="text-sm font-medium text-g-green">
          Richiesta inviata correttamente. Ti ricontatterò a breve.
        </p>
      )}
      {status === 'error' && (
        <p role="alert" className="text-sm font-medium text-red-600">
          {errorMsg}
        </p>
      )}
    </form>
  );
}

export default PreventivoForm;
