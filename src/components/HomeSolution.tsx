import { Reveal } from './Reveal';

export function HomeSolution() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-lg sm:text-xl text-brand-navy/85 leading-relaxed">
            La soluzione sta nell'«aggiustare» il{' '}
            <strong className="text-brand-navy font-semibold">sito</strong> facilitando il processo di contatto, e lavorare correttamente sul SEO o sulle campagne di Google Adwords [ora Google Ads] [o entrambi], ritenendo gli utenti e instaurando in loro{' '}
            <strong className="text-brand-navy font-semibold">fiducia</strong> e{' '}
            <strong className="text-brand-navy font-semibold">sicurezza</strong>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
