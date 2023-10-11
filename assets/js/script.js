/*declarações de variaveis*/
/*Nav-bar*/
const barOpen = document.querySelector('[data-menu-op]');
const barClose = document.querySelector('[data-menu-cl]');
const bar = document.querySelector('[data-navbar]');
const overlay = document.querySelector('[data-overlay]');
const nav = [
  barOpen,
  barClose,
  overlay,
]
for (let i = 0; i < nav.length; i++) {
  nav[i].addEventListener('click', function() {
    bar.classList.toggle('active')
  });
  
}