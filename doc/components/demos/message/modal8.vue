<template>
  <div>
      <button class="h-btn" @click="opened = true">打开弹出框</button>
      <ModalComponent :component="test" :props-data="{a:1}" v-model="opened" @fromchild="trigger"></ModalComponent>
  </div>
</template>

<script>
import test from './modalTest';

export default {
  data() {
    return {
      opened: false,
      test // 在这里定义引用
    };
  },
  methods: {
    trigger(data) {
      this.$Message.success(data);
    }
  }
};
</script>
