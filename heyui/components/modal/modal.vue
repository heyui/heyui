<template>
  <div :class="noticeCls">
    <div class="h-notify-mask" v-if="hasMask" @click="setvalue(true)"></div>
    <div :class="containerCls">
      <span class="h-notify-close h-icon-close" @click="setvalue(false)"></span>
      <header><slot name='header'></slot></header>
      <div :class="contentCls"><slot></slot></div>
      <footer><slot name='footer'></slot></footer>
    </div>
  </div>
</template>
<script>
import config from '../../utils/config';

const prefix = 'h-modal';
const notifyprefix = 'h-notify';
const hasDivider = config.getOption('modal', 'hasDivider');

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
      default: hasDivider
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
    }
  },
  watch: {
    value() {
      if (this.value) {
        this.$el.style.display = 'block';
        setTimeout(() => {
          this.isOpened = this.value
        }, 100);
      } else {
        this.isOpened = this.value;
        setTimeout(() => {
          this.$el.style.display = 'none';
        }, 200);
      }
    }
  },
  data() {
    return {
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
    setvalue(fromMask) {
      if (!fromMask || (fromMask && this.hasMask && this.closeOnMask)) {
        this.$emit('input', !this.value);
      }
    },
  },
  computed: {
    contentCls() {
      return {
        [`${notifyprefix}-content`]: true
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
