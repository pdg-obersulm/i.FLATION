<template>
  <v-menu bottom left offset-y>
    <v-btn
      slot="activator"
      flat
    >
      Szenario ändern...
    </v-btn>
    
    <v-list>
      <v-list-tile
        v-for="(scenario, i) in $store.state.scenarios"
        :key="i"
        @click="setScenario(scenario)"
      >
        <v-list-tile-avatar>
          <v-avatar size="32px" tile>
            <v-icon>{{ scenario.icon }}</v-icon>
          </v-avatar>
        </v-list-tile-avatar>
        <v-list-tile-title>{{ scenario.name }}</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>

<script>
export default {
	props: [],
	data() {
		return {
			open: false
		}
	},
	methods: {
		setScenario(scenario) {
			this.open = false;
			this.$store.commit('setScenario', scenario);
		}
	}
}
</script>
