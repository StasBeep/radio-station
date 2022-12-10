import {
    btnPlayPause,
    btnSound,
    audioMusic,
    inpVolume,
    listenLink,
} from './_variables.js';

/**
 * Запуск звукового потока и остановка
 * @param { boolean } statusMusic // статус: on/off
 * @returns { boolean } изменение статуса включения/выключения звукового потока
 */
function playMusic(statusMusic) {
    if (statusMusic == false) {
        // Запуск потока
        audioMusic.src = `${listenLink}`;
        audioMusic.autoplay = true;

        // Изменение svg у кнопки
        _svgBtnPlayPause('none', 'block');

        return true;
    } else {
        audioMusic.autoplay = false;
        audioMusic.src = '';

        _svgBtnPlayPause('block', 'none');

        return false;
    }
}

/**
 * Выключение/включение звука
 * @param { Object } statusVolume 
 * @returns { 
 *     sound: { boolean } on/off звука
 *     saveLevelVolume: { Number } Состояние уровня звука
 * }
 */
function clickChangesVolume(statusVolume) {
    if (statusVolume.sound == true) {

        // Сохранение первоначального значения уровня звука
        statusVolume.saveLevelVolume = +inpVolume.value;

        audioMusic.volume = 0;
        inpVolume.value = 0;

        // окраска в нужный цвет элемент input
        _changeColorInp(inpVolume.value);

        _svgBtnVolume('none', 'block');

        // изменение статуса звука
        statusVolume.sound = !statusVolume.sound;

        return statusVolume;
    } else {
        audioMusic.volume = Number(statusVolume.saveLevelVolume) / 100;
        inpVolume.value = Number(statusVolume.saveLevelVolume);

        _changeColorInp(inpVolume.value);

        _svgBtnVolume('block', 'none');

        statusVolume.sound = !statusVolume.sound;

        return statusVolume;
    }
}

function changeLevelVolume (level) {
    _changeColorInp(level);

    // изменение уровня звука у звуковой дорожки
    audioMusic.volume = Number(level) / 100;

    if(level == 0) {
        _svgBtnVolume('none', 'block');
    } else {
        _svgBtnVolume('block', 'none');
    }

    return level;
}

/**
 * Отображение svg элементов у кнопки (пуска и паузы)
 * @param { String } childVisible0 
 * @param { String } childVisible1 
 */
function _svgBtnPlayPause(childVisible0, childVisible1) {
    btnPlayPause.children[0].style.display = `${childVisible0}`;
    btnPlayPause.children[1].style.display = `${childVisible1}`;
}

/**
 * Отображение svg элементов у кнопки (звука)
 * @param { String } childVisible0 
 * @param { String } childVisible1 
 */
function _svgBtnVolume(childVisible0, childVisible1) {
    btnSound.children[0].style.display = `${childVisible0}`;
    btnSound.children[1].style.display = `${childVisible1}`;
}

function _changeColorInp(value) {
    inpVolume.style.background = `linear-gradient(to right, #181818 ${value}%, #181818 ${value}%, #888888 ${value}%, #888888 100%)`;
}

export {
    playMusic,
    clickChangesVolume,
    changeLevelVolume
};