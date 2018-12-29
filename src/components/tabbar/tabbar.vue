<template>
  <div class="content">
    <div>{{$route.path}}</div>
    <tabbar v-show="$route.path === '/' || $route.path === '/homePageNav' || $route.path === '/liveBroadcastNav' || $route.path === '/questionBankNav' || $route.path === '/communityNav' || $route.path === '/mineNav'">
      <tabbar-item :selected="$route.path === '/homePageNav'" link="homePageNav">
        <img slot="icon" src="~assets/images/tk.png" link="homePageNav">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item show-dot :selected="$route.path === '/liveBroadcastNav'" link="liveBroadcastNav">
        <img slot="icon">
        <span slot="label">直播</span>
      </tabbar-item>
      <tabbar-item :selected="$route.path === '/questionBankNav'" link="questionBankNav">
        <img slot="icon">
        <span slot="label">题库</span>
      </tabbar-item>
      <tabbar-item badge="2" :selected="$route.path === '/communityNav'" link="communityNav">
        <img slot="icon">
        <span slot="label">社区回答</span>
      </tabbar-item>
      <tabbar-item badge="2" :selected="$route.path === '/mineNav'" link="mineNav">
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
      console.log('呵呵', this.$route.path);
    },
    methods: {

    }
  };
</script>

