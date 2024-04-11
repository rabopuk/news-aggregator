export const pluralizeResults = count => {
  const cases = [2, 0, 1, 1, 1, 2];
  const titles = ['результат', 'результата', 'результатов'];
  return titles[(count % 100 > 4 && count % 100 < 20) ?
    2 :
    cases[(count % 10 < 5) ? count % 10 : 5]];
};
