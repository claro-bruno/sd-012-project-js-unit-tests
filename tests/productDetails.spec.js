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
    const prodfunc = productDetails('Alcool gel', 'Máscara');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.strictEqual(typeof (prodfunc), 'object');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(prodfunc.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof Object.keys(prodfunc), 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notStrictEqual(Object.entries(prodfunc[0]), Object.entries(prodfunc[1]));
    // (Difícil) Teste que os dois productIds terminam com 123.
    const id1 = prodfunc[0].details.productId.endsWith('123');
    const id2 = prodfunc[1].details.productId.endsWith('123');
    assert.ok(productDetails(id1 && id2, true));
  });
});