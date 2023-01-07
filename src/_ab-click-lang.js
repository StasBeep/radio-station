// Изменение content на странице about us в зависимости от языка
import {
    menuEl1,
    menuEl2,
    menuEl3,
    menuEl4,
    langBtn,
    contDesc,
    contCard1Desc,
    contCard2Desc,
    contCard3Desc,
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
    linkFour,
    broadcastTitle,
    feedTitle,
    feedProposal,
    feedLabel,
    feedExp,
    feedBtn,
    feedFile,
    feedAgree,
    feedPolicyLink
} from './_variables.js'

import {
    sizeMenu
} from './_ab-adaptive.js';

import {
    contentRu,
    contentEn
} from './_language-content.js'

export let toggle = true;

document.addEventListener('DOMContentLoaded', langVariation(toggle));

langBtn.addEventListener('click', () => {
    toggle = !toggle;
    langVariation(toggle);
});

/**
 * Функция запускающая изменение контента от языка
 * @param {bool} language 
 */
function langVariation(language) {
    if (language) {
        langBtn.textContent = 'en';
        arrangeOfElement(contentRu);
    } else {
        langBtn.textContent = 'ru';
        arrangeOfElement(contentEn);
    }
}

/**
 * Функция изменяющая текст в тегах
 * @param {array} content 
 */
function arrangeOfElement(content) {
    menuEl1.textContent = content.elMenu1;
    menuEl2.textContent = content.elMenu2;
    menuEl3.textContent = content.elMenu3;
    menuEl4.textContent = content.elMenu4;
    contDesc.textContent = content.contentDes;
    contCard1Desc.textContent = content.card1Description;
    contCard2Desc.textContent = content.card2Description;
    contCard3Desc.textContent = content.card3Description;
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
    broadcastTitle.textContent = content.broadcast;
    feedTitle.textContent = content.feedTitle;
    feedLabel[1].textContent = content.feedName;
    feedLabel[2].textContent = content.feedComent;
    feedProposal[0].textContent = content.feedProposal;
    feedBtn[0].textContent = content.feedBtn;
    feedExp[0].textContent = content.feedExpl;
    feedFile.textContent = content.feedFile;
    feedAgree.textContent = content.feedPolitical;
    feedPolicyLink.textContent = content.feedPoliticalLink;

    sizeMenu();
}