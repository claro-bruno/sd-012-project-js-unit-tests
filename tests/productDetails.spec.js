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
    const verifyDetails = productDetails('Máscara','Sabonete');
    assert.deepStrictEqual(typeof(verifyDetails), 'object');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(verifyDetails.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(typeof(verifyDetails[0]), 'object');
    assert.deepStrictEqual(typeof(verifyDetails[1]), 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.deepStrictEqual(verifyDetails[1] !== verifyDetails[0], true);
    // (Difícil) Teste que os dois productIds terminam com 123.
    const pro1length = verifyDetails[0].details.productId.length;
    const pro2length = verifyDetails[1].details.productId.length;
    const product1ID = `${verifyDetails[0].details.productId[pro1length - 3]}${verifyDetails[0].details.productId[pro1length - 2]}${verifyDetails[0].details.productId[pro1length - 1]}`;
    const product2ID = `${verifyDetails[1].details.productId[pro2length - 3]}${verifyDetails[1].details.productId[pro2length - 2]}${verifyDetails[1].details.productId[pro2length - 1]}`;
    assert.deepStrictEqual(product1ID === '123' && product2ID === '123', true);
  });
});
