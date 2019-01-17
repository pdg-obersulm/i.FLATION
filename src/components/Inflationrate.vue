<template>
	<v-bottom-sheet v-model="open">
      <v-btn
        slot="activator"
        flat
      >
        Szenario ändern...
      </v-btn>

      <v-list>
        <v-subheader>Szenarien:</v-subheader>
        <v-list-tile
          v-for="scenario in $store.state.scenarios"
          :key="scenario.id"
          @click="setScenario(scenario.id)"
        >
          <v-list-tile-avatar>
            <v-avatar size="32px" tile>
              <v-icon>{{ scenario.icon }}</v-icon>
            </v-avatar>
          </v-list-tile-avatar>
          <v-list-tile-title>{{ scenario.name }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-bottom-sheet>
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
		setScenario(id) {
			this.open = false;
			this.$store.dispatch('setScenario', id);
		}
	}
}
</script>
