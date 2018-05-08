// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ko'
import 'element-ui/lib/theme-chalk/index.css'

import 'es6-promise/auto'
import axios from 'axios'
import firebase from 'firebase'
import config from '../enviroments/firebase'

Vue.prototype.$http = axios
firebase.initializeApp(config)

Vue.config.productionTip = false
Vue.use(ElementUI, { locale })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render (h) {
    return h(App)
  }
})
