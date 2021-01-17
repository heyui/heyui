<template>
  <p>
    <button class='h-btn' @click="vueinfo()">Vue 调用提示</button>
    <button class='h-btn' @click="jsinfo()">Js 调用提示</button>
  </p>
</template>
<script>
import heyui from '../../../../src'; // demo测试路径
// import heyui from 'heyui'; 实际调用
export default {
  methods: {
    vueinfo() {
      this.$Notice('这是一个普通的通知');
    },
    jsinfo() {
      heyui.$Notice('这是一个普通的通知');
    }
  }
};
</script>
