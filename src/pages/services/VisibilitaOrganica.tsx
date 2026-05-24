import { Search, MapPin, Star } from 'lucide-react';
import { ServicePageLayout } from '../../components/ServicePageLayout';

export function VisibilitaOrganica() {
  return (
    <ServicePageLayout
      eyebrow="Servizio · Visibilità organica"
      title="Comparire su Google quando le persone cercano la tua attività."
      intro="Lavoriamo sulla tua presenza organica per farti trovare nelle ricerche locali rilevanti: Google Maps, risultati di ricerca, scheda dell'attività."
      features={[
        {
          icon: Search,
          title: 'SEO locale',
          description: 'Ottimizzazione delle pagine del sito per le ricerche del tuo territorio.',
        },
        {
          icon: MapPin,
          title: 'Google Business',
          description: 'Scheda Google curata e ottimizzata per apparire nelle mappe e nei risultati locali.',
        },
        {
          icon: Star,
          title: 'Reputazione online',
          description: 'Strategia per recensioni e segnali di fiducia che migliorano il posizionamento.',
        },
      ]}
      includes={[
        'Analisi della concorrenza locale',
        'Ottimizzazione tecnica e contenuti del sito',
        'Gestione e ottimizzazione della scheda Google Business',
        'Lavoro su recensioni e segnali di fiducia',
        'Monitoraggio mensile dei risultati',
        'Confronto diretto e report comprensibili',
      ]}
      closing="Apparire nei risultati giusti, davanti alle persone giuste, nella tua zona. Senza pagare ogni singolo click."
    />
  );
}
