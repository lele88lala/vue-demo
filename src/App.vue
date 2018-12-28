// root page
<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/close.less';
@import './style/app.less';
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