<template>
  <div :class="dropdowncustomCls">
    <div :class="showCls">
      <div class="h-dropdowncustom-show-content"><slot></slot></div>
      <i v-if="toggleIcon" class="h-icon-down"></i>
    </div>
    <div :class="groupCls">
      <slot v-if="isShow" name="content"></slot>
    </div>
  </div>
</template>
<script>
import Dropdown from 'heyui/plugins/dropdown';

const prefix = 'h-dropdowncustom';

export default {
  name: 'HDropdownCustom',
  emits: ['show', 'hide'],
  props: {
    trigger: {
      type: String, // click,hover
      default: 'click'
    },
    equalWidth: {
      type: Boolean,
      default: false
    },
    toggleIcon: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placement: {
      type: String
    },
    delay: {
      type: Number,
      default: 0
    },
    className: {
      type: String,
      default: 'h-dropdownmenu-default'
    },
    offset: [String, Number],
    showClass: {
      type: Object,
      default: () => {}
    },
    button: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isShow: false,
      dropdown: null,
      el: null
    };
  },
  computed: {
    dropdowncustomCls() {
      return {
        [`${prefix}`]: true,
        'h-btn': this.button
      };
    },
    showCls() {
      return {
        [`${prefix}-show`]: true,
        [`${prefix}-disabled`]: !!this.disabled,
        [`${prefix}-show-toggle`]: !!this.toggleIcon,
        [this.className]: !!this.className,
        'h-dropdowncustom-empty': !this.$slots.default,
        ...this.showClass
      };
    },
    groupCls() {
      return {
        [`${prefix}-group`]: true
      };
    }
  },
  watch: {
    disabled() {
      if (this.disabled) {
        this.dropdown.disabled();
      } else {
        this.dropdown.enabled();
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      let el = (this.el = this.$el.querySelector('.h-dropdowncustom-show'));
      let content = this.$el.querySelector('.h-dropdowncustom-group');
      let that = this;
      this.dropdown = new Dropdown(el, {
        content,
        className: `${this.className}-dropdown-container`,
        offset: this.offset,
        trigger: this.trigger,
        equalWidth: this.equalWidth,
        placement: this.placement,
        disabled: this.disabled,
        delay: this.delay,
        events: {
          show(event) {
            that.isShow = true;
            that.$emit('show', event);
          },
          hide: () => {
            that.$emit('hide');
          }
        }
      });
    });
  },
  beforeUnmount() {
    let el = this.el;
    if (el) {
      el.style.display = 'none';
      this.$el.appendChild(el);
    }
    if (this.dropdown) {
      this.dropdown.destory();
    }
  },
  methods: {
    update() {
      this.dropdown.update();
    },
    hide() {
      this.dropdown.hide();
    },
    show() {
      this.dropdown.show();
    }
  }
};
</script>
