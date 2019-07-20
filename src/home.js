const testing = () => {
    var element2 = document.createElement('div');
  
    // use your function!
    element2.textContent = 'Bojo';
    return element2;
  }

  const mainPage = () => {
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
    middle.id ='middle';

    return middle
  }

const iconsDiv = () => {
    let icons = document.createElement('div');
    icons.id = 'icons';

    let menu = document.createElement('a'); 
    menu.id = 'icon-left';
    menu.textContent = 'Menu';
    let location = document.createElement('a'); 
    location.id = 'icon-right';
    location.textContent = 'Find us';

    icons.appendChild(menu);
    icons.appendChild(location);

    return icons
}

  export {
    mainPage, 
    middleDiv,
    iconsDiv
 }