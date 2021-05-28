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
  // testa se o array está vazio
  if (array.length === 0) {
    return undefined;
  }
  
  // contador inicial dos valores
  let count = 0;

  // criar um for para verificar se algum ítem não é número. Caso todos os itens sejam numeros some-os de um em um
  for (let index = 0; index < array.length; index += 1) {
    if (typeof array[index] !== 'number') {
      return undefined;
    }
    // some todos os ítens do array
    count += array[index];
  }

  // faça a média dividindo a soma de todos os ítens pela quantidade de intens no array
  let media = count / array.length;
  // faça a média ser arredondada para o inteiro mais próximo
  let mediaCeil = Math.round(media);
  // retorne a média arredondada
  return mediaCeil;
};

module.exports = average;
