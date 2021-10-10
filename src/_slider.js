import {
    sliderBack,
    sliderForward
} from './_variables.js';

import {
    elementLoaded,
    checkCondition
} from './_slider.operation.js'

//! массив из объектов slider (потом через API)
// в объектах в разделе text не больше 450 символов
const arrObjSlider = '';

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