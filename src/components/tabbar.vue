
<style lang = 'less'>
@import  './css.less';
</style>
<template>
  <div class="content">
    <tabbar>
      <tabbar-item>
        <img slot="icon" >
        <span slot="label">Wechat</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <img slot="icon">
        <span slot="label">Message</span>
      </tabbar-item>
      <tabbar-item selected link="/component/demo">
        <img slot="icon">
        <span slot="label">Explore</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <img slot="icon">
        <span slot="label">News</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import { Group, Cell, Badge, Tabbar, TabbarItem } from 'vux';

  export default {
    components: {
      Group,
      Cell,
      Badge,
      TabbarItem,
      Tabbar
    },
    data () {
      return {
        content: '有谁看到了我的小熊吗？' + this.$store.state.app.count
      };
    },
    created () {
      console.log(this.$store.state);
    },
    methods: {

    }
  };
</script>
