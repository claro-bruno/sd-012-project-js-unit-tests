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
// Algoritmo do colega Vinicius Naoke
const add = (a, b) => (a + b);
const mult = (a, b) => (a * b);
const div = (a, b) => Math.floor(a / b);
const sub = (a, b) => (a - b);

const calculator = {
  add,
  mult,
  div,
  sub,  
};

module.exports = calculator;
