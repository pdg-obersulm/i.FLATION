<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title>
        <span class="headline">Inflation</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <v-container>

        <Inflationsrate />
        <br>
        
        <v-scroll-x-transition mode="out-in">
          <Akteure v-if="bottomNav === 'akteure'" />
          <div v-if="bottomNav === 'news'" ><Akteure /></div>
        </v-scroll-x-transition>

      </v-container>
    </v-content>

    <v-bottom-nav :active.sync="bottomNav" value="true" fixed>
      <v-btn value="akteure">
        <span>Akteure</span>
        <v-icon>mdi-view-grid</v-icon>
      </v-btn>

      <v-btn value="news">
        <span>News</span>
        <v-icon>mdi-newspaper</v-icon>
      </v-btn>
    </v-bottom-nav>
    
  </v-app>
</template>

<script>
import Inflationsrate from './components/Inflationsrate';
import Akteure from './components/Akteure'

export default {
  name: 'app',
  data() {
    return {
      bottomNav: 'akteure'
    }
  },
  methods: {
  },
  components: { Inflationsrate, Akteure }
}
</script>
