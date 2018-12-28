<template>
  <div class="content">
    <!-- <group>
    <cell title="title" value="value"></cell>
  </group> -->
    <tabbar>
      <tabbar-item selected>
        <img slot="icon" src="../../assets/images/tk.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item show-dot link="pageTwo">
        <img slot="icon">
        <span slot="label">直播</span>
      </tabbar-item>
      <tabbar-item link="pageOne">
        <img slot="icon">
        <span slot="label">题库</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <img slot="icon">
        <span slot="label">社区回答</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <img slot="icon">
        <span slot="label">我的</span>
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
        percent: 30,
        content: '有谁看到了我的小熊吗？' + this.$store.state.app.count
      };
    },
    created () {
      // console.log(this.$store.state);
    },
    methods: {

    }
  };
</script>

