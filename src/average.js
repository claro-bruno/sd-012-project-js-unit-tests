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

const assert = require('assert');
let count = require('console');

const average = (array) => {
  count = array.length;
  let number = 0;

  if (typeof array !== 'object' || count === 0) {
    return undefined;
  }

  for (let value of array) {
    if (typeof value !== 'number') {
      return undefined;
    }
    number += value;
  }
  return Math.round(number / count);
};

module.exports = average;
