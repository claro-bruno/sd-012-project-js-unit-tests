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

const average = (array) => {
  const tamanho = array.length;
  if (tamanho === 0) {
    return undefined;
  }
  for (let index of array) {
    if ((typeof index) !== 'number') {
      return undefined;
    } 
  }
  let total = 0;
  for (let index of array) {
    total += index;
    // console.log(typeof index);
  }
  let media = (total / tamanho);
  // console.log(tamanho);
  media = Math.round(media);
  return media;
};
// console.log(average([]));
module.exports = average;
