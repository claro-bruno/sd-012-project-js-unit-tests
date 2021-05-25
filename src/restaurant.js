const createMenu = (item) => {
  const menu = {
    fetchMenu: () => item,
    consumption: [],
    order: (newThing) => menu.consumption.push(newThing),
    payment: () => {
      let price = 0;
      for (let index = 0; index < menu.consumption.length; index += 1) {
        if (item.food[menu.consumption[index]]) {
          price += item.food[menu.consumption[index]];
        }
        if (item.drink[menu.consumption[index]]) {
          price += item.drink[menu.consumption[index]];
        }
      }
      return price * 1.1;
    },
  };
  return menu;
};

module.exports = createMenu;
