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

const average = (arrayAux) => {
  let somaNumeros = 0;
  // para retornar UNDERFINED quando o array for vazio:
  if (arrayAux.length === 0) {
    return undefined;
  }
  for (let indexArray = 0; indexArray < arrayAux.length; indexArray += 1) {
    if (typeof arrayAux[indexArray] !== 'number') {
      return undefined;
    }
    // soma todos dentro do arrayAux para depois divididir pelo comprimento dele
    somaNumeros += arrayAux[indexArray];
  }
  // math.round e para arredontar o numero se necessario
  return Math.round(somaNumeros / arrayAux.length);
};

module.exports = average;

console.log(average([4, 7, 4, 9, 12]));
console.log(average([4, 7, 4, 9, '12']));