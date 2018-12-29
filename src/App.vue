// root page
<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/close.less';
</style>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      hehe: 'hehe'
    };
  },
  mounted () {
    // app组件路由加载主页面
    this.$router.push({
      name: 'main'
    });
  },
  beforeDestroy () {

  },
  methods: {

  }
};
</script>