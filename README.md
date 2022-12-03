# radio-station
РАДИОСТАНЦИЯ "Reggae Universe"

### Сборки сайта:
    * 0.0.0
    * 1.0.0

### Ссылка на макет
<a href="https://www.figma.com/file/9Klkmmg8D4sEvHnLQd9BRW/Untitled?node-id=0%3A1">Ссылка на макет версии 2.0.0</a>

### Для сборки версии 1.0.0 нужны две ветки `section-about-us` и ветка `build-site`
    Сайт содержит две страницы `index.html` и `aboutus.html`
    Сборка осуществляется webpack:
        Для сборки js-файлов index.html нужно перейти на ветку `build-site`:
            ``` терминал
            > git status
            > git checkout build-site
            > npm run build
            ```
        Появится папка dist в ней будет собран js-файл для сайта

        Для сборки js-файлов aboutus.html нужно перейти на ветку `section-about-us`:
            ``` терминал
            > git status
            > git checkout section-about-us
            > npm run build
            ```
        Появится папка dist в ней будет собран js-файл для сайта
    
    После сборки js-файлов страниц переходим в ветку `main` и собираем проект:
        В сборке 1.0.0 должны находится файлы:
            1. index.html и aboutus.html
            2. package.json
            3. send.php
            4. папка src с файлами:
                а. jquery.cassette.js
                b. knobknob.jquery.js
                c. send-message.js
            5. папка sounds со всеми файлами
            6. папка phpmailer со всеми файлами
            7. папка img со всеми файлами
            8. папка fonts со всеми файлами
            9. папка css со всеми файлами

## Примечания
    1. На странице index.html присутствует слайдер, данные которого привязаны через API к файлу на 
    github в `sliderObj.json`. При изменении данного файла будет изменяться контент слайдера сайта

    2. Сайт имеет две раскладки языка (английский и русский). Весь текст с английским русским контентом
    находится в файле: `_language-content.js`

    3. Год написания сайта обновляется автоматически

### Адаптив сайта написан на расширениях:
    * 1920px
    * 1440px
    * 1412px
    * 1280px
    * 1024px
    * 950px
    * 768px
    * 725px
    * 600px
    * 560px
    * 480px
    * 450px
    * 375px
    * 320px

    Плавность адаптива происходит с расширения 1920px до 375px

###  Шрифты
    * Montserrat 400
    * Montserrat 500
    * Montserrat 600
    * Montserrat 700
    * Montserrat 800
    * Druk Wide Bold (Бесплатный шрифт, но нужнос оставить вводный знак на сайте, dispalay: none;)

# Подпись
<img src="https://github.com/StasBeep/radio-station/blob/main/Oskol%20Stanislav.png" alt="logo" width="421" height="206">
