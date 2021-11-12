import WOW from './_wow.js';
import {
    menuSocial,
    menuLink,
    checkEl
} from './_variables.js';

new WOW().init();

let status = true;

checkEl.addEventListener('click', () => {
    if(status) {
        menuLink.style.display = 'flex';
        menuSocial.style.display = 'flex';
        status = !status;
    } else {
        menuLink.style.display = 'none';
        menuSocial.style.display = 'none';
        status = !status;
    }
});