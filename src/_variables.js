// * Переменные player
const numPlay = document.getElementById('control-play');
const numStop = document.getElementById('control-stop');
const numRew = document.getElementById('control-rewind');
const numForw = document.getElementById('control-fforward');

const elEqualizer = document.getElementById('player-equalizer');

// * Переменные slider
// Ссылка положение json-файла на gitub
const API_slider = 'https://raw.githubusercontent.com/StasBeep/radio-station/slider-click/sliderObj.json';

const sliderImg = document.getElementById('slider-img');
const sliderTitle = document.getElementById('slider-title');
const sliderText = document.getElementById('slider-text');
const sliderLink = document.getElementById('slider-link');
const sliderData = document.getElementById('slider-data');

const sliderBack = document.getElementById('slider-back');
const sliderForward = document.getElementById('slider-forward');

export {
    numPlay,
    numStop,
    elEqualizer,
    numRew,
    numForw,
    API_slider,
    sliderImg,
    sliderTitle,
    sliderText,
    sliderLink,
    sliderData,
    sliderBack,
    sliderForward
}