const createMenu = (paramObj) => ({
  consumption: [],
  fetchMenu: () => paramObj,
  order(item) { this.consumption.push(item); },
  pay() {
    let total = 0;
    const menu = this.fetchMenu();
    for (let item of this.consumption) {
      let itemPrice = menu.food[item] ? menu.food[item] : menu.drink[item];
      total += itemPrice;
    }
    return Number(parseFloat(total).toPrecision(2));
  },
});

module.exports = createMenu;
