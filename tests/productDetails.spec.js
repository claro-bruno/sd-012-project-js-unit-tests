const assert = require('assert'); // define 'assert' para utilizar no test
const productDetails = require('../src/productDetails'); // importa a funcao para os testes

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
    //O metodo 'assert.stricEqual' exige que o valor de resposta seja exatamente igual ao fornecido para o test. 
    assert.strictEqual(Array.isArray(productDetails()), true); // Verifica se o 'parametro' dentro de 'Array' e um 'array'(true) com o '.isArray', sendo que o parametro e o 'return' da funcao 'productDetail()', 
    assert.strictEqual(productDetails().length, 2); // Verifica se o 'return' da funcao e composto por 2 'index', comparando o tamanho do 'array' da funcao (que contem 2 'objetos') usando .length
    assert.strictEqual(typeof productDetails()[0] && typeof productDetails()[1], 'object'); // Verifica se 
    //O metodo 'assert.notstricEqual' exige que o valor de resposta seja diferente do fornecido para o test. 
    assert.notStrictEqual(productDetails()[0], productDetails()[1]); // Verifica se, dentro da funcao,  o 'objeto' de index 0 NAO e igual ao 'objeto' de index 1
    //Utiliza '.endsWith' --  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
    assert.strictEqual(productDetails()[0].details.productId.endsWith('123'), true); // Verifica se o valor da chave 'productID' dentro da chave 'details' dentro do objeto de index 0, dentro da funcao, termina com (.endsWith) '123' (true)
    assert.strictEqual(productDetails()[1].details.productId.endsWith('123'), true); // Verifica se o valor da chave 'productID' dentro da chave 'details' dentro do objeto de index 1, dentro da funcao, termina com (.endsWith) '123' (true)
  });
});
