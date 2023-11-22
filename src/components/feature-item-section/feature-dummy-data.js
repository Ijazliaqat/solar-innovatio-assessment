import VersatileSVG from "../../assets/verstile.svg";
import IndipendenteSVG from "../../assets/independent.svg";
import AutomatizzatoSVG from "../../assets/automatizzato.svg";
import ConnessoSVG from "../../assets/connesso.svg";
import EfficienteSVG from "../../assets/efficient.svg";
import ResistenteSVG from "../../assets/resistente.svg";
import CardIcon1 from '../../assets/card-icon1.svg'
import CardIcon2 from '../../assets/why-card-icon2.svg'
import CardIcon3 from '../../assets/why-card-icon3.svg'
import SubCardIcon1 from '../../assets/why-sire-sub-card-icon1.svg'
import SubCardIcon2 from '../../assets/why-sire-sub-card-icon2.svg'
import SubCardIcon3 from '../../assets/why-sire-sub-card-icon3.svg'
import SubCardIcon4 from '../../assets/why-sire-sub-card-icon4.svg'

export const featureItems = [
  {
    id: 1,
    icon: VersatileSVG,
    title: "Versatile",
    description:
      "Installabile in qualsiasi balcone anche all'interno del condominio. Non richiede autorizzazioni ne opere murarie. Utile anche come schermatura solare",
  },
  {
    id: 2,
    icon: IndipendenteSVG,
    title: "Indipendente e Green",
    description:
      "dalle fonte non rinnovabili non è più un’utopia. S.i.r.e. fornisce l’accesso a fonti energetiche green anche a chi non ha un tetto di proprietà.",
  },
  {
    id: 3,
    icon: AutomatizzatoSVG,
    title: "Automatizzato",
    description:
      "Totalmente automatico e retraibile, S.I.R.E regola la quantità di sole in casa in base alle necessità. Un perfetto connubio tra sole e ombra. I suoi sensori regolano l'esposizione in base alle condizioni atmosferiche. ",
  },
  {
    id: 4,
    icon: ConnessoSVG,
    title: "Connesso",
    description:
      "Il sistema si connette ai dispositivi Alexa, Google, elettrodomestici 2.0 wi-fi. Tramite lapp accedi ai dati di produzione dellenergia e ricevi notifiche e suggerimenti per lutilizzo ottimale dellenergia autoprodotta.",
  },
  {
    id: 5,
    icon: EfficienteSVG,
    title: "Efficiente",
    description:
      "Il sistema di accumulo permette di conservare l’energia generata in eccesso e renderla disponibile quando serve, per esempio di sera o in giornate nuvolose.",
  },
  {
    id: 6,
    icon: ResistenteSVG,
    title: "Resistente",
    description:
      "Il sistema è realizzato con un rivestimento protettivo, impermeabile, isolante e resistente a fenomeni atmosferici aggressivi, all’abrasione, urti e graffi.",
  },
];

export const featureItemsCard = [
  {
    id:1,
    icon:CardIcon1,
    title: 'Risparmio Energetico',
    description: 'Risparmia da un minimo del 60% sulla bolletta fino all indipendenza energetica anche grazie alla schermatura solare che consente una riduzione fino al 95% dei raggi UV e quindi un minor utilizzo del condizionatore.'
  },

  {
    id:2,
    icon:CardIcon2,
    title: 'Mobilità Elettrica',
    description: 'Lunica soluzione che rende l’utilizzo di un’auto elettrica veramente economico.  L’efficienza dei pannelli e le batterie di accumulo garantiscono fino a 29.000 chilometri annui a emissioni zero.'
  },
  {
    id:3,
    icon:CardIcon3,
    title: 'Comunità Energetica',
    description: 'Dal concetto di condominio al concetto di comunità energetica: Si.Re. è il sistema che rende possibile realizzare una Comunità Energetica Rinnovabile senza acquisto di energia elettrica dalla rete.'
  },
]

export const featureItemsSpecification = [
  {
    id:1,
    icon:SubCardIcon1,
    title: ' 110%',
    description: 'Superbonus'
  },
  {
    id:2,
    icon:SubCardIcon2,
    title: '65%',
    description: 'Detrazione DOMOTICA'
  },
  {
    id:3,
    icon:SubCardIcon3,
    description: `Progettazionevv personalizzata`
  },
  {
    id:4,
    icon:SubCardIcon4,
    description: 'consulenza fiscale sui bonus', 
  },
]
