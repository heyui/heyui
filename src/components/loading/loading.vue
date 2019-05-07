<template>
  <div :class="loadingCls">
    <div :class="circularCls">
      <svg viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="20" fill="none" class="circle"></circle>
      </svg>
      <p :class="textCls" v-if="text">{{text}}</p>
    </div>
  </div>
</template>
<script>
import utils from 'heyui/src/utils/utils';

const prefix = 'h-loading';
export default {
  name: 'hLoading',
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
  unbind() {

  },
  mounted() {
    this.initStyle();
  },
  beforeDestroyed() {
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
  },
  watch: {
    loading() {
      this.initStyle();
    }
  },
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
  }
};
</script>
