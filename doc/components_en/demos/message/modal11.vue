<template>
  <div>
    <p>{{value | dictMapping('simple')}}</p>
    <p>
      <button class="h-btn" @click="open(false)">Js opens the popup</button>
      <button class="h-btn" @click="openModal = true">Vue opens the popup</button>
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
    };
  },
  methods: {
    event(type, data) {
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
          data: { a: 'test1' }, // The subcomponent uses the props params parameter to get the data. It is recommended to use datas.
          datas: { param2: this.value } // Subcomponents can be used directly using props, compatibility 1.15.0+
        },
        events: {
          update: (modal, data) => {
            this.value = data;
          }
        }
      });
    }
  }
};
</script>
