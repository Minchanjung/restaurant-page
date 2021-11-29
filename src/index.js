import './style.css';
import { renderHomepage } from './homepage'
import { renderMenupage } from './menu'
import { renderContactpage } from './contact'

renderHomepage();

const content = document.querySelector('#content');
const tabMenu = document.querySelector('ul');
const middleBtn = document.querySelector('button');

const removeDOM = () => {
    content.innerHTML = ``;
}

middleBtn.addEventListener('click', function() {
    removeDOM();
    renderMenupage();
})

tabMenu.addEventListener('click', function(e) {
    if (e.target.id == "home") {
        removeDOM();
        renderHomepage();
    } else if (e.target.id == "menu") {
        removeDOM();
        renderMenupage();
    } else if (e.target.id == "contact") {
        removeDOM();
        renderContactpage();
    }
    console.log(e.target);
})