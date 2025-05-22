document.querySelector('header .content').innerHTML = `
  <img src="./assets/logo.png" width="145px" style="margin-right: 41px;" alt="">
  <div class="menu">NEW RELEASES</div>
  <div class="menu">GROUNDING</div>
  <div class="menu">ACTIVEWEAR</div>
  <div class="menu">CLOTHING</div>
  <div class="menu">JEWELLERY</div>
  <div class="menu">ACCESSORIES</div>
  <div class="menu">MISSION</div>
  <div class="menu pink">SALE</div>

  <div class="user-info">
    <img src="./assets/search-normal.png" width="24px" onclick="toSearchPage()" alt="">
    <img src="./assets/car.png" width="24px" alt="">
    <img src="./assets/avatar.png" width="24px" alt="">
  </div>
`

function toSearchPage() {
  window.location.href = './search.html'
}
