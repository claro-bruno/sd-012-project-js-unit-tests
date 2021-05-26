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
    assert.strictEqual(Array.isArray(productDetails('a', 'b')), true);
    assert.strictEqual(productDetails('a', 'b').length, 2);
    assert.strictEqual(typeof productDetails('a', 'b'), 'object');
    assert.strictEqual(productDetails('a', 'b')[0] === productDetails('a', 'b')[1], false);
    assert.strictEqual(productDetails('a', 'b')[0] === productDetails('a', 'b')[1], false);
    assert.strictEqual(/123$/.test(productDetails('a', 'b')[0].details.productId
    || productDetails('a', 'b')[1].details.productId), true);
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    // Teste que os dois objetos são diferentes entre si.
    // (Difícil) Teste que os dois productIds terminam com 123.
  });
});
