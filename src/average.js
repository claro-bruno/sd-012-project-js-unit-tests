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

const verifyArray = (arrayNum) => {
  if (arrayNum.length === 0) {
    return undefined;
  }

  for (let index = 0; index < arrayNum.length; index += 1) {
    if (typeof (arrayNum[index]) !== 'number') {
      return undefined;
    }
  }

  return 'a Array é valida';
};

const average = (arrayNum) => {
  if (verifyArray(arrayNum) === undefined) {
    return undefined;
  }

  let sum = 0;
  for (let index = 0; index < arrayNum.length; index += 1) {
    sum += arrayNum[index];
  }

  let averageArray = sum / arrayNum.length;
  return Math.round(averageArray);
};

// console.log(average([3, 4, 5]));

module.exports = average;
