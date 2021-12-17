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

    animationElement();
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

/**
 * Функция проверки выхода счётчика за диапазон
 * @param {int} condition 
 * @param {int} length 
 * @returns 
 */
export function checkCondition(condition, length) {
    if (condition === -1) {
        condition = --length;
    } else if (condition === length) {
        condition = 0;
    }
    return condition;
}

/**
 * Анимация переключения слайдера
 */
function animationElement() {
    sliderImg.classList.toggle('animate__flipInY');
    sliderImg1.classList.toggle('animate__bounceIn');
    sliderImg3.classList.toggle('animate__bounceIn');
    sliderTitle1.classList.toggle('animate__bounceOut');
    sliderTitle3.classList.toggle('animate__bounceOut');
    sliderText.classList.toggle('animate__flipInX');
    sliderData.classList.toggle('animate__zoomOut');
    sliderTitle.classList.toggle('animate__flipInY');

    setTimeout(() => {
        sliderImg.classList.toggle('animate__flipInY');
        sliderImg1.classList.toggle('animate__bounceIn');
        sliderImg3.classList.toggle('animate__bounceIn');
        sliderTitle1.classList.toggle('animate__bounceOut');
        sliderTitle3.classList.toggle('animate__bounceOut');
        sliderText.classList.toggle('animate__flipInX');
        sliderData.classList.toggle('animate__zoomOut');
        sliderTitle.classList.toggle('animate__flipInY');
    }, 500);
}