/**
 * Original information:
 * jquery.cxassette.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2012, Codrops
 * http://www.codrops.com
 */

// Ссылка на стрим сервера
const listen_link = 'https://c18.radioboss.fm:18066/stream';


// текущая сторона ленты
let currentSide = 1;
// текущее время игровой стороны
let cntTime = 0;
// текущая позиция
let cntPosition;
// текущая сумма длительности воспроизводимых песен
let timeIterator = 0;
// используется для перемотки назад / вперёд
let elapsed = 0.0;
// таймер
let timertimeout;
// искать
let isSeeking;
// можно ли играть
let playable = false;
// выполненное действие
let lastaction = '';
// если активна функция воспроизведения / перемотки вперёд / назад ...
let isMoving = false;

// ищёт элемент audio
let audio = document.getElementById("audioElem");
// * Создание нового потока
const loopAudio = new Audio("");

// переменная уровня громкости в начале или сообщением, при возникновении ошибки
let aux = {
    fallbackMessage: 'HTML5 audio not supported', // initial sound volume
    initialVolume: 0.7
};

// * настройка работы плеера
// При нажатии на play
$('#control-play').on('mousedown', function (event) {
    play();
});

// При нажатии на stop
$('#control-stop').on('mousedown', function (event) {
    stop();
});

// При изменении положения звука -> отображение текущего положения
$('#audioElem').on('timeupdate', function (event) {
    cntTime = audio.currentTime;
    let wheelVal = getWheelValues(cntTime);
    updateWheelValue(wheelVal);
});

// событие ended происходит, когда аудио/видео достиг конца
$('#audioElem').on('ended', function (event) {
    timeIterator += audio.duration;
    stop();
});

// событие воспроизведения
function updateAction(action) {
    lastaction = action;
}

// событие уровня звука
function changeVolume(ratio) {
    audio.volume = ratio;
}

// процесс воспроизведения нажатия на кнопке (главная функция запуска)
function updateButtons(button) {
    // класс стилей
    const pressedClass = 'control-active';
    // удаяется класс "control-active"
    $('div.control-play').removeClass(pressedClass);
    $('div.control-stop').removeClass(pressedClass);
    $('div.control-rewind').removeClass(pressedClass);
    $('div.control-fforward').removeClass(pressedClass);
    // запуск определённой кнопки
    switch (button) {
        case 'play':
            $('div.control-play').addClass(pressedClass);
            break;
        case 'rewind':
            $('div.control-rewind').addClass(pressedClass);
            break;
        case 'forward':
            $('div.control-fforward').addClass(pressedClass);
            break;
    }
}

// функция запуска (старт)
function play() {
    updateButtons('play');
    $.when(playSE('click')).done(function () {
        let data = updateStatus();
        if (data) {
            // запрос ссылки с сервера и запуска на сайте
            audio.setAttribute('src', listen_link);
            audio.preload = "auto";
            audio.play();
            playable = true;
            setTimeout(function () {
                audio.currentTime = cntTime;
                // audio.currentTime = audio.duration;
                isMoving = true;
                // setWheelAnimation('2s', 'play');
                // audio.removeEventListener('canplay', playEvent);
                // фактический диспплей контроллера
                $('div.vc-buttons').show();
                $('div.vc-loader').hide();
            }, 150);
        }
    });
}

// запрос статуса воспроизведения
function updateStatus(buttons) {
    let posTime = cntTime;
    // первая остановка
    stop(true);
    setSidesPosStatus('middle');
    // the current time to play is this.cntTime +/- [this.elapsed]
    if (lastaction === 'forward') {
        posTime += elapsed;
    } else if (lastaction === 'rewind') {
        posTime -= elapsed;
    }
    // check if we have more songs to play on the current side..
    if (posTime >= audio.duration) {
        stop(buttons);
        setSidesPosStatus('end');
        return false;
    }
    resetElapsed();
    // знание, какая песня играет в данный момент времени
    // и с какого момента в песне мы будем играть
    // время обновления cntTime
    if (playable) {
        cntTime = posTime;
        // update timeIterator
        timeIterator = cntTime - audio.duration;
    }
    return true;
}

// функция запуска (stop)
function stop(buttons) {
    if (!buttons) {
        updateButtons('stop');
        playSE('click');
    }
    isMoving = false;
    // stopWheels();
    audio.pause();
    stopTimer();
}

// функция статуса и положения аудиодорожки
function setSidesPosStatus(position) {
    cntPosition = position;
}

// положение уровня звука влево и вправо  от элемента среднего положения "точки" звука
function getWheelValues(x) {
    let T = audio.duration,
        val = {
            left: (true) ? (-70 / T) * x + 70 : (70 / T) * x,
            right: (true) ? (70 / T) * x : (-70 / T) * x + 70
        };
    return val;
}

// playlist
function updateWheelValue(wheelVal) {
    this.$('div.vc-tape-wheel-left').data('wheel', wheelVal.left).css({
        'box-shadow': '0 0 0 ' + wheelVal.left + 'px black'
    });
    this.$('div.vc-tape-wheel-right').data('wheel', wheelVal.right).css({
        'box-shadow': '0 0 0 ' + wheelVal.right + 'px black'
    });
}

// credits: http://www.sitepoint.com/creating-accurate-timers-in-javascript/
// функция запоминания времени нужная для перемотки вперёд и назад
function timer() {
    let start = new Date().getTime(),
        time = 0;
    resetElapsed();
    isSeeking = true;
    setSidesPosStatus('middle');
    if (isSeeking) {
        clearTimeout(timertimeout);
        timertimeout = setTimeout(function () {
            timerinstance(start, time);
        }, 100);
    }
}

// подфункция timer() для обработки времени
function timerinstance(start, time) {
    time += 100;
    elapsed = Math.floor(time / 20) / 1;
    if (Math.round(elapsed) == elapsed) {
        this.elapsed += 0.0;
    }
    // stop if it reaches the end of the cassette / side
    // or if it reaches the beginning
    let posTime = cntTime;
    if (lastaction === 'forward') {
        posTime += elapsed;
    } else if (lastaction === 'rewind') {
        posTime -= elapsed;
    }
    let wheelVal = getWheelValues(posTime);
    updateWheelValue(wheelVal);
    if (posTime >= audio.duration || posTime <= 0) {
        stop();
        (posTime <= 0) ? cntTime = 0: cntTime = posTime;
        resetElapsed();
        (posTime <= 0) ? setSidesPosStatus('start'): setSidesPosStatus('end');
        return false;
    }
    let diff = (new Date().getTime() - start) - time;
    if (isSeeking) {
        clearTimeout(timertimeout);
        timertimeout = setTimeout(function () {
            timerinstance(start, time);
        }, (100 - diff));
    }
}

// остановка таймера при нажатии на кнопку stop
function stopTimer() {
    clearTimeout(timertimeout);
    isSeeking = false;
}

// функция обработки времени звуковой дорожки
function resetElapsed() {
    elapsed = 0.0;
}

// настройки воспроизведения SE
function playSE(seName, isLoop) {
    return $.Deferred(function (dfd) {
        if (isLoop) {
            loopAudio.loop = true;
            loopAudio.autoplay = false;
            loopAudio.play();
        } else {
            seAudio = new Audio("");
            seAudio.autoplay = false;
            seAudio.loop = false;
            // звуковое сопровождение при нажатии
            seAudio.src = "sounds/" + seName + ".mp3";
            loopAudio.pause();
            seAudio.play();
        }
        setTimeout(function () {
            dfd.resolve();
        }, 500);
    });
}
// регулятор громкости
$('li.player-volume').knobKnob({
    snap: 10,
    value: 359 * aux.initialVolume,
    turn: function (ratio) {
        changeVolume(ratio);
    }
});

// перезаписывание значения уровня громкости
audio.volume = aux.initialVolume;