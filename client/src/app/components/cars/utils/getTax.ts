export const getTax = (cc: any) => {
  if (cc < 100) return;

  if (cc < 1500) {
    return 50;
  } else if (cc > 2000) {
    return 200;
  }
  return 100;
};
