<template>
  <div>
    <Button @click="openSelfDefine()">自定义弹框</Button>
    <Button @click="open('right')">右侧弹框(系统自带)</Button>
    <Button @click="open('left')">左侧弹框(系统自带)</Button>
  </div>
</template>

<script>
import ModalTest from './modalTest';

export default {
  components: {
    ModalTest
  },
  data() {
    return {
    }
  },
  methods: {
    openSelfDefine() {
      this.$Modal({
        transparent: true, // 背景透明
        content: `<img src='/static/images/demo.png' width='300'/>`,
        buttons: []
      })
    },
    open(place) {
      let that = this;
      this.$Modal({
        type: `drawer-${place}`,
        width: 400,
        component: {
          vue: ModalTest,
          data: { a: 'test1' }, // 子组件使用props params参数获取数据，建议使用datas
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