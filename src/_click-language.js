import {
    menuEl1,
    menuEl2,
    menuEl3,
    menuEl4,
    langBtn
} from './_variables.js'

import {
    contentRu,
    contentEn
} from './_language-content.js'

let toggle = true;

document.addEventListener('DOMContentLoaded', langVariation(toggle));

langBtn.addEventListener('click', () => {
    toggle = !toggle;
    langVariation(toggle);
});

function langVariation(language) {
    if (language) {
        langBtn.textContent = 'ru';
        arrangeOfElement(contentRu);
    } else {
        langBtn.textContent = 'en';
        arrangeOfElement(contentEn);
    }
}

function arrangeOfElement(content) {
    menuEl1.textContent = content.elMenu1;
    menuEl2.textContent = content.elMenu2;
    menuEl3.textContent = content.elMenu3;
    menuEl4.textContent = content.elMenu4;
}