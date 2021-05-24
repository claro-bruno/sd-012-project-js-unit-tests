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

const isNumeric = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (typeof (arr[i]) !== 'number') {
      return false;
    }
  }
  return true;
};

const notEmpty = (arr) => arr.length > 0;

const average = (arr) => {
  if (isNumeric(arr) && notEmpty(arr)) {
    let total = 0;

    for (let i = 0; i < arr.length; i += 1) {
      total += arr[i];
    }
    let result = (total / arr.length);
    return Math.round(result);
  } 
};

module.exports = average;

//  let myArr = [2, 2];
//  let myArr = [];
//  let myArr = [1, 2, 3, '4', 5];
//  let myArr = ['um', 'dois', 'tres'];
//  let myArr = [47, 63, 122];
//  let myArr = [-11, 2, 5]; 
//  let myArr = [-11, -5, 2];
//  console.log(average(myArr));