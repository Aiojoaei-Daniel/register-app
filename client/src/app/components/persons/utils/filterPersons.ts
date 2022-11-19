export const filterPersons = (persons: any, searchedValuesInput: any) => {
  let filteredPersons: any = persons;

  let nameProperties = ['name', 'personalId', 'age', 'cars'];

  for (let property of nameProperties) {
    filteredPersons = filteredPersons.filter((person: any) => {
      if (property === 'name') {
        return (person.firstName + ' ' + person.lastName)
          .toLowerCase()
          .includes(searchedValuesInput[property].toLowerCase());
      } else if (typeof person[property] === 'string') {
        return person[property]
          .toLowerCase()
          .includes(searchedValuesInput[property].toLowerCase());
      } else {
        return JSON.stringify(person[property])
          .toLowerCase()
          .includes(searchedValuesInput[property].toLowerCase());
      }
    });
  }

  return filteredPersons;
};
