// import function
import {
    bigContainer
} from './home';
import {
    bigContainerMenu
} from './menu';
import {
    bigContainerLocation
} from './location';

import css from './styles/app.css';

//adding the active buttons
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
        location.addEventListener("click", loadLocation);
        location.textContent = 'Find us';

        icons.appendChild(menu);
        icons.appendChild(location);
    } else if (page === 'menu') {
        let menu = document.createElement('a');
        menu.id = 'icon-left-menu';
        menu.addEventListener("click", loadHome);
        menu.textContent = 'Home';
        let location = document.createElement('a');
        location.id = 'icon-right';
        location.addEventListener("click", loadLocation);
        location.textContent = 'Find us';

        icons.appendChild(menu);
        icons.appendChild(location);
    } else if(page === 'location') {
        let menu = document.createElement('a');
        menu.id = 'icon-left';
        menu.addEventListener("click", loadMenu);
        menu.textContent = 'Menu';
        let location = document.createElement('a');
        location.id = 'icon-right-location';
        location.addEventListener("click", loadHome);
        location.textContent = 'Home';

        icons.appendChild(menu);
        icons.appendChild(location);
    }
    

    return icons
};


const loadHome = () => {
    if(currentPage === 'menu') {
        document.body.removeChild(contentMenu);
    }else if(currentPage === 'location') {
        document.body.removeChild(contentLocation);
    }
    
    contentHome = document.createElement('div');
    document.body.appendChild(contentHome);
    contentHome.appendChild(bigContainer());
    contentHome.appendChild(iconsDiv('home'));

    currentPage = 'home';
}

const loadMenu = () => {
    if(currentPage === 'home') {
        document.body.removeChild(contentHome);
    }else if(currentPage === 'location') {
        document.body.removeChild(contentLocation);
    }
  
    contentMenu = document.createElement('div');
    document.body.appendChild(contentMenu);
    contentMenu.appendChild(bigContainerMenu());
    contentMenu.appendChild(iconsDiv('menu'));
    currentPage = 'menu';
}

const loadLocation = () => {
    if(currentPage === 'menu') {
        document.body.removeChild(contentMenu);
    }else if(currentPage === 'home') {
        document.body.removeChild(contentHome);
    }
    
    contentLocation = document.createElement('div');
    document.body.appendChild(contentLocation);
    contentLocation.appendChild(bigContainerLocation());
    contentLocation.appendChild(iconsDiv('location'));
    
    currentPage = 'location';
}

//new container for every module
var currentPage = 'home';
var contentMenu;
var contentLocation;
var contentHome = document.createElement('div');
document.body.appendChild(contentHome);

contentHome.appendChild(bigContainer());

contentHome.appendChild(iconsDiv('home'));
