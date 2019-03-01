<template>
  <Modal :value="value" @input="updateValue" className="h-image-preview-modal">
    <Preview :isShow="value" :datas="datas" :index="index"></Preview>
  </Modal>
</template>
<script>

import Modal from '../modal/modal';
import Preview from './preview.vue';

export default {
  name: 'hImagePreviewModal',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    datas: {
      type: [Array],
      default: () => ([])
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
    };
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value);
    }
  },
  components: {
    Modal,
    Preview
  }
};
</script>
