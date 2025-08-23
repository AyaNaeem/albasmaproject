// for cart
let cart = [], pending = null;//Array for storing cart items,The item we are waiting to confirm before adding it
//Set the current item on hold,
function setPending(item) {
  pending = item;
  document.getElementById("confirm-text").textContent = "تأكيد طلب: " + item;
  document.getElementById("confirm-toggle").checked = true;
}
function addItem() {
  if (pending) {
    cart.push(pending);//Add the item to the cart
    document.getElementById("cart-count").textContent = cart.length;//Update the number of items
    document.getElementById("cart-items").innerHTML = cart.map((x, i) => `<div>${i + 1}. ${x}</div>`).join("");//View cart items
  }
  document.getElementById("confirm-toggle").checked = false;//Close the confirmation box
}