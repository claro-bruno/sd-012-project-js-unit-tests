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
const teste1 = Array.isArray(productDetails());
const teste2 = productDetails('produto1', 'produto2');


describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    assert.strictEqual(teste1, true);
    assert.strictEqual(teste2.length, 2);
    assert.strictEqual(typeof teste2.values(), 'object');
    assert.strictEqual(Object.values(teste2[0]) !== Object.values(teste2[1]), true);
    assert.strictEqual(teste2[0].details.productId.substr(-3), '123');
    assert.strictEqual(teste2[1].details.productId.substr(-3), '123');
  });
});

