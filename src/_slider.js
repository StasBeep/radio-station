import {
    sliderBack,
    sliderForward,
    API_slider
} from './_variables.js';

import {
    elementLoaded,
    checkCondition
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

document.addEventListener('DOMContentLoaded', elementLoaded(arrObjSlider[condition]));

sliderBack.addEventListener('click', () => {
    condition = checkCondition(condition - 1, arrObjSlider.length);
    elementLoaded(arrObjSlider[condition]);
});

sliderForward.addEventListener('click', () => {
    condition = checkCondition(condition + 1, arrObjSlider.length);
    elementLoaded(arrObjSlider[condition]);
});