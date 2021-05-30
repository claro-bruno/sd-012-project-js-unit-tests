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
    // Função Array.isArray vista na documentação no link https://mzl.la/3yDzhP8;
    const teste1 = productDetails('Alcool gel', 'Máscara');
    assert.strictEqual(Array.isArray(teste1), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(teste1.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const item1 = teste1[0]
    assert.strictEqual(typeof item1, 'object');
    const item2 = teste1[1]
    assert.strictEqual(typeof item2, 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(item1, item2);
    // (Difícil) Teste que os dois productIds terminam com 123.
    const iDProduto1 = item1.details.productId;
    assert.strictEqual(iDProduto1.endsWith('123'), true);
    const iDProduto2 = item2.details.productId;
    assert.strictEqual(iDProduto2.endsWith('123'), true);
  });
});
