export const processesCarData = (car: any) => {
  const carData: any = {
    brand: car.brand.toUpperCase(),
    model: car.model.toUpperCase(),
    productionYear: parseInt(car.productionYear),
    cc: parseInt(car.cc),
    tax: parseInt(car.tax),
  };
  return carData;
};
