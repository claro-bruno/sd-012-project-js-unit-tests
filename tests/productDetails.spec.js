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

const result1 = productDetails('Alcool gel', 'Máscara')[0]
const result2 = productDetails('Alcool gel', 'Máscara')[1]

const id1 = result1.details.productId
const id2 = result2.details.productId

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.strictEqual(Array.isArray(productDetails('Alcool gel', 'Máscara')), true)
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('Alcool gel', 'Máscara').length, 2)
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof result1 === 'object' && typeof result2 === 'object', true)
    // Teste que os dois objetos são diferentes entre si.
    assert.strictEqual(result1 !== result2, true)
    // (Difícil) Teste que os dois productIds terminam com 123.
    assert.strictEqual(id1.slice(id1.length - 3) === '123' && id2.slice(id2.length - 3) === '123', true)
  });
});
