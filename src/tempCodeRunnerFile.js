const myCounter = () => {
  var myArray = [];
  for (let counter = 0; counter <= 3; counter += 1) {
    myArray.push(counter);
    for (let counterI = 2; counterI <= 3; counterI += 1) {
      myArray.push(counterI);
    }
  }
  return myArray;
};
console.log(myCounter());