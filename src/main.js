import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

let vues = new Vue({
  el: '#app',
  router: router,
  store: store,
  template: '<App/>',
  components: { App }
});
Vue.use({
  vues
});
