<template>
  <div>
    <button class="h-btn" @click="opened = true">Open popup</button>
    <ModalComponent :component="test" :props-data="{a:1}" v-model="opened" @fromchild="trigger"></ModalComponent>
  </div>
</template>

<script>
import test from './modalTest';

export default {
  data() {
    return {
      opened: false,
      test // Define a reference here
    };
  },
  methods: {
    trigger(data) {
      this.$Message.success(data);
    }
  }
};
</script>
