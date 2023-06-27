import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

// Модули должны быть сверху
const moduleA = {
  state: () => ({ }),
  mutations: { },
  actions: { },
  getters: { }
}

const moduleB = {
  state: () => ({ }),
  mutations: { },
  actions: { }
}

export default new Vuex.Store({
  // Начальная точка отсчёта (состояние)
  state: {
    offers: []
  },
  // "Выдача" данных
  // Возвращает значения state или других состояний
  // Преобразовать данные и вернуть
  getters: {
    getOffers: state => state.offers
  },
  // Изменение данных
  mutations: {
    setOffers (state, payload) {
      state.offers = payload
    }
  },
  // Запускают mutations
  // Запрос -> получение -> вызов действий mutations
  actions: {
    fetchOffers ({ commit }) {
      return new Promise((resolve) => {
        axios
          .get('https://raw.githubusercontent.com/StasBeep/diving/content-line/content.json')
          .then(response => {
            resolve(response.data.offers)
          })
          .catch(error => console.log(error))
      }).then(res => {
        commit('setOffers', res)
      })
    }
  },
  // Модули (для каждой страницы своё хранилище)
  modules: {
    a: moduleA,
    b: moduleB
  }
})
