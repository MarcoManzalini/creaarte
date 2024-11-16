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
      'https://www.zonazago7.it/wp-content/uploads/2016/02/Corso_Doratura_Bologna_8236.jpg',
      'https://cdn.prod.website-files.com/63eb94f6c942bd7a715f2f57/641abcaba689308c4776a412_Doratura%20caratteristiche%20e%20tecniche%20nel%20restauro%20e%20nella%20decorazione.jpg',
      'https://www.dorarte.com/images/doratura/doratura-a-missione.jpg',
      'https://bazardelpittore.wordpress.com/wp-content/uploads/2014/07/2_doratura-missione.jpg'
    ],
  },
  {
    id: 2,
    nome: 'Doratura a missione',
    descrizione:
      'Metodo di doratura <em>a missione</em>, ideale per superfici piane e lineari.',
    macrotipoId: 1,
    immagini: [
      'https://www.zonazago7.it/wp-content/uploads/2016/02/Corso_Doratura_Bologna_8236.jpg',
      'https://cdn.prod.website-files.com/63eb94f6c942bd7a715f2f57/641abcaba689308c4776a412_Doratura%20caratteristiche%20e%20tecniche%20nel%20restauro%20e%20nella%20decorazione.jpg',
      'https://www.dorarte.com/images/doratura/doratura-a-missione.jpg',
      'https://bazardelpittore.wordpress.com/wp-content/uploads/2014/07/2_doratura-missione.jpg'
    ],
  },
  {
    id: 3,
    nome: 'Doratura a conchiglia',
    descrizione:
      'Tecnica <span style="color:gold">raffinata</span> per dettagli in oro su superfici scultoree.',
    macrotipoId: 1,
    immagini: [
      'https://www.zonazago7.it/wp-content/uploads/2016/02/Corso_Doratura_Bologna_8236.jpg',
      'https://cdn.prod.website-files.com/63eb94f6c942bd7a715f2f57/641abcaba689308c4776a412_Doratura%20caratteristiche%20e%20tecniche%20nel%20restauro%20e%20nella%20decorazione.jpg',
      'https://www.dorarte.com/images/doratura/doratura-a-missione.jpg',
      'https://bazardelpittore.wordpress.com/wp-content/uploads/2014/07/2_doratura-missione.jpg'
    ],
  },
  {
    id: 4,
    nome: 'Doratura con vernice',
    descrizione:
      'Applicazione di una vernice dorata per rifiniture di <u>lusso</u>.',
    macrotipoId: 1,
    immagini: [
      'https://www.zonazago7.it/wp-content/uploads/2016/02/Corso_Doratura_Bologna_8236.jpg',
      'https://cdn.prod.website-files.com/63eb94f6c942bd7a715f2f57/641abcaba689308c4776a412_Doratura%20caratteristiche%20e%20tecniche%20nel%20restauro%20e%20nella%20decorazione.jpg',
      'https://www.dorarte.com/images/doratura/doratura-a-missione.jpg',
      'https://bazardelpittore.wordpress.com/wp-content/uploads/2014/07/2_doratura-missione.jpg'
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
      'https://static.cuneodice.it/cuneo/foto/3104/2599.jpg',
      'https://www.megahub.it/wordpress/wp-content/uploads/2017/06/incisione.png',
      'https://www.tavolobello.com/public/Files/rif000002/627/legno-intagliato.jpg',
      'https://www.lignoma.com/images/content/magazin/schnitzen-lernen-2.jpg'
    ],
  },
  {
    id: 6,
    nome: 'Intaglio a rilievo',
    descrizione:
      'Creazione di figure in rilievo per opere decorative su legno massiccio.',
    macrotipoId: 2,
    immagini: [
      'https://static.cuneodice.it/cuneo/foto/3104/2599.jpg',
      'https://www.megahub.it/wordpress/wp-content/uploads/2017/06/incisione.png',
      'https://www.tavolobello.com/public/Files/rif000002/627/legno-intagliato.jpg',
      'https://www.lignoma.com/images/content/magazin/schnitzen-lernen-2.jpg'
    ],
  },
  {
    id: 7,
    nome: 'Intaglio a traforo',
    descrizione:
      'Tecnica a traforo con <em>motivi complessi</em> e dettagli intricati.',
    macrotipoId: 2,
    immagini: [
      'https://static.cuneodice.it/cuneo/foto/3104/2599.jpg',
      'https://www.megahub.it/wordpress/wp-content/uploads/2017/06/incisione.png',
      'https://www.tavolobello.com/public/Files/rif000002/627/legno-intagliato.jpg',
      'https://www.lignoma.com/images/content/magazin/schnitzen-lernen-2.jpg'
    ],
  },
  {
    id: 8,
    nome: 'Intaglio ornamentale',
    descrizione:
      'Intaglio su superfici decorative per un <i>effetto artistico</i> di pregio.',
    macrotipoId: 2,
    immagini: [
      'https://static.cuneodice.it/cuneo/foto/3104/2599.jpg',
      'https://www.megahub.it/wordpress/wp-content/uploads/2017/06/incisione.png',
      'https://www.tavolobello.com/public/Files/rif000002/627/legno-intagliato.jpg',
      'https://www.lignoma.com/images/content/magazin/schnitzen-lernen-2.jpg'
    ],
  },

  // Tecniche di Restauro
  {
    id: 9,
    nome: 'Restauro ligneo',
    descrizione: 'Intervento di restauro per legni antichi e delicati.',
    macrotipoId: 3,
    immagini: [
      'https://media.adeo.com/media/2935850/media.jpeg?precrop=3666,3666,x995,y0&width=640&quality=75&width=640',
      'https://www.sborgia.com/wp-content/uploads/2022/09/guida-ferramenta-consigli-per-il-restauro-di-mobili.jpg',
      'https://www.fioreantichita.com/wp-content/uploads/2014/03/restauro-mobile.jpg',
      'https://danielecorsi.com/wp-content/uploads/2020/05/restauro-intarsio-milano.jpg'
    ],
  },
  {
    id: 10,
    nome: 'Restauro dorature',
    descrizione: 'Ripristino di dorature antiche con tecniche specializzate.',
    macrotipoId: 3,
    immagini: [
      'https://media.adeo.com/media/2935850/media.jpeg?precrop=3666,3666,x995,y0&width=640&quality=75&width=640',
      'https://www.sborgia.com/wp-content/uploads/2022/09/guida-ferramenta-consigli-per-il-restauro-di-mobili.jpg',
      'https://www.fioreantichita.com/wp-content/uploads/2014/03/restauro-mobile.jpg',
      'https://danielecorsi.com/wp-content/uploads/2020/05/restauro-intarsio-milano.jpg'
    ],
  },
  {
    id: 11,
    nome: 'Restauro pittorico',
    descrizione:
      'Restauro di superfici pittoriche con <strong>colori originali</strong> e pigmenti storici.',
    macrotipoId: 3,
    immagini: [
      'https://media.adeo.com/media/2935850/media.jpeg?precrop=3666,3666,x995,y0&width=640&quality=75&width=640',
      'https://www.sborgia.com/wp-content/uploads/2022/09/guida-ferramenta-consigli-per-il-restauro-di-mobili.jpg',
      'https://www.fioreantichita.com/wp-content/uploads/2014/03/restauro-mobile.jpg',
      'https://danielecorsi.com/wp-content/uploads/2020/05/restauro-intarsio-milano.jpg'
    ],
  },
  {
    id: 12,
    nome: 'Consolidamento strutturale',
    descrizione:
      'Tecnica di <em>consolidamento</em> delle strutture indebolite con rinforzi invisibili.',
    macrotipoId: 3,
    immagini: [
      'https://media.adeo.com/media/2935850/media.jpeg?precrop=3666,3666,x995,y0&width=640&quality=75&width=640',
      'https://www.sborgia.com/wp-content/uploads/2022/09/guida-ferramenta-consigli-per-il-restauro-di-mobili.jpg',
      'https://www.fioreantichita.com/wp-content/uploads/2014/03/restauro-mobile.jpg',
      'https://danielecorsi.com/wp-content/uploads/2020/05/restauro-intarsio-milano.jpg'
    ],
  },
];


export const getTecniche = () => {
  const tecnicheExport: exportedTecnica[] = tecniche.map((tecnica) => {
    return {
      ...tecnica,
      macrotipo: macrotipiTecnica[tecnica.id - 1]
    }
  })

  return tecnicheExport;
}

// Esportazione delle liste per usarle altrove
export { macrotipiTecnica, tecniche };
