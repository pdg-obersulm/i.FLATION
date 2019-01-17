<template>
	<v-container fluid grid-list-md pa-0>
		<v-layout offset-sm grid-list-xs row wrap class="mt-2">
			<v-flex xs12 sm6 md3 lg2 xl2 v-for="agent in $store.state.scenario.agents" :key="agent._id">
				<v-slide-y-transition mode="out-in">
					<v-card>
						<v-responsive :aspect-ratio="1/1">
							<v-container fill-height class="text-xs-center">
								<v-flex column>
									<v-card-text>
										<div>
											<v-icon large>{{ agent.icon }}</v-icon>
										</div>
										<h3 class="mt-2">{{ agent.name }}</h3>
									</v-card-text>

									<v-flex align-self-end>
										<v-btn flat @click="moreInfo(agent)">Mehr...</v-btn>
									</v-flex>
								</v-flex>
							</v-container>
						</v-responsive>
					</v-card>
				</v-slide-y-transition>
			</v-flex>
		</v-layout>

		<v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
			<v-card class="fill-height">
				<v-toolbar dark color="primary">
					<v-btn icon dark @click="dialog = false">
						<v-icon>mdi-close</v-icon>
					</v-btn>
					<v-toolbar-title>{{ info.name }}</v-toolbar-title>
				</v-toolbar>


				<v-card-text>
					<vue-simple-markdown :source="info.text" :highlight="false" />

					<v-container fluid grid-list-md pa-0>
						<v-layout offset-sm grid-list-xs row wrap>
							<v-flex xs6 sm4 md2 v-for="(graph, index) in info.graphs" :key="index">
								<v-card>
									<v-card-text>
										<v-sparkline :value="graph" auto-draw />
										<span class="headline">15%</span>
										<p>Lorem ipsum</p>
									</v-card-text>
								</v-card>
							</v-flex>
						</v-layout>
					</v-container>
				</v-card-text>
			</v-card>
		</v-dialog>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			scenarioInfo: true,
			dialog: false,
			info: {
				graphs: [],
				name: '',
				text: ''
			}
		}
	},
	methods: {
		moreInfo(agent) {
			this.info = agent;
			this.dialog = true;
		}
	}
}
</script>
