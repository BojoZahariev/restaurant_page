// import function
import {
    bigContainer
} from './home';
import {
    bigContainerMenu
} from './menu';
/*import {
    bigContainerLocation
} from './location';
*/

import css from './styles/app.css';


const iconsDiv = (page) => {

    let icons = document.createElement('div');
    icons.id = 'icons';
    if (page === 'home') {
        let menu = document.createElement('a');
        menu.id = 'icon-left';
        menu.addEventListener("click", loadMenu);
        menu.textContent = 'Menu';
        let location = document.createElement('a');
        location.id = 'icon-right';
        location.textContent = 'Find us';

        icons.appendChild(menu);
        icons.appendChild(location);
    }

    if (page === 'menu') {
        let menu = document.createElement('a');
        menu.id = 'icon-left';
        menu.addEventListener("click", loadHome);
        menu.textContent = 'Home';
        let location = document.createElement('a');
        location.id = 'icon-right';
        location.textContent = 'Find us';

        icons.appendChild(menu);
        icons.appendChild(location);
    }
    

    return icons
};


const loadMenu = () => {
    document.body.removeChild(contentHome);
    
    contentMenu = document.createElement('div');
    document.body.appendChild(contentMenu);
    contentMenu.appendChild(bigContainerMenu());
    contentMenu.appendChild(iconsDiv('menu'));
    
}

const loadHome = () => {
    document.body.removeChild(contentMenu);

    contentHome = document.createElement('div');
    document.body.appendChild(contentHome);
    contentHome.appendChild(bigContainer());
    contentHome.appendChild(iconsDiv('home'));
}

//trying
var contentMenu;

var contentHome = document.createElement('div');
document.body.appendChild(contentHome);

contentHome.appendChild(bigContainer());

contentHome.appendChild(iconsDiv('home'));
