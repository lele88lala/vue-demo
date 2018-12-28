<template>
  <div>
    <router-view></router-view>
    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from '../../components/tabbar/tabbar.vue';
export default {
  data () {
    return {
      hehe: 'hehe'
    };
  },
  components: {
    tabbar
  }
};
</script>