import './style.css';

export const Layer = (props) => {
  const layer = document.createElement('div');
  layer.classList.add('layer');
  layer.innerHTML = `
  <div
    class="layer__color"
    style="background-color: ${props.color}"
  ></div>
  <div class="layer__label">${props.label}</div>`;

  return layer;
};
