import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home.vue'
import Classification from '../components/classification.vue'
import Help from '../components/help.vue'
import My from '../components/my.vue'
import Search from '../components/home/search.vue'

Vue.use(Router)

const routes = [{
    path: '/',
    component: Home,
    children: [{
        path: '/home/search',
        name: 'search',
        component: Search
    }]
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

const router = new Router({
    routes
})

export default router



