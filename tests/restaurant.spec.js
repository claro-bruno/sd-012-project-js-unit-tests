const assert = require('assert');
const createMenu = require('../src/restaurant');
 
/*
  Você é responsável por escrever o código do sistema de pedidos de um restaurante. Deve ser possível, através desse sistema, cadastrar um menu. Dado que um menu foi cadastrado, o sistema deve disponibilizar um objeto através do qual se consegue:
  - ler o menu cadastrado;
  - fazer pedidos;
  - verificar o que foi pedido;
  - somar o valor da conta.

  A estrutura deste código e deste objeto já foi definida e você irá implementá-la.
  Abaixo você verá uma série de testes e passos que devem ser, NECESSARIAMENTE, feitos em ordem para o bom desenvolvimento do sistema. Eles guiarão você pelo desenvolvimento.

  Parâmetros:
  - Um objeto. Exemplos: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }.
  Comportamento:

  const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }).

  meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }

  meuRestaurante.order('coxinha') // Retorno: undefined

  meuRestaurante.consumption // Retorno: ['coxinha']

  meuRestaurante.pay() // Retorno: 3.9

  Uma função createMenu retorna um objeto com as seguintes características:
  - Uma chave `fetchMenu` retorna o objeto que a função `createMenu` recebe por parâmetro. O menu tem sempre duas chaves, `food` e `drink`, no seguinte formato:

  const meuRestaurante = createMenu({
    food: {'coxinha': 3.90, 'sanduiche', 9.90},
    drinks: {'agua': 3.90, 'cerveja': 6.90}
  });

  meuRestaurante.fetchMenu() // Retorno: Menu acima

  - Uma chave `consumption` que contém um array de strings, com cada string sendo a chave de um pedido. Por exemplo: ['coxinha', 'cerveja']

  - Uma chave `order` que tem uma função que, recebida uma string como parâmetro, adiciona essa string à lista salva em `consumption`.

  - Uma chave `pay` que, quando chamada, invoca uma função que soma o valor de todos os pedidos e dá o preço com acréscimo de 10%.

  IMPORTANTE: FAÇA OS TESTES E PASSOS DE ACORDO COM A ORDEM INDICADA!

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('9 - Implemente os casos de teste e a função `createMenu`', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    assert.strictEqual(typeof (createMenu().fetchMenu), 'function'); // verifica se o tipo('typeof') da chave 'fetchMenu', dentro da funcao(objeto) 'createMenu', e uma funcao.
    const objetoRetornado = createMenu({ food: {}, drink: {} }); // criar uma variavel para receber a funcao 'creatMenu' recebendo como parametro um objeto com duas chaves
    assert.deepStrictEqual(Object.keys(objetoRetornado.fetchMenu()), ['food', 'drink']); // Verifica se as chaves dentro da funcao 'fetchMenu' dentro da variavel 'objetoRetornado', tem como nome os valores descritos
    const someObj = { food: {}, drink: {} }; // cria uma variavel(objeto) para receber duas chaves
    assert.deepStrictEqual(createMenu(someObj).fetchMenu(), { food: {}, drink: {} }); // Verifica se o valor de 'fetchMenu, ao declarar a variavel 'someObj' como parametro de 'createMenu', e igual ao valor apresentado
    assert.deepStrictEqual(objetoRetornado.consumption, []); // Verifica se o valor da chave consumption, dentro da variavel ' objetoRetornado', e um array vazio.
    objetoRetornado.order('coxinha'); // adiciona a 'string' 'coxinha' dentro da 'chave'(funcao) 'order', que por sua vez envia como parametro para a funcao 'addOrder' que acaba por adicionar a 'string' ao 'array' da chave 'consumption' dentro da variavel ('createMenu' || 'objetoRetornado')
    assert.deepStrictEqual(objetoRetornado.consumption, ['coxinha']); // Verifica se a chave 'consumption' dentro 'objetoRetornado' tem como valor a string mencionada
    // adiciona as 'strings' 'agua', 'sopa' e 'sashimi' dentro da 'chave'(funcao) 'order', dentro de 'objetoRetornado', que por sua vez envia como parametro para a funcao 'addOrder' que acaba por adicionar a 'string' ao 'array' da chave 'consumption' dentro da variavel ('createMenu' || 'objetoRetornado')
    objetoRetornado.order("agua");
    objetoRetornado.order("sopa");
    objetoRetornado.order("burguer");
    assert.strict(objetoRetornado.consumption.length, 3); // Verifica se a chave 'consumption' dentro 'objetoRetornado' tem como tamanho (.lenght) de seu array, o valor 3
    assert.deepStrictEqual(objetoRetornado.consumption, ["coxinha", "agua", "sopa", "burguer"]); // Verifica se a chave 'consumption' dentro 'objetoRetornado' tem os valores mencionados (strings), dentro do seu array
    // adiciona as 'strings' 'coxinha', 'coxinha' e 'agua' dentro da 'chave'(funcao) 'order', dentro de 'objetoRetornado', que por sua vez envia como parametro para a funcao 'addOrder' que acaba por adicionar a 'string' ao 'array' da chave 'consumption' dentro da variavel ('createMenu' || 'objetoRetornado')
    objetoRetornado.order('coxinha');
    objetoRetornado.order('coxinha');
    objetoRetornado.order('agua');
    assert.deepStrictEqual(objetoRetornado.consumption, ["coxinha", "agua", "sopa", "burguer", "coxinha", "coxinha", "agua"]); // Verifica se a chave 'consumption' dentro 'objetoRetornado' tem os valores mencionados (strings), dentro do seu array
    const objetoRetornado2 = createMenu({ food: { 'coxinha': 3.9, 'sopa': 9.9 }, drink: { 'agua': 3.9, 'cerveja': 6.9 } }); // Cria uma variavel que recebe a funcao 'createMenu' que recebe como parametro um objeto com os valores mostrado
    const somaDosPrecosPedidos = 3.9 + 3.9 + 3.9 + 6.9; // cria uma variavel para somar os precos de objetoRetornado2 para esse test especifico
    // adiciona as 'strings' 'coxinha', 'agua', 'coxinha' e 'cerveja dentro da 'chave'(funcao) 'order', dentro de 'objetoRetornado', que por sua vez envia como parametro para a funcao 'addOrder' que acaba por adicionar a 'string' ao 'array' da chave 'consumption' dentro da variavel ('createMenu' || 'objetoRetornado2')
    objetoRetornado2.order('coxinha');
    objetoRetornado2.order('agua');
    objetoRetornado2.order('coxinha');
    objetoRetornado2.order('cerveja');
    assert.strictEqual(objetoRetornado2.pay(), somaDosPrecosPedidos, 'soma'); // Verifica se o valor da chave 'pay' dentro de 'objetoRetornado2' e igual a variavel 'somaDosPrecosPedidos'. Devolve a mensagem 'soma'
  });
});
