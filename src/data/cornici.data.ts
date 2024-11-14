// Definizione delle interfacce
interface Epoca {
  id: number;
  nome: string;
}


interface Cornice {
  id: number;
  nome: string;
  epocaId: number;
  immagine: string;
  descrizione: string;
}

export interface ExportedCornice {
  id: number;
  nome: string;
  epoca: Epoca;
  immagine: string;
  descrizione: string;
}

// Liste di esempio per epoche, macrotipi e sottotipi
const epoche: Epoca[] = [
  { id: 1, nome: '500' },
  { id: 2, nome: '600' },
  { id: 3, nome: '700' },
  { id: 4, nome: '800' },
  { id: 5, nome: '900' },
  { id: 6, nome: 'Moderno' },
];



// Lista di 20 cornici di esempio
const cornici: Cornice[] = [
  {
    id: 1,
    nome: 'Cornice Gotica 1',
    epocaId: 1,
    immagine: 'url1.jpg',
    descrizione: 'Cornice gotica decorata',
  },
  {
    id: 2,
    nome: 'Cornice Rinascimentale 1',
    epocaId: 1,
    immagine: 'url2.jpg',
    descrizione: 'Cornice rinascimentale in legno',
  },
  {
    id: 3,
    nome: 'Cornice Barocca 1',
    epocaId: 2,
    immagine: 'url3.jpg',
    descrizione: 'Cornice barocca dorata',
  },
  {
    id: 4,
    nome: 'Cornice Neoclassica 1',
    epocaId: 3,
    immagine: 'url4.jpg',
    descrizione: 'Cornice neoclassica elegante',
  },
  {
    id: 5,
    nome: 'Cornice Rococò 1',
    epocaId: 2,
    immagine: 'url5.jpg',
    descrizione: 'Cornice rococò riccamente decorata',
  },
  {
    id: 6,
    nome: 'Cornice Industriale 1',
    epocaId: 5,
    immagine: 'url6.jpg',
    descrizione: 'Cornice in stile industriale',
  },
  {
    id: 7,
    nome: 'Cornice Minimalista 1',
    epocaId: 5,
    immagine: 'url7.jpg',
    descrizione: 'Cornice semplice e minimale',
  },
  {
    id: 8,
    nome: 'Cornice Contemporanea 1',
    epocaId: 5,
    immagine: 'url8.jpg',
    descrizione: 'Cornice contemporanea moderna',
  },
  {
    id: 9,
    nome: 'Cornice Decò 1',
    epocaId: 4,
    immagine: 'url9.jpg',
    descrizione: 'Cornice Art Decò raffinata',
  },
  {
    id: 10,
    nome: 'Cornice Futurista 1',
    epocaId: 5,

    immagine: 'url10.jpg',
    descrizione: 'Cornice futurista unica',
  },
  {
    id: 11,
    nome: 'Cornice Gotica 2',
    epocaId: 1,
    immagine: 'url11.jpg',
    descrizione: 'Seconda cornice gotica',
  },
  {
    id: 12,
    nome: 'Cornice Rinascimentale 2',
    epocaId: 1,
    immagine: 'url12.jpg',
    descrizione: 'Seconda cornice rinascimentale',
  },
  {
    id: 13,
    nome: 'Cornice Barocca 2',
    epocaId: 2,
    immagine: 'url13.jpg',
    descrizione: 'Seconda cornice barocca',
  },
  {
    id: 14,
    nome: 'Cornice Neoclassica 2',
    epocaId: 3,
    immagine: 'url14.jpg',
    descrizione: 'Seconda cornice neoclassica',
  },
  {
    id: 15,
    nome: 'Cornice Rococò 2',
    epocaId: 2,
    immagine: 'url15.jpg',
    descrizione: 'Seconda cornice rococò',
  },
  {
    id: 16,
    nome: 'Cornice Industriale 2',
    epocaId: 5,
    immagine: 'url16.jpg',
    descrizione: 'Seconda cornice industriale',
  },
  {
    id: 17,
    nome: 'Cornice Minimalista 2',
    epocaId: 5,
    immagine: 'url17.jpg',
    descrizione: 'Seconda cornice minimalista',
  },
  {
    id: 18,
    nome: 'Cornice Contemporanea 2',
    epocaId: 5,
    immagine: 'url18.jpg',
    descrizione: 'Seconda cornice contemporanea',
  },
  {
    id: 19,
    nome: 'Cornice Decò 2',
    epocaId: 4,
    immagine: 'url19.jpg',
    descrizione: 'Seconda cornice Decò',
  },
  {
    id: 20,
    nome: 'Cornice Futurista 2',
    epocaId: 5,

    immagine: 'url20.jpg',
    descrizione: 'Seconda cornice futurista',
  },
];

export const getCorniciData = () => {
  let corniciExport: ExportedCornice[] = cornici.map((cornice) => {
    return {
      ...cornice,
      epoca: epoche[cornice.epocaId + 1],
    };
  });
  return corniciExport;
};

// Esportazione delle liste per usarle altrove
export { cornici };
