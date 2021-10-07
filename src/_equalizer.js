import {numPlay, numStop, elEqualizer} from './_variables.js';

numPlay.addEventListener('click', () => {
    elEqualizer.src = '../img/equalizer_play.gif'
});

numStop.addEventListener('click', () => {
    elEqualizer.src = '../img/equalizer_pause.gif'
})