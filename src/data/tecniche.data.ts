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
  immagini: string[];
}

export interface exportedTecnica {
  id: number;
  nome: string;
  descrizione: string;
  macrotipo: MacrotipoTecnica;
  immagini: string[];
}

// Lista di macrotipi di tecniche (Doratura, Intaglio, Restauro)
const macrotipiTecnica: MacrotipoTecnica[] = [
  { id: 1, nome: 'Doratura' },
  { id: 2, nome: 'Intaglio' },
  { id: 3, nome: 'Restauro' },
];

// Lista di tecniche di esempio
const tecniche: Tecnica[] = [
  // Tecniche di Doratura
  {
    id: 1,
    nome: 'Doratura a foglia',
    descrizione:
      'Tecnica di <strong>doratura</strong> a foglia applicata con precisione su superfici decorative.',
    macrotipoId: 1,
    immagini: [
      'https://example.com/doratura-foglia1.jpg',
      'https://example.com/doratura-foglia2.jpg',
    ],
  },
  {
    id: 2,
    nome: 'Doratura a missione',
    descrizione:
      'Metodo di doratura <em>a missione</em>, ideale per superfici piane e lineari.',
    macrotipoId: 1,
    immagini: [
      'https://example.com/doratura-missione1.jpg',
      'https://example.com/doratura-missione2.jpg',
    ],
  },
  {
    id: 3,
    nome: 'Doratura a conchiglia',
    descrizione:
      'Tecnica <span style="color:gold">raffinata</span> per dettagli in oro su superfici scultoree.',
    macrotipoId: 1,
    immagini: [
      'https://example.com/doratura-conchiglia1.jpg',
      'https://example.com/doratura-conchiglia2.jpg',
    ],
  },
  {
    id: 4,
    nome: 'Doratura con vernice',
    descrizione:
      'Applicazione di una vernice dorata per rifiniture di <u>lusso</u>.',
    macrotipoId: 1,
    immagini: [
      'https://example.com/doratura-vernice1.jpg',
      'https://example.com/doratura-vernice2.jpg',
    ],
  },

  // Tecniche di Intaglio
  {
    id: 5,
    nome: 'Intaglio su legno',
    descrizione:
      'Lavorazione dettagliata su legno utilizzando <strong>strumenti tradizionali</strong>.',
    macrotipoId: 2,
    immagini: [
      'https://example.com/intaglio-legno1.jpg',
      'https://example.com/intaglio-legno2.jpg',
    ],
  },
  {
    id: 6,
    nome: 'Intaglio a rilievo',
    descrizione:
      'Creazione di figure in rilievo per opere decorative su legno massiccio.',
    macrotipoId: 2,
    immagini: [
      'https://example.com/intaglio-rilievo1.jpg',
      'https://example.com/intaglio-rilievo2.jpg',
    ],
  },
  {
    id: 7,
    nome: 'Intaglio a traforo',
    descrizione:
      'Tecnica a traforo con <em>motivi complessi</em> e dettagli intricati.',
    macrotipoId: 2,
    immagini: [
      'https://example.com/intaglio-traforo1.jpg',
      'https://example.com/intaglio-traforo2.jpg',
    ],
  },
  {
    id: 8,
    nome: 'Intaglio ornamentale',
    descrizione:
      'Intaglio su superfici decorative per un <i>effetto artistico</i> di pregio.',
    macrotipoId: 2,
    immagini: [
      'https://example.com/intaglio-ornamentale1.jpg',
      'https://example.com/intaglio-ornamentale2.jpg',
    ],
  },

  // Tecniche di Restauro
  {
    id: 9,
    nome: 'Restauro ligneo',
    descrizione: 'Intervento di restauro per legni antichi e delicati.',
    macrotipoId: 3,
    immagini: [
      'https://example.com/restauro-ligneo1.jpg',
      'https://example.com/restauro-ligneo2.jpg',
    ],
  },
  {
    id: 10,
    nome: 'Restauro dorature',
    descrizione: 'Ripristino di dorature antiche con tecniche specializzate.',
    macrotipoId: 3,
    immagini: [
      'https://example.com/restauro-dorature1.jpg',
      'https://example.com/restauro-dorature2.jpg',
    ],
  },
  {
    id: 11,
    nome: 'Restauro pittorico',
    descrizione:
      'Restauro di superfici pittoriche con <strong>colori originali</strong> e pigmenti storici.',
    macrotipoId: 3,
    immagini: [
      'https://example.com/restauro-pittorico1.jpg',
      'https://example.com/restauro-pittorico2.jpg',
    ],
  },
  {
    id: 12,
    nome: 'Consolidamento strutturale',
    descrizione:
      'Tecnica di <em>consolidamento</em> delle strutture indebolite con rinforzi invisibili.',
    macrotipoId: 3,
    immagini: [
      'https://example.com/consolidamento1.jpg',
      'https://example.com/consolidamento2.jpg',
    ],
  },
];

export const getTecniche = () => {
  const tecnicheExport: exportedTecnica[] = tecniche.map((tecnica) => {
    return {
      ...tecnica,
      macrotipo: macrotipiTecnica[tecnica.id - 1],
    };
  });

  return tecnicheExport;
};

// Esportazione delle liste per usarle altrove
export { macrotipiTecnica, tecniche };
