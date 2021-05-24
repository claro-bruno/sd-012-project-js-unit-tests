const average = (avrg) => {
  if (avrg.length === 0) {
    return undefined;
  }
  for (let index = 0; index < avrg.length; index += 1) {
    if (typeof avrg[index] !== 'number') {
      return undefined;
    }
  }
  let total = 0;
  for (let index = 0; index < avrg.length; index += 1) {
    total += avrg[index];
  }
  total /= avrg.length;
  return Math.round(total);
};
console.log(average([1, 2, 3, 4, 5, 6, 7, 35, 0.5]));

module.exports = average;