<template>
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
</template>
<script>
import utils from 'heyui/utils/utils';
import Loading from 'heyui/components/loading';

export default {
  name: 'HImagePreviewModal',
  components: {
    Loading
  },
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    datas: {
      type: [Array, String],
      default: () => []
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
      if (this.computedDatas.length == 0 || this.isShow === false) {
        return {};
      }
      let data = this.computedDatas[this.showIndex];
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
  }
};
</script>
