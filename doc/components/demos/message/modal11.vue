<template>
  <div>
      <button class="h-btn" @click="open(false)">打开弹出框</button>
      <button class="h-btn" @click="open(true)">打开有分割线的弹出框</button>
  </div>
</template>

<script>
import modalTest from './modalTest';

export default {
  methods: {
    open(hasDivider = false) {
      let that = this;
      this.$Modal({
        hasDivider,
        // width: 200,
        hasMask: false,
        component: {
          // 这里也可以定义异步调用
          // vue: (resolve) => {
          //   require(['./modalTest'], resolve);
          // },
          vue: modalTest,
          data: { a: 1 }
        },
        events: {
          fromchild:(modal, data)=>{
            this.$Message(data);
          }
        }
      });
    }
  }
}
</script>