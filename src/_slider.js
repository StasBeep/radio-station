import {
    sliderContent,
    elementStyleHoverHidden,
    elementStyleHoverVisible
} from "./_functions.js";
import {
    sliderElement,
    sliderBtnRight,
    sliderBtnLeft,
    API_slider
} from "./_variables.js";

let contentSlider = [];
let numberContent = 0;

// Пока не выполнится промис через API (ожидание)
let response = await fetch(`${API_slider}`);
// Проверка статуса ответа от API
if (response.ok) {
    // ожидание загрузки .json файла
    let json = await response.json();
    // перемещение содержимого в переменную слайдера
    contentSlider = json.contentSlider;
} else {
    // В случае ошибки
    console.log("Ошибка HTTP: " + response.status);
}

numberContent = sliderContent(numberContent, contentSlider);

sliderBtnRight.addEventListener('click', () => {
    clearInterval(intervalSlider);
    numberContent = sliderContent(numberContent + 1, contentSlider);
});

sliderBtnLeft.addEventListener('click', () => {
    clearInterval(intervalSlider);
    numberContent = sliderContent(numberContent - 1, contentSlider);
});

// Эффект наведения на дополнительные блоки слайдера
sliderElement[1].addEventListener('mouseover', () => {
    elementStyleHoverHidden();
});

sliderElement[1].addEventListener('mouseout', () => {
    elementStyleHoverVisible();
});

sliderElement[2].addEventListener('mouseover', () => {
    elementStyleHoverHidden();
});

sliderElement[2].addEventListener('mouseout', () => {
    elementStyleHoverVisible();
});

sliderElement[3].addEventListener('mouseover', () => {
    elementStyleHoverHidden();
});

sliderElement[3].addEventListener('mouseout', () => {
    elementStyleHoverVisible();
});

// Обнуление массива слайдера взятого с API
window.addEventListener('unload', () => {
    contentSlider = null;
});

// Через каждые 10 секунд смена контента слайдера
let intervalSlider = setInterval(() => {
    numberContent = sliderContent(numberContent + 1, contentSlider);
}, 10000);