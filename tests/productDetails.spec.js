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
    const array = productDetails('oi','thcau');
    const id1 = array[1].details.productId;
    const id = array[0].details.productId;
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.strictEqual(Array.isArray(productDetails('oi','tchau')), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('oi','tchau').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(typeof productDetails('oi','tchau'), 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notStrictEqual(productDetails('oi','tchau')[0],productDetails('oi','tchau')[1])
    // Teste que os dois productIds terminam com 123.
    assert.strictEqual(id.slice(id.length - 3), '123');
    assert.strictEqual(id1.slice(id1.length - 3), '123');
  });
});
