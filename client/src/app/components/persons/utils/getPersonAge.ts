export const getPersonAge = (currentDate: any, birthDate: any) => {
  const personAge = {
    days: 0,
    months: 0,
    years: 0,
  };

  let toDecrease = 0;

  // days
  if (currentDate.day - birthDate.day < 0) {
    personAge.days = 31 - Math.abs(currentDate.day - birthDate.day);

    toDecrease = 1;
  } else {
    personAge.days = currentDate.day - birthDate.day;
  }

  // months
  if (currentDate.month - birthDate.month < 0) {
    personAge.months =
      12 - Math.abs(currentDate.month - birthDate.month) - toDecrease;

    toDecrease = 1;
  } else {
    if (currentDate.month - birthDate.month - toDecrease < 0) {
      personAge.months = 12 - toDecrease;
    } else {
      personAge.months = currentDate.month - birthDate.month;

      toDecrease = 0;
    }
  }

  // years
  personAge.years = currentDate.year - birthDate.year - toDecrease;

  return personAge.years > 18 ? personAge : null;
};
