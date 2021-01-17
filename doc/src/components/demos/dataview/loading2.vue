<template>
  <div>
    <p>
      <Button @click="pageload">Vue 调用全局加载</Button>
      <Button @click="pageloadJs">Js 调用全局加载</Button>
    </p>
  </div>
</template>
<script>
import heyui from '../../../../src'; // demo测试路径
// import heyui from 'heyui'; 实际调用

export default {
  methods: {
    pageload() {
      this.$Loading();
      setTimeout(() => {
        this.$Loading.close();
      }, 3000);
    },
    pageloadJs() {
      heyui.$Loading('加载中');
      setTimeout(() => {
        heyui.$Loading.close();
      }, 3000);
    }
  }
};
</script>
