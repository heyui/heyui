<template>
  <Modal v-model="openModal" @close="close">
    <div class="h-image-preview" :style="previewStyle">
      <span v-if="isShowIndex" class="h-image-preview-index"> {{ showIndex + 1 }} / {{ computedDatas.length }} </span>
      <span v-if="showIndex != 0" class="h-image-preview-icon h-image-preview-left-icon" @click="change(showIndex - 1)"
        ><i class="h-icon-left"></i
      ></span>
      <transition name="fade">
        <img v-show="!changeing" ref="img" :src="previewFile.url" class="h-image-preview-image" :alt="previewFile.name" @load="initStyle" />
      </transition>
      <slot :data="previewFile" name="item" :index="index"></slot>
      <span v-if="showIndex != computedDatas.length - 1" class="h-image-preview-icon h-image-preview-right-icon" @click="change(showIndex + 1)"
        ><i class="h-icon-right"></i
      ></span>
      <Loading :loading="changeing"></Loading>
    </div>
  </Modal>
</template>
<script>
import utils from 'heyui/utils/utils';
import Loading from 'heyui/components/loading';
import Modal from 'heyui/components/modal';

export default {
  name: 'HImagePreviewModal',
  components: {
    Loading,
    Modal
  },
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      openModal: false,
      datas: [],
      index: 0,
      height: 200,
      width: 200,
      showIndex: -1,
      changeing: false,
      previewFile: {}
    };
  },
  computed: {
    previewStyle() {
      return {
        height: `${this.height}px`,
        width: `${this.width}px`
      };
    },
    computedDatas() {
      if (utils.isString(this.datas)) {
        return [this.datas];
      } else if (utils.isArray(this.datas)) {
        return this.datas;
      }
      return [];
    },
    isShowIndex() {
      return !utils.isString(this.datas);
    }
  },
  watch: {
    openModal() {
      if (this.openModal) {
        this.change(this.index);
      }
    },
    isShow() {
      // if (this.isShow) {
      // } else {
      //   this.changeing = false;
      // }
    }
  },
  mounted() {},
  methods: {
    close() {
      this.previewFile = {};
      this.height = 200;
      this.width = 200;
    },
    initStyle(e) {
      let width = this.$refs.img.width;
      let height = this.$refs.img.height;
      if (width > 800 || height > 12000) {
        let percent = Math.max(width / 800, height / 12000);
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
      if (index < 0 || index > this.computedDatas.length - 1) {
        return false;
      }
      this.changeing = true;
      setTimeout(() => {
        this.showIndex = index;
        this.updatePreview();
      }, 300);
    },
    updatePreview() {
      if (this.computedDatas.length == 0) {
        return;
      }
      let data = this.computedDatas[this.showIndex];
      let previewFile = utils.isString(data) ? { url: data } : data;
      if (previewFile.url === this.previewFile.url) {
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
  }
};
</script>
