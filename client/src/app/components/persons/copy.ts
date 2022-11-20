export const ERRORS = {
  LOADING_DATA: 'Eroare la preluarea persoanelor!',
  WRONG_PERSONAL_ID: 'Cnp gresit!',
  TOO_YOUNG: 'Trebuie sa ai minim 18 ani!',
  NO_ERRORS: 'no errors',
};

export const CONFIRM_DIALOG = {
  TITLE: 'Ștergere persoană',
  BODY: 'Doriți să ștergeți persoana cu numele',
};

export const TOAST = {
  SAVE: {
    SUCCESS: 'Persoana a fost salvată cu succes!',
    ERROR: 'Eroare la salvarea persoanei!',
  },
  EDIT: {
    SUCCESS: 'Persoana a fost modificată cu succes!',
    ERROR: 'Eroare la modificarea persoanei!',
  },
  DELETE: {
    SUCCESS: 'Persoana a fost ștearsă cu succes!',
    ERROR: 'Eroare la ștergerea persoanei!',
  },
};

export const PATH = 'persons';

export const CAR_OPTIONS: any[] = [
  {
    brand: 'Skoda',
    cc: '1.9',
    model: 'Octavia',
    car_id: '21331231',
    productionYear: '2013',
    tax: '1000',
  },
  {
    brand: 'Dacia',
    cc: '1.0',
    model: 'Sandero',
    car_id: '3123211',
    productionYear: '2010',
    tax: '500',
  },
  {
    brand: 'BMW',
    cc: '3.0',
    model: 'X6',
    car_id: '33121231',
    productionYear: '2020',
    tax: '1500',
  },
];

export const HEADERS_CARS_OPTION = [
  { text: 'Denumire marcă / denumire model' },
  { text: 'Anul fabricației' },
  { text: 'Capacitatea cilindrică' },
  { text: 'Taxa de impozit (lei)' },
];

export const HEADERS_TABLE_BODY = {
  currentNumber: 'Nr. Crt.',
  name: 'Nume / Prenume',
  personalId: 'CNP',
  age: 'Vârsta',
  cars: 'Lista mașinilor aflate în proprietate',
  editDelete: 'Modifică / Șterge',
};

export const SEARCH_FILTERS = [
  { name: 'name', placeholder: 'Căutare dupa nume...', property: 'name' },
  {
    name: 'personalId',
    placeholder: 'Căutare dupa CNP...',
    property: 'personalId',
  },
  {
    name: 'age',
    placeholder: 'Căutare dupa vârstă...',
    property: 'age',
  },
];

export const CAR_FILTERS = [
  { name: 'carName', placeholder: 'Căutare dupa denumirea mașinii...' },
  { name: 'productionYear', placeholder: 'Căutare dupa anul de productie...' },
  { name: 'cc', placeholder: 'Căutare dupa capacitatea cilindrică...' },
  { name: 'tax', placeholder: 'Căutare dupa taxă...' },
];

export const TABLE_TEXT = {
  TITLE: 'Persoane',
  BTN_ADD: 'Adaugă',
  BTN_REMOVE_FILTERS: 'Șterge filtrele',
  NO_DATA: 'Date inexistente!',
};

export const MODAL_TEXT = {
  EDIT: 'Modificare informație',
  ADD: 'Adăugare informație',
  SAVE: 'Salvează',
  CANCEL: 'Renunță',
};
