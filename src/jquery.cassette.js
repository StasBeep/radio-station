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

// ! ищёт элемент audio (надо переделать, на создание и добавление элемента)
let audio = document.getElementById("audioElem");
// * Создание нового потока
const loopAudio = new Audio("");

// переменная уровня громкости в начале или сообщением, при возникновении ошибки
let aux = {
    fallbackMessage: 'HTML5 audio not supported', // initial sound volume
    initialVolume: 0.7
};

// playlist
$(document).ready(function () {
    let title, artist, mp3url, image;
    $.getJSON("https://listen.ssr990.com/assets/podparser.php?callback=?&Podurl=" + Podurl, {}, function (playlist) {
        console.log(playlist);
        for (let i = 0; Object.keys(playlist).length > i; i++) {
            $('.tracklist').prepend('<li class=""><div><a href="javascript:;" class="jp-playlist-item-remove" style="display: none;">×</a><a href="javascript:;" class="jp-playlist-item" tabindex="0" name="' + escape_html(playlist[i].title) + '" artist="' + escape_html(playlist[i].artist) + '" url="' + playlist[i].mp3 + '" image="' + playlist[i].poster + '">' + escape_html(playlist[i].title) + '</a></div></li>');
        }
        let num = Object.keys(playlist).length - 1;
        title = escape_html(playlist[num].title);
        artist = escape_html(playlist[num].artist);
        mp3url = playlist[num].mp3;
        image = playlist[num].poster;
        let wheelVal = getWheelValues(0);
        updateWheelValue(wheelVal);
        //updateSong(title, artist, mp3url,image,false);
		
		updateSong(title, artist, "https://c18.radioboss.fm:18066/stream",image,false);
    });
});

// элемент playlist
$(document).on('click', ".jp-playlist-item", function () {
    title = $(this).attr('name');
    artist = $(this).attr('artist');
    mp3url = $(this).attr('url');
    image = $(this).attr('image');
    let wheelVal = getWheelValues(0);
    updateWheelValue(wheelVal);
    //switchSides();
    updateSong(title, artist, mp3url, image,true);
});

// отображение обложки при стриме
function updateSong(title, artist, url, image, autoplay) {
    $('div.vc-buttons').hide();
    $('div.vc-loader').show();
    $('.track-title').text(title);
    $('.track-image').attr("src",image);
    //$('.track-artist').text(artist);
    stop();
    audio.src = url;
    cntTime = 0;
    playable = false;
    if(autoplay){
        play();
    }else{
        play();
        setTimeout(function(){stop();},1000);
    }
}

// * настройка работы плеера
// При нажатии на play
$('#vc-control-play').on('mousedown', function (event) {
    setButtonActive($(this));
    play();
});

// При нажатии на stop
$('#vc-control-stop').on('mousedown', function (event) {
    setButtonActive($(this));
    stop();
});

// При нажатии на вперёд
$('#vc-control-fforward').on('mousedown', function (event) {
    setButtonActive($(this));
    forward();
});

// При нажатии на назад
$('#vc-control-rewind').on('mousedown', function (event) {
    setButtonActive($(this));
    rewind();
});

// При изменении положения звука -> отображение текущего положения
$('#audioElem').on('timeupdate', function (event) {
    cntTime = audio.currentTime;
    let wheelVal = getWheelValues(cntTime);
    updateWheelValue(wheelVal);
});

// TODO: оповещение при загрузке мета-данных для видео (нужна ли)
$('#audioElem').on('loadedmetadata', function (event) {});

// событие ended происходит, когда аудио/видео достиг конца
$('#audioElem').on('ended', function (event) {
    timeIterator += audio.duration;
    stop();
});

// TODO: добавление класса и удаление класса с эффектами нажатия (этого класса нет)
function setButtonActive($button) {
    // TODO. Solve! For now:
    $button.addClass('vc-control-pressed');
    setTimeout(function () {
        $button.removeClass('vc-control-pressed');
    }, 100);
}

// событие воспроизведения
function updateAction(action) {
    lastaction = action;
}

// событие уровня звука
function changeVolume(ratio) {
    audio.volume = ratio;
}

// сторона касеты
/*
function switchSides() {
    playSE('switch');
    lastaction = '';
    //currentSide = 2;
    $('div.vc-tape').css({
        '-webkit-transform': 'rotate3d(0, 1, 0, 180deg)'
        , '-moz-transform': 'rotate3d(0, 1, 0, 180deg)'
        , '-o-transform': 'rotate3d(0, 1, 0, 180deg)'
        , '-ms-transform': 'rotate3d(0, 1, 0, 180deg)'
        , 'transform': 'rotate3d(0, 1, 0, 180deg)'
    });
    //currentSide = 1;
    setTimeout(function () {
        $('div.vc-tape').css({
            '-webkit-transform': 'rotate3d(0, 1, 0, 0deg)'
            , '-moz-transform': 'rotate3d(0, 1, 0, 0deg)'
            , '-o-transform': 'rotate3d(0, 1, 0, 0deg)'
            , '-ms-transform': 'rotate3d(0, 1, 0, 0deg)'
            , 'transform': 'rotate3d(0, 1, 0, 0deg)'
        });
        //_self.$tapeSideB.hide();
        //_self.$tapeSideA.show();
        // update wheels
        cntTime = 0;
    }, 300);
}
*/


// процесс воспроизведения нажатия на кнопке (главная функция запуска)
function updateButtons(button) {
    // класс стилей
    const pressedClass = 'vc-control-active';
    // удаяется класс "vc-control-active"
    $('div.vc-control-play').removeClass(pressedClass);
    $('div.vc-control-stop').removeClass(pressedClass);
    $('div.vc-control-rewind').removeClass(pressedClass);
    $('div.vc-control-fforward').removeClass(pressedClass);
    // запуск определённой кнопки
    switch (button) {
    case 'play':
        $('div.vc-control-play').addClass(pressedClass);
        break;
    case 'rewind':
        $('div.vc-control-rewind').addClass(pressedClass);
        break;
    case 'forward':
        $('div.vc-control-fforward').addClass(pressedClass);
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
    }
    else if (lastaction === 'rewind') {
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

// функция запуска (обратная перемотка)
function rewind() {
    const action = 'rewind';
    if (audio.currentTime == 0) {
        return false;
    }
    updateButtons(action);
    $.when(playSE('click')).done(function () {
        updateStatus(true);
        isMoving = true;
        updateAction(action);
        playSE('rewind', true);
        // setWheelAnimation('0.5s', action);
        timer();
    });
}

// функция запуска (вперёд)
function forward() {
    const action = 'forward';
    if (audio.currentTime === audio.duration) {
        return false;
    }
    updateButtons(action);
    $.when(playSE('click')).done(function () {
        updateStatus(true);
        isMoving = true;
        updateAction(action);
        playSE('fforward', true);
        // setWheelAnimation('0.5s', action);
        timer();
    });
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

// удаление ссылки, но связи нет с ней
/*function clear() {
    this.$audioEl.children('source').remove();
}*/

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

// Пустая функция
/*function getPosTime() {
    let wleft = this.$wheelLeft.data('wheel')
        , wright = this.$wheelRight.data('wheel');
    if (wleft === undefined) {
        wleft = 70;
    }
    if (wright === undefined) {
        wright = 0;
    }
    let T = this._getSide().current.getDuration()
        , posTime = this.currentSide === 2 ? (T * wleft) / 70 : (T * wright) / 70;
    return posTime;
}*/

// playlist
function updateWheelValue(wheelVal) {
    this.$('div.vc-tape-wheel-left').data('wheel', wheelVal.left).css({
        'box-shadow': '0 0 0 ' + wheelVal.left + 'px black'
    });
    this.$('div.vc-tape-wheel-right').data('wheel', wheelVal.right).css({
        'box-shadow': '0 0 0 ' + wheelVal.right + 'px black'
    });
}

// * Функция вращения (скорости вращения) колеса касеты "анимация"
/*function setWheelAnimation(speed, mode) {
    let anim = '';
    if (mode === 'play' || mode === 'forward') {
        anim = 'rotateLeft';
    }
    else if (mode === 'rewind') {
        anim = 'rotateRight';
    }
    let animStyle = {
        '-webkit-animation': anim + ' ' + speed + ' linear infinite forwards'
        , '-moz-animation': anim + ' ' + speed + ' linear infinite forwards'
        , '-o-animation': anim + ' ' + speed + ' linear infinite forwards'
        , '-ms-animation': anim + ' ' + speed + ' linear infinite forwards'
        , 'animation': anim + ' ' + speed + ' linear infinite forwards'
    };
    setTimeout(function () {
        $('div.vc-tape-wheel-right').css(animStyle);
        $('div.vc-tape-wheel-left').css(animStyle);
    }, 0);
}

function stopWheels() {
    const wheelStyle = {
        '-webkit-animation': 'none'
        , '-moz-animation': 'none'
        , '-o-animation': 'none'
        , '-ms-animation': 'none'
        , 'animation': 'none'
    }
    $('div.vc-tape-wheel-left').css(wheelStyle);
    $('div.vc-tape-wheel-right').css(wheelStyle);
}*/

// credits: http://www.sitepoint.com/creating-accurate-timers-in-javascript/
// функция запоминания времени нужная для перемотки вперёд и назад
function timer() {
    let start = new Date().getTime()
        , time = 0;
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
    }
    else if (lastaction === 'rewind') {
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
            // звук при нажатии
            loopAudio.src = "sounds/" + seName + ".mp3";
            loopAudio.play();
        }
        else {
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
$('div.vc-volume-knob').knobKnob({
    snap: 10,
    value: 359 * aux.initialVolume,
    turn: function (ratio) {
        changeVolume(ratio);
    }
});

// перезаписывание значения уровня громкости
audio.volume = aux.initialVolume;