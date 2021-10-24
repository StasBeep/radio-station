import {
    menuEl1,
    menuEl2,
    menuEl3,
    menuEl4,
    langBtn,
    contDesc,
    contCard1,
    contCard2,
    contCard3,
    projectTitle,
    descrOne,
    descrTwo,
    descrThree,
    descrFour,
    projectTitleOne,
    projectTitleTwo,
    projectTitleThree,
    projectTitleFour,
    linkOne,
    linkTwo,
    linkThree,
    linkFour
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
    contDesc.textContent = content.contentDes;
    contCard1.textContent = content.card1;
    contCard2.textContent = content.card2;
    contCard3.textContent = content.card3;
    projectTitle.textContent = content.project;
    descrOne.textContent = content.projectOne;
    descrTwo.textContent = content.projectTwo;
    descrThree.textContent = content.projectThree;
    descrFour.textContent = content.projectFour;
    projectTitleOne.textContent = content.projectTitleOne;
    projectTitleTwo.textContent = content.projectTitleTwo;
    projectTitleThree.textContent = content.projectTitleThree;
    projectTitleFour.textContent = content.projectTitleFour;
    linkOne.textContent = content.more;
    linkTwo.textContent = content.more;
    linkThree.textContent = content.more;
    linkFour.textContent = content.more;
}