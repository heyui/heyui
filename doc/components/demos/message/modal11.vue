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
        component: {
          // 这里也可以定义异步调用
          // vue: (resolve) => {
          //   require(['./modalTest'], resolve);
          // },
          vue: modalTest,
          data: { a: 'test1' }, // 子组件使用props params参数获取数据
          datas: { param2: 'test2' } // 子组件直接使用 props 即可使用，兼容性 1.5.0+
        },
        events: {
          fromchildevent:(modal, data)=>{
            this.$Message(data);
          }
        }
      });
    }
  }
}
</script>