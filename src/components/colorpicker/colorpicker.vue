<template>
  <div class="h-colorpicker">
    <div class="h-colorpicker-show">
      <div class="h-colorpicker-color-bg"></div>
      <div class="h-colorpicker-color-show"></div>
      <i class="h-icon-down"></i>
    </div>
    <div class="h-colorpicker-group">
      1
    </div>
  </div>
</template>
<script>
import Dropdown from '../../plugins/dropdown';

export default {
  name: 'hColorPicker',
  props: {
    value: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dropdown: null
    };
  },
  watch: {
    disabled() {
      if (this.dropdown) {
        if (this.disabled) {
          this.dropdown.disabled();
        } else {
          this.dropdown.enabled();
        }
      }
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.$nextTick(() => {
        let el = this.el = this.$el.querySelector('.h-colorpicker-show');
        let content = this.content = this.$el.querySelector('.h-colorpicker-group');
        let that = this;
        this.dropdown = new Dropdown(el, {
          content,
          disabled: this.disabled,
          trigger: 'click',
          events: {
            show() {
              that.isShow = true;
            }
          }
        });
      });
    }
  },
  computed: {

  }
};
</script>
