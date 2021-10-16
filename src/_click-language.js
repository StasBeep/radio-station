import {
    menuEl1,
    menuEl2,
    menuEl3,
    menuEl4
} from './_variables.js'

import {
    contentRu,
    contentEn
} from './_language-content.js'

document.addEventListener('DOMContentLoaded', langVariation(true));

function langVariation(language) {
    if (language) {
        arrangeOfElement(contentRu);
    } else {
        arrangeOfElement(contentEn);
    }
}

function arrangeOfElement(content) {
    menuEl1.textContent = content.elMenu1;
    menuEl2.textContent = content.elMenu2;
    menuEl3.textContent = content.elMenu3;
    menuEl4.textContent = content.elMenu4;
}