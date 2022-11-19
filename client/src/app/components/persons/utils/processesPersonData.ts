export const processesPersonData = (person: any) => {
  const personData: any = {
    ...person,
    firstName:
      person.firstName.charAt(0).toUpperCase() + person.firstName.slice(1),
    lastName:
      person.lastName.charAt(0).toUpperCase() + person.lastName.slice(1),
    age: parseInt(person.age),
    cars: JSON.stringify(person.cars),
  };
  return personData;
};
