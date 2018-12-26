
<style lang = 'less'>
@import  './css.less';
</style>
<template>
  <div class="content">
    {{content}}
    <img src="../assets/images/tk.png">
  </div>
</template>

<script>
  export default {
    data () {
      return {
        content: '有谁看到了我的小熊吗？' + this.$store.state.app.count
      };
    },
    created () {
    },
    methods: {

    }
  };
</script>
