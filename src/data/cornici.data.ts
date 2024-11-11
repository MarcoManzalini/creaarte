// Definizione delle interfacce
interface Epoca {
  id: number;
  nome: string;
}

interface Macrotipo {
  id: number;
  nome: string;
}

interface Sottotipo {
  id: number;
  macrotipoId: number;
  nome: string;
}

interface Cornice {
  id: number;
  nome: string;
  epocaId: number;
  sottotipoId: number;
  immagine: string;
  descrizione: string;
}

// Liste di esempio per epoche, macrotipi e sottotipi
const epoche: Epoca[] = [
  { id: 1, nome: 'Rinascimento' },
  { id: 2, nome: 'Barocco' },
  { id: 3, nome: 'Neoclassico' },
  { id: 4, nome: 'Ottocento' },
  { id: 5, nome: 'Moderno' },
];

const macrotipi: Macrotipo[] = [
  { id: 1, nome: 'Antica' },
  { id: 2, nome: 'Moderna' },
];

const sottotipi: Sottotipo[] = [
  { id: 1, macrotipoId: 1, nome: 'Gotica' },
  { id: 2, macrotipoId: 1, nome: 'Rinascimentale' },
  { id: 3, macrotipoId: 1, nome: 'Barocca' },
  { id: 4, macrotipoId: 1, nome: 'Neoclassica' },
  { id: 5, macrotipoId: 1, nome: 'Rococò' },
  { id: 6, macrotipoId: 2, nome: 'Industriale' },
  { id: 7, macrotipoId: 2, nome: 'Minimalista' },
  { id: 8, macrotipoId: 2, nome: 'Contemporanea' },
  { id: 9, macrotipoId: 2, nome: 'Decò' },
  { id: 10, macrotipoId: 2, nome: 'Futurista' },
];

// Lista di 20 cornici di esempio
const cornici: Cornice[] = [
  {
    id: 1,
    nome: 'Cornice Gotica 1',
    epocaId: 1,
    sottotipoId: 1,
    immagine: 'url1.jpg',
    descrizione: 'Cornice gotica decorata',
  },
  {
    id: 2,
    nome: 'Cornice Rinascimentale 1',
    epocaId: 1,
    sottotipoId: 2,
    immagine: 'url2.jpg',
    descrizione: 'Cornice rinascimentale in legno',
  },
  {
    id: 3,
    nome: 'Cornice Barocca 1',
    epocaId: 2,
    sottotipoId: 3,
    immagine: 'url3.jpg',
    descrizione: 'Cornice barocca dorata',
  },
  {
    id: 4,
    nome: 'Cornice Neoclassica 1',
    epocaId: 3,
    sottotipoId: 4,
    immagine: 'url4.jpg',
    descrizione: 'Cornice neoclassica elegante',
  },
  {
    id: 5,
    nome: 'Cornice Rococò 1',
    epocaId: 2,
    sottotipoId: 5,
    immagine: 'url5.jpg',
    descrizione: 'Cornice rococò riccamente decorata',
  },
  {
    id: 6,
    nome: 'Cornice Industriale 1',
    epocaId: 5,
    sottotipoId: 6,
    immagine: 'url6.jpg',
    descrizione: 'Cornice in stile industriale',
  },
  {
    id: 7,
    nome: 'Cornice Minimalista 1',
    epocaId: 5,
    sottotipoId: 7,
    immagine: 'url7.jpg',
    descrizione: 'Cornice semplice e minimale',
  },
  {
    id: 8,
    nome: 'Cornice Contemporanea 1',
    epocaId: 5,
    sottotipoId: 8,
    immagine: 'url8.jpg',
    descrizione: 'Cornice contemporanea moderna',
  },
  {
    id: 9,
    nome: 'Cornice Decò 1',
    epocaId: 4,
    sottotipoId: 9,
    immagine: 'url9.jpg',
    descrizione: 'Cornice Art Decò raffinata',
  },
  {
    id: 10,
    nome: 'Cornice Futurista 1',
    epocaId: 5,
    sottotipoId: 10,
    immagine: 'url10.jpg',
    descrizione: 'Cornice futurista unica',
  },
  {
    id: 11,
    nome: 'Cornice Gotica 2',
    epocaId: 1,
    sottotipoId: 1,
    immagine: 'url11.jpg',
    descrizione: 'Seconda cornice gotica',
  },
  {
    id: 12,
    nome: 'Cornice Rinascimentale 2',
    epocaId: 1,
    sottotipoId: 2,
    immagine: 'url12.jpg',
    descrizione: 'Seconda cornice rinascimentale',
  },
  {
    id: 13,
    nome: 'Cornice Barocca 2',
    epocaId: 2,
    sottotipoId: 3,
    immagine: 'url13.jpg',
    descrizione: 'Seconda cornice barocca',
  },
  {
    id: 14,
    nome: 'Cornice Neoclassica 2',
    epocaId: 3,
    sottotipoId: 4,
    immagine: 'url14.jpg',
    descrizione: 'Seconda cornice neoclassica',
  },
  {
    id: 15,
    nome: 'Cornice Rococò 2',
    epocaId: 2,
    sottotipoId: 5,
    immagine: 'url15.jpg',
    descrizione: 'Seconda cornice rococò',
  },
  {
    id: 16,
    nome: 'Cornice Industriale 2',
    epocaId: 5,
    sottotipoId: 6,
    immagine: 'url16.jpg',
    descrizione: 'Seconda cornice industriale',
  },
  {
    id: 17,
    nome: 'Cornice Minimalista 2',
    epocaId: 5,
    sottotipoId: 7,
    immagine: 'url17.jpg',
    descrizione: 'Seconda cornice minimalista',
  },
  {
    id: 18,
    nome: 'Cornice Contemporanea 2',
    epocaId: 5,
    sottotipoId: 8,
    immagine: 'url18.jpg',
    descrizione: 'Seconda cornice contemporanea',
  },
  {
    id: 19,
    nome: 'Cornice Decò 2',
    epocaId: 4,
    sottotipoId: 9,
    immagine: 'url19.jpg',
    descrizione: 'Seconda cornice Decò',
  },
  {
    id: 20,
    nome: 'Cornice Futurista 2',
    epocaId: 5,
    sottotipoId: 10,
    immagine: 'url20.jpg',
    descrizione: 'Seconda cornice futurista',
  },
];

// Esportazione delle liste per usarle altrove
export { epoche, macrotipi, sottotipi, cornici };
