export const checkModalInputs = (person: any) => {
  let messageError = 'Campul/campuri necompletate sau completate gresit: ';
  const errors = [];
  const cars: any = person.cars || [];

  if (person.firstName.length < 2) errors.push('  *Nume');
  if (person.lastName.length < 2) errors.push('  *Prenume');
  if (
    person.personalId.length < 13 ||
    person.personalId.length > 13 ||
    /[a-z]/i.test(person.personalId)
  )
    errors.push('  *Cnp');
  if (person.age < 18) errors.push('  *Varsta');
  if (cars.length < 1) errors.push('  *Masini');

  for (let error of errors) {
    messageError += error;
  }

  return errors.length === 0 ? null : messageError;
};
