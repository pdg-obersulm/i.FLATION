<template>
	<div>
		<video poster="http://localhost:8081/dummy_cover.png?v2" @pause="videoEvent" @playing="videoEvent" @timeupdate="videoEvent" ref="video">
			<source src="http://localhost:8081/dummy_1080.mp4?v2" type="video/mp4" size="1080">
		</video>

		<v-layout justify-center class="video-controls" :style="{ opacity: controls ? '1' : '0' }">
			<v-card color="background">
				<v-slider class="video-progress" min="0" :max="duration" step="0.1" :value="progress" @change="seek" @input="scan" @start="seeking = true" @end="seeking = false" />
				<v-layout justify-space-around>
					<v-btn flat>
						<v-icon>mdi-rewind</v-icon>
					</v-btn>
					<v-btn flat @click="playPause">
						<v-icon>{{ playing ? 'mdi-pause' : 'mdi-play' }}</v-icon>
					</v-btn>
					<v-btn flat>
						<v-icon>mdi-fast-forward</v-icon>
					</v-btn>
				</v-layout>
			</v-card>
		</v-layout>
	</div>
</template>

<script>
export default {
	props: ['controls'],
	data() {
		return {
			playing: false,
			progress: 0,
			duration: 0,
			seeking: false
		}
	},
	methods: {
		playPause() {
			if (this.$refs.video.paused) {
				this.$refs.video.play();
			}
			else {
				this.$refs.video.pause();
			}
		},
		scan(value) {
			// TODO: fix seeking issues
			if (this.seeking) {
				this.$refs.video.currentTime = value;
			}
		},
		seek(value) {
			this.$refs.video.currentTime = value;
		},
		videoEvent(event) {
			const {paused, currentTime, duration} = event.target;
			this.playing = !paused;
			this.duration = duration;
			if (!this.seeking) {
				this.progress = currentTime;
			}
		}
	}
}
</script>

<style lang="scss" scoped>
video {
	display: block;
	width: 100%;
}

.video-controls {
	position: sticky;
	bottom: 20px;
	transition: opacity .3s ease;
	transform: translateY(-24px);

	& > div {
		max-width: 800px;
		width: 90%;
	}

	.video-progress {
		position: relative;
		top: -16px;
		margin: 0;

		/deep/ > div {
			position: absolute;
		}
	}
}
</style>
