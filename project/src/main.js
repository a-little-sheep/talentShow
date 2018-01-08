import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'

import router from './router'

require('es6-promise').polyfill()

router.beforeEach((to, from, next) => {
  console.log(to);
  console.log(from);
  next()
})
FastClick.attach(document.body)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')

