import { Zap, Smartphone, MousePointerClick } from 'lucide-react';
import { ServicePageLayout } from '../../components/ServicePageLayout';

export function SitiWeb() {
  return (
    <ServicePageLayout
      eyebrow="Servizio · Siti web"
      title="Siti web moderni, veloci e pensati per portare contatti."
      intro="Realizziamo o rinnoviamo il sito della tua attività con un'estetica curata, velocità di caricamento reale e una struttura pensata per trasformare visite in richieste."
      features={[
        {
          icon: Zap,
          title: 'Veloci davvero',
          description: 'Performance ottimizzate per non perdere visitatori per qualche secondo di troppo.',
        },
        {
          icon: Smartphone,
          title: 'Perfetti su mobile',
          description: 'La maggior parte delle persone arriva da smartphone. Il sito è progettato per loro.',
        },
        {
          icon: MousePointerClick,
          title: 'Orientati al contatto',
          description: 'Ogni sezione spinge il visitatore verso un\'azione: chiamata, messaggio o richiesta.',
        },
      ]}
      includes={[
        'Design su misura, coerente con la tua attività',
        'Struttura ottimizzata per Google e per la velocità',
        'Modulo di contatto e integrazione email',
        'Versione mobile curata in ogni dettaglio',
        'Pubblicazione su dominio e hosting',
        'Modifiche e affiancamento dopo la pubblicazione',
      ]}
      closing="Non un sito qualunque, ma uno strumento che lavora davvero per la tua attività ogni giorno."
    />
  );
}
