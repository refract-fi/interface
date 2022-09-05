export const formatMoment = (moment: string) => {
  return moment.replace('an ', '1 ').replace('a ', '1 ').toUpperCase();
};
