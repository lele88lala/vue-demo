// 根组件 App
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