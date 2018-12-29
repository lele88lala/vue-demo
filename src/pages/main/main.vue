// 根组件 App
<template>
  <div id="app">
    <XHeader v-show="showHeader" :title="headerTitle"></XHeader>
    <router-view></router-view>
    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from 'components/tabbar/tabbar.vue';
import { XHeader } from 'vux';
export default {
  name: 'app',
  data () {
    return {
    };
  },
  computed: {
    headerTitle () {
      return this.$store.state.app.headerTitle;
    },
    showHeader () {
      return this.$store.state.app.showHeader;
    }
  },
  components: {
    tabbar,
    XHeader
  },
  mounted () {
    this.$router.push({
      name: 'homePageNav'
    });
  }
};
</script>