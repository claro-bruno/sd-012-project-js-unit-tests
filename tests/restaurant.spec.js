const assert = require('assert');
const createMenu = require('../src/restaurant');

describe('9 - Implemente os casos de teste e a função `createMenu`', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    assert.ok(typeof createMenu().fetchMenu === 'function');

    const menu = { food: {}, drink: {} };
    const menuObj = createMenu(menu);
    const fecthedMenu = menuObj.fetchMenu();
    assert.deepStrictEqual(Object.keys(fecthedMenu), ['food', 'drink']);

    assert.strictEqual(menu, fecthedMenu);

    assert.deepStrictEqual(menuObj.consumption, []);

    menuObj.order('coxinha');
    assert.ok(menuObj.consumption.includes('coxinha'));

    menuObj.order('agua');
    menuObj.order('sopa');
    menuObj.order('sashimi');
    assert.deepStrictEqual(menuObj.consumption, ['coxinha', 'agua', 'sopa', 'sashimi']);

    menuObj.order('agua');
    assert.deepStrictEqual(menuObj.consumption, ['coxinha', 'agua', 'sopa', 'sashimi', 'agua']);

    const menuWithPrice = {
      food: {
        coxinha: 5.50,
        sopa: 9.00,
        sashimi: 15.00,
      },
      drink: {
        agua: 3.00,
      }
    }
    const finalMenu = createMenu(menuWithPrice);
    finalMenu.order('coxinha');
    finalMenu.order('agua');
    assert.strictEqual(finalMenu.pay(), 8.50);
  });
});
