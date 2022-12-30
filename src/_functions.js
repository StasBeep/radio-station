import {
    menuLang,
    sectionMain,
    infoDescription,
    aboutDescription,
    footerBroadcast,
    footerProject
} from './_variables.js';

/**
 * Изменение языка контента на станице
 * @param { Object } language 
 */
function languageChange(language) {
    // Меню
    _changeTextBlock(menuLang[0], language.menu.main);
    _changeTextBlock(menuLang[1], language.menu.blog);
    _changeTextBlock(menuLang[2], language.menu.aboutUs);

    // Изменение заголовков у блоков
    _changeTextBlock(sectionMain[0].children[0].children[0], language.headings.aboutUs);
    _changeTextBlock(sectionMain[1].children[0], language.headings.advantages);

    //  Описание блока о нас
    _changeTextBlock(aboutDescription, language.pageAboutUs.description);

    // Описаниние о нас (перечисления)
    _changeTextBlock(infoDescription[0], language.pageAboutUs.info.project);
    _changeTextBlock(infoDescription[1], language.pageAboutUs.info.ourFormat);
    _changeTextBlock(infoDescription[2], language.pageAboutUs.info.regular);
    _changeTextBlock(infoDescription[3], language.pageAboutUs.info.exclusive);
    _changeTextBlock(infoDescription[4], language.pageAboutUs.info.artists);

    // Изменение текста у блока проекта у footer
    _changeTextBlock(footerBroadcast, language.chapterAboutUs.broadcast);

    _changeTextBlock(footerProject[0].children[0], language.headings.footerProject);
    _changeTextBlock(footerProject[0].children[1].children[0], language.chapterProject.vibes);
    _changeTextBlock(footerProject[0].children[2].children[0], language.chapterProject.woman);
    _changeTextBlock(footerProject[0].children[3].children[0], language.chapterProject.dembow);
    _changeTextBlock(footerProject[0].children[4].children[0], language.chapterProject.reggae);
}

/**
 * Изменение в теге контента
 * @param { Element } block Тег, который изменяет текст внутри себя
 * @param { String } text Содержимое объекта языка
 */
function _changeTextBlock(block, text) {
    block.textContent = `${text}`;
}



export {
    languageChange
};