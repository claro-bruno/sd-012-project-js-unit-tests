const assert = require('assert');
const productDetails = require('../src/productDetails');

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    const products = productDetails('x', 'y');
    assert.ok(Array.isArray(products));

    assert.ok(products.length === 2);

    assert.ok(typeof products[0] === 'object' && typeof products[1] === 'object');

    assert.ok(products[0] != products[1]);

    for (let product of products) {
      assert.strictEqual(product.details.productId.endsWith('123'), true);
    }
  });
});
