<template>
  <!--обёртка для всего содержимого, чтобы прижать footer к нижней части-->
  <div class="wrapper wrapper-forcontent">
    <!--Содержимое сайта без подвала (нужно для прижатия подвала к нижней части)-->
    <div class="content-without-footer">

      <!--Шапка сайта-->
      <header class="wrapper-container headerabout" id="header">
        <figure class="headerabout-transitions">
          <input type="checkbox" id="checkbox" class="headerabout-transitions-mobile-menu-checkbox">
          <label for="checkbox" class="headerabout-transitions-mobile-menu-btn">
            <div class="headerabout-transitions-mobile-menu-icon"></div>
          </label>
          <ul class="headerabout-transitions-menu">
            <li class="headerabout-transitions-menu-li">
              <router-link class="headerabout-transitions-menu-li-link" to="/">главная</router-link>
            </li>
            <li class="headerabout-transitions-menu-li">
              <a class="headerabout-transitions-menu-li-link" href="https://reggaeuniverse.ru/blog/" target="_blank"
                rel="nofollow">блог</a>
            </li>
            <li class="headerabout-transitions-menu-li">
              <router-link class="headerabout-transitions-menu-li-link" to="/about">о нас</router-link>
            </li>
          </ul>
          <figure class="headerabout-languages">
            <button @click="changeLang('en')" class="headerabout-languages-lang">
              en
            </button>
            <button @click="changeLang('ru')" class="headerabout-languages-lang">
              ru
            </button>
          </figure>
        </figure>
      </header>

      <!--Основная часть-->
      <main class="wrapper-container main">
        <!--Первая секция основной части-->
        <article class="aboutview">
          <section class="aboutview-us">
            <h2 class="aboutview-us-title">о нас</h2>
            <p class="aboutview-us-description">Рэгги-Вселенная - первое и единственное интернет-радио в России,
              которое вещает Рэгги, Даб и Дансхол. Мы стартовали как публичная страница в соцсети vk с
              целью способствовать популяризации любимой нами музыки там, где её почти никто не слушал. Со
              временем пришла шальная идея запустить онлайн-радио, в успех которого даже мы сами до конца
              толком не верили. Сегодня же нас слушает уже вся планета! Во многом потому, что мы верим в
              универсальный, вселенский характер Рэгги - зародившаяся на Ямайке музыка давно перешагнула
              все границы и стала глобальным феноменом. В нашем эфире Вы можете слушать Регги со всех
              уголков света и на всех языках - бесплатно и безо всякой рекламы в эфире. Только музыка!
            </p>
          </section>
          <img class="about-elipse-play" src="../assets//img/elipse-play.jpg" alt="elipse-play">
          <figure class="aboutview-circle">
            <svg class="aboutview-circle-simple" width="97" height="96" viewbox="0 0 97 96">
              <circle cx="48.5896" cy="48.0919" r="46.6839" stroke-width="2" />
            </svg>
            <svg class="aboutview-circle-simple" width="113" height="113" viewbox="0 0 97 96">
              <circle cx="48.5896" cy="48.0919" r="46.6839" stroke-width="2" />
            </svg>
            <svg class="aboutview-circle-simple" width="113" height="113" viewbox="0 0 97 96">
              <circle cx="48.5896" cy="48.0919" r="46.6839" stroke-width="2" />
            </svg>
            <svg class="aboutview-circle-circleincircle" width="105" height="106" viewbox="0 0 105 106">
              <rect x="1.06274" y="1.62109" width="102.717" height="102.717" rx="51.3587" stroke-width="2" />
              <rect x="36.0922" y="36.6503" width="32.6592" height="32.6592" rx="16.3296" />
              <rect x="48.7468" y="48.37" width="8.28475" height="8.28475" rx="4.14238" stroke-width="2" />
            </svg>
            <svg class="aboutview-circle-point" width="174" height="174" viewbox="0 0 174 174">
              <rect x="86.9529" y="85.0829" width="1.86996" height="1.86996" rx="0.934978" stroke-width="1.86996" />
              <rect x="1" y="1" width="171.906" height="171.906" rx="85.9529" stroke-width="2" />
              <rect x="65.9485" y="65.0134" width="42.9439" height="42.9439" rx="21.472" />
              <rect x="80.4731" y="79.5381" width="13.8946" height="13.8946" rx="6.94731" stroke-width="2" />
              <rect x="62.2085" y="14.5247" width="2.73991" height="2.73991" rx="1.36996" />
              <rect x="46.3138" y="22.9395" width="2.73991" height="2.73991" rx="1.36996" />
              <rect x="53.7937" y="18.2646" width="2.73991" height="2.73991" rx="1.36996" />
            </svg>
            <svg class="aboutview-circle-point" width="175" height="175" viewbox="0 0 174 174">
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
        <article class="advantagesabout">
          <h2 class="advantagesabout-title">
            преимущества
          </h2>
          <nav class="advantagesabout-list">
            <ol class="advantagesabout-list-left">
              <li class="advantagesabout-list-li"><span class="advantagesabout-list-li-number">1.</span> Проект
                запущен в 2014, а радио в эфире с 2018. Сегодня нас
                слушает свыше 6000+ слушателей ежемесячно на всех континентах. Вещание ведётся онлайн на
                сайте, а также в мобильном приложении.</li>
              <li class="advantagesabout-list-li"><span class="advantagesabout-list-li-number">2.</span> Наш формат:
                Рэгги, Даб и Дансхол, а также все другие
                родственные им стили музыки - со всего мира и на всех языках.</li>
              <li class="advantagesabout-list-li"><span class="advantagesabout-list-li-number">3.</span> Регулярно
                пополняем программу вещания новой музыкой с
                учётом вкусов подписчиков. На основе голосований, а также по ежемесячному рейтингу:
                постим в блог рецензии на альбомы и сборники и ежемесячно считаем лайки. Что нравится
                подписчикам - идёт в эфир.</li>
            </ol>
            <ol class="advantagesabout-list-right">
              <li class="advantagesabout-list-li"><span class="advantagesabout-list-li-number">4.</span> Эксклюзив!
                - артисты и продюсеры со всего света присылают
                нам свои треки, иногда задолго до официального релиза. </li>
              <li class="advantagesabout-list-li"><span class="advantagesabout-list-li-number">5.</span> Уже более
                30 артистов прислали приветствия радиослушателям
                (нескольких ямайцев даже обучили фразам на русском). Среди них Buckey Ranks, Kimmy Gold,
                Original Uman, Anthony John, Aza Lineage, JAH Niceness, Ginja, Ras Oney, Mr. Spaulding и
                другие. Из полученного материала мы миксуем специальные радио-дабплейты. Услышать их
                можно только в эфире и нигде больше в интернете. Впрочем, иногда мы играем их на
                вечеринках, в которых принимаем участие или организовываем. </li>
            </ol>
          </nav>
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
  name: 'AboutView',

  data: () => ({
    langFooter: 'ru' // язык демонстрации (по умолчанию russian)
  }),

  components: {
    FooterBlock
  },

  methods: {
    ...mapActions('aboutpage', {
      fetchLang: 'fetchLang'
    }),

    /**
     * Изменение цвета кнопки языка на странице about
     * @param { String } lang язык включения
     */
    changeLang (lang) {
      const btnsLang = this.$el.querySelectorAll('.headerabout-languages-lang')
      if (lang === 'en') {
        btnsLang[0].style.color = '#000000'
        btnsLang[1].style.color = '#888888'

        this._changeLangContent(this.getLang.en)

        this.$children[2].definitionLang()

        this.langFooter = 'en'
      } else {
        btnsLang[1].style.color = '#000000'
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
      const menuLang = this.$el.getElementsByClassName('headerabout-transitions-menu-li-link')
      const sectionMain = this.$el.getElementsByClassName('main')[0].children
      const aboutDescription = this.$el.getElementsByClassName('aboutview-us-description')[0]
      const infoDescription = this.$el.getElementsByClassName('advantagesabout-list-li')

      // Меню
      this._changeTextBlock(menuLang[0], language.menu.main)
      this._changeTextBlock(menuLang[1], language.menu.blog)
      this._changeTextBlock(menuLang[2], language.menu.aboutUs)

      // Изменение заголовков у блоков
      this._changeTextBlock(sectionMain[0].children[0].children[0], language.headings.aboutUs)
      this._changeTextBlock(sectionMain[1].children[0], language.headings.advantages)

      //  Описание блока о нас
      this._changeTextBlock(aboutDescription, language.pageAboutUs.description)

      // Описаниние о нас (перечисления)
      this._changeTextBlock(infoDescription[0], language.pageAboutUs.info.project)
      this._changeTextBlock(infoDescription[1], language.pageAboutUs.info.ourFormat)
      this._changeTextBlock(infoDescription[2], language.pageAboutUs.info.regular)
      this._changeTextBlock(infoDescription[3], language.pageAboutUs.info.exclusive)
      this._changeTextBlock(infoDescription[4], language.pageAboutUs.info.artists)
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
    ...mapGetters('aboutpage', {
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
