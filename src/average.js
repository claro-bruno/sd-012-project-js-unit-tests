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
// recorri aos exercicios do Julio Barros e Henrique Alarcon para solucionar requisito

const average = (array) => {
   let soma = 0;
   for (let index = 0; index < array.length; index += 1) {
     if (array[index] === 0) {
    return undefined;
   }
   if (typeof array[index] !== 'number') {
    return undefined;
  }
   soma += array[index];
  }
  let mediaArray = Math.round(soma / array.length);
    return mediaArray;
};
// console.log(average([-11, 2, 5]));
module.exports = average;
