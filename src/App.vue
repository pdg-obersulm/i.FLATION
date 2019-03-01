<template>
  <v-app dark>
    <ScenarioInfo :visible="controls.visible" />

    <v-content>
      <Scenario :controls="controls.visible" />
    </v-content>

    <v-footer
    height="auto"
    color="primary lighten-1"
  >
    <v-layout
      justify-center
      row
      wrap
    >
      <HelpView />
      <v-btn href="https://github.com/pdg-obersulm/i.FLATION" flat>Github</v-btn>
      <ImprintView />
      <v-flex
        primary
        lighten-2
        py-3
        text-xs-center
        white--text
        xs12
      >
        &copy; 2019 — <strong>PDG Obersulm</strong>
      </v-flex>
    </v-layout>
  </v-footer>
  </v-app>
</template>

<script>
import Scenario from './components/Scenario'
import ScenarioInfo from './components/ScenarioInfo'
import ImprintView from './components/ImprintView'
import HelpView from './components/HelpView'

export default {
  name: 'app',
  data() {
    return {
      controls: {
        visible: true,
        timeout: null,
      },
      imprint: false
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
  },
  components: { Scenario, ScenarioInfo, ImprintView, HelpView }
}
</script>
