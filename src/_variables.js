// Элементы на странице
const sliderElement = document.getElementsByClassName('slider-figure')[0].children; // элемент слайдера
const audioMusic = document.querySelector('#music'); // элемент аудио
const btnPlayPause = document.querySelector('.ether-control-li-play'); // кнопка пуска и паузы потока
const btnSound = document.querySelector('.ether-control-li-sound'); // on/off звук
const inpVolume = document.querySelector('#volume'); // ползунок звука
let explanation = document.querySelector('.connection-foundation-form-explanation'); // элемент "прикрепить файл"
let explFile = document.querySelector('.connection-foundation-form-file'); // элемент "прикрепить файл"

// Ссылки
const listenLink = 'https://c18.radioboss.fm:18066/stream';
const API_slider = 'https://raw.githubusercontent.com/StasBeep/radio-station/alteration-content/arrObjSlider.json';

export { sliderElement, audioMusic, btnPlayPause, btnSound, inpVolume, explanation, explFile, listenLink, API_slider };