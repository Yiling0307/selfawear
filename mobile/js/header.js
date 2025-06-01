document.querySelector('header').innerHTML = `
  <img src="./assets/menu.png" width="24px" alt="">
  <img class="ml12" src="./assets/logo.png" width="121px" alt="">
  <div style="flex: 1"></div>
  <img src="./assets/car.png" width="24px" alt="">
  <img class="ml16" src="./assets/avatar.png" width="24px" alt="">
`

// Use matchMedia to determine the width
const mobileMediaQuery = window.matchMedia('(max-width: 768px)');
function handleMobileMediaChange(event) {
  if (!event.matches) {
    toPCPage();
  }
}
// Listen for window size change events
mobileMediaQuery.addEventListener('change', handleMobileMediaChange);
// Perform a check when the page loads
if (!mobileMediaQuery.matches) {
  toPCPage();
}

function toPCPage() {
  const pathArray = window.location.pathname.split('/');
  const currentPage = pathArray[pathArray.length - 1];
  window.location.href = `/${currentPage}`;
}

let bagPanel = `
  <div class="bag-mask" onclick="hideBagPanel()"></div>
  <div class="bag-panel">
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