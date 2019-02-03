<template>
	<v-container grid-list-md>
		<v-layout offset-sm row wrap>
			<v-flex lg4 md6 sm12 v-for="agent in $store.state.scenario.agents" :key="agent._id">
				<v-card>
					<v-img :src="agent.image ? `${publicPath}images/agents/${agent.image}` : `https://picsum.photos/800/400?random&${Math.random()}`" aspect-ratio="2">
						<v-container fill-height fluid class="agent-info">
							<v-layout fill-height column>
								<h2>{{ agent.name }}</h2>
								<vue-simple-markdown :source="agent.text" />
							</v-layout>
						</v-container>
					</v-img>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			publicPath: process.env.BASE_URL,
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

<style lang="scss" scoped>
.agent-info {
	background-color: rgba(0,0,0,.5);
}
</style>
