const titleDiv = () => {
  let title = document.createElement('div');
  title.id = 'title';

  let bigTitle = document.createElement('p');
  bigTitle.id = 'big-title';
  bigTitle.textContent = 'Vodolaza';
  title.appendChild(bigTitle);

  let smallTitle = document.createElement('p');
  smallTitle.id = 'small-title';
  smallTitle.textContent = 'The best Pub & Fish Restaurant in Plovdiv';
  title.appendChild(smallTitle);

  return title
}

const middleDiv = () => {
  let middle = document.createElement('div');
  middle.id = 'middle';

  return middle
}


//get all in one function

const bigContainer = () => {
  let big = document.createElement('div');
  big.classList.add('big-container');
  big.appendChild(titleDiv());
  big.appendChild(middleDiv());

  return big
}

export {
  bigContainer
}
