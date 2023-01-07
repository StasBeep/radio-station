# radio-station
Радиостанция "Reggae Universe"

### Версия сборки страницы about us:
    * 2.0.0

### Для сборки страницы about us версии 2.0.0 нужно
    Сборка осуществляется webpack:
        Для сборки всех файлов about.html нужно перейти на ветку `new-about-us`:
            ``` терминал
            > git status
            > git checkout new-about-us
            > npm run build
            ```
        Появится папка dist в ней будет собраны все файлы и папки для запуска страницы about us
        <b>Перед использованием команды `npm run build` прочти комментарий под (*) ниже </b>
    
    В сборке 2.0.0 страницы about us должны находится файлы:
        1. about.html
        2. about.bundle.js (js-файлы):
            - _language.js (изменение языка на странице about us)
            - _footer-year.js (изменение даты в footer)
        3. about.bundle.css (scss-файлы)
        4. папка img:
            - elipseabout.svg (svg для меню) чёрный цвет
            - project-reggae.jpg (картинка для вкладки) - повторяется на странице index.html
        5. папка fonts (шрифты описаны ниже)
        6. дополнительные файлы:
            - map для css и js
            - license.txt (лицензия и зависимость)

    (*) При сборке страницы about us для отправки на сервер в файле webpack.config.js нужно <b>раскомментировать</b> строку
        ``` webpack.config.js
            > ...
            > // mode: 'production',
        ```
    И <b>закоментировать</b> строку
        ``` webpack.config.js
            > ...
            > mode: 'development',
        ```

## Примечания
    Content для смены языка лежит в ветке `alteration-content` в файле languageBlog.json:
        - language:
            - ru:
                - menu:
                    - main
                    - blog
                    - aboutUs
                - headings:
                    - aboutUs
                    - advantages
                    - footerProject
                - chapterAboutUs:
                    - broadcast
                - pageAboutUs:
                    - description
                    - info:
                        - project
                        - ourFormat
                        - regular
                        - exclusive
                        - artists
                - chapterProject":
                    - vibes
                    - woman
                    - dembow
                    - reggae
            - en: (тоже самое, что и у ru)

    Используется API для синхронизации с сайтом (если будет не доступен github или ветка `alteration-content`) язык не сменится

    Подключена метрика на страницу about us

    Год работы с сайтом изменяется автоматически

    Работает непосредственно с веткой `new-reconstruction` - связь со страницей index.html и сборкой основной страницы


### Адаптив страницы about us написан на расширениях (2.0.0):
    * 1600px
    * 1400px
    * 1360px
    * 1195px
    * 1000px
    * 975px
    * 840px
    * 768px
    * 630px
    * 600px
    * 585px
    * 560px
    * 510px
    * 440px
    * 360px
    * 335px
    * 320px

    Плавность адаптива происходит с расширения min-1600px до 335px

###  Шрифты для версии 2.0.0
    * Montserrat 400
    * Montserrat 500
    * Montserrat 600
    * Montserrat 700
    * Montserrat 800
    * Druk Wide Bold (Бесплатный шрифт, но нужнос оставить вводный знак на сайте, dispalay: none;)

# Подпись
<img src="https://github.com/StasBeep/StasBeep/blob/main/Stanislav%20Oskol.jpg" alt="logo" width="421" height="206">