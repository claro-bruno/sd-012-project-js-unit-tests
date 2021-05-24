/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

// https://stackoverflow.com/questions/29544371/finding-the-average-of-an-array-using-js/29544442

const average = (nums) => {
  const total = nums.reduce((acc, c) => acc + c, 0);
  if (nums.length === 0) return undefined;
  for (let index = 0; index < nums.length; index += 1) {
    if (typeof nums[index] !== 'number') return undefined;
  }
  return Math.round(total / nums.length);
};
console.log(average([0, 0, 0, 0, 0, 0, 1]));

module.exports = average;
