const average = (array) => {
  let sum = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (typeof (array[index]) !== 'number') return undefined;
    sum += array[index];
    }
  return sum / array.length;
};

module.exports = average;
