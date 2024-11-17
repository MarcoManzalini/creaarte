import * as _ from 'lodash';

// Definizione delle interfacce
interface Epoca {
  id: number;
  nome: string;
}

export interface Cornice {
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

export interface GroupedCornice {
  epoca: Epoca;
  cornici: Cornice[];
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
    immagine: 'https://corniciantiche.it/wp-content/uploads/2019/07/cornici-in-argento.jpg',
    descrizione: 'Cornice gotica decorata',
  },
  {
    id: 2,
    nome: 'Cornice Rinascimentale 1',
    epocaId: 1,
    immagine: 'https://corniciantiche.it/wp-content/uploads/2019/07/cornici-in-argento.jpg',
    descrizione: 'Cornice rinascimentale in legno',
  },
  {
    id: 3,
    nome: 'Cornice Barocca 1',
    epocaId: 2,
    immagine: 'https://corniciantiche.it/wp-content/uploads/2021/02/antique-frames.jpg',
    descrizione: 'Cornice barocca dorata',
  },
  {
    id: 4,
    nome: 'Cornice Neoclassica 1',
    epocaId: 3,
    immagine: 'https://corniciantiche.it/wp-content/uploads/2019/10/013-262x262.jpg',
    descrizione: 'Cornice neoclassica elegante',
  },
  {
    id: 5,
    nome: 'Cornice Rococò 1',
    epocaId: 2,
    immagine: 'https://corniciantiche.it/wp-content/uploads/2021/02/antique-frames.jpg',
    descrizione: 'Cornice rococò riccamente decorata',
  },
  {
    id: 6,
    nome: 'Cornice Industriale 1',
    epocaId: 5,
    immagine: 'https://corniciantiche.it/wp-content/uploads/2019/10/013-262x262.jpg',
    descrizione: 'Cornice in stile industriale',
  },
  {
    id: 7,
    nome: 'Cornice Minimalista 1',
    epocaId: 5,
    immagine: 'https://corniciantiche.it/wp-content/uploads/2019/10/012-262x262.jpg',
    descrizione: 'Cornice semplice e minimale',
  },
  {
    id: 8,
    nome: 'Cornice Contemporanea 1',
    epocaId: 5,
    immagine: 'https://corniciantiche.it/wp-content/uploads/2021/02/antique-frames.jpg',
    descrizione: 'Cornice contemporanea moderna',
  },
  {
    id: 9,
    nome: 'Cornice Decò 1',
    epocaId: 4,
    immagine: 'https://corniciantiche.it/wp-content/uploads/2019/07/cornici-in-argento.jpg',
    descrizione: 'Cornice Art Decò raffinata',
  },
  {
    id: 10,
    nome: 'Cornice Futurista 1',
    epocaId: 5,
    immagine: 'https://corniciantiche.it/wp-content/uploads/2019/07/cornici-in-argento.jpg',
    descrizione: 'Cornice futurista unica',
  },
  {
    id: 11,
    nome: 'Cornice Gotica 2',
    epocaId: 1,
    immagine: 'https://corniciantiche.it/wp-content/uploads/2019/10/013-262x262.jpg',
    descrizione: 'Seconda cornice gotica',
  },
  {
    id: 12,
    nome: 'Cornice Rinascimentale 2',
    epocaId: 1,
    immagine: 'https://corniciantiche.it/wp-content/uploads/2021/02/antique-frames.jpg',
    descrizione: 'Seconda cornice rinascimentale',
  },
  {
    id: 13,
    nome: 'Cornice Barocca 2',
    epocaId: 2,
    immagine: 'https://corniciantiche.it/wp-content/uploads/2019/07/cornici-in-argento.jpg',
    descrizione: 'Seconda cornice barocca',
  },
  {
    id: 14,
    nome: 'Cornice Neoclassica 2',
    epocaId: 3,
    immagine: 'https://corniciantiche.it/wp-content/uploads/2019/07/cornici-in-argento.jpg',
    descrizione: 'Seconda cornice neoclassica',
  },
  {
    id: 15,
    nome: 'Cornice Rococò 2',
    epocaId: 2,
    immagine: 'https://corniciantiche.it/wp-content/uploads/2019/10/012-262x262.jpg',
    descrizione: 'Seconda cornice rococò',
  },
  {
    id: 16,
    nome: 'Cornice Industriale 2',
    epocaId: 5,
    immagine: 'https://corniciantiche.it/wp-content/uploads/2019/10/013-262x262.jpg',
    descrizione: 'Seconda cornice industriale',
  },
  {
    id: 17,
    nome: 'Cornice Minimalista 2',
    epocaId: 5,
    immagine: 'https://corniciantiche.it/wp-content/uploads/2021/02/antique-frames.jpg',
    descrizione: 'Seconda cornice minimalista',
  },
  {
    id: 18,
    nome: 'Cornice Contemporanea 2',
    epocaId: 5,
    immagine: 'https://corniciantiche.it/wp-content/uploads/2021/02/antique-frames.jpg',
    descrizione: 'Seconda cornice contemporanea',
  },
  {
    id: 19,
    nome: 'Cornice Decò 2',
    epocaId: 4,
    immagine: 'https://corniciantiche.it/wp-content/uploads/2019/07/cornici-in-argento.jpg',
    descrizione: 'Seconda cornice Decò',
  },
  {
    id: 20,
    nome: 'Cornice Futurista 2',
    epocaId: 5,
    immagine: 'https://corniciantiche.it/wp-content/uploads/2021/02/antique-frames.jpg',
    descrizione: 'Seconda cornice futurista',
  },
  {
    id: 21,
    nome: 'Cornice Futurista 2',
    epocaId: 6,
    immagine: 'https://corniciantiche.it/wp-content/uploads/2019/07/cornici-in-argento.jpg',
    descrizione: 'Seconda cornice futurista',
  },
  {
    id: 22,
    nome: 'Cornice Futurista 2',
    epocaId: 6,
    immagine: 'https://corniciantiche.it/wp-content/uploads/2021/02/antique-frames.jpg',
    descrizione: 'Seconda cornice futurista',
  },
  {
    id: 23,
    nome: 'Cornice Futurista 2',
    epocaId: 6,
    immagine: 'https://corniciantiche.it/wp-content/uploads/2019/07/cornici-in-argento.jpg',
    descrizione: 'Seconda cornice futurista',
  },
];


export const getCorniciData = () => {
  let corniciExport: ExportedCornice[] = cornici.map((cornice) => {
    return {
      ...cornice,
      epoca: epoche[cornice.epocaId - 1],
    };
  });
  return corniciExport;
};

export const groupCorniciByEpoca = (): GroupedCornice[] => {
  // Raggruppa le cornici per epocaId usando _.groupBy
  const grouped = _.groupBy(cornici, 'epocaId');

  const risultato: GroupedCornice[] = _.map(grouped, (corniciGruppo, epocaId) => {
    const epoca = _.find(epoche, { id: Number(epocaId) });
    if (!epoca) {
      throw new Error(`Epoca con id ${epocaId} non trovata`);
    }
    return { epoca, cornici: corniciGruppo };
  });

  // Inverte l'ordine dell'array per cominciare con "Moderne" e finire con "500"
  return _.reverse(risultato);
};
