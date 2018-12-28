import Vue from 'vue';
import Router from 'vue-router';
import main from '../pages/main/main.vue';

Vue.use(Router);

let routers = [
  {
    path: '/',
    name: 'main',
    component: main,
    children: [
      {
        path: '/pageTwo',
        name: 'pageTwo',
        // component: resolve => require.ensure([], () => resolve(requir('../components/page-one.vue')))
        component: () => import('../components/page-one.vue')
      },
      {
        path: '/pageOne',
        name: 'pageOne',
        component: resolve => require.ensure([], () => resolve(require('../components/page-two.vue')))
      }
    ]
  }
];

export default new Router({
  routes: routers
});
