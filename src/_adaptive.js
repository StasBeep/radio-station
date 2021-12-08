import {
    menuSocial,
    menuLink,
    checkEl
} from './_variables.js';

import {
    toggle
} from './_click-language.js';

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
    if (window.innerWidth <= 768 && window.innerWidth > 725) {
        styleChange768(toggle);
    } else if (window.innerWidth <= 725 && window.innerWidth > 600) {
        styleChange725(toggle);
    } else if (window.innerWidth <= 600 && window.innerWidth > 560) {
        styleChange600(toggle);
    } else if (window.innerWidth <= 560 && window.innerWidth > 480) {
        styleChange560(toggle);
    } else if (window.innerWidth <= 480 && window.innerWidth > 450) {
        styleChange480(toggle);
    } else if (window.innerWidth <= 450 && window.innerWidth > 375) {
        styleChange450(toggle);
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
        menuLink.style.left = '178px';
        menuLink.style.padding = '18px 0.5px';

        menuSocial.style.top = '130px';
        menuSocial.style.left = '178px';
        menuSocial.style.padding = '0 51px';
    } else {
        menuLink.style.left = '172px';
        menuLink.style.padding = '18px 0';

        menuSocial.style.top = '130px';
        menuSocial.style.left = '172px';
        menuSocial.style.padding = '0 60px';
    }
}

/**
 * Определение стилей при изменении языка
 * на маленьком расширении
 * @param {bool} language 
 */
function styleChange725(language) {
    if (language) {
        menuLink.style.top = '63px';
        menuLink.style.left = '125px';
        menuLink.style.padding = '18px 0.5px';

        menuSocial.style.top = '130px';
        menuSocial.style.left = '125px';
        menuSocial.style.padding = '0 51px';
    } else {
        menuLink.style.left = '112px';
        menuLink.style.padding = '18px 0';

        menuSocial.style.top = '130px';
        menuSocial.style.left = '112px';
        menuSocial.style.padding = '0 60px';
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
        menuSocial.style.top = '131px';
        menuSocial.style.padding = '0 52px';
    } else {
        menuLink.style.left = '80px';
        menuSocial.style.left = '80px';
        menuSocial.style.padding = '0 61.5px';
    }
}

/**
 * Определение стилей при изменении языка
 * на маленьком расширении
 * @param {bool} language 
 */
function styleChange560(language) {
    if (language) {
        menuLink.style.left = '49px';
        menuLink.style.padding = '18px 1px';
        menuSocial.style.left = '49px';
        menuSocial.style.top = '129px';
        menuSocial.style.padding = '0 52px';
    } else {
        menuLink.style.left = '40px';
        menuSocial.style.left = '40px';
        menuSocial.style.padding = '0 61.5px';
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
        menuSocial.style.padding = '0 52px';
    } else {
        menuLink.style.left = '30px';
        menuLink.classList.add('menu480');
        menuSocial.style.left = '30px';
        menuSocial.style.padding = '0 61.5px';
    }
}

/**
 * Определение стилей при изменении языка
 * на маленьком расширении
 * @param {bool} language 
 */
function styleChange450(language) {
    if (language) {
        menuLink.style.left = '0';
        menuLink.style.padding = '18px 1px';
        menuLink.classList.add('menu480');
        menuSocial.style.left = '0';
        menuSocial.style.padding = '0 50px';
    } else {
        menuLink.style.left = '0';
        menuLink.classList.add('menu480');
        menuSocial.style.left = '0';
        menuSocial.style.padding = '0 49.5px';
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
        menuLink.style.left = '0';
        menuLink.style.padding = '18px 20px';
        menuLink.classList.add('menu480');
        menuSocial.style.left = '0';
        menuSocial.style.top = '135px';
        menuSocial.style.padding = '5px 37.5px';
    } else {
        menuLink.style.top = '51px';
        menuLink.style.left = '0';
        menuLink.style.padding = '18px 0';
        menuLink.classList.add('menu480');
        menuSocial.style.top = '135px';
        menuSocial.style.left = '0';
        menuSocial.style.padding = '0 37.5px';
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
        menuLink.style.left = '-6px';
        menuLink.style.padding = '9px 0';
        menuLink.classList.add('menu480');
        menuSocial.style.top = '119px';
        menuSocial.style.left = '-6px';
        menuSocial.style.padding = '0 17.5px';
    }
}