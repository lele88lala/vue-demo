import Vue from 'vue';
import Router from 'vue-router';
import { routers } from './router';
import store from 'store/index';

Vue.use(Router);

const route = new Router({ routes: routers });
export default route;

route.beforeEach((to, from, next) => {
  store.commit('setHeaderTitle', to.meta.headerTitle);
  store.commit('setShowHeader', to.meta.showHeader);
  next({});
});

route.afterEach((to, from, next) => {
  console.log('after', to, from);
});
