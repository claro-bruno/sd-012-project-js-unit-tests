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
const getLenght = (arr) => {
  let count = 0;
  for (let i of arr) count += 1;
  return count;
};

const average = (arr) => {
  let media = 0;
  if (getLenght(arr) === 0 || typeof (arr) !== 'object') {
    return undefined;
  }
  for (let item of arr) {
    if (typeof (item) !== 'number') return undefined;
    media += item;
  }
  media /= getLenght(arr);
  return media.toFixed();
};

module.exports = average;
