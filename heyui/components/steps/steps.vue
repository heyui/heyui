<template>
  <div :class="stepsCls">
    
  </div>
</template>
<script>

const prefix = 'h-steps';

export default {
  props: {
    trigger: {
      type: String,  //click,hover
      default: "hover"
    },
    content: String,
    placement: {
      type: String,
      default: 'top'
    },
    className: {
      type: String,
      default: 'h-tooltip-default'
    },
    theme: String
  },
  mounted() {
    this.$nextTick(() => {
      let el = this.$el;
      let content = this.$el.querySelector('.h-tooltip-inner-content');
      this.tooltip = new Tooltip(el, {
        content,
        theme: this.theme,
        html: true,
        trigger: this.trigger,
        container: document.body,
        placement: this.placement
      });
    });
  },
  methods: {
    close() {
      if (this.tooltip) {
        this.tooltip.hide();
      }
    }
  },
  computed: {
    stepsCls() {
      return {
        [`${prefix}`]: true
      }
    },
    showCls() {
      return {
        [`${prefix}-show`]: true,
        [this.className]: true
      }
    },
    groupCls() {
      return {
        [`${prefix}`]: true
      }
    }
  }
};
</script>