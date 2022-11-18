export const getBirthDate = (personalId: string, currentYear: number) => {
  const age: any = {
    day: 0,
    month: 0,
    year: 0,
  };

  const DAY_NUMBER = 31;
  const MONTH_NUMBER = 12;
  const BEFORE_2000 = ['1', '2'];
  const AFTER_2000 = ['5', '6'];

  if (BEFORE_2000.includes(personalId[0]))
    age.year = 1900 + parseInt(personalId[1] + personalId[2]);
  else if (AFTER_2000.includes(personalId[0]))
    age.year = 2000 + parseInt(personalId[1] + personalId[2]);
  else return null;

  age.day = parseInt(personalId[5] + personalId[6]);
  age.month = parseInt(personalId[3] + personalId[4]);

  if (
    age.day > DAY_NUMBER ||
    age.month > MONTH_NUMBER ||
    age.year > currentYear
  )
    return null;

  return age;
};
