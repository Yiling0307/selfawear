function showPanel(panelClass) {
  document.querySelector('.mask').style.display = 'block';
  document.querySelector('.slide-panel.' + panelClass).classList.add('show');
}

function closeAllPanel() {
  document.querySelector('.mask').style.display = 'none';
  let all = document.querySelectorAll('.slide-panel')
  for (let i = 0; i < all.length; i++) {
    all[i].classList.remove('show')
  }
}

function toProductPage() {
  window.location.href = "/mobile/productDetails.html";
}
