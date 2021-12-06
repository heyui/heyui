<template>
  <slot v-bind="$attrs"></slot>
  <!-- eslint-disable -->
  <teleport to="body">
    <div class="h-tooltip-inner-content" ref="content">{{ content }}<slot name="content"></slot></div>
  </teleport>
</template>
<script>
import Tooltip from 'heyui/plugins/tooltip';

const prefix = 'h-tooltip';

export default {
  name: 'HTooltip',
  emits: ['show', 'hide'],
  props: {
    trigger: {
      type: String, // click,hover
      default: 'hover'
    },
    content: [String, Number],
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
        let el = this.$el.nextElementSibling;
        let content = this.$refs.content;
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
  }
};
</script>
