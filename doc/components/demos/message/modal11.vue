<template>
  <div>
    <p>{{value | dictMapping('simple')}}</p>
    <p>
      <button class="h-btn" @click="open(false)">Js打开弹出框</button>
      <button class="h-btn" @click="openModal = true">Vue打开弹出框</button>
      <Modal v-model="openModal">
        <ModalTest :param2="value" :params="{a: 'test1'}" @close="openModal=false" @event="event"></ModalTest>
      </Modal>
    </p>
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
      value: null,
      openModal: false
    }
  },
  methods: {
    event(type, data) {
      this.value = data;
    },
    open() {
      let that = this;
      this.$Modal({
        component: {
          // 这里也可以定义异步调用
          // vue: (resolve) => {
          //   require(['./modalTest'], resolve);
          // },
          vue: ModalTest,
          data: { a: 'test1' }, // 子组件使用props params参数获取数据，建议使用datas
          datas: { param2: this.value } // 子组件直接使用 props 即可使用，兼容性 1.15.0+
        },
        events: {
          update: (modal, data)=>{
            this.value = data;
          }
        }
      });
    }
  }
}
</script>