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

const createMenu = (objeto) => {
  const menu = {
    fetchMenu: () => objeto,
    consumption: [],
    order: (string) => menu.consumption.push(string),
    pay: () => {
      let cost = 0;
      const menuKeys = Object.keys(menu.fetchMenu());
      for (let index = 0; index < menuKeys.length; index += 1) {
        const menuItemsKeys = Object.keys(menu.fetchMenu()[menuKeys[index]]);
        console.log(menuItemsKeys);
        console.log(menuKeys[index]);
        cost += compareKeys(menu, menuKeys, menuItemsKeys, index);
      }
      return Number((cost * 1.10).toFixed(2));
    },
  };
  return menu;
};

module.exports = createMenu;
