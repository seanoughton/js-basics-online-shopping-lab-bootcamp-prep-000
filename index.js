var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName = item 
  var itemPrice = Math.random() * (100 - 1) + 1;
  itemPrice = Math.floor(itemPrice)
  var cartItem = new Object({ [itemName]: itemPrice })
  cart.push(cartItem)
  console.log(`${itemName} has been added to your cart.`)
  return cart

}

function viewCart() {
  var newString = `In your cart, you have `
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } 
  else if(cart.length === 1) {
    newString = newString + `${Object.keys(cart[0])}` + ` at ` + `${Object.values(cart[0])}` + `.`
    console.log(newString)
  }

  
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
