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
      this.$Notice('This is a normal notice');
    },
    jsinfo() {
      heyui.$Notice('This is a normal notice');
    }
  }
};
</script>
