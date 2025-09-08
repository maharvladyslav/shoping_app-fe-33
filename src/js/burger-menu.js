const menu = document.querySelector('[data-menu]');
const menuToggleBtn = document.querySelector('[data-menu-toggle]');

const toggleMenu = () => {
  menu.classList.toggle('open');
  menuToggleBtn.classList.toggle('open');

  document.body.classList.toggle('no-scroll', menu.classList.contains('open'));
};

const closeMenu = event => {
  if (event.target.tagName === 'A') {
    menu.classList.remove('open');
    menuToggleBtn.classList.remove('open');
    document.body.classList.remove('no-scroll');
  }
};

menuToggleBtn.addEventListener('click', toggleMenu);
menu.addEventListener('click', closeMenu);
