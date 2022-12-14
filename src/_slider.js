const API_slider = 'https://raw.githubusercontent.com/StasBeep/radio-station/alteration-content/arrObjSlider.json';
const sliderElement = document.getElementsByClassName('slider-figure')[0].children;

console.log(sliderElement);

let contentSlider = [];

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

sliderElement[0].children[0].children[0].textContent = `${contentSlider[0].title}`;
sliderElement[0].children[0].children[1].textContent = `${contentSlider[0].data}`;
sliderElement[0].children[1].href = `${contentSlider[0].link}`;
sliderElement[0].style.backgroundImage = `url("${contentSlider[0].image}")`;

sliderElement[1].addEventListener('mouseover', () => {
    sliderElement[0].style.width = '190px';
    sliderElement[0].style.height = '380px';
    sliderElement[0].children[0].style.opacity = '0';
    sliderElement[0].children[1].style.visibility = 'hidden';
    sliderElement[0].children[1].style.opacity = '0';
    sliderElement[0].children[1].style.padding = '0';
});

sliderElement[1].addEventListener('mouseout', () => {
    sliderElement[0].style.width = '380px';
    sliderElement[0].style.height = '435px';
    sliderElement[0].children[0].style.opacity = '1';
    sliderElement[0].children[1].style.padding = '20px 153px';
    sliderElement[0].children[1].style.visibility = 'visible';
    sliderElement[0].children[1].style.opacity = '1';
});

sliderElement[0].addEventListener('wheel', (event) => {
       console.log(event);
});