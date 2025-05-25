document.querySelector('header .content').innerHTML = `
  <img src="./assets/logo.png" width="145px" class="logo" alt="" onclick="toIndexPage()">
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
    <img src="./assets/car.png" width="24px" alt="" onclick="showBagPanel()">
    <img src="./assets/avatar.png" width="24px" alt="">
  </div>
`

let bagPanel = `
  <div class="bag-mask" onclick="hideBagPanel()"></div>
  <div class="bag-panel">
    <div class="title">
      <div>Bag</div>
      <div class="close" onclick="hideBagPanel()">X</div>
    </div>

    <div class="product-list">
      <div class="product-item">
        <img src="./assets/bag-cover.png" width="130px" alt="">
        <div>
          <div style="font-weight: bold">Spread Kindness Pocket T-Shirt Black</div>
          <div class="size">Size: S</div>
          <div class="num-wrap">
            <div class="num-input">
              <div>-</div>
              <input type="text" value="1">
              <div>+</div>
            </div>
            <div style="font-weight: bold">$147.00</div>
          </div>
        </div>
      </div>
    </div>

    <div class="total-price">
      <span>SUBTOTAL</span>
      <span>$147.00</span>
    </div>
    <div class="tips">Shipping, taxes, and discount codes calculated at checkout.</div>
    <div class="check-button flex-center" onclick="toPayment()">Check out</div>

  </div>
`

// Insert bagPanel into the body
const bodyElement = document.querySelector('body');
const bagPanelElement = document.createElement('div');
bagPanelElement.innerHTML = bagPanel;
bodyElement.appendChild(bagPanelElement);

function toSearchPage() {
  window.location.href = '/search.html'
}

function toIndexPage() {
  window.location.href = '/index.html'
}

function showBagPanel() {
  document.querySelector('.bag-panel').classList.add('open')
  document.querySelector('.bag-mask').style.display = 'block'
}

function hideBagPanel() {
  document.querySelector('.bag-panel').classList.remove('open')
  document.querySelector('.bag-mask').style.display = 'none'
}

function toPayment() {
  window.location.href = '/payment.html'
}
// Use matchMedia to determine the width
const mobileMediaQuery = window.matchMedia('(max-width: 768px)');

function handleMobileMediaChange(event) {
  if (event.matches) {
    toMobilePage();
  } else {
    toPCPage();
  }
}
// Listen for window size change events
mobileMediaQuery.addEventListener('change', handleMobileMediaChange);
// Perform a check when the page loads
if (mobileMediaQuery.matches) {
  toMobilePage();
}

function toMobilePage() {
  const pathArray = window.location.pathname.split('/');
  const currentPage = pathArray[pathArray.length - 1];
  window.location.href = `/mobile/${currentPage}`;
}

function toPCPage() {
  const pathArray = window.location.pathname.split('/');
  const currentPage = pathArray[pathArray.length - 1];
  window.location.href = `/${currentPage}`;
}
