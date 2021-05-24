const average = (array) => {
  if (array.length === 0) return undefined;
  const sum = array.reduce((a, b) => a + b);
  if (typeof sum !== 'number') return undefined;
  return Math.round(sum / array.length);
};

module.exports = average;
