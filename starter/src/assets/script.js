/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

class Product {
  constructor(name, price, quantity, productId, image) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.productId = productId;
    this.image = image;
  }
}

let cherry = new Product('Cherry', 20, 0, 1001, 'images/cherry.jpg');
let orange = new Product('Orange', 30, 0, 1002, 'images/orange.jpg');
let strawberry = new Product('Strawberry', 40, 0, 1003, 'images/strawberry.jpg');

let products = [cherry, orange, strawberry]
/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
let cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function getProductForId(productId) {
  switch(productId) {
    case 1001 : return cherry; 
      break;
    case 1002 : return orange;
      break;
    case 1003 : return strawberry;
      break;
    default :
  }
}

// find products index in cart array. if not present, return -1.
function getIndexInCart(productId) {
  for (let i = 0; i < cart.length; i++) {
      if (cart[i].productId === productId) {
        return i;
      }
  }
  return -1;
}

// add the value to product's quantity.
// for add -> pass value is positive (eg: 1)
// for subtract -> pass value is negative (eg: -1)
function updateQuantity(productId, value) {
  let product = getProductForId(productId);
  let currQuantity = product.quantity;
  product.quantity = currQuantity + value;
  return product.quantity;
}

function addProductToCart(productId) {
  updateQuantity(productId, 1);
  // if not present, add to cart
  const productIndex = getIndexInCart(productId);
  if (productIndex == -1) {
    cart.push(getProductForId(productId));
  } 
};

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(productId) {
  updateQuantity(productId, 1);
}
/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId) {
  // if quantity zero, remove from cart
  if (updateQuantity(productId, -1) == 0) {
    removeProduct(productId)
  }
}

function removeProduct(productId) {
  const index = getIndexInCart(productId);
  cart.splice(index, 1);
}
/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(productId) {
  let product = getProductForId(productId);
  product.quantity = 0;
  removeProduct(productId);
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
function cartTotal() {
  return cart.reduce((acc, product) => acc + (product.price * product.quantity), 0);
}

/* Create a function called emptyCart that empties the products from the cart */

function emptyCart() {
  cart.forEach((product) => product.quantity = 0);
  cart = [];
}

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
let totalPaid = 0;
function pay(amount) {
  totalPaid += amount;
  return totalPaid - cartTotal();
}
/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

let currency = "$" // unit tests expects a variable called currency to be part of export.
module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   currency
}
