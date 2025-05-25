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
