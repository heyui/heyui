<template>
  <div :class="noticeCls">
    <div class="h-notify-mask" v-if="hasMask" @click="setvalue(true)"></div>
    <div :class="containerCls">
      <span class="h-notify-close h-icon-close" @click="setvalue(false)"></span>
      <component :is="nowComponent" :class="contentCls" :param="propsData" @close="close"></component>
    </div>
  </div>
</template>
<script>
import config from '../../utils/config';

const prefix = 'h-modal';
const notifyprefix = 'h-notify';

export default {
  props: {
    hasCloseIcon: {
      type: Boolean,
      default: true
    },
    hasMask: {
      type: Boolean,
      default: true
    },
    hasDivider: {
      type: Boolean,
      default: config.modal.hasDivider
    },
    closeOnMask: {
      type: Boolean,
      default: true
    },
    middle: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean,
      default: false
    },
    component: Object,
    propsData: Object
  },
  watch: {
    value() {
      if (this.value) {
        this.$el.style.display = 'block';
        this.nowComponent = this.$options.propsData.component;
        setTimeout(() => {
          this.isOpened = this.value
        }, 100);
      } else {
        this.isOpened = this.value;
        setTimeout(() => {
          this.$el.style.display = 'none';
          this.nowComponent = "";
        }, 200);
      }
    }
  },
  data() {
    return {
      nowComponent: '',
      isOpened: this.value
    };
  },
  mounted() {
    this.$nextTick(() => {
      document.body.appendChild(this.$el);
      if (!this.value) {
        this.$el.style.display = 'none';
      }
    })
  },
  methods: {
    close() {
      this.isOpened = false;
      setTimeout(() => {
        this.$el.style.display = 'none';
        this.nowComponent = "";
      }, 200);
      this.$emit('input', false);
    },
    setvalue(fromMask) {
      if (!fromMask || (fromMask && this.hasMask && this.closeOnMask)) {
        this.$emit('input', !this.value);
      }
    },
  },
  computed: {
    contentCls() {
      return {
        [`${notifyprefix}-content`]: true,
        [`${notifyprefix}-content-component`]: true,
      }
    },
    containerCls() {
      return {
        [`${notifyprefix}-container`]: true,
        [`${notifyprefix}-container-center`]: !!this.middle,
      }
    },
    noticeCls() {
      return {
        [prefix]: true,
        [notifyprefix]: true,
        [`${notifyprefix}-show`]: this.isOpened,
        [`${notifyprefix}-has-close`]: this.hasCloseIcon,
        [`${notifyprefix}-has-divider`]: this.hasDivider
      }
    }
  }
};
</script>
