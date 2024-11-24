import * as _ from 'lodash';

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

export interface GroupedTecniche {
  macrotipo: MacrotipoTecnica;
  dati: groupedItem[];
}

export interface groupedItem {
  id: number;
  nome: string;
  descrizione: string;
  immagini: string[];
}

// Lista di macrotipi di tecniche (Doratura, Intaglio, Restauro)
const macrotipiTecnica: MacrotipoTecnica[] = [
  { id: 1, nome: 'Doratura' },
  { id: 2, nome: 'Intaglio' },
  { id: 3, nome: 'Restauro' },
  { id: 4, nome: 'Cornici' },
];

// Lista di tecniche di esempio
const tecniche: Tecnica[] = [
  // Tecniche di Doratura
  {
    id: 1,
    nome: 'Doratura',
    descrizione: `<div>
    <p style="font-family: Arial, sans-serif; line-height: 1.6;">
        <strong>La doratura</strong> è un processo di decorazione ornamentale usato su diversi materiali e con diverse tecniche per impreziosire un oggetto tramite l'apposizione di un sottilissimo strato di oro.
    </p>
    <p style="font-family: Arial, sans-serif; line-height: 1.6;">
        Nel corso degli anni <strong>Crearte</strong> ha evoluto una profonda conoscenza sia nella tecnica più comune chiamata "<em>a missione</em>", sia nella tecnica "<em>a guazzo</em>" più antica e affascinante, con l'utilizzo della foglia d'oro zecchino o argento.
    </p>
    <p style="font-family: Arial, sans-serif; line-height: 1.6;">
        Ogni pezzo è un viaggio nel tempo, un omaggio alla maestria degli antichi artigiani.
    </p>
</div>
`,
    macrotipoId: 1,
    immagini: [
      'https://www.zonazago7.it/wp-content/uploads/2016/02/Corso_Doratura_Bologna_8236.jpg',
      'https://cdn.prod.website-files.com/63eb94f6c942bd7a715f2f57/641abcaba689308c4776a412_Doratura%20caratteristiche%20e%20tecniche%20nel%20restauro%20e%20nella%20decorazione.jpg',
      'https://www.dorarte.com/images/doratura/doratura-a-missione.jpg',
      'https://bazardelpittore.wordpress.com/wp-content/uploads/2014/07/2_doratura-missione.jpg',
    ],
  },
  // Tecniche di Intaglio
  {
    id: 5,
    nome: 'Intaglio',
    descrizione: `<div>
    <p style="font-family: Arial, sans-serif; line-height: 1.6; ">
        <strong>L'intaglio</strong>, un'arte che vive nel tempo.
    </p>
    <p style="font-family: Arial, sans-serif; line-height: 1.6; ">
        Ogni pezzo che creo è un omaggio alla tradizione dell'intaglio, un'arte che tramanda nel legno l'anima dell'artigiano.
    </p>
    <p style="font-family: Arial, sans-serif; line-height: 1.6; ">
        Con pazienza e maestria, trasformo semplici blocchi di legno in opere uniche, dove ogni venatura racconta una storia.
    </p>
</div>

`,
    macrotipoId: 2,
    immagini: [
      'https://static.cuneodice.it/cuneo/foto/3104/2599.jpg',
      'https://www.megahub.it/wordpress/wp-content/uploads/2017/06/incisione.png',
      'https://www.tavolobello.com/public/Files/rif000002/627/legno-intagliato.jpg',
      'https://www.lignoma.com/images/content/magazin/schnitzen-lernen-2.jpg',
    ],
  },

  // Tecniche di Restauro
  {
    id: 9,
    nome: 'Restauro ligneo',
    descrizione: `<div>
    <p style="font-family: Arial, sans-serif; line-height: 1.6; ">
        <strong>Il restauro</strong> è un’arte che richiede dedizione e precisione, attraverso la quale si conserva o restituisce all'opera il suo stato originario.
    </p>
    <p style="font-family: Arial, sans-serif; line-height: 1.6; ">
        Ogni intervento è studiato ad hoc, tenendo conto delle caratteristiche uniche dell’opera e delle richieste del Cliente.
    </p>
    <p style="font-family: Arial, sans-serif; line-height: 1.6; ">
        Con passione e maestria, <strong>Crearte</strong> si dedica al restauro stilistico e conservativo di opere d'arte e beni culturali.
    </p>
    <p style="font-family: Arial, sans-serif; line-height: 1.6; ">
        Grazie a un'esperienza pluriennale e alla conoscenza profonda delle tecniche tradizionali, <strong>Crearte</strong> è in grado di ridare vita a oggetti che hanno segnato la storia, preservandone l'autenticità e la bellezza.
    </p>
</div>
`,
    macrotipoId: 3,
    immagini: [
      'https://media.adeo.com/media/2935850/media.jpeg?precrop=3666,3666,x995,y0&width=640&quality=75&width=640',
      'https://www.sborgia.com/wp-content/uploads/2022/09/guida-ferramenta-consigli-per-il-restauro-di-mobili.jpg',
      'https://www.fioreantichita.com/wp-content/uploads/2014/03/restauro-mobile.jpg',
      'https://danielecorsi.com/wp-content/uploads/2020/05/restauro-intarsio-milano.jpg',
    ],
  },

  // Cornici
  {
    id: 10,
    nome: 'Cornici',
    descrizione: `<div>
    <p style="font-family: Arial, sans-serif; line-height: 1.6; ">
        <strong>Ogni opera d'arte</strong> merita una cornice che ne esalti la bellezza e le caratteristiche stilistiche e storiche in modo armonico ed equilibrato.
    </p>
    <p style="font-family: Arial, sans-serif; line-height: 1.6; ">
        <strong>Crearte</strong> è un laboratorio artistico con una lunga tradizione nella riproduzione e nella creazione di cornici su misura. Ogni cornice è un pezzo unico, lavorato a mano con passione e maestria, per garantire un risultato che rispetti la storia e l'originalità dell'opera.
    </p>
    <p style="font-family: Arial, sans-serif; line-height: 1.6; ">
        La nostra profonda conoscenza dei diversi stili e delle tecniche di lavorazione ci permette di creare cornici che rispettano i canoni estetici e storici dell'epoca.
    </p>
    <p style="font-family: Arial, sans-serif; line-height: 1.6; ">
        Antiche, moderne, barocche o futuristiche: <strong>Crearte</strong> vi offre un ampio catalogo di modelli tra cui scegliere, guidandovi nella scelta della cornice più adatta a completare la vostra opera, valorizzandola ed esaltandone l’anima.
    </p>
</div>
`,
    macrotipoId: 4,
    immagini: [
      'https://media.adeo.com/media/2935850/media.jpeg?precrop=3666,3666,x995,y0&width=640&quality=75&width=640',
      'https://www.sborgia.com/wp-content/uploads/2022/09/guida-ferramenta-consigli-per-il-restauro-di-mobili.jpg',
      'https://www.fioreantichita.com/wp-content/uploads/2014/03/restauro-mobile.jpg',
      'https://danielecorsi.com/wp-content/uploads/2020/05/restauro-intarsio-milano.jpg',
    ],
  },
];

/**
 *
 * @returns tutte le tecniche formattate in maniera corretta
 */
export const getTecniche = () => {
  const tecnicheExport: exportedTecnica[] = tecniche.map((tecnica) => {
    return {
      ...tecnica,
      macrotipo: macrotipiTecnica[tecnica.macrotipoId - 1],
    };
  });

  return tecnicheExport;
};

/**
 *
 * @returns Le tecniche raggruppate per il macrotipo
 */
export const getTenicheGrouped = () => {
  const tecniche = getTecniche();

  // Raggruppa i dati per id del macrotipo
  const grouped = _.groupBy(
    tecniche,
    (item: exportedTecnica) => item.macrotipo.id
  ) as Record<string, exportedTecnica[]>;

  // Trasforma il risultato in un array di nuovoTipo
  return Object.values(grouped).map((group) => {
    const { macrotipo } = group[0]; // Il macrotipo è lo stesso per tutti gli elementi del gruppo
    const dati = group.map(({ id, nome, descrizione, immagini }) => ({
      id,
      nome,
      descrizione,
      immagini,
    }));

    return { macrotipo, dati };
  });
};

// Esportazione delle liste per usarle altrove
export { macrotipiTecnica, tecniche };
