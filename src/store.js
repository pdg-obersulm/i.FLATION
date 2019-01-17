import Vue from 'vue'
import Vuex from 'vuex'

import config from './config';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    scenario: {},
    scenarios: []
  },
  mutations: {
    setScenarios(state, scenarios) {
      state.scenarios = scenarios;
      return state;
    },
    setScenario(state, scenario) {
      state.scenario = scenario;
      return state;
    }
  },
  actions: {
    setScenario: async ({ commit }, id) => {
      try {
        const request = await fetch(`${config.backend}/scenarios/${id}`);
        const scenario = await request.json();
        commit('setScenario', scenario);
      }
      catch (e) {
        console.error(e);
      }
    }
  }
})
