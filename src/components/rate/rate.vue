<template>
  <div :class="{ 'h-rate': true, 'h-rate-readonly': readonly }" @mouseleave="mouseleave()">
    <span v-for="n in 5" :key="n" :class="starCls(n)" @click="setvalue(n)" @mouseover="mouseover(n)"><i :class="iconClass"></i></span
    ><span v-if="showText" class="h-rate-value">{{ modelValue }}</span>
  </div>
</template>
<script>
export default {
  name: 'HRate',
  emits: ['input', 'change', 'update:modelValue'],
  props: {
    readonly: {
      type: Boolean,
      default: false
    },
    showText: {
      type: Boolean,
      default: false
    },
    iconClass: {
      type: String,
      default: 'h-icon-star-on'
    },
    modelValue: {
      type: [String, Number],
      default: 0
    }
  },
  data() {
    return {
      mouseValue: false
    };
  },
  computed: {},
  methods: {
    setvalue(value) {
      if (this.readonly) return;
      this.$emit('input', value);
      this.$emit('update:modelValue', value);
      this.$emit('change', value);
      let event = document.createEvent('CustomEvent');
      event.initCustomEvent('setvalue', true, true, this.modelValue);
      this.$el.dispatchEvent(event);
    },
    mouseover(n) {
      if (this.readonly) return;
      this.mouseValue = n;
    },
    mouseleave() {
      if (this.readonly) return;
      this.mouseValue = false;
    },
    starCls(n) {
      let v = this.mouseValue || Number(this.modelValue);
      return {
        'h-rate-star': true,
        'h-rate-star-on': v >= n,
        'h-rate-star-off': v < n
      };
    }
  }
};
</script>
