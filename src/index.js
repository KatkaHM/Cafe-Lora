import './style.css';
import { Layer } from './Layer/index';
import { Drink } from './Drink/index';

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
const drinkListElm = document.querySelector('.drinks-list');
// drinkInfoElm.appendChild(Layer(layers[0]));
// drinkInfoElm.appendChild(Layer(layers[1]));
// drinkInfoElm.appendChild(Layer(layers[2]));

const drinks = [
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    ordered: false,
    layers: [
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
    ],
  },
  {
    id: 'romano',
    name: 'Romano',
    ordered: false,
    layers: [
      {
        color: '#fbdf5b',
        label: 'citrón',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
  },
];

// drinks.forEach((drink) => drinkListElm.appendChild(Drink(drink)));

fetch('https://apps.kodim.cz/daweb/cafelora/api/drinks')
  .then((response) => response.json())
  .then((json) => {
    json.forEach((drink) => drinkListElm.appendChild(Drink(drink)));
  });

// const orderBtnElm = document.querySelector('.order-btn');
// const drinkCupElm = document.querySelector('.drink__cup');
// let isOrdered = false;

// orderBtnElm.addEventListener('click', () => {
//   if (isOrdered === true) {
//     orderBtnElm.textContent = 'Objednat';
//     drinkCupElm.classList.remove('drink__cup--selected');
//     isOrdered = !isOrdered;
//   } else {
//     orderBtnElm.textContent = 'Zrušit';
//     drinkCupElm.classList.add('drink__cup--selected');
//     isOrdered = !isOrdered;
//   }
// });
