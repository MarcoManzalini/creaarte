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
        Nel corso degli anni <strong><i>Crearte</i></strong> ha evoluto una profonda conoscenza sia nella tecnica più comune chiamata "<em>a missione</em>", sia nella tecnica "<em>a guazzo</em>" più antica e affascinante, con l'utilizzo della foglia d'oro zecchino o argento.
    </p>
    <p style="font-family: Arial, sans-serif; line-height: 1.6;">
        Ogni pezzo è un viaggio nel tempo, un omaggio alla maestria degli antichi artigiani.
    </p>
</div>
`,
    macrotipoId: 1,
    immagini: [
      '/assets/tecniche/doratura/doratura_1.jpg',
      '/assets/tecniche/doratura/doratura_2.jpg',
      '/assets/tecniche/doratura/doratura_3.jpg',
      '/assets/tecniche/doratura/doratura_4.jpg',
      '/assets/tecniche/doratura/doratura_5.jpg',
      '/assets/tecniche/doratura/doratura_6.jpg',
      '/assets/tecniche/doratura/doratura_7.jpg',
      '/assets/tecniche/doratura/doratura_8.jpg',
      '/assets/tecniche/doratura/doratura_9.jpg',
      '/assets/tecniche/doratura/doratura_10.jpg',
      '/assets/tecniche/doratura/doratura_11.jpg',
      '/assets/tecniche/doratura/doratura_12.jpg',
      '/assets/tecniche/doratura/doratura_13.jpg',
      '/assets/tecniche/doratura/doratura_14.jpg',
      '/assets/tecniche/doratura/doratura_15.jpg',
    ],
  },
  // Tecniche di Intaglio
  {
    id: 5,
    nome: 'Intaglio',
    descrizione: `<div>
    <p style="font-family: Arial, sans-serif; line-height: 1.6;">
      Grazie alla collaborazione con <strong> artigiani maestri dell’intaglio</strong>, tecnica attraverso la quale si scalfisce il legno attraverso l’utilizzo di scalpelli e sgorbie, <i>Crearte</i> realizza cornici interamente scolpite a mano, siano esse riproduzioni perfettamente fedeli all’originale, nel rispetto dell’epoca storica dell’opera da incorniciare, o nuovi modelli dalle linee e forme contemporanee su progetto e richiesta del Cliente.
    </p>
</div>
`,
    macrotipoId: 2,
    immagini: [
      '/assets/tecniche/intaglio/intaglio_1.jpg',
      '/assets/tecniche/intaglio/intaglio_2.jpg',
      '/assets/tecniche/intaglio/intaglio_3.jpg',
      '/assets/tecniche/intaglio/intaglio_4.jpg',
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
        Con passione e maestria, <strong><i>Crearte</i></strong> si dedica al restauro stilistico e conservativo di opere d'arte e beni culturali.
    </p>
    <p style="font-family: Arial, sans-serif; line-height: 1.6; ">
        Grazie a un'esperienza pluriennale e alla conoscenza profonda delle tecniche tradizionali, <strong><i>Crearte</i></strong> è in grado di ridare vita a oggetti che hanno segnato la storia, preservandone l'autenticità e la bellezza.
    </p>
</div>
`,
    macrotipoId: 3,
    immagini: [
      '/assets/tecniche/restauro/restauro_1.jpg',
      '/assets/tecniche/restauro/restauro_2.jpg',
      '/assets/tecniche/restauro/restauro_3.jpg',
      '/assets/tecniche/restauro/restauro_4.jpg',
      '/assets/tecniche/restauro/restauro_5.jpg',
      '/assets/tecniche/restauro/restauro_6.jpg',
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
        <strong><i>Crearte</i></strong> è un laboratorio artistico con una lunga tradizione nella riproduzione e nella creazione di cornici su misura. Ogni cornice è un pezzo unico, lavorato a mano con passione e maestria, per garantire un risultato che rispetti la storia e l'originalità dell'opera.
    </p>
    <p style="font-family: Arial, sans-serif; line-height: 1.6; ">
        La nostra profonda conoscenza dei diversi stili e delle tecniche di lavorazione ci permette di creare cornici che rispettano i canoni estetici e storici dell'epoca.
    </p>
    <p style="font-family: Arial, sans-serif; line-height: 1.6; ">
        Antiche, moderne, barocche o futuristiche: <strong><i>Crearte</i></strong> vi offre un ampio catalogo di modelli tra cui scegliere, guidandovi nella scelta della cornice più adatta a completare la vostra opera, valorizzandola ed esaltandone l’anima.
    </p>
</div>
`,
    macrotipoId: 4,
    immagini: [
     '/assets/cornici/cornici_1.jpg',
     '/assets/cornici/cornici_2.jpg',
     '/assets/cornici/cornici_3.jpg',
     '/assets/cornici/cornici_4.jpg',
     '/assets/cornici/cornici_5.jpg',
     '/assets/cornici/cornici_6.jpg',
     '/assets/cornici/cornici_7.jpg',
     '/assets/cornici/cornici_8.jpg',
     '/assets/cornici/cornici_9.jpg',
     '/assets/cornici/cornici_10.jpg',
     '/assets/cornici/cornici_11.jpg',
     '/assets/cornici/cornici_12.jpg',
     '/assets/cornici/cornici_13.jpg',
     '/assets/cornici/cornici_14.jpg',
     '/assets/cornici/cornici_15.jpg',
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
