import {
    sliderImg2,
    sliderTitle2,
    sliderText2,
    sliderLink2,
    sliderData2,
} from './_variables.js'

/**
 * Загрузка в слайдер элементов массива
 * @param {object} первый объект массива
 */
export function elementLoaded(arrObjSlider) {
    sliderImg2.src = `${arrObjSlider.image}`;
    sliderTitle2.textContent = `${arrObjSlider.title}`;
    sliderText2.textContent = `${arrObjSlider.text}`;

    availabilityLink(arrObjSlider.link);
    availabilityData(arrObjSlider.data);
}

/**
 * функция проверки наличия ссылки
 * @param {string} link 
 */
function availabilityLink(link) {
    if (link === '') {
        sliderLink2.textContent = 'Нет подробностей';
        sliderLink2.href = '#';
        sliderLink2.target = '_self';
    } else {
        sliderLink2.textContent = 'Подробнее';
        sliderLink2.href = `${link}`;
    }
}

/**
 * функция проверки наличия даты
 * @param {string} data 
 */
function availabilityData(data) {
    if (data === '') {
        sliderData2.textContent = '--.--.----';
    } else {
        sliderData2.textContent = `${data}`;
    }
}

export function checkCondition(condition, length) {
    if (condition === -1) {
        condition = --length;
    } else if (condition === length) {
        condition = 0;
    }
    return condition;
}