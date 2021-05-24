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

const average = (numbers) => {
  let sum = 0;
  const allNumbers = numbers.length;
  for (let index = 0; index < numbers.length; index += 1) {
    if (typeof numbers[index] !== 'number' || numbers.length === 0) {
      return undefined;
    } else {
      sum = sum + numbers[index];
    }
  }
  let result = sum / allNumbers;
  if (result < 0) {
    return "0";
  } else {
    return Math.round(result);
  }
};
console.log(average([0, 0, 0, "20", 1]));

module.exports = average;
