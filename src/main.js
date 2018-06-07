// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'

import enviroment from '../enviroments/enviroment'

import 'normalize.css'
import './elements/components'
import './assets/scss/style.scss'

Vue.config.productionTip = false
Vue.prototype.$api = enviroment.api

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
