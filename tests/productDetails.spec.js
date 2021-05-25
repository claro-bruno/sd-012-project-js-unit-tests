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
    assert.strictEqual(typeof productDetails('x', 'y'), 'object');
    assert.strictEqual(productDetails('x', 'y').length, 2);
    assert.strictEqual(typeof productDetails('x', 'y')[0], 'object');
    assert.strictEqual(typeof productDetails('x', 'y')[1], 'object');
    assert.notStrictEqual(productDetails('x', 'y')[0].name, productDetails('x', 'y')[1].name);
    assert.strictEqual(productDetails('x', 'y')[0].details.productId.endsWith(123), true);
    assert.strictEqual(productDetails('x', 'y')[1].details.productId.endsWith(123), true);
  });
});
