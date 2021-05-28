const assert = require('assert');
const { type } = require('os');
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

// Referência: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    Array.isArray(productDetails());
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.deepStrictEqual(typeof productDetails[0] !== undefined && typeof productDetails[1] !== undefined, true);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(typeof productDetails('firstProduct', 'secondProduct')[0] === 'object' && typeof productDetails('firstProduct', 'secondProduct')[1] === 'object', true);
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(productDetails('firstProduct', 'secondProduct')[0], productDetails('firstProduct', 'secondProduct')[1]);
    // Teste que os dois productIds terminam com 123.
    assert.deepStrictEqual(productDetails('firstProduct', 'secondProduct')[0].details.productId === `firstProduct123` && productDetails('firstProduct', 'secondProduct')[1].details.productId === `secondProduct123`, true);
  });
});
