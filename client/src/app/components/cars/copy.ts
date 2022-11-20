export const ERRORS = {
  LOADING_DATA: 'Eroare la preluarea mașinilor!',
  NO_ERRORS: 'no errors',
};

export const CONFIRM_DIALOG = {
  TITLE: 'Ștergere date mașina',
  BODY: 'Doriți să ștergeți datele mașinii',
};

export const TOAST = {
  SAVE: {
    SUCCESS: 'Datele au fost salvate cu succes!',
    ERROR: 'Eroare la salvarea datelor!',
  },
  EDIT: {
    SUCCESS: 'Datele au fost modificate cu succes!',
    ERROR: 'Eroare la modificarea datelor!',
  },
  DELETE: {
    SUCCESS: 'Datele au fost ștearse cu succes!',
    ERROR: 'Eroare la ștergerea datelor!',
  },
};

export const PATH = 'cars';

export const HEADERS = [
  { text: 'Nr. Crt.', width: '50xp', rowspan: '2' },
  { text: 'Denumire marcă', width: '100xp', rowspan: '1' },
  { text: 'Denumire model', width: '100xp', rowspan: '1' },
  { text: 'Anul fabricației', width: '60xp', rowspan: '1' },
  { text: 'Capacitatea cilindrică', width: '60xp', rowspan: '1' },
  { text: 'Taxa de impozit (lei)', width: '60xp', rowspan: '1' },
  { text: 'Modifică / Șterge', width: '50xp', rowspan: '1' },
];

export const SEARCH_FILTERS = [
  { name: 'brand', placeholder: 'Căutare dupa marcă...', property: 'brand' },
  { name: 'model', placeholder: 'Căutare dupa model...', property: 'model' },
  {
    name: 'productionYear',
    placeholder: 'Căutare dupa anul de producție...',
    property: 'productionYear',
  },
  {
    name: 'cc',
    placeholder: 'Căutare dupa capacitatea cilindrică...',
    property: 'cc',
  },
  { name: 'tax', placeholder: 'Căutare dupa taxă...', property: 'tax' },
];

export const TABLE_DATA = [
  { width: '49px', property: 'id' },
  { width: '99px', property: 'brand' },
  { width: '98px', property: 'model' },
  { width: '59px', property: 'productionYear' },
  { width: '65px', property: 'cc' },
  { width: '59px', property: 'tax' },
];

export const TABLE_TEXT = {
  TITLE: 'Mașini',
  BTN_ADD: 'Adaugă',
  BTN_REMOVE_FILTERS: 'Șterge filtrele',
  NO_DATA: 'Date inexistente!',
};

export const MODAL_INPUTS = [
  {
    type: 'text',
    name: 'brand',
    property: 'brand',
    placeholder: 'Marcă...',
    label: 'Marcă*',
  },
  {
    type: 'text',
    name: 'model',
    property: 'model',
    placeholder: 'Model...',
    label: 'Model*',
  },
  {
    type: 'number',
    name: 'productionYear',
    property: 'productionYear',
    placeholder: 'Anul de fabricație...',
    label: 'Anul de fabricație*',
  },
  {
    type: 'number',
    name: 'cc',
    property: 'cc',
    placeholder: 'Capacitatea cilindrică...',
    label: 'Capacitatea cilindrică*',
  },
  {
    type: 'number',
    name: 'tax',
    property: 'tax',
    placeholder: 'Taxa de impozit...',
    label: 'Taxa de impozit*',
  },
];

export const MODAL_TEXT = {
  EDIT: 'Modificare informație',
  ADD: 'Adăugare informație',
  SAVE: 'Salvează',
  CANCEL: 'Renunță',
};
