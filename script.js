// للسلة
let cart = [], pending = null;
function setPending(item) {
  pending = item;
  document.getElementById("confirm-text").textContent = "تأكيد طلب: " + item;
  document.getElementById("confirm-toggle").checked = true;
}
function addItem() {
  if (pending) {
    cart.push(pending);
    document.getElementById("cart-count").textContent = cart.length;
    document.getElementById("cart-items").innerHTML = cart.map((x, i) => `<div>${i + 1}. ${x}</div>`).join("");
  }
  document.getElementById("confirm-toggle").checked = false;
}