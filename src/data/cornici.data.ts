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
    nome: 'Cornice ottocentesca',
    epocaId: 4,
    immagine: 'assets/cornici/cornici_1.jpg',
    descrizione: 'Cornice  decorata',
  },
  {
    id: 2,
    nome: 'Cornice  1',
    epocaId: 1,
    immagine: 'assets/cornici/cornici_2.jpg',
    descrizione: 'Cornice decorata',
  },
  {
    id: 3,
    nome: 'Cornice 1',
    epocaId: 2,
    immagine: 'assets/cornici/cornici_3.jpg',
    descrizione: 'Cornice decorata',
  },
  {
    id: 4,
    nome: 'Cornice 1',
    epocaId: 4,
    immagine: 'assets/cornici/cornici_4.jpg',
    descrizione: 'Cornice decorata',
  },
  {
    id: 5,
    nome: 'Cornice 1',
    epocaId: 1,
    immagine: 'assets/cornici/cornici_5.jpg',
    descrizione: 'Cornice decorata',
  },
  {
    id: 6,
    nome: 'Cornice 1',
    epocaId: 3,
    immagine: 'assets/cornici/cornici_6.jpg',
    descrizione: 'Cornice decorata',
  },
  {
    id: 7,
    nome: 'Cornice 1',
    epocaId: 6,
    immagine: 'assets/cornici/cornici_7.jpg',
    descrizione: 'Cornice decorata',
  },
  {
    id: 8,
    nome: 'Cornice 1',
    epocaId: 2,
    immagine: 'assets/cornici/cornici_8.jpg',
    descrizione: 'Cornice decorata',
  },
  {
    id: 9,
    nome: 'Cornice 1',
    epocaId: 1,
    immagine: 'assets/cornici/cornici_9.jpg',
    descrizione: 'Cornice decorata',
  },
  {
    id: 10,
    nome: 'Cornice 1',
    epocaId: 1,
    immagine: 'assets/cornici/cornici_10.jpg',
    descrizione: 'Cornice decorata',
  },
  {
    id: 11,
    nome: 'Cornice 1',
    epocaId: 4,
    immagine: 'assets/cornici/cornici_11.jpg',
    descrizione: 'Cornice decorata',
  },
  {
    id: 12,
    nome: 'Cornice 1',
    epocaId: 3,
    immagine: 'assets/cornici/cornici_12.jpg',
    descrizione: 'Cornice decorata',
  },
  {
    id: 13,
    nome: 'Cornice 1',
    epocaId: 1,
    immagine: 'assets/cornici/cornici_13.jpg',
    descrizione: 'Cornice decorata',
  },
  {
    id: 14,
    nome: 'Cornice 1',
    epocaId: 6,
    immagine: 'assets/cornici/cornici_14.jpg',
    descrizione: 'Cornice decorata',
  },
  {
    id: 15,
    nome: 'Cornice 1',
    epocaId: 2,
    immagine: 'assets/cornici/cornici_15.jpg',
    descrizione: 'Cornice decorata',
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
