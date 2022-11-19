export const processesCarData = (car: any) => {
  const carData: any = {
    ...car,
    brand: car.brand.charAt(0).toUpperCase() + car.brand.slice(1),
    model: car.model.charAt(0).toUpperCase() + car.model.slice(1),
    productionYear: parseInt(car.productionYear),
    cc: parseInt(car.cc),
    tax: parseInt(car.tax),
  };
  return carData;
};
