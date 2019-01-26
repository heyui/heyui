<template>
  <Modal :value="value" @input="updateValue" className="h-image-preview-modal">
    <div class="h-image-preview" :style="previewStyle">
      <span class="h-image-preview-index"> {{showIndex + 1}} / {{datas.length}} </span>
      <span v-if="showIndex != 0" class="h-image-preview-icon h-image-preview-left-icon" @click="change(showIndex - 1)"><i class="h-icon-left"></i></span>
      <transition name="fade">
        <img :src="previewFile.url" v-show="!changeing" ref="img" @load="initStyle" class="h-image-preview-image" :alt="previewFile.name"/>
      </transition>
      <slot :data="previewFile" name="item" :index="index"></slot>
      <span v-if="showIndex != datas.length - 1" class="h-image-preview-icon h-image-preview-right-icon" @click="change(showIndex + 1)"><i class="h-icon-right"></i></span>
      <Loading :loading="changeing"></Loading>
    </div>
  </Modal>
</template>
<script>

import utils from '../../utils/utils';
import Modal from '../modal/modal';
import Loading from '../loading/loading';

export default {
  name: 'hImagePreview',
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
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      height: 0,
      width: 0,
      showIndex: this.index,
      changeing: false
    }
  },
  watch: {
    value() {
      if (this.value) {
        this.width = 0;
        this.height = 0;
        this.change(this.index);
      } else {
        this.changeing = false;
      }
    }
  },
  methods: {
    initStyle(e) {
      let width = this.$refs.img.width;
      let height = this.$refs.img.height;
      if (width > 800 || height > 800) {
        let percent = Math.max(width, height) / 800;
        width = width / percent;
        height = height / percent;
      }
      this.width = width;
      this.height = height;
      setTimeout(() => {
        this.changeing = false;
      }, 300);
    },
    updateValue(value) {
      this.$emit('input', value);
    },
    change(index) {
      if (index < 0 || index > this.datas.length - 1) {
        return false;
      }
      this.changeing = true;
      setTimeout(() => {
        this.showIndex = index;
      }, 300);
    },
  },
  computed: {
    previewStyle() {
      return {
        height: `${this.height}px`,
        width: `${this.width}px`,
      }
    },
    previewFile() {
      if (this.datas.length == 0 || this.value === false) {
        return {};
      }
      let data = this.datas[this.showIndex];
      this.$nextTick(() => {
        if(this.$refs.img && this.$refs.img.complete) {
          setTimeout(() => {
            this.changeing = false;
          }, 300);
        }
      })
      return utils.isString(data) ? {url: data} : data;
    },
  },
  components: {
    Modal,
    Loading
  }
};
</script>
