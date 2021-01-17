<template>
  <p>
    <button class='h-btn' @click="vueinfo()">Vue call prompt</button>
    <button class='h-btn' @click="jsinfo()">Js call prompt</button>
  </p>
</template>
<script>
import heyui from '../../../../src'; // Demo test path
// import heyui from 'heyui'; Actual call
export default {
  methods: {
    vueinfo() {
      this.$Message('This is a normal reminder');
    },
    jsinfo() {
      heyui.$Message('This is a normal reminder');
    }
  }
};
</script>
