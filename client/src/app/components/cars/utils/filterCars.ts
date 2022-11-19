export const filterCars = (cars: any, searchedValuesInput: any) => {
  let filteredCars: any = cars;

  let nameProperties = ['brand', 'model', 'productionYear', 'cc', 'tax'];

  for (let property of nameProperties) {
    filteredCars = filteredCars.filter((car: any) => {
      if (typeof car[property] === 'string') {
        return car[property]
          .toLowerCase()
          .includes(searchedValuesInput[property].toLowerCase());
      } else {
        return JSON.stringify(car[property])
          .toLowerCase()
          .includes(searchedValuesInput[property].toLowerCase());
      }
    });
  }

  return filteredCars;
};
