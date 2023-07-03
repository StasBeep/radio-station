import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

// Модули должны быть сверху
const homeContent = {
  namespaced: true,
  state: { },
  mutations: { },
  actions: { },
  getters: { }
}

const aboutContent = {
  namespaced: true,
  state: {
    language: []
  },
  mutations: {
    setLang (state, payload) {
      state.language = payload
    }
  },
  actions: {
    fetchLang ({ commit }) {
      return new Promise((resolve) => {
        axios
          .get('https://raw.githubusercontent.com/StasBeep/radio-station/alteration-content/languageBlog.json')
          .then(response => {
            resolve(response.data.language[0])
            console.log(response.data.language[0])
          })
          .catch(error => console.log(error))
      }).then(res => {
        commit('setLang', res)
      })
    }
  },
  getters: {
    getLang: state => state.language
  }
}

export default new Vuex.Store({
  // Начальная точка отсчёта (состояние)
  state: { },
  // "Выдача" данных
  // Возвращает значения state или других состояний
  // Преобразовать данные и вернуть
  getters: { },
  // Изменение данных
  mutations: { },
  // Запускают mutations
  // Запрос -> получение -> вызов действий mutations
  actions: { },
  // Модули (для каждой страницы своё хранилище)
  modules: {
    homepage: homeContent,
    aboutpage: aboutContent
  }
})
