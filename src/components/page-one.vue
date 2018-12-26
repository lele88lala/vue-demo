
<template>
  <div>
    {{content}}
    <div @click="add">aa</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        content: '规则就是用来打破的，略略略'
      };
    },
    computed: {

    },
    methods: {
      add () {
        console.log(this.$parent);
        console.log(this.$root);
        console.log(this.$children);
      }
    }
  };
</script>