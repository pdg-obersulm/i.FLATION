<template>
	<v-slide-y-transition>
		<v-card class="w-100 scenario-info" v-if="visible">
			<v-toolbar card dense>
				<v-toolbar-title>
					<span class="subheading">Aktuelles Szenario: {{ $store.state.scenario.scenario.name }}</span>
				</v-toolbar-title>

				<v-spacer />

				<Inflationrate />

				<v-btn icon @click="$emit('toggle')">
					<v-icon>{{ extended ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
				</v-btn>
			</v-toolbar>

			<v-expand-transition mode="out-in">
				<div v-if="extended">
					<div class="pa-4">Lorem ipsum, hier etwas Senf...</div>
				</div>
			</v-expand-transition>
		</v-card>
	</v-slide-y-transition>
</template>

<script>
import Inflationrate from './Inflationrate';
export default {
	props: ['visible', 'extended'],
	components: { Inflationrate }
}
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
