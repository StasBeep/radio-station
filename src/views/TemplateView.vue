<template>
    <div>
    <!--обёртка для всего содержимого, чтобы прижать footer к нижней части-->
    <div class="wrapper-forcontent">
        <!--Содержимое сайта без подвала (нужно для прижатия подвала к нижней части)-->
        <div class="content-without-footer">
            <!--Шапка сайта-->
            <header>
                <h1>Привет</h1>
            </header>

            <!--Основная часть-->
            <main>
                <!--Первая секция основной части-->
                <section>
                    <MainContent/>
                </section>
                <!--Вторая секция-->
                <section></section>
            </main>
        </div>

            <!--Подвал сайта-->
            <footer>Версия: 0.1.0</footer>
        </div>
    </div>
</template>

<script>

import MainContent from '../components/MainContent.vue'

export default {
  name: 'TemplateView',

  components: {
    MainContent
  },

  // Хук (компонент ещё не смонтирован)
  // Эмитация загрузки данных
  created () {

  },

  // Момент монтирования компонента
  mounted () {

  },

  // Слежка за обновлениями DOM-дерева (перерисовка)
  updated () {

  },

  // Хук перед уничтожением компонента
  beforeUnmount () {

  },

  // Хук после уничтожения компонента
  unmounted () {

  }
}
</script>

<style src="../scss/style.scss" lang="scss" scoped>
@import '../scss/style.scss';
</style>
