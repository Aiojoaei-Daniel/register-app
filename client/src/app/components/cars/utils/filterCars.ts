export const filterCars = (
  value: any,
  key: string,
  cars: any,
  searchValuesInput: any
) => {
  let filteredCars: any = [];
  let searchValues: any = {};

  switch (key) {
    case 'brand':
      filteredCars = cars.filter((car: any) =>
        car.brand.toLowerCase().includes(value.toLowerCase())
      );
      searchValues = {
        brand: searchValuesInput.brand,
        model: '',
        productionYear: '',
        cc: '',
        tax: '',
      };
      break;
    case 'model':
      filteredCars = cars.filter((car: any) =>
        car.model.toLowerCase().includes(value.toLowerCase())
      );
      searchValues = {
        brand: '',
        model: searchValuesInput.model,
        productionYear: '',
        cc: '',
        tax: '',
      };
      break;
    case 'productionYear':
      filteredCars = cars.filter((car: any) =>
        car.productionYear.toLowerCase().includes(value.toLowerCase())
      );
      searchValues = {
        brand: '',
        model: '',
        productionYear: searchValues.productionYear,
        cc: '',
        tax: '',
      };
      break;
    case 'cc':
      filteredCars = cars.filter((car: any) =>
        JSON.stringify(car.cc).toLowerCase().includes(value.toLowerCase())
      );
      searchValues = {
        brand: '',
        model: '',
        productionYear: '',
        cc: searchValuesInput.cc,
        tax: '',
      };
      break;
    case 'tax':
      filteredCars = cars.filter((car: any) =>
        JSON.stringify(car.tax).toLowerCase().includes(value.toLowerCase())
      );
      searchValues = {
        brand: '',
        model: '',
        productionYear: '',
        cc: '',
        tax: searchValuesInput.tax,
      };
      break;
    default:
      break;
  }
  return { filteredCars, searchValues };
};
