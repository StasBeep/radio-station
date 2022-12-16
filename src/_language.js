import {
    languageBtn,
    API_language
} from "./_variables.js";

import {
    languageChange
} from "./_functions.js";

let languagesArrayContent = [];

// Пока не выполнится промис через API (ожидание)
let response = await fetch(`${API_language}`);
// Проверка статуса ответа от API
if (response.ok) {
    // ожидание загрузки .json файла
    let json = await response.json();
    // перемещение содержимого в переменную слайдера
    languagesArrayContent = json.language[0];
} else {
    // В случае ошибки
    console.log("Ошибка HTTP: " + response.status);
}

// Переменная для эффекта наведения
let vision = true;

// Нажатие кнопки смены языка (en)
languageBtn[0].addEventListener('click', () => {
    languageBtn[0].style.color = '#ffffff';
    languageBtn[1].style.color = '#888888';
    vision = !vision;

    languageChange(languagesArrayContent.en);
});

languageBtn[1].addEventListener('click', () => {
    languageBtn[1].style.color = '#ffffff';
    languageBtn[0].style.color = '#888888';
    vision = !vision;

    languageChange(languagesArrayContent.ru);
});

// Эффект наведения (сохранение этих свойств)
languageBtn[0].addEventListener('mouseover', () => {
    if (vision)
        languageBtn[0].style.color = '#ffffff';
});

languageBtn[1].addEventListener('mouseover', () => {
    if (!vision)
        languageBtn[1].style.color = '#ffffff';
});

languageBtn[0].addEventListener('mouseout', () => {
    if (vision)
        languageBtn[0].style.color = '#888888';
});

languageBtn[1].addEventListener('mouseout', () => {
    if (!vision)
        languageBtn[1].style.color = '#888888';
});


// Обнуление массива с текстом взятого с API
window.addEventListener('unload', () => {
    languagesArrayContent = null;
});