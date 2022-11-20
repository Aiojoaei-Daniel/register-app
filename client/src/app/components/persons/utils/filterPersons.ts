export const filterPersons = (persons: any, inputFilters: any) => {
  let filteredPersons: any = persons;

  const filters: any = ['name', 'personalId', 'age'];
  const carFilters: any = ['carName', 'productionYear', 'cc', 'tax'];

  for (let filter of filters) {
    filteredPersons = filteredPersons.filter((person: any) => {
      if (filter === 'name') {
        return (person.firstName + ' ' + person.lastName)
          .toLowerCase()
          .includes(inputFilters[filter].toLowerCase());
      } else if (typeof person[filter] === 'string') {
        return person[filter]
          .toLowerCase()
          .includes(inputFilters[filter].toLowerCase());
      } else if (typeof person[filter] === 'number') {
        return JSON.stringify(person[filter])
          .toLowerCase()
          .includes(inputFilters[filter].toLowerCase());
      }
    });
  }

  for (let carFilter of carFilters) {
    filteredPersons = filteredPersons.filter((person: any) => {
      return person.cars.some((car: any) => {
        if (carFilter === 'carName') {
          return (car.brand + ' ' + car.model)
            .toLowerCase()
            .includes(inputFilters.cars.carName.toLowerCase());
        }
        return JSON.stringify(car[carFilter])
          .toLowerCase()
          .includes(inputFilters.cars[carFilter].toLowerCase());
      });
    });
  }

  return filteredPersons;
};
