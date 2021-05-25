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
    assert.strictEqual(Array.isArray(productDetails('Alcool gel', 'Máscara')), true)
    assert.strictEqual(productDetails('Alcool gel', 'Máscara').length, 2)
    assert.strictEqual(typeof(productDetails('Alcool gel', 'Máscara')[0]), 'object')
    assert.strictEqual(typeof(productDetails('Alcool gel', 'Máscara')[1]), 'object')
    assert.deepStrictEqual(productDetails('Alcool gel', 'Máscara')[0] !== productDetails('Alcool gel', 'Máscara')[1], true)
    assert.strictEqual((Object.values(productDetails('Alcool gel', 'Máscara')[0].details.productId))
    .slice(Object.values(productDetails('Alcool gel', 'Máscara')[0].details.productId).length - 3)
    .join(''), '123');
    assert.strictEqual((Object.values(productDetails('Alcool gel', 'Máscara')[1].details.productId))
    .slice(Object.values(productDetails('Alcool gel', 'Máscara')[1].details.productId).length - 3)
    .join(''), '123');

  });
});
