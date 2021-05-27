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
    assert.deepStrictEqual(Array.isArray(productDetails('Alcool gel', 'Máscara' )), true); // Teste que o retorno da função é um array. referencia: https://cibersistemas.pt/tecnologia/como-verificar-se-um-array-javascript-esta-vazio-ou-nao-com-length/#:~:text=Para%20verificar%20se%20uma%20matriz,ele%20est%C3%A1%20vazio%20ou%20n%C3%A3o.
    assert.deepStrictEqual(productDetails('Alcool gel', 'Máscara').length, 2); // Teste que o array retornado pela função contém dois itens dentro.
    assert.deepStrictEqual(typeof(productDetails('Alcool gel', 'Máscara')[0] ), 'object');
    assert.deepStrictEqual(typeof(productDetails('Alcool gel', 'Máscara')[1] ), 'object'); // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.notDeepStrictEqual(JSON.stringify(productDetails('Alcool gel', 'Máscara')[0]), JSON.stringify(productDetails('Alcool gel', 'Máscara')[1])) // Teste que os dois objetos são diferentes entre si. referencia: https://pt.stackoverflow.com/questions/291203/como-comparar-se-dois-objetos-javascript-s%C3%A3o-iguais
    assert.deepStrictEqual(productDetails('Alcool gel', 'Máscara')[0].details.productId.endsWith('123'), true);// Teste que os dois productIds terminam com 123.
    assert.deepStrictEqual(productDetails('Alcool gel', 'Máscara')[1].details.productId.endsWith('123'), true); //referencia: https://www.w3schools.com/jsref/jsref_endswith.asp
});
});
