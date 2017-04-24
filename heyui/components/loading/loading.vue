<template>
  <div :class="loadingCls">
    <div :class="circularCls">
      <svg viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="20" fill="none" class="circle"></circle>
      </svg>
      <p :class="textCls">{{text}}</p></div>
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
      if (this.$el.parentNode.style.position == '') {
        this.$el.parentNode.style.position = 'relative';
        this.$el.parentNode.style.minHeight = '60px';
      }
    });
  },
  computed: {
    hasText() {
      let slot = this.$slots.default;
      if (slot && slot.length > 0) {
        return !!slot[0].text
      }
      return false;
    },
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
