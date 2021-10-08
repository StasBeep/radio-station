/**
 * Элементы контроля плеера
 * 1. изменение состояния кнопок при нажатии
 * 2. изменение эквалайзера (gif)
 */
import {numPlay, numStop, elEqualizer, numRew, numForw} from './_variables.js';

numPlay.addEventListener('click', () => {
    elEqualizer.src = '../img/equalizer_play.gif';
    numPlay.style.display = 'none';
    numStop.style.display = 'block';
});

numStop.addEventListener('click', () => {
    elEqualizer.src = '../img/equalizer_pause.gif';
    numStop.style.display = 'none';
    numPlay.style.display = 'block';
});

numRew.addEventListener('click', () => {
    elEqualizer.src = '../img/equalizer_pause.gif';
    numStop.style.display = 'none';
    numPlay.style.display = 'block';
});

numForw.addEventListener('click', () => {
    elEqualizer.src = '../img/equalizer_pause.gif';
    numStop.style.display = 'none';
    numPlay.style.display = 'block';
});