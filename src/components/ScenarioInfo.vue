<template>
  <v-slide-y-transition>
    <v-card v-if="visible" class="w-100 scenario-info">
      <v-toolbar card dense>
        <v-toolbar-title>
          <span class="subheading">
            Aktuelles Szenario: {{ $store.state.scenario.name }}
          </span>
        </v-toolbar-title>

        <v-dialog v-model="info" max-width="500">
          <v-btn slot="activator" icon>
            <v-icon>mdi-information</v-icon>
          </v-btn>

          <v-card>
            <v-card-title class="headline" primary-title>
              {{ $store.state.scenario.name }}
            </v-card-title>

            <v-card-text>
              {{ $store.state.scenario.description }}
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat @click="info = false">
                Schließen
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-spacer />

        <SetScenario />
      </v-toolbar>
    </v-card>
  </v-slide-y-transition>
</template>

<script>
import SetScenario from './SetScenario';
export default {
  props: ['visible', 'extended'],
  data() {
    return {
      info: false
    };
  },
  components: { SetScenario }
};
</script>

<style scoped>
.scenario-info {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
}
</style>
