<template>
  <div class="h-colorpicker" :class="{'h-colorpicker-disabled': disabled}">
    <div class="h-colorpicker-show">
      <div class="h-colorpicker-color-bg"></div>
      <div class="h-colorpicker-color-show" :style="bgColorStyle"></div>
      <i class="h-icon-down"></i>
    </div>
    <div class="h-colorpicker-group">
      <div class="h-colorpicker-panel-picker" >
        <ColorSlider v-model="colorValue" :hue="color.hue" @input="updateColor"></ColorSlider>
      </div>
      <Slider class="h-colorpicker-hue-picker" @change="calculate" :range="{start: 0, end: 360}" :showtip="false" v-model="color.hue"></Slider>
      <Slider :trackStyle="alphaTrackStyle" @change="calculate" class="h-colorpicker-alpha-picker" v-model="color.alpha" v-if="enableAlpha" :showtip="false"></Slider>
      <div class="h-colorpicker-colors" v-if="colors.length">
        <span class="h-colorpicker-color" v-for="color of colors" :key="color" :class="{'h-colorpicker-color-choosed': value == color}" @click="chooseColor(color)" :style="{ background: color }"></span>
      </div>
      <div class="h-colorpicker-panel-footer">
        <input type="text" class="h-colorpicker-panel-input" v-model="color.string" @blur="updateString" @keydown.enter="updateString"/>
        <div class="h-colorpicker-panel-buttons">
          <button type="button" class="h-btn h-btn-s h-btn-text h-colorpicker-clear-button" @click="clear">清空</button>
          <button type="button" class="h-btn h-btn-s h-btn-primary" @click="confirm">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Dropdown from 'heyui/src/plugins/dropdown';
import Color from './utils/color';
import ColorSlider from './color-slider';

export default {
  name: 'hColorPicker',
  components: {
    ColorSlider
  },
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
    },
    useConfirm: {
      type: Boolean,
      default: false
    },
    colors: {
      type: Array,
      default: () => []
    }
  },
  data() {
    const color = new Color({
      enableAlpha: this.enableAlpha,
      format: this.colorType,
      string: this.value
    });
    return {
      color,
      colorValue: {
        saturation: color.saturation,
        value: 100 - color.value
      },
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
    value() {
      if (this.color.string != this.value) {
        this.reset();
      }
    },
    colorType() {
      this.color.set('format', this.colorType);
    }
  },
  mounted() {
    this.init();
    this.reset();
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
        this.dropdown = new Dropdown(el, {
          content,
          disabled: this.disabled,
          trigger: 'click',
          events: {
            hide: () => {
              if (this.useConfirm) {
                this.reset();
              }
            }
          }
        });
      });
    },
    reset() {
      this.changed = false;
      this.color.parse(this.value);
      this.initColorValue();
    },
    initColorValue() {
      this.colorValue = {
        saturation: this.color.saturation,
        value: 100 - this.color.value
      };
    },
    updateString() {
      this.color.parse(this.color.string);
    },
    calculate() {
      this.color.calculate();
      this.changed = true;
      if (!this.useConfirm) {
        this.setvalue(this.color.toString());
      }
    },
    setvalue(value, { closeDropDown = false } = {}) {
      this.$emit('input', value);
      this.$emit('change', value);
      this.changed = false;
      let event = document.createEvent('CustomEvent');
      event.initCustomEvent('setvalue', true, true, value);
      this.$el.dispatchEvent(event);
      if (this.dropdown && (this.useConfirm || closeDropDown)) {
        this.dropdown.hide();
      }
    },
    confirm() {
      this.setvalue(this.color.toString());
      if (this.dropdown) {
        this.dropdown.hide();
      }
    },
    clear() {
      this.color.clear();
      this.setvalue(null, { closeDropDown: true });
    },
    updateColor() {
      this.color.set('saturation', this.colorValue.saturation);
      this.color.set('value', 100 - this.colorValue.value);
      this.calculate();
    },
    chooseColor(color) {
      this.setvalue(color);
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
