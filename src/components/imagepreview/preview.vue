<template>
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
</template>
<script>

import utils from '../../utils/utils';
import Loading from '../loading/loading';

export default {
  name: 'hImagePreview',
  props: {
    isShow: {
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
      height: 200,
      width: 200,
      showIndex: -1,
      changeing: false,
      previewFile: {}
    };
  },
  watch: {
    isShow() {
      if (this.isShow) {
        this.width = 200;
        this.height = 200;
        this.change(this.index);
      } else {
        this.changeing = false;
      }
    }
  },
  mounted() {
    this.change(this.index);
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
    change(index) {
      if (index < 0 || index > this.datas.length - 1) {
        return false;
      }
      this.changeing = true;
      setTimeout(() => {
        this.showIndex = index;
        this.updatePreview();
      }, 300);
    },
    updatePreview() {
      if (this.datas.length == 0 || this.isShow === false) {
        return {};
      }
      let data = this.datas[this.showIndex];
      let previewFile = utils.isString(data) ? { url: data } : data;
      if (previewFile.url == this.previewFile.url) {
        this.$nextTick(() => {
          if (this.$refs.img && this.$refs.img.complete) {
            setTimeout(() => {
              this.changeing = false;
            }, 300);
          }
        });
      }
      this.previewFile = previewFile;
    }
  },
  computed: {
    previewStyle() {
      return {
        height: `${this.height}px`,
        width: `${this.width}px`
      };
    }
  },
  components: {
    Loading
  }
};
</script>
