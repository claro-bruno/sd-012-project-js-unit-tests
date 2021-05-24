/* eslint-disable max-len */
const createMenu = (objeto) => {
  const menu = {
    fetchMenu: () => objeto,
    consumption: [],
    order: (string) => menu.consumption.push(string),
    pay: () => {
      const foodValues = Object.keys(menu.fetchMenu().food);
      const drinksValues = Object.keys(menu.fetchMenu().drinks);
      let cost = 0;
      for (const item of menu.consumption) {
        if (foodValues.includes(item)) {
          cost += menu.fetchMenu().food[item];
        } else if (drinksValues.includes(item)) {
          cost += menu.fetchMenu().drinks[item];
        }
      }
      return cost;
    },
  };
  return menu;
};

module.exports = createMenu;
