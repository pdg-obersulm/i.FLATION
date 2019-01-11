<template>
	<v-card class="mx-auto">
		<v-toolbar card dense @click="show = !show">
			<v-toolbar-title>
				<span class="subheading">Inflationsrate</span>
			</v-toolbar-title>

			<v-spacer />

			<v-btn icon @click="show = !show">
				<v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
			</v-btn>
		</v-toolbar>

		<v-slide-y-transition mode="out-in">
			<v-card-text v-if="show">
				<v-layout justify-space-between mb-3>
					<v-flex text-md-left>
						<p class="subheading">Momentane Inflationsrate:</p>
						<p>Die von der Europäischen Zentralbank angestrebte Inflationsrate.</p>
					</v-flex>
					<v-flex text-md-right>
						<span class="display-3 font-weight-light">{{ inflationsrate }}</span>
						<span class="subheading font-weight-light mr-1">%</span>
					</v-flex>
				</v-layout>


				<v-slider :value="inflation" min="-100" max="100" step="0.2" @input="setInflation">
					<v-icon slot="prepend" @click="$store.commit('alterInflation', -2)">mdi-minus</v-icon>
					<v-icon slot="append" @click="$store.commit('alterInflation', 2)">mdi-plus</v-icon>
				</v-slider>
			</v-card-text>
		</v-slide-y-transition>
	</v-card>
</template>

<script>
export default {
	props: [],
	data() {
		return {
			show: true,

		}
	},
	computed: {
		inflation() {
			return this.$store.state.inflationsrate;
		},
		inflationsrate() {
			const i = this.$store.state.inflationsrate;
			return i === 100 || i === -100 ? (i < 0 ? '-' : '') + '∞' : i;
		}
	},
	methods: {
		setInflation(value) {
			this.$store.commit('setInflation', value);
		}
	}
}
</script>
