const { strictEqual } = require('assert');
const assert = require('assert');
const createMenu = require('../src/restaurant');

describe('9 - Implemente os casos de teste e a função `createMenu`', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    // TESTE 1: Verifique se o retorno da função createMenu() é um objeto que possui, 
    // mas não é necessariamente é limitado à chave `fetchMenu`, a qual tem como valor uma função.
    assert.strictEqual(typeof createMenu().fetchMenu, 'function');

    // TESTE 2: Verifique que, dado que a função createMenu foi chamada com o objeto: `{ food: {}, drink: {} }`, 
    // verifique que 'objetoRetornado.fetchMenu()' retorna um objeto cujas chaves são somente `food` e `drink`.
    const objetoRetornado = createMenu({ food: {}, drink: {} });
    assert.deepStrictEqual(objetoRetornado.fetchMenu(), { food: {}, drink: {}});

    // TESTE 3: Verifique que o menu passado pra função createMenu é identico ao menu recuperado pela função 'objetoRetornado.fetchMenu'
    objetoRetornado.fetchMenu().food.pastel = 5;
    objetoRetornado.fetchMenu().drink.fanta = 3;
    assert.deepStrictEqual(objetoRetornado.fetchMenu(), { food: { pastel: 5 }, drink: { fanta: 3 } });

    // TESTE 4: Verifique que 'objetoRetornado.consumption', após a criação do menu, retorna um array vazio.
    assert.deepStrictEqual(objetoRetornado.consumption, []);

    // TESTE 5: Verifique que chamar uma função associada à chave `order` no objeto retornado, passando uma string como parâmetro, 
    // como `objetoRetornado.order('coxinha')`, tal string é adicionada ao array retornado em `objetoRetornado.consumption
    objetoRetornado.order('coxinha');
    assert.deepStrictEqual(objetoRetornado.consumption, ['coxinha']);

    // TESTE 6: Verifique que as três orders seguintes, de bebidas e comidas mescladas, somam três itens no array `objetoRetornado.consumption` conforme os itens pedidos.
    objetoRetornado.order("agua");
    objetoRetornado.order("sopa");
    objetoRetornado.order("sashimi");
    assert.deepStrictEqual(objetoRetornado.consumption, ['coxinha', 'agua', 'sopa', 'sashimi']);

    // TESTE 7: Verifique que a função `order` aceita que pedidos repetidos sejam acrescidos a consumption.
    objetoRetornado.order('coxinha');
    objetoRetornado.order('agua');
    objetoRetornado.order('coxinha');
    assert.deepStrictEqual(objetoRetornado.consumption, ['coxinha', 'agua', 'sopa', 'sashimi', 'coxinha', 'agua', 'coxinha']);
    
    // TESTE 8: Verifique que, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornado.consumption`
    objetoRetornado.fetchMenu().food.coxinha = 4;
    objetoRetornado.fetchMenu().drink.agua = 1;
    objetoRetornado.fetchMenu().food.sopa = 6;
    objetoRetornado.fetchMenu().drink.sashimi = 10;
    assert.strictEqual(objetoRetornado.payment(), 33);
  });
});
