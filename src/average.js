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

function checkIfNumber(nums) {

  let isNumber = true;

  if (nums.length < 1) {
    isNumber = false;
  }

  for (let num of nums) {
    if (typeof num !== 'number') {
      isNumber = false;
      break;
    }
  }
  return isNumber;
};

const average = (arr) => {
  let total = 0;

  if (checkIfNumber(arr)) {
    for (let element of arr) {
      total += element;
    } return total / 2;
  } else {
    return undefined;
  }
};

module.exports = average;