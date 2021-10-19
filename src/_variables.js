// * Переменные элементов, для смены языка
const menuEl1 = document.getElementById('el-menu-1');
const menuEl2 = document.getElementById('el-menu-2');
const menuEl3 = document.getElementById('el-menu-3');
const menuEl4 = document.getElementById('el-menu-4');
const langBtn = document.getElementById('languages-button');
const contDesc = document.getElementById('content-description');
const contCard1 = document.getElementById('card-words-1');
const contCard2 = document.getElementById('card-words-2');
const contCard3 = document.getElementById('card-words-3');

// * Переменные player
const numPlay = document.getElementById('control-play');
const numStop = document.getElementById('control-stop');

const audioEl = document.getElementById('audioElem');

// * Переменные slider
// Ссылка положение json-файла на gitub
const API_slider = 'https://raw.githubusercontent.com/StasBeep/radio-station/slider-click/sliderObj.json';

const sliderImg = document.getElementById('slider-img');
const sliderTitle = document.getElementById('slider-title');
const sliderText = document.getElementById('slider-text');
const sliderLink = document.getElementById('slider-link');
const sliderData = document.getElementById('slider-data');

const sliderImg1 = document.getElementById('slider-img-1');
const sliderImg3 = document.getElementById('slider-img-3');

const sliderTitle1 = document.getElementById('slider-title-1');
const sliderTitle3 = document.getElementById('slider-title-3');

const sliderLink1 = document.getElementById('slider-link-1');
const sliderLink3 = document.getElementById('slider-link-3');

const sliderBack = document.getElementById('slider-back');
const sliderForward = document.getElementById('slider-forward');

export {
    numPlay,
    numStop,
    audioEl,
    API_slider,
    sliderImg,
    sliderImg1,
    sliderImg3,
    sliderLink1,
    sliderLink3,
    sliderTitle1,
    sliderTitle3,
    sliderTitle,
    sliderText,
    sliderLink,
    sliderData,
    sliderBack,
    sliderForward,
    menuEl1,
    menuEl2,
    menuEl3,
    menuEl4,
    langBtn,
    contDesc,
    contCard1,
    contCard2,
    contCard3
}