// Элементы на странице
const languageBtn = document.getElementsByClassName('header-languages')[0].children;
const menuLang = document.getElementsByClassName('header-transitions-menu-li-link');
const sectionMain = document.getElementsByClassName('main')[0].children;
const aboutDescription = document.getElementsByClassName('about-us-description')[0];
const infoDescription = document.getElementsByClassName('advantages-list-li');
const footerBroadcast = document.querySelector('.footer-up-left-channels-title');
const footerProject = document.getElementsByClassName('footer-up-left-projects');
const footerYearContent = document.getElementsByClassName('footer-down-years')[0];

// Ссылки
const API_language = 'https://raw.githubusercontent.com/StasBeep/radio-station/alteration-content/languageBlog.json';

export {
    languageBtn,
    menuLang,
    sectionMain,
    aboutDescription,
    infoDescription,
    footerBroadcast,
    footerProject,
    footerYearContent,
    API_language
};