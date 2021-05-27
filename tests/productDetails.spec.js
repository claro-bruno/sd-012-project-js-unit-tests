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
    const detailProduct = productDetails('Alcool', 'Máscara');
    //mentoria(array.isarray);
    assert.strictEqual(Array.isArray(detailProduct), true);
    assert.strictEqual(detailProduct.length, 2);
    assert.deepStrictEqual(typeof (detailProduct[0]), 'object');
    assert.deepStrictEqual(typeof (detailProduct[1]), 'object');
    assert.notDeepStrictEqual((detailProduct[0]), (detailProduct[1]));
    //mentoria (dificil)(endswith);
    assert.strictEqual(detailProduct[0].details.productID.endswith('123'), true);
    assert.strictEqual(detailProduct[1].details.productID.endswith('123'), true);


    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    // Teste que o array retornado pela função contém dois itens dentro.
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    // Teste que os dois objetos são diferentes entre si.
    // (Difícil) Teste que os dois productIds terminam com 123.
  });
});
