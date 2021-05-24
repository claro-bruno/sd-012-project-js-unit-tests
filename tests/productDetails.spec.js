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
    const indexP1 = Object.values(productDetails('Pod', 'Ped')[0].details.productId);
    const indexP2 = Object.values(productDetails('Pod', 'Ped')[1].details.productId);
    // Teste que o retorno da função é um array.
    assert.strictEqual(typeof productDetails(), 'object');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(Object.keys(productDetails('P1', 'P2')).length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof Object.entries(productDetails('P1', 'P2')), 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(productDetails('P1', 'P2')[0], productDetails('P1', 'P2')[1]);
    // (Difícil) Teste que os dois productIds terminam com 123. Código refatorado inspirado no código do colega Rodrigo Facury
    assert.strictEqual(indexP1[indexP1.length - 1], '3');
    assert.strictEqual(indexP1[indexP1.length - 2], '2');
    assert.strictEqual(indexP1[indexP2.length - 3], '1');
    assert.strictEqual(indexP2[indexP2.length - 1], '3');
    assert.strictEqual(indexP2[indexP2.length - 2], '2');
    assert.strictEqual(indexP2[indexP2.length - 3], '1');
  });
});
