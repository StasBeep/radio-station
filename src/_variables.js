// Элементы на странице
const audioMusic = document.querySelector('#music'); // элемент аудио
const btnPlayPause = document.querySelector('.ether-control-li-play'); // кнопка пуска и паузы потока
const btnSound = document.querySelector('.ether-control-li-sound'); // on/off звук
const inpVolume = document.querySelector('#volume'); // ползунок звука

// Ссылки
const listenLink = 'https://c18.radioboss.fm:18066/stream';

export { audioMusic, btnPlayPause, btnSound, listenLink, inpVolume };