<template>
  <div>
      <button class="h-btn" @click="open">打开弹出框</button>
  </div>
</template>

<script>
import modalTest from './modalTest';

export default {
  methods: {
    open() {
      let that = this;
      this.$Modal({
        component: {
          // 这里也可以定义异步调用
          // vue: (resolve) => {
          //   require(['./modalTest'], resolve);
          // },
          vue: modalTest,
          data: { a: 1 }
        },
        events: {
          fromchild(m, data) {
            that.$Message(data);
          }
        }
      });
    }
  }
}
</script>