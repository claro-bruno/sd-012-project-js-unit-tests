const average = (array) => {
  let result = 0;
  let soma = 0;
  if (array.length === 0) {
    return undefined;
  }
  for (let index = 0; index < array.length; index += 1) {
    if (typeof array[index] === 'number') {
      soma += array[index];
    } else {
      return undefined;
    }
  }
    result = Math.round((soma / array.length));
    return result;
};

module.exports = average;
