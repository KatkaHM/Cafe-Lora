import './style.css';
import { Layer } from './Layer/index';

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

const orderBtnElm = document.querySelector('.order-btn');
const drinkCupElm = document.querySelector('.drink__cup');
let isOrdered = false;

orderBtnElm.addEventListener('click', () => {
  if (isOrdered === true) {
    orderBtnElm.textContent = 'Objednat';
    drinkCupElm.classList.remove('drink__cup--selected');
    isOrdered = !isOrdered;
  } else {
    orderBtnElm.textContent = 'Zrušit';
    drinkCupElm.classList.add('drink__cup--selected');
    isOrdered = !isOrdered;
  }
});

const layers = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko',
  },
  {
    color: '#613916',
    label: 'espresso',
  },
];

const drinkInfoElm = document.querySelector('.drink__info');
drinkInfoElm.appendChild(Layer(layers[0]));
drinkInfoElm.appendChild(Layer(layers[1]));
drinkInfoElm.appendChild(Layer(layers[2]));
