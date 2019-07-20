// import your function
import myName from './myName';
import testing from './home';
import css from './styles/app.css';

function component() {
  var element = document.createElement('div');

  // use your function!
  element.innerHTML = myName('Cody');
  return element;
}

  document.body.appendChild(testing());