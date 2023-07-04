<template>
    <ul class="slider-figure">
        <li class="slider-figure-li" :style="{'background-image':`url(${ getSlider[0]?.image })`}">
            <div class="slider-figure-li-wrapper">
                <span class="slider-figure-li-title">
                    {{ getSlider[0]?.title }}
                </span>
                <span class="slider-figure-li-date">
                    {{ getSlider[0]?.data }}
                </span>
            </div>
            <a class="slider-figure-li-link" :href="getSlider[0]?.link" target="_blank" rel="nofollow">читать</a>
            <button class="slider-figure-li-right" @click="sliderContent(numi + 1, getSlider), noActiveSlider()">&#10095;</button>
            <button class="slider-figure-li-left" @click="sliderContent(numi - 1, getSlider), noActiveSlider()">&#10094;</button>
        </li>
        <li class="slider-figure-li"
            @mouseover="elementStyleHoverHidden"
            @mouseout="elementStyleHoverVisible"
            :style="{'background-image':`url(${ getSlider[1]?.image })`}">
            <div class="slider-figure-li-wrapper">
                <span class="slider-figure-li-title">
                    {{ getSlider[1]?.title }}
                </span>
                <span class="slider-figure-li-date">
                    {{ getSlider[1]?.data }}
                </span>
            </div>
            <a class="slider-figure-li-link" :href="getSlider[1]?.link" target="_blank" rel="nofollow">читать</a>
        </li>
        <li class="slider-figure-li"
            @mouseover="elementStyleHoverHidden"
            @mouseout="elementStyleHoverVisible"
            :style="{'background-image':`url(${ getSlider[2]?.image })`}">
            <div class="slider-figure-li-wrapper">
                <span class="slider-figure-li-title">
                    {{ getSlider[2]?.title }}
                </span>
                <span class="slider-figure-li-date">
                    {{ getSlider[2]?.data }}
                </span>
            </div>
            <a class="slider-figure-li-link" :href="getSlider[2]?.link" target="_blank" rel="nofollow">читать</a>
        </li>
        <li class="slider-figure-li"
            @mouseover="elementStyleHoverHidden"
            @mouseout="elementStyleHoverVisible"
            :style="{'background-image':`url(${ getSlider[3]?.image })`}">
            <div class="slider-figure-li-wrapper">
                <span class="slider-figure-li-title">
                    {{ getSlider[3]?.title }}
                </span>
                <span class="slider-figure-li-date">
                    {{ getSlider[3]?.data }}
                </span>
            </div>
            <a class="slider-figure-li-link" :href="getSlider[3]?.link" target="_blank" rel="nofollow">читать</a>
        </li>
    </ul>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'SliderBlock',

  data: () => ({
    numi: 0,
    intervalSliderActive: ''
  }),

  methods: {
    ...mapActions('slider', {
      fetchSlider: 'fetchSlider'
    }),

    /**
     * Заполнение слайдера в начале отображения страницы
     * @param { Number } j номер контента массива отображаемого на элементе
     * @param { Object } content Объект с контентом слайдера
     * @returns { Number } состояние отображения контента объекта
     */
    sliderContent (j, content) {
      // Проверка на выходы из границ массива
      const counter = this._sizeContentSlider(j, content)

      let subordinateElement = counter

      this._populateContentElement(0, counter, content)
      subordinateElement = this._sizeContentSlider(subordinateElement + 1, content)
      this._populateContentElement(1, subordinateElement, content)
      subordinateElement = this._sizeContentSlider(subordinateElement + 1, content)
      this._populateContentElement(2, subordinateElement, content)
      subordinateElement = this._sizeContentSlider(subordinateElement + 1, content)
      this._populateContentElement(3, subordinateElement, content)

      this.numi = counter

      return counter
    },

    /**
     * Размещение на элементах слайдера
     * @param { Number } i номер элемента
     * @param { Number } j номер объекта слайдера
     * @param { Object } contentSlider Объект контента
     */
    _populateContentElement (i, j, contentSlider) {
      const sliderElement = document.getElementsByClassName('slider-figure')[0].children

      sliderElement[i].children[0].children[0].textContent = `${contentSlider[j].title}`
      sliderElement[i].children[0].children[1].textContent = `${contentSlider[j].data}`
      sliderElement[i].children[1].href = `${contentSlider[j].link}`
      sliderElement[i].style.backgroundImage = `url("${contentSlider[j].image}")`

      // Измение цвета текста в слайдере
      sliderElement[i].children[0].children[0].style.color = `${contentSlider[j].color}`
      sliderElement[i].children[0].children[1].style.color = `${contentSlider[j].color}`
    },

    _sizeContentSlider (j, contentSlider) {
      let sizeObjSlider = contentSlider.length

      if (j < 0) {
        return --sizeObjSlider
      } else if (j === sizeObjSlider) {
        return 0
      }
      return j
    },

    /**
     * Эффект скрытия первого элемента
     */
    elementStyleHoverHidden () {
      const sliderElement = document.getElementsByClassName('slider-figure')[0].children
      sliderElement[0].style.width = '190px'
      sliderElement[0].style.height = '380px'
      sliderElement[0].children[0].style.opacity = '0'
      sliderElement[0].children[1].style.visibility = 'hidden'
      sliderElement[0].children[1].style.opacity = '0'
      sliderElement[0].children[1].style.padding = '0'
    },

    /**
     * Эффект появления первого элемента
     */
    elementStyleHoverVisible () {
      const sliderElement = document.getElementsByClassName('slider-figure')[0].children
      sliderElement[0].style.width = '380px'
      sliderElement[0].style.height = '435px'
      sliderElement[0].children[0].style.opacity = '1'
      sliderElement[0].children[1].style.padding = '20px 153px'
      sliderElement[0].children[1].style.visibility = 'visible'
      sliderElement[0].children[1].style.opacity = '1'
    },

    /**
     * Интервальное переключение слайдера 10 секунд
     */
    intervalSlider: function () {
      const globalEl = this
      this.intervalSliderActive = setInterval(() => {
        globalEl.numi = globalEl.sliderContent(globalEl.numi + 1, globalEl.getSlider)
      }, 10000)
    },

    /**
     * Отключение интервального события
     */
    noActiveSlider () {
      clearInterval(this.intervalSliderActive)
    }
  },

  computed: {
    ...mapGetters('slider', {
      getSlider: 'getSlider'
    })
  },

  mounted () {
    this.fetchSlider()
    this.intervalSlider()
  },

  beforeUnmount () {
    this.getSlider = []
    clearInterval(this.intervalSliderActive)
  }
}
</script>

<style src="../scss/style.scss" lang="scss" scoped/>
