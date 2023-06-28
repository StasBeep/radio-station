import { donatLink } from "./_variables.js";

donatLink.addEventListener('click', () => {
    console.log("Ссылка");
    // window.open("https://yoomoney.ru/to/4100111382277424", "_blank");

    let linkElement = document.createElement('a');


    linkElement.href = "https://yoomoney.ru/to/4100111382277424";
    linkElement.target = "_blank";

    linkElement.click();
});