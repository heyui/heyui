<template>
  <div class="h-colorpicker" :class="{ 'h-colorpicker-disabled': disabled }">
    <div class="h-colorpicker-show">
      <div class="h-colorpicker-color-bg"></div>
      <div class="h-colorpicker-color-show" :style="bgColorStyle"></div>
      <i class="h-icon-down"></i>
    </div>
    <div class="h-colorpicker-group">
      <div class="h-colorpicker-panel-picker">
        <ColorSlider v-model="colorValue" :hue="color.hue" @update:modelValue="updateColor"></ColorSlider>
      </div>
      <Slider v-model="color.hue" class="h-colorpicker-hue-picker" :range="{ start: 0, end: 360 }" :showtip="false" @change="calculate"></Slider>
      <Slider
        v-if="enableAlpha"
        v-model="color.alpha"
        :track-style="alphaTrackStyle"
        class="h-colorpicker-alpha-picker"
        :showtip="false"
        @change="calculate"
      ></Slider>
      <div v-if="colors.length" class="h-colorpicker-colors">
        <span
          v-for="color of colors"
          :key="color"
          class="h-colorpicker-color"
          :class="{ 'h-colorpicker-color-choosed': modelValue == color }"
          :style="{ background: color }"
          @click="chooseColor(color)"
        ></span>
      </div>
      <div class="h-colorpicker-panel-footer">
        <input v-model="color.string" type="text" class="h-input h-colorpicker-panel-input" @blur="updateString" @keydown.enter="updateString" />
        <div class="h-colorpicker-panel-buttons">
          <button type="button" class="h-btn h-btn-s h-btn-text h-colorpicker-clear-button" @click="clear">{{ hlang('h.common.clear') }}</button>
          <button type="button" class="h-btn h-btn-s h-btn-primary" @click="confirm">{{ hlang('h.common.confirm') }}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Dropdown from 'heyui/plugins/dropdown';
import Color from './utils/color';
import ColorSlider from './color-slider';

export default {
  name: 'HColorPicker',
  components: {
    ColorSlider
  },
  emits: ['input', 'change', 'update:modelValue'],
  props: {
    modelValue: String,
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
      string: this.modelValue
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
  computed: {
    alphaTrackStyle() {
      if (this.modelValue || this.changed) {
        return {
          background: `linear-gradient(to right, rgba(255, 255, 255, 0) 0%, ${this.color.getHex()} 100%)`
        };
      }
      return {};
    },
    bgColorStyle() {
      if (this.modelValue || this.changed) {
        return { background: this.color.toString() };
      }
      return {};
    }
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
    modelValue() {
      if (this.color.string != this.modelValue) {
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
  beforeUnmount() {
    if (this.dropdown) {
      this.dropdown.destory();
    }
  },
  methods: {
    init() {
      this.$nextTick(() => {
        let el = (this.el = this.$el.querySelector('.h-colorpicker-show'));
        let content = (this.content = this.$el.querySelector('.h-colorpicker-group'));
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
      this.color.parse(this.modelValue);
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
      this.$emit('update:modelValue', value);
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
  }
};
</script>
