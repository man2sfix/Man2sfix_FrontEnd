// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'

import ElementUI from 'element-ui'
import ElementLocale from 'element-ui/lib/locale/lang/ko'
import 'element-ui/lib/theme-chalk/index.css'

import VueMoment from 'vue-moment'
import momentLocale from 'moment/locale/ko'

Vue.config.productionTip = false
Vue.use(ElementUI, { ElementLocale })
Vue.use(VueMoment, { momentLocale })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  render (h) {
    return h(App)
  }
})
