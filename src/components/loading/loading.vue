<template>
  <div :class="loadingCls">
    <div :class="circularCls">
      <svg viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="20" fill="none" class="circle"></circle>
      </svg>
      <p v-if="text" :class="textCls">{{ text }}</p>
    </div>
  </div>
</template>
<script>
import utils from 'heyui/utils/utils';

const prefix = 'h-loading';
export default {
  name: 'HLoading',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    text: String
  },
  data() {
    return {
      isSetStyle: false
    };
  },
  unbind() {},
  computed: {
    circularCls() {
      return {
        [`${prefix}-circular`]: true
      };
    },
    textCls() {
      return {
        [`${prefix}-text`]: true
      };
    },
    loadingCls() {
      return {
        [`${prefix}`]: true
      };
    }
  },
  watch: {
    loading() {
      this.initStyle();
    }
  },
  mounted() {
    this.initStyle();
  },
  beforeUnmounted() {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
  },
  methods: {
    initStyle() {
      if (this.loading) {
        if (this.timeout) {
          clearTimeout(this.timeout);
          this.timeout = null;
        }
        this.$nextTick(() => {
          utils.addClass(this.$el, 'h-loading-loading');
          utils.addClass(this.$el, 'h-loading-visible');
          let parent = this.$el.parentNode;
          if (parent) {
            utils.addClass(parent, 'h-loading-parent');
          }
        });
      } else {
        utils.removeClass(this.$el, 'h-loading-loading');
        this.timeout = setTimeout(() => {
          utils.removeClass(this.$el, 'h-loading-visible');
          let parent = this.$el.parentNode;
          if (parent) {
            utils.removeClass(parent, 'h-loading-parent');
          }
        }, 500);
      }
    }
  }
};
</script>
