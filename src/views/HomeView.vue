<template>
  <!--обёртка для всего содержимого, чтобы прижать footer к нижней части-->
  <div class="wrapper wrapper-forcontent">
    <!--Содержимое сайта без подвала (нужно для прижатия подвала к нижней части)-->
    <div class="content-without-footer">

      <!--Шапка сайта-->
      <header class="wrapper-container header" id="header">
        <figure class="header-transitions">
          <input type="checkbox" id="checkbox" class="header-transitions-mobile-menu-checkbox">
          <label for="checkbox" class="header-transitions-mobile-menu-btn">
            <div class="header-transitions-mobile-menu-icon"></div>
          </label>
          <ul class="header-transitions-menu">
            <li class="header-transitions-menu-li">
              <router-link class="header-transitions-menu-li-link" to="/">главная</router-link>
            </li>
            <li class="header-transitions-menu-li">
              <a class="header-transitions-menu-li-link" href="https://reggaeuniverse.ru/blog/" target="_blank"
                rel="nofollow">блог</a>
            </li>
            <li class="header-transitions-menu-li">
              <router-link class="header-transitions-menu-li-link" to="/about">о нас</router-link>
            </li>
            <li class="header-transitions-menu-li">
              <a class="header-transitions-menu-li-link" href="#donat">донат</a>
            </li>
          </ul>
          <figure class="header-languages">
            <button @click="changeLang('en')" class="header-languages-lang">
              en
            </button>
            <button @click="changeLang('ru')" class="header-languages-lang">
              ru
            </button>
          </figure>
        </figure>
        <h1 class="header-title">radio reggae universe</h1>
        <span class="header-description">Слушай эфир онлайн - регги музыка</span>
        <a class="header-btn" href="#ether">слушать</a>
      </header>

      <!--Основная часть-->
      <main class="wrapper-container main">
        <!--Первая секция основной части-->
        <article class="about">
          <section class="about-us">
            <h2 class="about-us-title">о нас</h2>
            <p class="about-us-description">Рэгги-Вселенная - первое и единственное интернет-радио в России,
              которое вещает Рэгги, Даб и
              Дансхол.</p>
          </section>
          <img class="about-elipse-play" src="../assets//img/elipse-play.jpg" alt="elipse-play">
          <figure class="about-circle">
            <svg class="about-circle-simple" width="97" height="96" viewbox="0 0 97 96">
              <circle cx="48.5896" cy="48.0919" r="46.6839" stroke-width="2" />
            </svg>
            <svg class="about-circle-simple" width="113" height="113" viewbox="0 0 97 96">
              <circle cx="48.5896" cy="48.0919" r="46.6839" stroke-width="2" />
            </svg>
            <svg class="about-circle-simple" width="113" height="113" viewbox="0 0 97 96">
              <circle cx="48.5896" cy="48.0919" r="46.6839" stroke-width="2" />
            </svg>
            <svg class="about-circle-circleincircle" width="105" height="106" viewbox="0 0 105 106">
              <rect x="1.06274" y="1.62109" width="102.717" height="102.717" rx="51.3587" stroke-width="2" />
              <rect x="36.0922" y="36.6503" width="32.6592" height="32.6592" rx="16.3296" />
              <rect x="48.7468" y="48.37" width="8.28475" height="8.28475" rx="4.14238" stroke-width="2" />
            </svg>
            <svg class="about-circle-point" width="174" height="174" viewbox="0 0 174 174">
              <rect x="86.9529" y="85.0829" width="1.86996" height="1.86996" rx="0.934978" stroke-width="1.86996" />
              <rect x="1" y="1" width="171.906" height="171.906" rx="85.9529" stroke-width="2" />
              <rect x="65.9485" y="65.0134" width="42.9439" height="42.9439" rx="21.472" />
              <rect x="80.4731" y="79.5381" width="13.8946" height="13.8946" rx="6.94731" stroke-width="2" />
              <rect x="62.2085" y="14.5247" width="2.73991" height="2.73991" rx="1.36996" />
              <rect x="46.3138" y="22.9395" width="2.73991" height="2.73991" rx="1.36996" />
              <rect x="53.7937" y="18.2646" width="2.73991" height="2.73991" rx="1.36996" />
            </svg>
            <svg class="about-circle-point" width="175" height="175" viewbox="0 0 174 174">
              <rect x="86.9529" y="85.0829" width="1.86996" height="1.86996" rx="0.934978" stroke-width="1.86996" />
              <rect x="1" y="1" width="171.906" height="171.906" rx="85.9529" stroke-width="2" />
              <rect x="65.9485" y="65.0134" width="42.9439" height="42.9439" rx="21.472" />
              <rect x="80.4731" y="79.5381" width="13.8946" height="13.8946" rx="6.94731" stroke-width="2" />
              <rect x="62.2085" y="14.5247" width="2.73991" height="2.73991" rx="1.36996" />
              <rect x="46.3138" y="22.9395" width="2.73991" height="2.73991" rx="1.36996" />
              <rect x="53.7937" y="18.2646" width="2.73991" height="2.73991" rx="1.36996" />
            </svg>
          </figure>
        </article>
        <!--Вторая секция-->
        <article class="advantages">
          <ol class="advantages-ol">
            <li class="advantages-ol-li">Проект запущен в 2014, а радио в эфире с 2018</li>
            <li class="advantages-ol-li">Регулярно пополняем программу вещания новой музыкой</li>
            <li class="advantages-ol-li">Эксклюзив! - артисты и продюсеры со всего света присылают нам свои
              треки</li>
          </ol>
        </article>
        <!--Третья секция-->
        <article class="slider">
          <h2 class="slider-title">
            регги блог
          </h2>
          <SliderBlock />
        </article>
        <!--Четвёртая секция-->
        <article class="ether" id="ether">
          <h2 class="ether-title">
            эфир
          </h2>
          <PlayerMusic />
          <div class="ether-down">
            <figure class="ether-down-nowplay">
              <span class="ether-down-nowplay-title">Сейчас играет</span>
              <span class="ether-down-nowplay-unity">Track</span>
            </figure>
            <figure class="ether-down-past">
              <span class="ether-down-past-title">Проигранные треки</span>
            </figure>
          </div>
        </article>
        <!--Пятая секция-->
        <article class="projects">
          <h2 class="projects-title">проекты</h2>
          <figure class="projects-links">
            <a class="projects-links-link" href="https://vk.com/vibes_addict" target="_blank" rel="nofollow">
              <span class="projects-links-link-title">
                Зависимые от вайба
              </span>
              <img class="projects-links-link-img" src="../assets/img/project-vibes.jpg" width="123" height="240"
                alt="radio-image">
            </a>
            <a class="projects-links-link" href="https://vk.com/female_reggae" target="_blank" rel="nofollow">
              <span class="projects-links-link-title">
                Женщины в Рэгги
              </span>
              <img class="projects-links-link-img" src="../assets/img/project-woman.jpg" width="100" height="243"
                alt="radio-image">
            </a>
            <a class="projects-links-link" href="https://vk.com/dembow" target="_blank" rel="nofollow">
              <span class="projects-links-link-title">
                Дембоу
              </span>
              <img class="projects-links-link-img" src="../assets/img/project-dembow.jpg" width="120" height="120"
                alt="radio-image">
            </a>
            <a class="projects-links-link" href="https://vk.com/reggae_universe" target="_blank" rel="nofollow">
              <span class="projects-links-link-title">
                Вселенная Рэгги
              </span>
              <img class="projects-links-link-img" src="../assets/img/project-reggae.jpg" width="170" height="170"
                alt="radio-image">
            </a>
          </figure>
        </article>
        <!--Шестая секция-->
        <article class="donat" id="donat">
          <h2 class="donat-title">донат</h2>
          <div class="donat-content">
            <form class="donat-content-form" enctype="multipart/form-data" method="post"
              onsubmit="send(event, 'donatcomment.php')">
              <span class="donat-content-form-title">donat</span>
              <span class="donat-content-form-text">На поддержку радиостанции</span>
              <span class="donat-content-form-comment">комментарий</span>
              <textarea class="donat-content-form-comment-text" name="comment"></textarea>
              <input class="donat-content-form-transition" value="пожертвовать" type="submit" id="donat-link">
            </form>
            <figure class="donat-picture">
              <span class="donat-picture-title">кинь денежку =)</span>
              <img class="donat-picture-img" src="../assets/img/donat-cat.png" alt="donat-cat" width="226" height="296">
            </figure>
          </div>
        </article>
        <!--Седьмая секция-->
        <article class="connection">
          <div class="connection-foundation">
            <h2 class="connection-foundation-title">
              обратная связь
            </h2>
            <form class="connection-foundation-form" enctype="multipart/form-data" method="post" id="form"
              onsubmit="send(event, 'send.php')">
              <input class="connection-foundation-form-name" placeholder="Ваше имя*" name="name" type="text">
              <input class="connection-foundation-form-email" placeholder="Электронная почта*" name="email" type="text">
              <textarea class="connection-foundation-form-text" placeholder="Сообщение" name="text"></textarea>
              <span class="connection-foundation-form-explanation">Прикрепить файл</span>
              <input class="connection-foundation-form-file" type="file" name="myfile[]" multiple id="myfile">
              <span class="connection-foundation-form-data">Заполняя форму, я соглашаюсь на
                <a class="connection-foundation-form-data-link" href="https://reggaeuniverse.ru/blog/privacy/"
                  target="_blank" rel="nofollow">обработку
                  персональных
                  данных</a>
              </span>
              <input class="connection-foundation-form-btn" value="Отправить" type="submit">
            </form>
          </div>
          <p class="connection-description">Если Вы артист, музыкант или продюсер, выпускающий музыку нашего
            формата, будем рады получить от
            Вас Ваши новые песни
            и пустить их в эфир, а в случае дабплейтов будут даны анонсы и дополнительная инфо-поддержка по
            всем соцсетям, в блоге
            и в разделе новостей на сайте радио.</p>
        </article>
      </main>
    </div>

    <!--Подвал сайта-->
    <FooterBlock :lang="langFooter"/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import SliderBlock from '../components/SliderBlock.vue'
import PlayerMusic from '../components/PlayerMusic.vue'
import FooterBlock from '../components/FooterBlock.vue'

export default {
  name: 'HomeView',

  components: {
    SliderBlock,
    PlayerMusic,
    FooterBlock
  },

  data: () => ({
    langFooter: 'ru' // язык демонстрации (по умолчанию russian)
  }),

  methods: {
    ...mapActions('homepage', {
      fetchLang: 'fetchLang'
    }),

    /**
     * Изменение цвета кнопки языка на странице about
     * @param { String } lang язык включения
     */
    changeLang (lang) {
      const btnsLang = this.$el.querySelectorAll('.header-languages-lang')
      if (lang === 'en') {
        btnsLang[0].style.color = '#ffffff'
        btnsLang[1].style.color = '#888888'

        this._changeLangContent(this.getLang.en)

        // Метод перезаписи данных
        this.$children[3].definitionLang()

        this.langFooter = 'en'
      } else {
        btnsLang[1].style.color = '#ffffff'
        btnsLang[0].style.color = '#888888'

        this._changeLangContent(this.getLang.ru)

        this.$children[3].definitionLang()

        this.langFooter = 'ru'
      }
    },

    /**
     * Изменение языка в блоках
     * @param { String } language язык
     */
    _changeLangContent (language) {
      // Переменные для смены языка
      const menuLang = this.$el.getElementsByClassName('header-transitions-menu-li-link')
      const radioDescription = this.$el.getElementsByClassName('header-description')[0]
      const btnGo = this.$el.getElementsByClassName('header-btn')[0]
      const sectionMain = this.$el.getElementsByClassName('main')[0].children
      const advantagesList = this.$el.getElementsByClassName('advantages-ol')[0]
      const etherBlock = this.$el.getElementsByClassName('ether-down')[0]
      const projectList = this.$el.getElementsByClassName('projects-links')[0]
      const donatblock = this.$el.getElementsByClassName('donat-content')[0]
      const connectForm = this.$el.getElementsByClassName('connection-foundation-form')[0]
      const connectDescription = this.$el.getElementsByClassName('connection-description')[0]

      //* Изменение меню
      this._changeTextBlock(menuLang[0], language.menu.main)
      this._changeTextBlock(menuLang[1], language.menu.blog)
      this._changeTextBlock(menuLang[2], language.menu.aboutUs)
      this._changeTextBlock(menuLang[3], language.menu.donat)

      this._changeTextBlock(radioDescription, language.titleDescription)
      this._changeTextBlock(btnGo, language.go)

      // Изменение заголовков у блоков
      this._changeTextBlock(sectionMain[0].children[0].children[0], language.headings.aboutUs)
      this._changeTextBlock(sectionMain[2].children[0], language.headings.blog)
      this._changeTextBlock(sectionMain[3].children[0], language.headings.ether)
      this._changeTextBlock(sectionMain[4].children[0], language.headings.project)
      this._changeTextBlock(sectionMain[5].children[0], language.headings.donat)
      this._changeTextBlock(sectionMain[6].children[0].children[0], language.headings.connection)

      //* Нас вещают
      this._changeTextBlock(sectionMain[0].children[0].children[1], language.chapterAboutUs.description)

      //* Преимущества
      this._changeTextBlock(advantagesList.children[0], language.chapterAdvantages.first)
      this._changeTextBlock(advantagesList.children[1], language.chapterAdvantages.second)
      this._changeTextBlock(advantagesList.children[2], language.chapterAdvantages.third)

      //* Эфир
      this._changeTextBlock(etherBlock.children[0].children[0], language.chapterEther.nowPlaying)
      this._changeTextBlock(etherBlock.children[1].children[0], language.chapterEther.lostPlaiyng)

      //* Проекты
      this._changeTextBlock(projectList.children[0].children[0], language.chapterProject.vibes)
      this._changeTextBlock(projectList.children[1].children[0], language.chapterProject.woman)
      this._changeTextBlock(projectList.children[2].children[0], language.chapterProject.dembow)
      this._changeTextBlock(projectList.children[3].children[0], language.chapterProject.reggae)

      //* Донат
      this._changeTextBlock(donatblock.children[0].children[1], language.chapterDonat.support)
      this._changeTextBlock(donatblock.children[0].children[2], language.chapterDonat.comment)
      this._changeTextBlock(donatblock.children[0].children[4], language.chapterDonat.sending)
      this._changeTextBlock(donatblock.children[1].children[0], language.chapterDonat.fun)
      donatblock.children[0].children[4].value = `${language.chapterDonat.sending}`

      //* Обратная связь
      connectForm.children[0].placeholder = `${language.characterConnection.name}`
      connectForm.children[1].placeholder = `${language.characterConnection.email}`
      connectForm.children[2].placeholder = `${language.characterConnection.message}`
      this._changeTextBlock(connectForm.children[3], language.characterConnection.file)
      this._changeTextBlock(connectForm.children[5], language.characterConnection.safety)

      const linkSafety = document.createElement('a')
      linkSafety.href = 'https://reggaeuniverse.ru/blog/privacy/'
      linkSafety.target = '_blank'
      linkSafety.classList.add('connection-foundation-form-data-link')
      connectForm.children[5].insertAdjacentElement('beforeend', linkSafety)
      this._changeTextBlock(linkSafety, ` ${language.characterConnection.safetyLink}`)

      connectForm.children[6].value = `${language.characterConnection.send}`
      this._changeTextBlock(connectDescription, language.characterConnection.description)
    },

    /**
     * Изменение в теге контента
     * @param { Element } block Тег, который изменяет текст внутри себя
     * @param { String } text Содержимое объекта языка
     */
    _changeTextBlock (block, text) {
      block.textContent = `${text}`
    }
  },

  computed: {
    ...mapGetters('homepage', {
      getLang: 'getLang'
    })
  },

  mounted () {
    this.fetchLang()
  },

  beforeUnmount () {
    this.getLang = []
  }
}
</script>

<style src="../scss/style.scss"  lang="scss" scoped/>
