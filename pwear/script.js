function buyAll() {
  if (cart.length === 0) return;

  const modal = document.getElementById("purchaseModal");


  modal.style.display = "flex";

  
  cart = [];
  updateCart();

  setTimeout(() => {
    modal.style.display = "none";
  }, 2000);
}