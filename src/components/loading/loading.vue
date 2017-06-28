<template>
  <div :class="loadingCls">
    <div :class="circularCls">
      <svg viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="20" fill="none" class="circle"></circle>
      </svg>
      <p :class="textCls" v-if="text">{{text}}</p></div>
    </div>
  </div>
</template>
<script>
const prefix = 'h-loading';
export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    text: String
  },
  unbind() {

  },
  mounted() {
    this.$nextTick(() => {
      let parent = this.$el.parentNode;
      let position = window.getComputedStyle(parent).position;
      if (position === 'static') {
        parent.style.position = 'relative';
      }
      parent.style.minHeight = '60px';
    });
  },
  computed: {
    circularCls() {
      return {
        [`${prefix}-circular`]: true,
      };
    },
    textCls() {
      return {
        [`${prefix}-text`]: true,
      };
    },
    loadingCls() {
      return {
        [`${prefix}`]: true,
        [`${prefix}-loading`]: this.loading
      };
    }
  }
};
</script>
