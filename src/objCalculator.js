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
  add: (num1, num2) => { return num1 + num2 },;
  mult: (num1, num2) => { return num1 * num2 },;
  div: (num1, num2) => { return Math.trunc(num1 / num2) },;
  sub: (num1, num2) => { return num1 - num2 },;
};
// fonte de conhecimento sobre as abreviações: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Method_definitions
// fonte sobre arredondar para baixo: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc
module.exports = calculator;
