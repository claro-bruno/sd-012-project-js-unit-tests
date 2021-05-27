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
const soma = (num1, num2) => num1 + num2;
const multiplicacao = (num1, num2) => num1 * num2; 
const divisao = (num1, num2) => Math.trunc(num1 / num2);
const subtracao = (num1, num2) => num1 - num2;

const calculator = {
    add: soma,
    mult: multiplicacao,
    div: divisao,
    sub: subtracao,
  };
module.exports = calculator;
