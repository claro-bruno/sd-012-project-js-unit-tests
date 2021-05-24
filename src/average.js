  // A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  // Caso a função receba algum valor não númerico ou um array vazio,
  // o valor undefined deve ser retornado.
  // Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  // Parâmetros:
  // - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  // Comportamento:
  // - average([2, 2]) // Retorno: 2;
  // - average([1, 1]) // Retorno: 1;
  // - average([1, '2']) // Retorno: undefined;

  const average = (myarrey) => {
    if (myarrey.length === 0) {
      return undefined;
    }
    let input = myarrey;
    let count = 0;
    for (let index = 0; index < input.length; index += 1) {
      let element = input[index];
      if (typeof element === 'number') {
        count += element;
      } else {
        return undefined;
      }
    }
    let result = Math.round(count / input.length);
    return result;
  };
  const list = [1, 2, 3, 4, 5];

  console.log(average(list));
  module.exports = average;