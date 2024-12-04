import _ from 'lodash';
import './style.css';
import Logo from './images/logo.png';

function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Привіт', 'Webpack'], ' ');
  element.classList.add('hello');

  const myLogo = new Image();
  myLogo.src = Logo;
  element.appendChild(myLogo);

  return element;
}

document.body.appendChild(component());
