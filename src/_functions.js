import {
    menuLang,
    radioDescription,
    sectionMain,
    advantagesList,
    etherBlock,
    projectList,
    donatblock,
    connectForm,
    connectDescription,
    footerBroadcast,
    footerProject,
    btnPlayPause,
    btnSound,
    audioMusic,
    inpVolume,
    listenLink,
} from './_variables.js';


/**
 * Изменение языка контента на станице
 * @param { Object } language 
 */
function languageChange(language) {
    console.log(language);
    console.log(connectForm.children[6]);

    //* Изменение меню
    _changeTextBlock(menuLang[0], language.menu.main);
    _changeTextBlock(menuLang[1], language.menu.blog);
    _changeTextBlock(menuLang[2], language.menu.aboutUs);

    _changeTextBlock(radioDescription, language.titleDescription);

    // Изменение заголовков у блоков
    _changeTextBlock(sectionMain[0].children[0].children[0], language.headings.aboutUs);
    _changeTextBlock(sectionMain[1].children[0], language.headings.advantages);
    _changeTextBlock(sectionMain[2].children[0], language.headings.blog);
    _changeTextBlock(sectionMain[3].children[0], language.headings.ether);
    _changeTextBlock(sectionMain[4].children[0], language.headings.project);
    _changeTextBlock(sectionMain[5].children[0], language.headings.donat);
    _changeTextBlock(sectionMain[6].children[0].children[0], language.headings.connection);

    //* Нас вещают
    _changeTextBlock(sectionMain[0].children[0].children[1], language.chapterAboutUs.description);
    _changeTextBlock(sectionMain[0].children[0].children[2].children[0].children[1], language.chapterAboutUs.ether);
    _changeTextBlock(sectionMain[0].children[0].children[2].children[1].children[1], language.chapterAboutUs.counterProject);
    _changeTextBlock(sectionMain[0].children[0].children[2].children[2].children[1], language.chapterAboutUs.broadcast);

    //* Преимущества
    _changeTextBlock(advantagesList.children[0], language.chapterAdvantages.first);
    _changeTextBlock(advantagesList.children[1], language.chapterAdvantages.second);
    _changeTextBlock(advantagesList.children[2], language.chapterAdvantages.third);

    //* Эфир
    _changeTextBlock(etherBlock.children[0].children[0], language.chapterEther.nowPlaying);
    _changeTextBlock(etherBlock.children[1].children[0], language.chapterEther.lostPlaiyng);

    //* Проекты
    _changeTextBlock(projectList.children[0].children[0], language.chapterProject.vibes);
    _changeTextBlock(projectList.children[1].children[0], language.chapterProject.woman);
    _changeTextBlock(projectList.children[2].children[0], language.chapterProject.dembow);
    _changeTextBlock(projectList.children[3].children[0], language.chapterProject.reggae);

    //* Донат
    _changeTextBlock(donatblock.children[0].children[1], language.chapterDonat.support);
    _changeTextBlock(donatblock.children[0].children[2], language.chapterDonat.comment);
    _changeTextBlock(donatblock.children[0].children[7], language.chapterDonat.sending);
    _changeTextBlock(donatblock.children[1].children[0], language.chapterDonat.fun);

    //* Обратная связь
    connectForm.children[0].placeholder = `${language.characterConnection.name}`;
    connectForm.children[1].placeholder = `${language.characterConnection.email}`;
    connectForm.children[2].placeholder = `${language.characterConnection.message}`;
    _changeTextBlock(connectForm.children[3], language.characterConnection.file);
    // TODO: Не забудь вставить ссылку  на переход
    _changeTextBlock(connectForm.children[5], language.characterConnection.safety);
    
    let linkSafety = document.createElement('a');
    linkSafety.href = '#';
    linkSafety.classList.add('connection-foundation-form-data-link');
    connectForm.children[5].insertAdjacentElement('beforeend', linkSafety);
    _changeTextBlock(linkSafety, ` ${language.characterConnection.safetyLink}`);

    connectForm.children[6].value = `${language.characterConnection.send}`;
    _changeTextBlock(connectDescription, language.characterConnection.description);

    //* footer
    // Изменение заголовка на footer "нас вещают"
    _changeTextBlock(footerBroadcast, language.chapterAboutUs.broadcast)

    // Изменение текста у блока проекта у footer
    _changeTextBlock(footerProject[0].children[0], language.headings.footerProject);
    _changeTextBlock(footerProject[0].children[1].children[0], language.chapterProject.vibes);
    _changeTextBlock(footerProject[0].children[2].children[0], language.chapterProject.woman);
    _changeTextBlock(footerProject[0].children[3].children[0], language.chapterProject.dembow);
    _changeTextBlock(footerProject[0].children[4].children[0], language.chapterProject.reggae);
}

/**
 * Изменение в теге контента
 * @param { Element } block Тег, который изменяет текст внутри себя
 * @param { String } text Содержимое объекта языка
 */
function _changeTextBlock(block, text) {
    block.textContent = `${text}`;
}

/**
 * Запуск звукового потока и остановка
 * @param { boolean } statusMusic // статус: on/off
 * @returns { boolean } изменение статуса включения/выключения звукового потока
 */
function playMusic(statusMusic) {
    if (statusMusic == false) {
        // Запуск потока
        audioMusic.src = `${listenLink}`;
        audioMusic.autoplay = true;

        // Изменение svg у кнопки
        _svgBtnPlayPause('none', 'block');

        return true;
    } else {
        audioMusic.autoplay = false;
        audioMusic.src = '';

        _svgBtnPlayPause('block', 'none');

        return false;
    }
}

/**
 * Выключение/включение звука
 * @param { Object } statusVolume 
 * @returns { 
 *     sound: { boolean } on/off звука
 *     saveLevelVolume: { Number } Состояние уровня звука
 * }
 */
function clickChangesVolume(statusVolume) {
    if (statusVolume.sound == true) {

        // Сохранение первоначального значения уровня звука
        statusVolume.saveLevelVolume = +inpVolume.value;

        audioMusic.volume = 0;
        inpVolume.value = 0;

        // окраска в нужный цвет элемент input
        _changeColorInp(inpVolume.value);

        _svgBtnVolume('none', 'block');

        // изменение статуса звука
        statusVolume.sound = !statusVolume.sound;

        return statusVolume;
    } else {
        audioMusic.volume = Number(statusVolume.saveLevelVolume) / 100;
        inpVolume.value = Number(statusVolume.saveLevelVolume);

        _changeColorInp(inpVolume.value);

        _svgBtnVolume('block', 'none');

        statusVolume.sound = !statusVolume.sound;

        return statusVolume;
    }
}

/**
 * Изменение громкости в зависимости от значения input
 * @param { Number } level 
 * @returns 
 */
function changeLevelVolume(level) {
    _changeColorInp(level);

    // изменение уровня звука у звуковой дорожки
    audioMusic.volume = Number(level) / 100;

    if (level == 0) {
        _svgBtnVolume('none', 'block');
    } else {
        _svgBtnVolume('block', 'none');
    }

    return level;
}

/**
 * Отображение svg элементов у кнопки (пуска и паузы)
 * @param { String } childVisible0 
 * @param { String } childVisible1 
 */
function _svgBtnPlayPause(childVisible0, childVisible1) {
    btnPlayPause.children[0].style.display = `${childVisible0}`;
    btnPlayPause.children[1].style.display = `${childVisible1}`;
}

/**
 * Отображение svg элементов у кнопки (звука)
 * @param { String } childVisible0 
 * @param { String } childVisible1 
 */
function _svgBtnVolume(childVisible0, childVisible1) {
    btnSound.children[0].style.display = `${childVisible0}`;
    btnSound.children[1].style.display = `${childVisible1}`;
}

/**
 * Изменение цвета input в зависимости от значения уровня громкости
 * @param { Number } value значение звука
 */
function _changeColorInp(value) {
    inpVolume.style.background = `linear-gradient(to right, #181818 ${value}%, #181818 ${value}%, #888888 ${value}%, #888888 100%)`;
}

export {
    languageChange,
    playMusic,
    clickChangesVolume,
    changeLevelVolume
};