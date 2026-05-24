import { Target, TrendingUp, Wallet } from 'lucide-react';
import { ServicePageLayout } from '../../components/ServicePageLayout';

export function VisibilitaSponsorizzata() {
  return (
    <ServicePageLayout
      eyebrow="Servizio · Visibilità sponsorizzata"
      title="Campagne Google Ads pensate per portare richieste reali."
      intro="Gestiamo campagne sponsorizzate su Google con un obiettivo chiaro: portare contatti veri alla tua attività. Niente vanity metrics, solo risultati misurabili."
      features={[
        {
          icon: Target,
          title: 'Targeting locale',
          description: 'Le campagne girano solo nella tua zona e solo per le persone interessate.',
        },
        {
          icon: TrendingUp,
          title: 'Ottimizzazione continua',
          description: 'Monitoriamo, tagliamo gli sprechi e miglioriamo le campagne mese dopo mese.',
        },
        {
          icon: Wallet,
          title: 'Budget controllato',
          description: 'Trasparenza totale su quanto spendi, dove e con che ritorno.',
        },
      ]}
      includes={[
        'Strategia di campagna basata sui tuoi obiettivi',
        'Setup completo dell\'account Google Ads',
        'Scelta delle parole chiave e delle aree geografiche',
        'Creazione di annunci e landing page se serve',
        'Ottimizzazione mensile e gestione del budget',
        'Report chiari con i risultati raggiunti',
      ]}
      closing="Le campagne non sono un costo. Sono uno strumento che funziona se gestito bene. Ce ne occupiamo noi."
    />
  );
}
