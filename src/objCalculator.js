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
  add(num1, num2) {
    const total = num1 + num2;
    return Math.floor(total);
  },
  mult(num1, num2) {
    const total = num1 * num2;
    return Math.floor(total);
  },
  div(num1, num2) {
    const total = num1 / num2;
    return Math.floor(total);
  },
  sub(num1, num2) {
    const total = num1 - num2;
    return Math.floor(total);
  },
};
console.log(calculator.sub(50, 5));

module.exports = calculator;
