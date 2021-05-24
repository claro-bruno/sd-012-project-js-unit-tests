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

const addF = (n1, n2) => n1 + n2;
const multF = (n1, n2) => n1 * n2;
const divF = (n1, n2) => Math.floor(n1 / n2);
const subF = (n1, n2) => n1 - n2;

console.log(divF(5, 2));

const calculator = {
  add: addF,
  mult: multF,
  div: divF,
  sub: subF,
};

module.exports = calculator;
