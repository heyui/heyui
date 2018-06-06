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
    }
  },
  unbind() {

  },
  mounted() {
    this.show();
  },
  methods: {
    show() {
      if (this.loading) {
        this.$nextTick(() => {
          let parent = this.$el.parentNode;
          let position = window.getComputedStyle(parent).position;
          if (position === 'static') {
            parent.style.position = 'relative';
            this.isSetStyle = true;
          }
          parent.style.minHeight = '50px';
        });
      } else if (this.isSetStyle) {
        this.$nextTick(() => {
          let parent = this.$el.parentNode;
          parent.style.minHeight = '';
          parent.style.position = '';
        });
      }
    }
  },
  watch: {
    loading() {
      this.show();
    }
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
