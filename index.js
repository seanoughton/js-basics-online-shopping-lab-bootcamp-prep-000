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
  var returnString = `In your cart, you have `
  var itemString =``
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } 
  else if(cart.length === 1) {
    var itemName = Object.keys(cart[0])
    var itemPrice = Object.values(cart[0])
    returnString = returnString + `${itemName} at $${itemPrice}.`
    console.log(returnString)
  }
  else if(cart.length === 2) {
    var i = 0
    while (i<cart.length){
      itemName = Object.keys(cart[i])
      itemPrice = Object.values(cart[i])
      itemString = itemString + `${itemName} at $${itemPrice}`
      i += 1
      if (i<cart.length){
        itemString =  itemString + ' and '
      }
    }
    returnString = returnString + itemString + `.`
    console.log(returnString)
  }
  else{
    itemString = ``
    i = 0
    while (i<cart.length){
      itemName = Object.keys(cart[i])
      itemPrice = Object.values(cart[i])
      
      itemString = itemString + `${itemName} at $${itemPrice}, `
      if (i === cart.length-1){
        itemString =  itemString + ` and ${itemName} at $${itemPrice}.`
      } else {
        
      }
      i += 1

    }
    returnString = returnString + itemString + `.`
    console.log(returnString)
    
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
