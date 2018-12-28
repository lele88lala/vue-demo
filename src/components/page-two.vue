
<style lang = 'less' scoped>
@import  './css.less';
</style>
<template>
  <div class="content">
    {{content}}
    <group>
      <cell title="title" value="value"></cell>
    </group>
    <!-- <img src="../assets/images/tk.png"> -->
  </div>
</template>

<script>
  import { Group, Cell } from 'vux';
  import http from '../api.js';
  export default {
    components: {
      Group,
      Cell
    },
    data () {
      return {
        content: '有谁看到了我的小熊吗？' + this.$store.state.app.count
      };
    },
    created () {
      http.logout().then(function (res) {});
    },
    methods: {
    }
  };
</script>
