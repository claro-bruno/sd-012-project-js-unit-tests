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

const average = (numbers) => { // Cria uma arrow function 'avarage' recebendo parametro 'numbers'
  if (numbers.length === 0) return undefined; // Se 'numbers' nao tiver nenhum valor, retornar 'undefined'
  let soma = 0; // Define variavel 'soma' como 0 (sem valor)
  for (let i = 0; i < numbers.length; i += 1) { // Laco de repeticao para passar pelo index
    if (typeof (numbers[i]) !== 'number') return undefined; // Se o tipo do parametro 'number' for diferente de numero, retorna 'undefined'
    soma += numbers[i]; // variavel 'soma' se torna ela mesma + o index 'i' do parametro 'numbers'
  }
  return Math.round(soma / numbers.length); // arredonda o valor para o inteiro mais proximo do resultado da variavel 'soma' dividido pelo tamanho de do parametro 'numbers'  (logica solicitada para a funcao) 
};

module.exports = average; // exporta o component
