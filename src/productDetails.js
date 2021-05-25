/*
  Dadas duas strings que representam nomes de produtos,
  retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

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
*/

const productDetails = (firstProduct, secondProduct) => [
  {
    name: firstProduct,
    details: {
      productId: `${firstProduct}123`,
    },
  },
  {
    name: secondProduct,
    details: {
      productId: `${secondProduct}123`,
    },
  },
];

// const typeVerify = (array) =>{
//  let typeArray = [];
//  for (let index =0; index < array.length; index +=1){
//   typeArray.push(typeof(array[index]));
//  }
//  return typeArray;
// }

// let igual
// if (productDetails('Alcool gel', 'Máscara')[0].name === productDetails('Alcool gel', 'Máscara')[1].name){
//  igual = true;
// } else {
//  igual = false;
// }

// const verifyId = (productsArray) => {
//  let finalId123 = false;
//  for (let index = 0; index < productsArray.length; index += 1) {
//    let finalId = productsArray[index].details.productId.substr(-3);
//    if (finalId === '123') {
//      finalId123 = true;
//    } else {
//      finalId = false;
//    }
//  }
//  return finalId123;
// };

// console.log(verifyId(productDetails('Alcool gel', 'Máscara')))

console.log();

module.exports = productDetails;
