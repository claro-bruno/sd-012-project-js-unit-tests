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
  let soma = 0;
  let result = 0;
  const tamanhoArray = array.length;
  if (tamanhoArray <= 0) {
    return undefined;
  }
  for (let numeros of array) {
  if (typeof numeros !== 'number') {
    return undefined;
  }
    soma += numeros;
    result = Math.round(soma / array.length);
  }
  return result;
};
console.log(average([0, 0, 0, 0, 0, 0, 1]));
module.exports = average;
