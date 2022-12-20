// Элементы на странице
const languageBtn = document.getElementsByClassName('header-languages')[0].children;
const menuLang = document.getElementsByClassName('header-transitions-menu-li-link');
const radioDescription = document.getElementsByClassName('header-description')[0];
const sectionMain = document.getElementsByClassName('main')[0].children;
const advantagesList = document.getElementsByClassName('advantages-ol')[0];
const sliderElement = document.getElementsByClassName('slider-figure')[0].children; // элемент слайдера
const sliderBtnRight = document.getElementsByClassName('slider-figure-li-right')[0];
const sliderBtnLeft = document.getElementsByClassName('slider-figure-li-left')[0];
const etherBlock = document.getElementsByClassName('ether-down')[0];
const audioMusic = document.querySelector('#music'); // элемент аудио
const btnPlayPause = document.querySelector('.ether-control-li-play'); // кнопка пуска и паузы потока
const btnSound = document.querySelector('.ether-control-li-sound'); // on/off звук
const inpVolume = document.querySelector('#volume'); // ползунок звука
const projectList = document.getElementsByClassName('projects-links')[0];
const explanation = document.querySelector('.connection-foundation-form-explanation'); // элемент "прикрепить файл"
const explFile = document.querySelector('.connection-foundation-form-file'); // элемент "прикрепить файл"
const donatblock = document.getElementsByClassName('donat-content')[0];
const donatLink = document.querySelector('#donat-link');
const connectForm = document.getElementsByClassName('connection-foundation-form')[0];
const connectDescription = document.getElementsByClassName('connection-description')[0];
const footerBroadcast = document.querySelector('.footer-up-left-channels-title');
const footerProject = document.getElementsByClassName('footer-up-left-projects');
const footerYearContent = document.getElementsByClassName('footer-down-years')[0];

// Ссылки
const API_language = 'https://raw.githubusercontent.com/StasBeep/radio-station/alteration-content/languageBlog.json';
const API_slider = 'https://raw.githubusercontent.com/StasBeep/radio-station/alteration-content/arrObjSlider.json';
const listenLink = 'https://c18.radioboss.fm:18066/stream';

export {
    languageBtn,
    menuLang,
    radioDescription,
    sectionMain,
    advantagesList,
    sliderElement,
    sliderBtnRight,
    sliderBtnLeft,
    etherBlock,
    audioMusic,
    btnPlayPause,
    btnSound,
    inpVolume,
    projectList,
    explanation,
    explFile,
    donatblock,
    donatLink,
    connectForm,
    connectDescription,
    footerBroadcast,
    footerProject,
    footerYearContent,
    API_language,
    API_slider,
    listenLink,
};