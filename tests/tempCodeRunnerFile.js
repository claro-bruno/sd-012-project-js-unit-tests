const numbers = [50, 85, -30, 3, 15];

const maior = (maiorN, num) => ((maiorN > num) ? maiorN : num);
const maiorN = numbers.reduce(maior, 0);
console.log(maiorN);