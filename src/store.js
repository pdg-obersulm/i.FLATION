import Vue from 'vue';
import Vuex from 'vuex';

import scenarios from './scenarios.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    scenario:
      scenarios.find(scenario => scenario.default === true) || scenarios[0],
    scenarios
  },
  mutations: {
    setScenario(state, scenario) {
      state.scenario = scenario;
      return state;
    }
  }
});
