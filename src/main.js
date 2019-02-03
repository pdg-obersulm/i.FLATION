import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import store from './store'
import VueSimpleMarkdown from 'vue-simple-markdown'
import VueShortkey from 'vue-shortkey'
import backend from './backend'

Vue.config.productionTip = false
Vue.use(VueSimpleMarkdown);
Vue.use(VueShortkey);
Vue.prototype.$backend = backend;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');