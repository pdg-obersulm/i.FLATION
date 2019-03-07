<template>
  <div>
    <div ref="player" :class="{ fullscreen }">
      <video
        ref="video"
        :poster="`${process.env.VUE_APP_CDN}/images/poster.png`"
        :src="
          `${process.env.VUE_APP_CDN}/videos/${
            $store.state.scenario.slug
          }/${quality}.mp4`
        "
        @pause="videoEvent"
        @playing="videoEvent"
        @waiting="videoWaiting"
        @timeupdate="videoEvent"
        @dblclick="toggleFullscreen"
      ></video>

      <v-layout
        justify-center
        class="video-controls"
        :style="{ opacity: controls ? '1' : '0' }"
      >
        <v-card color="background">
          <v-slider
            class="video-progress"
            min="0"
            :max="duration"
            step="0.1"
            :value="progress"
            @change="seek"
            @input="scan"
            @start="seeking = true"
            @end="seeking = false"
          />
          <v-layout justify-space-around>
            <v-menu auto origin="center center">
              <v-btn slot="activator" icon>
                <v-icon
                  >mdi-quality-{{
                    quality === '1080' ? 'high' : 'medium'
                  }}</v-icon
                >
              </v-btn>

              <v-list>
                <v-list-tile @click="quality = '1080'">
                  <v-list-tile-title>1080p</v-list-tile-title>
                </v-list-tile>
                <v-list-tile @click="quality = '720'">
                  <v-list-tile-title>720p</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
            <v-btn
              v-shortkey="{ j: ['j'], arrow: ['arrowleft'] }"
              icon
              @shortkey="rewind"
              @click="rewind"
            >
              <v-icon>mdi-rewind</v-icon>
            </v-btn>
            <v-btn
              v-shortkey="{ k: ['k'], space: ['space'] }"
              icon
              @shortkey="playPause"
              @click="playPause"
            >
              <v-progress-circular
                v-if="buffering"
                size="20"
                width="2"
                indeterminate
              />
              <v-icon v-else>{{ playing ? 'mdi-pause' : 'mdi-play' }}</v-icon>
            </v-btn>
            <v-btn
              v-shortkey="{ l: ['l'], arrow: ['arrowright'] }"
              icon
              @shortkey="forward"
              @click="forward"
            >
              <v-icon>mdi-fast-forward</v-icon>
            </v-btn>
            <v-btn
              v-shortkey="['f']"
              icon
              @shortkey="toggleFullscreen"
              @click="toggleFullscreen"
            >
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
import Agents from './Agents';

const defaultQuality = window.innerWidth > 1280 ? '1080' : '720';

export default {
  props: ['controls'],
  data() {
    return {
      publicPath: process.env.BASE_URL,
      playing: false,
      progress: 0,
      duration: 0,
      seeking: false,
      fullscreen: false,
      quality: defaultQuality,
      buffering: false
    };
  },
  methods: {
    playPause() {
      if (this.$refs.video.paused) {
        this.$refs.video.play();
      } else {
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
      if (this.seeking) {
        this.$refs.video.currentTime = value;
      }
    },
    seek(value) {
      this.$refs.video.currentTime = value;
    },
    videoEvent(event) {
      const { paused, currentTime, duration } = event.target;

      this.playing = !paused;
      this.duration = duration;
      this.buffering = false;

      if (!this.seeking) {
        this.progress = currentTime;
      }
    },
    videoWaiting() {
      this.buffering = true;
    },
    toggleFullscreen() {
      const element = this.$refs.player;

      if (document.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      } else {
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
};
</script>

<style lang="scss" scoped>
video {
  display: block;
  width: 100%;
}

.video-controls {
  position: sticky;
  bottom: 20px;
  transition: opacity 0.3s ease;
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
