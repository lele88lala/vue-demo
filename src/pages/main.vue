<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
    <tabbar></tabbar>
  </div>
</template>

<script>
import navbar from '../components/nav.vue';
import tabbar from '../components/tabbar.vue';
export default {
  name: 'app',
  data () {
    return {
      hehe: 'hehe'
    };
  },
  components: {
    navbar,
    tabbar
  }
};
</script>