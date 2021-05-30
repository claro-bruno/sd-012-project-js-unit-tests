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
    let produto = productDetails("Cerveja", "Isqueiro");
    let produtoFSon = produto[0];
    let produtoSSon = produto[1];
    let both = produtoFSon && produtoSSon;
let diffProducts = (Object.values(produtoFSon)[0] !== (Object.values(produtoSSon)[0]));
describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.strictEqual(Array.isArray(produto), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(produto.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof both, "object");
    // Teste que os dois objetos são diferentes entre si.
    // Teste que os dois productIds terminam com 123.
    assert.strictEqual(diffProducts, true)
    assert.strictEqual(productDetails()[0].details.productId.endsWith('123'), true)
    assert.strictEqual(productDetails()[1].details.productId.endsWith('123'), true)

  });
});

