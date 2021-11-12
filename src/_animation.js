import WOW from './_wow.js';
import {
    menuSocial,
    menuLink,
    checkEl
} from './_variables.js';
import {
    sizeMenu
} from './_click-language.js';

new WOW().init();

let status = true;

checkEl.addEventListener('click', () => {
    if (status) {
        menuLink.style.display = 'flex';
        menuSocial.style.display = 'flex';
        status = !status;
        sizeMenu();
    } else {
        menuLink.style.display = 'none';
        menuSocial.style.display = 'none';
        status = !status;
    }
});