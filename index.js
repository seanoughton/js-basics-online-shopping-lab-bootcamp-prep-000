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
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
      var i = 0
      while (i<cart.length){
          console.log(`In your cart, you have ${itemName} at ${itemPrice}`)
          // itemName at itemPrice, and 
          // terminate sentence with a period
      i += 1
      }
  }
  console.log(newString)
  
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
