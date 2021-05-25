/* eslint-disable max-len */
const compareKeys = (menu, menuKeys, menuItemsKeys, index) => {
  let cost = 0;
  for (const item of menu.consumption) {
    if (menuItemsKeys.includes(item)) {
      cost += menu.fetchMenu()[menuKeys[index]][item];
    }
  }
  return cost; 
};

const createMenu = (objeto) => (
  {
    fetchMenu: () => objeto,
    consumption: [],
    order(string) { this.consumption.push(string); },
    pay() {
      let cost = 0;
      const menu = this;
      const menuKeys = Object.keys(objeto);
      for (let index = 0; index < menuKeys.length; index += 1) {
        const menuItemsKeys = Object.keys(objeto[menuKeys[index]]);
        cost += compareKeys(menu, menuKeys, menuItemsKeys, index);
      }
      return Number((cost * 1.10).toFixed(2));
    },
  }
);

module.exports = createMenu;
