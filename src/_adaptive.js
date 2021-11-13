import {
    menuSocial,
    menuLink,
    checkEl
} from './_variables.js';

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

export function sizeMenu(toggle) {
    if (window.innerWidth <= 768 && window.innerWidth > 600) {
        styleChange768(toggle);
    } else if (window.innerWidth <= 600) {
        styleChange600(toggle);
    }
}

/**
 * Определение стилей при изменении языка
 * на маленьком расширении
 * @param {bool} language 
 */
function styleChange768(language) {
    if (language) {
        menuLink.style.top = '63px';
        menuLink.style.left = '182px';
        menuLink.style.padding = '18px 0.5px';

        menuSocial.style.top = '130px';
        menuSocial.style.left = '182px';
        menuSocial.style.padding = '0 47.5px';
    } else {
        menuLink.style.left = '155px';
        menuLink.style.padding = '18px 0';

        menuSocial.style.top = '130px';
        menuSocial.style.left = '155px';
        menuSocial.style.padding = '0 73px';
    }
}

/**
 * Определение стилей при изменении языка
 * на маленьком расширении
 * @param {bool} language 
 */
function styleChange600(language) {
    if (language) {
        menuLink.style.left = '100px';
        menuLink.style.padding = '18px 1px';
        menuSocial.style.left = '100px';
        menuSocial.style.padding = '0 48.5px';
    } else {
        menuLink.style.left = '65px';
        menuSocial.style.left = '65px';
        menuSocial.style.padding = '0 74.5px';
    }
}