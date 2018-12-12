
<style lang = 'less'>
@import  './css.less';
</style>
<template>
  <div class="content">
    {{content}}
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
      console.log(this.$store.state);
    },
    methods: {

    }
  };
</script>
