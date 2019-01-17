<template>
	<v-card class="mx-auto">
		<v-toolbar card dense @click="scenarioInfo = !scenarioInfo">
			<v-toolbar-title>
				<span class="subheading">Aktuelles Szenario: {{ $store.state.scenario.scenario.name }}</span>
			</v-toolbar-title>

			<v-spacer />

			<Inflationrate />

			<v-btn icon>
				<v-icon>{{ scenarioInfo ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
			</v-btn>
		</v-toolbar>

		<v-slide-y-transition mode="out-in">
			<v-card-text v-if="scenarioInfo">
				Lorem ipsum, hier etwas Senf...
			</v-card-text>
		</v-slide-y-transition>
	</v-card>
</template>

<script>
import Inflationrate from './Inflationrate';
export default {
	data() {
		return {
			scenarioInfo: true
		}
	},
	components: { Inflationrate }
}
</script>
