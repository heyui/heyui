<template>
  <div>
    <p>{{value | dictMapping('simple')}}</p>
    <p>
      <Button @click="openSelfDefine()">No background color frame</Button>
      <Button @click="open('right')">Right side of the bullet box (system comes with)</Button>
      <Button @click="open('left')">Left side frame (system comes with)</Button>
    </p>
  </div>
</template>

<script>
import ModalTest from './modalTest';

export default {
  components: {
  },
  data() {
    return {
      value: null
    };
  },
  methods: {
    openSelfDefine() {
      this.$Modal({
        transparent: true, // Transparent background
        content: `<img src='/static/images/demo.png' width='300'/>`,
        buttons: []
      });
    },
    open(place) {
      this.$Modal({
        type: `drawer-${place}`,
        width: 400,
        component: {
          vue: ModalTest,
          data: { subparam: 'test1' }, // 子组件使用props params参数获取数据，建议使用datas
          datas: { fruit: this.value } // 子组件直接使用 props 即可使用，兼容性 1.15.0+
        },
        events: {
          success: (modal, data) => {
            this.value = data;
          }
        }
      });
    }
  }
};
</script>
