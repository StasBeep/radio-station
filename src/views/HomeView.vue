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
          <ul class="slider-figure">
            <li class="slider-figure-li">
              <div class="slider-figure-li-wrapper">
                <span class="slider-figure-li-title">
                  интервью с регги-ветераном, который на ямайке был популярнее боба марли
                </span>
                <span class="slider-figure-li-date">
                  06.12.2021
                </span>
              </div>
              <a class="slider-figure-li-link" href="#" target="_blank" rel="nofollow">читать</a>
              <button class="slider-figure-li-right">&#10095;</button>
              <button class="slider-figure-li-left">&#10094;</button>
            </li>
            <li class="slider-figure-li">
              <div class="slider-figure-li-wrapper">
                <span class="slider-figure-li-title">
                  интервью с регги-ветераном, который на ямайке был популярнее боба марли
                </span>
                <span class="slider-figure-li-date">
                  06.12.2021
                </span>
              </div>
              <a class="slider-figure-li-link" href="#" target="_blank" rel="nofollow">читать</a>
            </li>
            <li class="slider-figure-li">
              <div class="slider-figure-li-wrapper">
                <span class="slider-figure-li-title">
                  интервью с регги-ветераном, который на ямайке был популярнее боба марли
                </span>
                <span class="slider-figure-li-date">
                  06.12.2021
                </span>
              </div>
              <a class="slider-figure-li-link" href="#" target="_blank" rel="nofollow">читать</a>
            </li>
            <li class="slider-figure-li">
              <div class="slider-figure-li-wrapper">
                <span class="slider-figure-li-title">
                  интервью с регги-ветераном, который на ямайке был популярнее боба марли
                </span>
                <span class="slider-figure-li-date">
                  06.12.2021
                </span>
              </div>
              <a class="slider-figure-li-link" href="#" target="_blank" rel="nofollow">читать</a>
            </li>
          </ul>
        </article>
        <!--Четвёртая секция-->
        <article class="ether" id="ether">
          <h2 class="ether-title">
            эфир
          </h2>
          <ul class="ether-control">
            <li class="ether-control-li">
              <audio class="ether-control-li-music" crossorigin id="music"></audio>
            </li>
            <li class="ether-control-li">
              <button class="ether-control-li-play">
                <svg class="ether-control-li-play-svg" width="19" height="23" viewbox="0 0 19 23">
                  <path d="M19 11.5L0.249999 22.3253L0.25 0.674682L19 11.5Z" />
                </svg>
                <svg class="ether-control-li-play-svg" width="17" height="20" viewbox="0 0 17 20">
                  <path d="M0 0H4V20H0V0Z" />
                  <path d="M13 0H17V20H13V0Z" />
                </svg>
              </button>
            </li>
            <li class="ether-control-li">
              <button class="ether-control-li-sound">
                <svg class="ether-control-li-sound-svg" width="25" height="21" viewbox="0 0 25 21">
                  <path
                    d="M9.3329 2.38952L5.47135 6.2502H1.04167C0.466146 6.2502 0 6.71635 0 7.29187V13.5419C0 14.117 0.466146 14.5835 1.04167 14.5835H5.47135L9.3329 18.4442C9.98524 19.0966 11.1111 18.6382 11.1111 17.7077V3.12607C11.1111 2.19465 9.98438 1.73805 9.3329 2.38952ZM19.4596 0.17251C18.9748 -0.145632 18.3233 -0.0115176 18.0052 0.474159C17.6866 0.958969 17.822 1.61044 18.3069 1.92859C21.1832 3.81617 22.8997 6.98935 22.8997 10.4173C22.8997 13.8453 21.1832 17.0184 18.3069 18.906C17.822 19.2237 17.6866 19.8756 18.0052 20.36C18.3108 20.8249 18.957 20.992 19.4596 20.6617C22.9284 18.3848 25 14.5545 25 10.4169C25 6.27928 22.9284 2.44942 19.4596 0.17251ZM20.8333 10.4169C20.8333 7.65949 19.4418 5.12433 17.1107 3.63562C16.625 3.32572 15.9809 3.46982 15.6732 3.9594C15.3654 4.44899 15.5091 5.09699 15.9948 5.40732C17.7201 6.50932 18.75 8.38171 18.75 10.4169C18.75 12.452 17.7201 14.3244 15.9948 15.4264C15.5091 15.7363 15.3654 16.3843 15.6732 16.8743C15.9557 17.324 16.5898 17.5315 17.1107 17.1981C19.4418 15.7094 20.8333 13.1747 20.8333 10.4169ZM14.6801 7.0805C14.1775 6.80576 13.5434 6.98675 13.2648 7.49065C12.9874 7.99456 13.171 8.62781 13.6749 8.90602C14.2352 9.21374 14.5833 9.79317 14.5833 10.4169C14.5833 11.041 14.2352 11.62 13.6753 11.9277C13.1714 12.2059 12.9878 12.8392 13.2652 13.3431C13.5443 13.8492 14.1788 14.0288 14.6806 13.7532C15.9058 13.0783 16.6671 11.8001 16.6671 10.4164C16.6671 9.03275 15.9058 7.75498 14.6801 7.0805Z" />
                </svg>
                <svg class="ether-control-li-sound-svg" width="22" height="17" viewbox="0 0 22 17">
                  <path
                    d="M9.23948 0.302748L5.41659 4.12478H1.03124C0.46148 4.12478 0 4.58626 0 5.15602V11.3435C0 11.9128 0.46148 12.3747 1.03124 12.3747H5.41659L9.23948 16.1967C9.88529 16.8425 10.9999 16.3888 10.9999 15.4676V1.03192C10.9999 0.10982 9.88443 -0.342206 9.23948 0.302748ZM19.8359 8.24974L21.797 6.28867C22.0677 6.01797 22.0677 5.57883 21.797 5.30813L20.8164 4.32759C20.5457 4.05689 20.1066 4.05689 19.8359 4.32759L17.8748 6.28867L15.9137 4.32759C15.643 4.05689 15.2039 4.05689 14.9332 4.32759L13.9527 5.30813C13.682 5.57883 13.682 6.01797 13.9527 6.28867L15.9137 8.24974L13.9531 10.2104C13.6824 10.4811 13.6824 10.9202 13.9531 11.1909L14.9336 12.1715C15.2043 12.4422 15.6435 12.4422 15.9142 12.1715L17.8748 10.2108L19.8359 12.1719C20.1066 12.4426 20.5457 12.4426 20.8164 12.1719L21.797 11.1914C22.0677 10.9207 22.0677 10.4815 21.797 10.2108L19.8359 8.24974Z" />
                </svg>
              </button>
            </li>
            <li class="ether-control-li">
              <input class="ether-control-li-level" type="range" name="volume" id="volume" min="0" max="100" value="100"
                step="10">
            </li>
          </ul>
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

import FooterBlock from '../components/FooterBlock.vue'

export default {
  name: 'HomeView',

  components: {
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
        this.$children[2].definitionLang()

        this.langFooter = 'en'
      } else {
        btnsLang[1].style.color = '#ffffff'
        btnsLang[0].style.color = '#888888'

        this._changeLangContent(this.getLang.ru)

        this.$children[2].definitionLang()

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
