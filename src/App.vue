<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title>
        <span class="headline">Inflation</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <v-container>
        <ScenarioInfo />

        <v-scroll-x-transition mode="out-in">
          <Agents v-if="bottomNav === 'akteure'" />
          <div v-if="bottomNav === 'news'" ><Akteure /></div>
        </v-scroll-x-transition>

      </v-container>
    </v-content>

    <v-bottom-nav :active.sync="bottomNav" value="true" fixed>
      <v-btn value="akteure">
        <span>Akteure</span>
        <v-icon>mdi-view-grid</v-icon>
      </v-btn>

      <v-btn value="news">
        <span>News</span>
        <v-icon>mdi-newspaper</v-icon>
      </v-btn>
    </v-bottom-nav>
    
  </v-app>
</template>

<script>
import ScenarioInfo from './components/ScenarioInfo';
import Agents from './components/Agents'

export default {
  name: 'app',
  data() {
    return {
      bottomNav: 'akteure'
    }
  },
  methods: {
  },
  mounted: async function() {
    try {
      const request = await fetch(`${this.$backend}/scenarios`);
      const scenarios = await request.json();
      this.$store.commit('setScenarios', scenarios);
      this.$store.dispatch('setScenario', scenarios.find((scenario) => scenario.default).id);
    }
    catch (e) {
      console.error(e);
    }
  },
  components: { Agents, ScenarioInfo }
}
</script>
