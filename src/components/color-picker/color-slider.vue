<template>
  <div class="h-color-slider">
    <div class="h-color-slider-container" :style="containerStyle">
      <div class="h-color-slider-bg-white"></div>
      <div class="h-color-slider-bg-black"></div>
      <div class="h-color-slider-node" :style="{ left: `${modelValue.saturation}%`, top: `${modelValue.value}%` }"></div>
    </div>
  </div>
</template>
<script>
import Draggable from 'heyui/plugins/draggable';
import { genHex } from './utils/color-base';

export default {
  name: 'HColorSlider',
  emits: ['input', 'update:modelValue'],
  props: {
    modelValue: {
      type: Object,
      default: () => ({
        saturation: 0,
        value: 0
      })
    },
    hue: Number
  },
  data() {
    return {};
  },
  computed: {
    containerStyle() {
      let color = genHex(this.hue, 100, 100);
      return {
        background: color
      };
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.draggable = new Draggable(this.$el.querySelector('.h-color-slider-node'), {
        start: this.setvalue,
        drag: this.setvalue,
        container: this.$el.querySelector('.h-color-slider-container')
      });
    });
  },
  beforeUnmount() {
    if (this.dropdown) {
      this.dropdown.destory();
    }
  },
  methods: {
    setvalue(event) {
      let containerPosition = this.$el.querySelector('.h-color-slider-container').getBoundingClientRect();
      let saturation = parseInt(
        (Math.max(0, Math.min(event.clientX - containerPosition.left, containerPosition.width)) * 100) / containerPosition.width
      );
      let value = parseInt((Math.max(0, Math.min(event.clientY - containerPosition.top, containerPosition.height)) * 100) / containerPosition.height);
      this.$emit('input', { saturation, value });
      this.$emit('update:modelValue', { saturation, value });
    }
  }
};
</script>
