<template>
	<v-container fluid grid-list-md pa-0>
		<v-layout offset-sm grid-list-xs row wrap>
			<v-flex xs12 sm6 md3 lg2 xl2 v-for="i in 8" :key="i">
				<v-card>
					<v-responsive :aspect-ratio="1/1">
						<v-container fill-height class="text-xs-center">
							<v-flex column>
								<v-card-text>
									<div>
										<v-icon large>mdi-bank</v-icon>
									</div>
									<p>Lorem ipsum dolor sit amet...</p>
								</v-card-text>

								<v-flex align-self-end>
									<v-btn flat @click="dialog = true">Mehr...</v-btn>
								</v-flex>
							</v-flex>
						</v-container>
					</v-responsive>
				</v-card>
			</v-flex>
		</v-layout>

		<v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
			<v-card class="fill-height">
				<v-toolbar dark color="primary">
					<v-btn icon dark @click="dialog = false">
						<v-icon>mdi-close</v-icon>
					</v-btn>
					<v-toolbar-title>Banken</v-toolbar-title>
				</v-toolbar>


				<v-card-text>
					<p>Exercitation nostrud ipsum qui deserunt elit do deserunt incididunt ex dolor excepteur enim voluptate incididunt.
						Exercitation culpa magna veniam laborum reprehenderit ullamco consectetur anim eiusmod in consectetur fugiat
						consequat. Exercitation aliqua laborum sunt ut consectetur anim sit culpa ut quis amet nisi magna in.</p>
					<p>Exercitation nostrud ipsum qui deserunt elit do deserunt incididunt ex dolor excepteur enim voluptate incididunt.
						Exercitation culpa magna veniam laborum reprehenderit ullamco consectetur anim eiusmod in consectetur fugiat
						consequat. Exercitation aliqua laborum sunt ut consectetur anim sit culpa ut quis amet nisi magna in.</p>
					<p>Exercitation nostrud ipsum qui deserunt elit do deserunt incididunt ex dolor excepteur enim voluptate incididunt.
						Exercitation culpa magna veniam laborum reprehenderit ullamco consectetur anim eiusmod in consectetur fugiat
						consequat. Exercitation aliqua laborum sunt ut consectetur anim sit culpa ut quis amet nisi magna in.</p>

					<v-container fluid grid-list-md pa-0>
						<v-layout offset-sm grid-list-xs row wrap>
							<v-flex xs6 sm4 md2 v-for="i in 6" :key="i">
								<v-card>
									<v-card-text>
										<v-sparkline :value="value" auto-draw />
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
			dialog: false,
			value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]
		}
	}
}
</script>
