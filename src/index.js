import './style.css';

const navBtnElm = document.querySelector('#nav-btn');
const navMenuItemElms = document.querySelectorAll('.navigation nav a');

const closeMenu = () => {
  const navElm = document.querySelector('nav');
  navElm.classList.toggle('nav-closed');
};

navBtnElm.addEventListener('click', closeMenu);
navMenuItemElms.forEach((element) => {
  element.addEventListener('click', closeMenu);
});
