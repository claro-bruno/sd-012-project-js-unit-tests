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

  if (array.length === 0) {
    return undefined;
  }
  for (let i = 0; i < array.length; i += 1) {
    if (typeof array[i] !== 'number') {  
    return undefined;
    }
    soma += array[i];
  }
    let media = soma / array.length; 
    return Math.round(media);
};
module.exports = average;

console.log(average([3, 4, 5]), 4);
console.log(average([1, 2, 3, '4', 5]), undefined);
console.log(average([0, 0, 0, 0, 0, 0, 0]), 0);
console.log(average([1, 2, '3']), undefined);
console.log(average([1, 2, 3]), 2);
console.log(average([0, 0, 0, 0, 0, 0, 1]), 0);

console.log(average([]), undefined);
console.log(average([' ']), undefined);
console.log(average(['um', 'dois', 'tres']), undefined);
console.log(average([47, 63, 122]), 77);

console.log(average([-11, 2, 5]), -1);

   console.log(average([-11, -5, 2]), -5);