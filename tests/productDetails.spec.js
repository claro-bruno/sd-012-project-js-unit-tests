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
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    // Teste que o array retornado pela função contém dois itens dentro.
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    // Teste que os dois objetos são diferentes entre si.
<<<<<<< HEAD
    // (Difícil) Teste que os dois productIds terminam com 123.
    const products = productDetails('Alcool gel', 'Máscara');
    assert.strictEqual(typeof products, 'object');
    assert.strictEqual(Object.keys((products)).length, 2);
    assert.strictEqual(typeof products[0], 'object');
    assert.strictEqual(typeof products[1], 'object');
    assert.notDeepStrictEqual(products[0], products[1]);
    assert.strictEqual(products[0]['details']['productId'].endsWith('123'), true);
    assert.strictEqual(products[1]['details']['productId'].endsWith('123'), true);
=======
    // Teste que os dois productIds terminam com 123.
>>>>>>> master
  });
});
