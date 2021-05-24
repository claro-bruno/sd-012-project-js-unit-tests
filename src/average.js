const average = (array) => {
  let sum = 0;
  if (array.length === 0) return undefined;
  for (let index = 0; index < array.length; index += 1) {
    if ((typeof (array[index]) !== 'number')) return undefined;
    sum += array[index];
    }
  return Math.round(sum / array.length);
};

module.exports = average;
