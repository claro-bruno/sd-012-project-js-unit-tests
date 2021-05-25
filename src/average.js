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
  // meu código a qui
  // contador inicial dos valores
  let count = 0;
  // criar um for para calcular a média dos ítens no array
  for (let index = 0; index < array.length; index += 1) {
    // a formula da média é (x1+x2+xn)/qtdn
    // some todos os ítens do array
    count += array[index];
  }
  // faça a média dividindo a soma de todos os ítens pela quantidade de intens no array
  let media = count / (array.length);
  // faça a média ser arredondada para o inteiro mais próximo
  let mediaCeil = Math.round(media);
  // retorne a média arredondada
  return mediaCeil;
};
// console.log(average());
// Criar um array de testes 
// let arrTest = [3, '10', '', 10, '9', 9, 10];
// let arrTest = [3, 10, 9, 10];
// let arrTest = 'teste';
let arrTest = '';
// console.log(typeof(arrTest));
// console.log(average(arrTest));
// criar um for para verificar se algum ítem não é número
for (let index = 0; index < arrTest.length; index += 1) {
  if (typeof (arrTest[index]) !== 'number') {
    console.log('undefined');
    break;
  } else {
    console.log(`${arrTest[index]} é um número`);
  }
}

// console.log(typeof (arrTest[1]));

module.exports = average;