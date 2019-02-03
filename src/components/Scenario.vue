<template>
	<div>
		<div ref="player" :class="{ fullscreen }">
			<video :poster="`${publicPath}images/scenarios/dummy_cover.png`" @pause="videoEvent" @playing="videoEvent" @timeupdate="videoEvent" ref="video" @dblclick="toggleFullscreen">
				<source :src="`${publicPath}videos/scenarios/dummy_1080.mp4`" type="video/mp4">
			</video>

			<v-layout justify-center class="video-controls" :style="{ opacity: controls ? '1' : '0' }">
				<v-card color="background">
					<v-slider class="video-progress" min="0" :max="duration" step="0.1" :value="progress" @change="seek" @input="scan" @start="seeking = true" @end="seeking = false" />
					<v-layout justify-space-around>
						<v-btn icon>
							<v-icon>mdi-quality-high</v-icon>
						</v-btn>
						<v-btn icon v-shortkey="{ j: ['j'], arrow: ['arrowleft'] }" @shortkey="rewind" @click="rewind">
							<v-icon>mdi-rewind</v-icon>
						</v-btn>
						<v-btn icon v-shortkey="{ k: ['k'], space: ['space'] }" @shortkey="playPause" @click="playPause">
							<v-icon>{{ playing ? 'mdi-pause' : 'mdi-play' }}</v-icon>
						</v-btn>
						<v-btn icon v-shortkey="{ l: ['l'], arrow: ['arrowright'] }" @shortkey="forward" @click="forward">
							<v-icon>mdi-fast-forward</v-icon>
						</v-btn>
						<v-btn icon v-shortkey="['f']" @shortkey="toggleFullscreen" @click="toggleFullscreen">
							<v-icon>mdi-fullscreen</v-icon>
						</v-btn>
					</v-layout>
				</v-card>
			</v-layout>
		</div>

		<Agents />
	</div>
</template>

<script>
import Agents from './Agents'

export default {
	props: ['controls'],
	data() {
		return {
			publicPath: process.env.BASE_URL,
			playing: false,
			progress: 0,
			duration: 0,
			seeking: false,
			fullscreen: false
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
		rewind() {
			this.$refs.video.currentTime -= 5;
		},
		forward() {
			this.$refs.video.currentTime += 5;
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
		},
		toggleFullscreen() {
			const element = this.$refs.player;

			if (document.fullscreen) {
				if (document.exitFullscreen) {
					document.exitFullscreen();
				}
			}
			else {
				if (element.requestFullscreen) {
					element.requestFullscreen();
				}
			}
			
			this.fullscreen = document.fullscreen;
		},
		fullscreenChange(fullscreen) {
			this.fullscreen = fullscreen;
			console.log(fullscreen);
		}
	},
	created() {
		document.addEventListener('fullscreenchange', () => {
			this.fullscreen = document.fullscreen;
		});
	},
	components: { Agents }
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

		/deep/ & > div {
			position: absolute;
		}
	}
}

.fullscreen {
	display: flex;
	justify-content: center;
	align-items: center;
	
	.video-controls {
		position: fixed;
		left: 0;
		right: 0;
	}
}
</style>
