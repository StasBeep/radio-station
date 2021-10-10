import {
    sliderImg,
    sliderTitle,
    sliderText,
    sliderLink,
    sliderData,
} from './_variables.js'

/**
 * Загрузка первого объекта в слайдер
 * при загрузке страницы
 * @param {object} первый объект массива
 */
export function firstElementLoaded(arrObjSlider) {
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