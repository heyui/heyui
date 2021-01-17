<template>
  <div>
    <p>{{value | dictMapping('simple')}}</p>
    <p>
      <button class="h-btn" @click="open(false)">Js opens the popup</button>
      <button class="h-btn" @click="openModal = true">Vue opens the popup</button>
      <Modal v-model="openModal">
        <ModalTest :fruit="value" :params="{subparam: 'test1'}" @close="openModal=false" @success="success"></ModalTest>
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
    };
  },
  methods: {
    success(data) {
      this.value = data;
    },
    open() {
      this.$Modal({
        component: {
          // Here you can also define asynchronous calls.
          // vue: (resolve) => {
          //   require(['./modalTest'], resolve);
          // },
          vue: ModalTest,
          data: { subparam: 'test1' }, // The subcomponent uses the props params parameter to get the data. It is recommended to use datas.
          datas: { fruit: this.value } // Subcomponents can be used directly using props, compatibility 1.15.0+
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
