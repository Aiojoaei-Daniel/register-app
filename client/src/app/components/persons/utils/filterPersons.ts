export const filterPersons = (
  value: any,
  key: string,
  persons: any,
  searchValuesInput: any
) => {
  let filteredPersons: any = [];
  let searchValues: any = {};

  switch (key) {
    case 'name':
      filteredPersons = persons.filter((person: any) =>
        (person.firstName + ' ' + person.lastName)
          .toLowerCase()
          .includes(value.toLowerCase())
      );
      searchValues = {
        name: searchValuesInput.name,
        personalId: '',
        age: '',
        cars: '',
      };
      break;
    case 'personalId':
      filteredPersons = persons.filter((person: any) =>
        person.personalId.toLowerCase().includes(value.toLowerCase())
      );
      searchValues = {
        name: '',
        personalId: searchValuesInput.personalId,
        age: '',
        cars: '',
      };
      break;
    case 'age':
      filteredPersons = persons.filter((person: any) =>
        JSON.stringify(person.age).toLowerCase().includes(value.toLowerCase())
      );
      searchValues = {
        name: '',
        personalId: '',
        age: searchValuesInput.age,
        cars: '',
      };
      break;
    case 'cars':
      filteredPersons = persons.filter((person: any) =>
        JSON.stringify(person.cars).toLowerCase().includes(value.toLowerCase())
      );
      searchValues = {
        name: '',
        personalId: '',
        age: '',
        cars: searchValuesInput.cars,
      };
      break;
    default:
      break;
  }
  return { filteredPersons, searchValues };
};
