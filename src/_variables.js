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
const numRew = document.getElementById('control-rewind');
const numForw = document.getElementById('control-fforward');

const elEqualizer = document.getElementById('player-equalizer');

// * Переменные slider
// Ссылка положение json-файла на gitub
const API_slider = 'https://raw.githubusercontent.com/StasBeep/radio-station/slider-click/sliderObj.json';

const sliderImg2 = document.getElementById('slider-img-2');
const sliderTitle2 = document.getElementById('slider-title-2');
const sliderText2 = document.getElementById('slider-text-2');
const sliderLink2 = document.getElementById('slider-link-2');
const sliderData2 = document.getElementById('slider-data-2');

const sliderBack = document.getElementById('slider-back');
const sliderForward = document.getElementById('slider-forward');

export {
    numPlay,
    numStop,
    elEqualizer,
    numRew,
    numForw,
    API_slider,
    sliderImg2,
    sliderTitle2,
    sliderText2,
    sliderLink2,
    sliderData2,
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