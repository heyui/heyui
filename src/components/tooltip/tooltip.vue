<template>
  <div :class="showCls">
    <slot></slot>
    <div class="h-tooltip-inner-content">{{content}}<slot name='content'></slot></div>
  </div>
</template>
<script>
import Tooltip from 'heyui/src/plugins/tooltip';

const prefix = 'h-tooltip';

export default {
  name: 'hTooltip',
  props: {
    trigger: {
      type: String, // click,hover
      default: 'hover'
    },
    content: String,
    placement: {
      type: String,
      default: 'top'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    editable: {
      type: Boolean,
      default: false
    },
    className: {
      type: String
    },
    theme: String,
    delay: {
      type: Number,
      default: 0
    },
    maxWidth: Number
  },
  mounted() {
    this.init();
  },
  methods: {
    show() {
      if (this.tooltip) {
        this.tooltip.show();
      }
    },
    hide() {
      if (this.tooltip) {
        this.tooltip.hide();
      }
    },
    update() {
      if (this.tooltip) {
        this.tooltip.update();
      }
    },
    init() {
      this.$nextTick(() => {
        let el = this.$el;
        let content = this.$el.querySelector('.h-tooltip-inner-content');
        this.tooltip = new Tooltip(el, {
          content,
          theme: this.theme,
          html: true,
          trigger: this.trigger,
          editable: this.editable,
          className: this.className,
          container: document.body,
          placement: this.placement,
          disabled: this.disabled,
          maxWidth: this.maxWidth,
          delay: this.delay,
          events: {
            show: () => {
              this.$emit('show');
            },
            hide: () => {
              this.$emit('hide');
            }
          }
        });
      });
    }
  },
  watch: {
    disabled() {
      if (!this.tooltip) return;
      if (!this.disabled) {
        this.tooltip.enabled();
      } else {
        this.tooltip.disabled();
      }
    },
    content() {
      if (!this.tooltip) return;
      this.tooltip.update();
    }
  },
  computed: {
    tooltipCls() {
      return {
        [`${prefix}`]: true
      };
    },
    showCls() {
      return {
        [`${prefix}-show`]: true
      };
    },
    groupCls() {
      return {
        [`${prefix}`]: true
      };
    }
  }
};
</script>
