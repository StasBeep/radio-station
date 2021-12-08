import {
    menuSocial,
    menuLink,
    checkEl
} from './_variables.js';

import {
    toggle
} from './_ab-click-lang.js';

let status = true;

checkEl.addEventListener('click', () => {
    if (status) {
        menuLink.style.display = 'flex';
        menuSocial.style.display = 'flex';
        status = !status;
        sizeMenu(toggle);
    } else {
        menuLink.style.display = 'none';
        menuSocial.style.display = 'none';
        status = !status;
    }
});

export function sizeMenu() {
    if (window.innerWidth <= 768 && window.innerWidth > 600) {
        styleChange768(toggle);
    } else if (window.innerWidth <= 600 && window.innerWidth > 480) {
        styleChange600(toggle);
    } else if (window.innerWidth <= 480 && window.innerWidth > 375) {
        styleChange480(toggle);
    } else if (window.innerWidth <= 375 && window.innerWidth > 320) {
        styleChange375(toggle);
    } else if (window.innerWidth <= 320) {
        styleChange320(toggle);
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

/**
 * Определение стилей при изменении языка
 * на маленьком расширении
 * @param {bool} language 
 */
function styleChange480(language) {
    if (language) {
        menuLink.style.left = '40px';
        menuLink.style.padding = '18px 1px';
        menuLink.classList.add('menu480');
        menuSocial.style.left = '40px';
        menuSocial.style.padding = '0 48.5px';
    } else {
        menuLink.style.left = '10px';
        menuLink.classList.add('menu480');
        menuSocial.style.left = '10px';
        menuSocial.style.padding = '0 74.5px';
    }
}

/**
 * Определение стилей при изменении языка
 * на маленьком расширении
 * @param {bool} language 
 */
function styleChange375(language) {
    if (language) {
        menuLink.style.top = '51px';
        menuLink.style.left = '2px';
        menuLink.style.padding = '18px 20px';
        menuLink.classList.add('menu480');
        menuSocial.style.left = '2px';
        menuSocial.style.top = '119px';
        menuSocial.style.padding = '5px 36px';
    } else {
        menuLink.style.top = '51px';
        menuLink.style.left = '1px';
        menuLink.style.padding = '18px 0';
        menuLink.classList.add('menu480');
        menuSocial.style.top = '119px';
        menuSocial.style.left = '1px';
        menuSocial.style.padding = '0 35.5px';
    }
}

/**
 * Определение стилей при изменении языка
 * на маленьком расширении
 * @param {bool} language 
 */
function styleChange320(language) {
    if (language) {
        menuLink.style.top = '51px';
        menuLink.style.left = '0';
        menuLink.style.padding = '9px 0';
        menuLink.classList.add('menu480');
        menuSocial.style.left = '0';
        menuSocial.style.top = '119px';
        menuSocial.style.padding = '5px 12.5px';
    } else {
        menuLink.style.top = '51px';
        menuLink.style.left = '0';
        menuLink.style.padding = '9px 0';
        menuLink.classList.add('menu480');
        menuSocial.style.top = '119px';
        menuSocial.style.left = '0';
        menuSocial.style.padding = '0 12.5px';
    }
}