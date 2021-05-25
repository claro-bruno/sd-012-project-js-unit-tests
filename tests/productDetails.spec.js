const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    /*
      Consultei a seguinte página da internet para resolver este ponto:
      Src: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
    */
    assert.strictEqual(Array.isArray(productDetails()), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails().length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof productDetails(), 'object');
    // Teste que os dois objetos são diferentes entre si.
    /*
      Consultei o repositório do Ramon Paschoal:
      Src: https://github.com/tryber/sd-012-project-js-unit-tests/pull/117/commits/ce6777ab76512eb9b0077c9793b03a74107dad6c

      Consultei o site:
      Link: https://danvitoriano.medium.com/igualdade-entre-objetos-9e1104bd23ea#:~:text=No%20mundo%20JavaScript%2C%20n%C3%A3o%20existe,utilizado%20%C3%A9%20equals%20ou%20isEquals%20.&text=O%20m%C3%A9todo%20stringify%20da%20classe,se%20dois%20objetos%20s%C3%A3o%20iguais. para resolver este ponto.
    */
    assert.notStrictEqual(JSON.stringify(productDetails()[0]) === JSON.stringify(productDetails()[1]), false);
    // (Difícil) Teste que os dois productIds terminam com 123.
  });
});
