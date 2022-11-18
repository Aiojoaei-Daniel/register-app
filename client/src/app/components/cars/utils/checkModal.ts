export const checkModalInputs = (car: any) => {
  let messageError = 'Campul/campuri necompletate sau completate gresit: ';
  const errors = [];

  let currentDate = new Date();

  if (car.brand.length < 1) errors.push('  *Denumire marca');
  if (car.model.length < 1) errors.push('  *Denumire model');
  if (
    parseInt(car.productionYear) < 1000 ||
    parseInt(car.productionYear) > currentDate.getFullYear()
  )
    errors.push('  *Anul fabricatiei');
  if (parseInt(car.cc) < 100 || parseInt(car.cc) > 9999)
    errors.push('  *Capacitatea cilindrica');
  if (parseInt(car.tax) < 1 || parseInt(car.tax) > 9999)
    errors.push('  *Taxa de impozit');

  for (let error of errors) {
    messageError += error;
  }

  return errors.length === 0 ? null : messageError;
};
