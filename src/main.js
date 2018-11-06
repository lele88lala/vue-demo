import Vue from 'vue';
import App from './App.vue';
import router from './router';
let vues = new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: { App }
});
Vue.use({
  vues
});
