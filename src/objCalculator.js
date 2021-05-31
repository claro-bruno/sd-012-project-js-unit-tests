/*
  Desenvolva um objeto calculator que possui quatro chaves:
    - add;
    - mult;
    - div;
    - sub.
  Para cada uma delas atribua uma função que realiza a respectiva operação.
  A função deve receber dois inteiros e retornar um inteiro.
  Os resultados das divisões devem sempre ser arredondados para baixo.

  Faça as funções com arrow functions!

  Parâmetros:
  - Um número inteiro;
  - Um número inteiro;

  Comportamento:
  calculator.add(1, 1) // Retorno: 2;
  calculator.div(3, 2) // Retorno: 1;
*/

const calculator = {
  add: (n1, n2) => {
    const adicao = n1 + n2;
    return Math.floor(adicao);
  },
 
  mult: (n1, n2) => {
    const multi = n1 * n2;
    return Math.floor(multi);
  },

  div: (n1, n2) => {
    const divisao = n1 / n2;
    return Math.floor(divisao);
  },

  sub: (n1, n2) => {
    const subtracao = n1 - n2;
    return Math.floor(subtracao);
  },
};

module.exports = calculator;
