/**
 * Элементы контроля плеера
 * 1. изменение состояния кнопок при нажатии
 * 2. изменение эквалайзера (gif)
 */
import {
    numPlay,
    numStop,
    audioEl
} from './_variables.js';

// Подключение библиотеки эквалайзера
import AudioMotionAnalyzer from './_audioMotion-analyzer.js';

new AudioMotionAnalyzer(
    document.getElementById('equalizer'), {
        source: audioEl,
        height: window.innerHeight - 50,
        mode: 3,
        barSpace: .6,
        showLeds: true
    }
);

numPlay.addEventListener('click', () => {
    numPlay.style.display = 'none';
    numStop.style.display = 'block';
});

numStop.addEventListener('click', () => {
    numStop.style.display = 'none';
    numPlay.style.display = 'block';
});