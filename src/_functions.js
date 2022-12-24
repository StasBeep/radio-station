import {
    footerBroadcast,
    footerProject
} from './_variables.js';

/**
 * Изменение языка контента на станице
 * @param { Object } language 
 */
function languageChange(language) {
    _changeTextBlock(footerBroadcast, language.chapterAboutUs.broadcast)

    // Изменение текста у блока проекта у footer
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