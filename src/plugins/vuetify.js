import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import de from 'vuetify/es5/locale/de'

Vue.use(Vuetify, {
  theme: {
    primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  },
  iconfont: 'mdi',
  lang: {
    locales: { de },
    current: 'de'
  },
})
