import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import store from './store'
import VueShortkey from 'vue-shortkey'

Vue.config.productionTip = false
Vue.use(VueShortkey);
Vue.prototype.$backend = process.env.VUE_APP_BACKEND;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');