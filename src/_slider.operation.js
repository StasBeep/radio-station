import {
    sliderImg,
    sliderTitle,
    sliderText,
    sliderLink,
    sliderData,
    sliderImg1,
    sliderImg3,
    sliderLink1,
    sliderLink3,
    sliderTitle1,
    sliderTitle3
} from './_variables.js'

/**
 * Загрузка в слайдер элементов массива (главного слайдера)
 * @param {object} первый объект массива
 */
export function elementLoaded(arrObjSlider) {
    sliderImg.src = `${arrObjSlider.image}`;
    sliderTitle.textContent = `${arrObjSlider.title}`;
    sliderText.textContent = `${arrObjSlider.text}`;

    availabilityLink(sliderLink, arrObjSlider.link);
    availabilityData(arrObjSlider.data);
}

/**
 * Загрузка в боковые слайдеры элементов массива (бок. слайдеры)
 * @param {object} left левый слайдер
 * @param {object} right правый слайдер
 */
export function sideSliders(left, right) {
    sliderImg1.src = `${left.image}`;
    sliderTitle1.textContent = `${left.title}`;

    sliderImg3.src = `${right.image}`;
    sliderTitle3.textContent = `${right.title}`;

    availabilityLink(sliderLink1, left.link);
    availabilityLink(sliderLink3, right.link);
}

/**
 * функция проверки наличия ссылки
 * @param {element} sliderLink
 * @param {string} link 
 */
function availabilityLink(sliderLink, link) {
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