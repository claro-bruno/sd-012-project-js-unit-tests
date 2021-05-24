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
    assert.ok(Array.isArray(productDetails('teste', 'teste2')));
    // Teste que o array retornado pela função contém dois itens dentro.
    const itemsNumber = Object.keys(productDetails('teste', 'teste2')).length;
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const itemsType = Object.entries(productDetails('teste', 'teste2'));
    for (let index = 0; index < itemsType.length; index += 1) {
      assert.strictEqual(typeof itemsType[index], 'object');
    }
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(itemsType[0], itemsType[1]);
    // (Difícil) Teste que os dois productIds terminam com 123.
    const compareId = (param) => {
      const product1 = param[0];
      const product2 = param[1];
      const productId1 = Object.values(product1.details).join('').split('').reverse();
      const productId2 = Object.values(product2.details).join('').split('').reverse();
      let productIdfinal1 = [];
      let productIdfinal2 = [];
      for (let index = 0; index < 3; index += 1) {
        productIdfinal1.push(productId1[index]);
        productIdfinal2.push(productId2[index]);
      }
      if (productIdfinal1.join('') === productIdfinal2.join('')) { return true; }
      return false;
    };
    assert.strictEqual(compareId(productDetails('teste', 'teste2')), true);
  });
});
