export const getCurrentDate = () => {
  const current = new Date();

  const currentDate = {
    day: current.getDate(),
    month: current.getMonth() + 1,
    year: current.getFullYear(),
  };

  return currentDate;
};
