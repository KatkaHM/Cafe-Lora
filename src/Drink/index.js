import './style.css';
import { Layer } from '../Layer';

export const Drink = (props) => {
  const { id, name, ordered, layers } = props;

  const drink = document.createElement('div');
  drink.classList.add('drink');
  drink.innerHTML = `
    <div class="drink__product">
      <div class="drink__cup">
        <img src="/assets/cups/${id}.png" />
      </div>
      <div class="drink__info">
        <h3>${name}</h3>
      </div>
    </div>
    <div class="drink__controls">
      <button class="order-btn">Objednat</button>
    </div>`;

  const drinkInfoElm = drink.querySelector('.drink__info');
  // layers.forEach((layer) => (drinkInfoElm.innerHTML += Layer(layer)));
  layers.forEach((layer) => drinkInfoElm.appendChild(Layer(layer)));

  return drink;
};

/* <div class="drink">
  <div class="drink__product">
    <div class="drink__cup">
      <img src="/assets/cups/cappuccino.png" />
    </div>
    <div class="drink__info">
      <h3>Cappuccino</h3>
      <div class="layer">
        <div class="layer__color" style="background-color: #feeeca"></div>
        <div class="layer__label">mléčná pěna</div>
      </div>
    </div>
  </div>
  <div class="drink__controls">
    <button class="order-btn">Objednat</button>
  </div>
</div>; */
