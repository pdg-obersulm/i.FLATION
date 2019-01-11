import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    inflationsrate: 2
  },
  mutations: {
    alterInflation(state, value) {
      state.inflationsrate += value;
      return state;
    },
    setInflation(state, value) {
      state.inflationsrate = value;
      return state;
    }
  },
  actions: {

  }
})
