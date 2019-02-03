<template>
  <v-app dark>
    <ScenarioInfo :visible="controls.visible" />

    <v-content>
      <Scenario :controls="controls.visible" />
    </v-content>
  </v-app>
</template>

<script>
import Scenario from './components/Scenario'
import ScenarioInfo from './components/ScenarioInfo'

export default {
  name: 'app',
  data() {
    return {
      controls: {
        visible: true,
        timeout: null
      }
    }
  },
  mounted: async function() {
    const controlHandler = () => {
      this.controls.visible = true;
      clearTimeout(this.controls.timeout);
      if (window.pageYOffset < 50) {
        this.controls.timeout = setTimeout(() => {
          this.controls.visible = false;
        }, 3000);
      }
    };
    window.addEventListener('mousemove', controlHandler);
    window.addEventListener('scroll', controlHandler);
    controlHandler();

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
  components: { Scenario, ScenarioInfo }
}
</script>