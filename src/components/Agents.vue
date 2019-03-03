<template>
  <v-container grid-list-md>
    <v-card v-if="judgement">
      <v-card-text>
        <h2>Unsere Beurteilung des Szenarios</h2>
        <div v-html="judgement"></div>
      </v-card-text>
    </v-card>

    <v-layout offset-sm row wrap fill-height="">
      <v-flex v-for="agent in agents" :key="agent._id" lg4 md6 sm12>
        <v-card class="fill-height">
          <v-img
            class="fill-height"
            :src="`${process.env.VUE_APP_CDN}/images/agents/${agent.slug}.jpg`"
            aspect-ratio="2"
          >
            <v-container fill-height fluid class="agent-info">
              <v-layout fill-height column>
                <h2>{{ agent.name }}</h2>
                <div v-html="agent.text"></div>
              </v-layout>
            </v-container>
          </v-img>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import markdown from 'markdown';

export default {
  computed: {
    agents() {
      return this.$store.state.scenario.agents.map(agent => ({
        ...agent,
        text: markdown.parse(agent.text)
      }));
    },
    judgement() {
      return this.$store.state.scenario.judgement
        ? markdown.parse(this.$store.state.scenario.judgement)
        : false;
    }
  }
};
</script>

<style scoped>
.agent-info {
  background-color: rgba(0, 0, 0, 0.75);
}
</style>
