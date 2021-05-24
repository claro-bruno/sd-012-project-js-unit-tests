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
  let resultado = 0;
  if (array.length === 0) {
    return undefined;
  }
    for (let i in array) {
      if (typeof (array[i]) === 'number') {
        resultado += array[i];
      } else {
        return undefined;
      }
  }
  resultado /= array.length;
  return Math.round(resultado);
};
module.exports = average;