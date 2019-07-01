<template>
  <div class="h-colorpicker" :class="{'h-colorpicker-disabled': disabled}">
    <div class="h-colorpicker-show">
      <div class="h-colorpicker-color-bg"></div>
      <div class="h-colorpicker-color-show" :style="bgColorStyle"></div>
      <i class="h-icon-down"></i>
    </div>
    <div class="h-colorpicker-group">
      <div class="h-colorpicker-panel-picker" ></div>
      <Slider class="h-colorpicker-hue-picker" :range="{start: 0, end: 360}" :showtip="false" v-model="color.hue"></Slider>
      <Slider :trackStyle="alphaTrackStyle" class="h-colorpicker-alpha-picker" v-model="color.alpha" v-if="enableAlpha" :showtip="false"></Slider>
      <div class="h-colorpicker-panel-footer">
        <input type="text" class="h-colorpicker-panel-input" v-model="color.string" @blur="updateString"/>
        <div class="h-colorpicker-panel-buttons">
          <button type="button" class="h-btn h-btn-s h-btn-text" @click="clear">清空</button>
          <button type="button" class="h-btn h-btn-s h-btn-primary" @click="confirm">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Dropdown from 'heyui/src/plugins/dropdown';
import Color from './utils/color';

export default {
  name: 'hColorPicker',
  props: {
    value: String,
    disabled: {
      type: Boolean,
      default: false
    },
    enableAlpha: {
      type: Boolean,
      default: false
    },
    colorType: {
      type: String,
      default: 'hex'
    }
  },
  data() {
    const color = new Color({
      enableAlpha: this.enableAlpha,
      format: this.colorType
    });
    return {
      color,
      dropdown: null,
      changed: false
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
    },
    value(val) {
      this.color.parse(val);
    },
    'color.hue'() {
      this.color.calculate();
      this.changed = true;
    },
    'color.alpha'() {
      this.color.calculate();
      this.changed = true;
    }
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    if (this.dropdown) {
      this.dropdown.destory();
    }
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
            hide() {
              that.changed = false;
            }
          }
        });
      });
    },
    updateString() {
      this.color.parse(this.color.string);
    },
    setvalue(value) {
      this.$emit('input', value);
      this.$emit('change', value);
      this.changed = false;
      let event = document.createEvent('CustomEvent');
      event.initCustomEvent('setvalue', true, true, value);
      this.$el.dispatchEvent(event);
      if (this.dropdown) {
        this.dropdown.hide();
      }
    },
    confirm() {
      let value = this.color.toString();
      this.setvalue(value);
    },
    clear() {
      this.setvalue();
    }
  },
  computed: {
    alphaTrackStyle() {
      if (this.value || this.changed) {
        return {
          'background': `linear-gradient(to right, rgba(255, 255, 255, 0) 0%, ${this.color.getHex()} 100%)`
        };
      }
      return {};
    },
    bgColorStyle() {
      if (this.value || this.changed) {
        return { 'background': this.color.toString() };
      }
      return {};
    }
  }
};
</script>
