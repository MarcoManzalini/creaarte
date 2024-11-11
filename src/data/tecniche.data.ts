// Definizione delle interfacce
interface MacrotipoTecnica {
  id: number;
  nome: string;
}

interface Tecnica {
  id: number;
  nome: string;
  descrizione: string;
  macrotipoId: number;
  immagine: string;
}

// Lista di macrotipi di tecniche (Doratura, Intaglio, Restauro)
const macrotipiTecnica: MacrotipoTecnica[] = [
  { id: 1, nome: 'Doratura' },
  { id: 2, nome: 'Intaglio' },
  { id: 3, nome: 'Restauro' },
];

// Lista di tecniche di esempio
const tecniche: Tecnica[] = [
  {
    id: 1,
    nome: 'Foglia Oro',
    descrizione: "Tecnica di applicazione di foglie d'oro.",
    macrotipoId: 1,
    immagine: 'foglia_oro.jpg',
  },
  {
    id: 2,
    nome: 'Foglia Argento',
    descrizione: "Tecnica di applicazione di foglie d'argento.",
    macrotipoId: 1,
    immagine: 'foglia_argento.jpg',
  },
  {
    id: 3,
    nome: 'Doratura a Guazzo',
    descrizione: "Tecnica di doratura a base d'acqua.",
    macrotipoId: 1,
    immagine: 'doratura_guazzo.jpg',
  },
  {
    id: 4,
    nome: 'Doratura a Missione',
    descrizione: 'Tecnica di doratura a base oleosa.',
    macrotipoId: 1,
    immagine: 'doratura_missione.jpg',
  },
  {
    id: 5,
    nome: 'Intaglio Rococò',
    descrizione: 'Intaglio decorativo in stile rococò.',
    macrotipoId: 2,
    immagine: 'intaglio_rococo.jpg',
  },
  {
    id: 6,
    nome: 'Intaglio Rinascimentale',
    descrizione: 'Intaglio decorativo in stile rinascimentale.',
    macrotipoId: 2,
    immagine: 'intaglio_rinascimento.jpg',
  },
  {
    id: 7,
    nome: 'Intaglio Barocco',
    descrizione: 'Intaglio decorativo in stile barocco.',
    macrotipoId: 2,
    immagine: 'intaglio_barocco.jpg',
  },
  {
    id: 8,
    nome: 'Intaglio Neoclassico',
    descrizione: 'Intaglio decorativo in stile neoclassico.',
    macrotipoId: 2,
    immagine: 'intaglio_neoclassico.jpg',
  },
  {
    id: 9,
    nome: 'Pulitura Superficiale',
    descrizione: 'Pulitura delle superfici senza rimozione di materiale.',
    macrotipoId: 3,
    immagine: 'pulitura_superficiale.jpg',
  },
  {
    id: 10,
    nome: 'Consolidamento',
    descrizione: 'Tecnica per consolidare strutture danneggiate.',
    macrotipoId: 3,
    immagine: 'consolidamento.jpg',
  },
  {
    id: 11,
    nome: 'Ritocco Pittorico',
    descrizione: 'Ritocco di aree danneggiate della pittura.',
    macrotipoId: 3,
    immagine: 'ritocco_pittorico.jpg',
  },
  {
    id: 12,
    nome: 'Stuccatura',
    descrizione: 'Tecnica di riempimento di crepe e danni superficiali.',
    macrotipoId: 3,
    immagine: 'stuccatura.jpg',
  },
  {
    id: 13,
    nome: 'Doratura a Caldo',
    descrizione: "Applicazione di foglie d'oro tramite calore.",
    macrotipoId: 1,
    immagine: 'doratura_caldo.jpg',
  },
  {
    id: 14,
    nome: 'Intaglio Gotico',
    descrizione: 'Intaglio decorativo in stile gotico.',
    macrotipoId: 2,
    immagine: 'intaglio_gotico.jpg',
  },
  {
    id: 15,
    nome: 'Rimozione Vernice',
    descrizione: 'Rimozione di strati di vernice deteriorati.',
    macrotipoId: 3,
    immagine: 'rimozione_vernice.jpg',
  },
  {
    id: 16,
    nome: 'Patinatura',
    descrizione: 'Applicazione di patina per protezione e finitura.',
    macrotipoId: 1,
    immagine: 'patinatura.jpg',
  },
  {
    id: 17,
    nome: 'Doratura ad Olio',
    descrizione: 'Doratura tramite adesivo a base oleosa.',
    macrotipoId: 1,
    immagine: 'doratura_olio.jpg',
  },
  {
    id: 18,
    nome: 'Restauro Pittorico',
    descrizione: 'Rifacimento di elementi pittorici danneggiati.',
    macrotipoId: 3,
    immagine: 'restauro_pittorico.jpg',
  },
  {
    id: 19,
    nome: 'Doratura con Mordente',
    descrizione: 'Tecnica di doratura con adesivo a base di mordente.',
    macrotipoId: 1,
    immagine: 'doratura_mordente.jpg',
  },
  {
    id: 20,
    nome: 'Rifinitura Bordo',
    descrizione: 'Rifinitura dei bordi con tecniche di intaglio.',
    macrotipoId: 2,
    immagine: 'rifinitura_bordo.jpg',
  },
];

// Esportazione delle liste per usarle altrove
export { macrotipiTecnica, tecniche };
