// import function
import {mainPage,middleDiv,iconsDiv} from './home';
import css from './styles/app.css';





var content = document.getElementById('big-container');
document.body.appendChild(content);

content.appendChild(mainPage());
content.appendChild(middleDiv());
content.appendChild(iconsDiv());


