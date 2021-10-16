import {
    sliderImg,
    sliderTitle,
    sliderText,
    sliderLink,
    sliderData,
} from './_variables.js'

/**
 * Загрузка в слайдер элементов массива
 * @param {object} первый объект массива
 */
export function elementLoaded(arrObjSlider) {
    sliderImg.src = `${arrObjSlider.image}`;
    sliderTitle.textContent = `${arrObjSlider.title}`;
    sliderText.textContent = `${arrObjSlider.text}`;

    availabilityLink(arrObjSlider.link);
    availabilityData(arrObjSlider.data);
}

/**
 * функция проверки наличия ссылки
 * @param {string} link 
 */
function availabilityLink(link) {
    if (link === '') {
        sliderLink.textContent = 'Нет подробностей';
        sliderLink.href = '#';
        sliderLink.target = '_self';
    } else {
        sliderLink.textContent = 'Подробнее';
        sliderLink.href = `${link}`;
    }
}

/**
 * функция проверки наличия даты
 * @param {string} data 
 */
function availabilityData(data) {
    if (data === '') {
        sliderData.textContent = '--.--.----';
    } else {
        sliderData.textContent = `${data}`;
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