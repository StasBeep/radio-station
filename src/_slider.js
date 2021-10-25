import {
    sliderBack,
    sliderForward,
    API_slider
} from './_variables.js';

import {
    elementLoaded,
    checkCondition,
    sideSliders
} from './_slider.operation.js'


// в объектах в разделе text не больше 450 символов
let arrObjSlider = [];

// Пока не выполнится промис через API (ожидание)
let response = await fetch(`${API_slider}`);
// Проверка статуса ответа от API
if (response.ok) {
    // ожидание загрузки .json файла
    let json = await response.json();
    // перемещение содержимого в переменную слайдера
    arrObjSlider = json.arrObjSlider;
} else {
    // В случае ошибки
    console.log("Ошибка HTTP: " + response.status);
}


// первоначальное состояние
let condition = 0;

// состояние боковых элементов слайдера
let sideLeft = arrObjSlider.length - 1;
let sideRight = 1;

// События выгрузки контента слайдера в первый момент времени
document.addEventListener('DOMContentLoaded', elementLoaded(arrObjSlider[condition]));
document.addEventListener('DOMContentLoaded', sideSliders(arrObjSlider[sideLeft], arrObjSlider[sideRight]));

// События нажатия на перелистывание слайдера
sliderBack.addEventListener('click', () => {
    condition = checkCondition(condition - 1, arrObjSlider.length);
    sideLeft = checkCondition(sideLeft - 1, arrObjSlider.length);
    sideRight = checkCondition(sideRight - 1, arrObjSlider.length);
    elementLoaded(arrObjSlider[condition]);
    sideSliders(arrObjSlider[sideLeft], arrObjSlider[sideRight]);
});

sliderForward.addEventListener('click', () => {
    condition = checkCondition(condition + 1, arrObjSlider.length);
    sideLeft = checkCondition(sideLeft + 1, arrObjSlider.length);
    sideRight = checkCondition(sideRight + 1, arrObjSlider.length);
    elementLoaded(arrObjSlider[condition]);
    sideSliders(arrObjSlider[sideLeft], arrObjSlider[sideRight]);
});

// События изменения слайдера автоматически (10 секунд)
setInterval(() => {
    condition = checkCondition(condition + 1, arrObjSlider.length);
    sideLeft = checkCondition(sideLeft + 1, arrObjSlider.length);
    sideRight = checkCondition(sideRight + 1, arrObjSlider.length);
    elementLoaded(arrObjSlider[condition]);
    sideSliders(arrObjSlider[sideLeft], arrObjSlider[sideRight]);
}, 10000)