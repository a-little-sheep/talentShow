import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'

import VueRouter from 'vue-router'

import Home from './components/home.vue'
import Classification from './components/classification.vue'
import Help from './components/help.vue'
import My from './components/my.vue'

Vue.use(VueRouter)

require('es6-promise').polyfill()

const routes = [{
  path: '/',
  component: Home
}, {
  path: '/classification',
  component: Classification
}, {
  path: '/help',
  component: Help
}, {
  path: '/my',
  component: My
}]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)
  next()
})
FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')

