import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import PageOne from '../components/page-one.vue'
import PageTwo from '../components/page-two.vue'
let routers = [
    {
        path: '/pageOne',
        name: 'pageOne',
        component: PageOne
    },
    {
        path: '/pageTwo',
        name: 'pageTwo',
        component: PageTwo
    },
    {
        path: '/',
        name: 'home',
        component: PageOne
    }
];

export default new Router({
  routes: routers
})