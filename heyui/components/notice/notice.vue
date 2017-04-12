<template>
  <div class="h-rate" :readonly="readonly" @mouseleave="mouseleave()"><span  v-for="n in 5" @click="setvalue(n)" @mouseover="mouseover(n)"><i :class="starCls(n)"></i></span><span v-if="showText" class="h-rate-value">{{value}}</span></div>
</template>
<script>
export default {
  props: {
    readonly: {
      type: Boolean,
      default: false
    },
    showText: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number],
      default: 0
    }
  },
  data() {
    return {
      mouseValue: false
    };
  },
  methods: {
    setvalue(value) {
      if (this.readonly) return;
      this.$emit('input', value);
      let event = document.createEvent("CustomEvent");
      event.initCustomEvent("setvalue", true, true, this.value);
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
      let v = this.mouseValue || Number(this.value);
      return {
        'h-icon-star-on': v >= n,
        'h-icon-star': v < n,
      }
    }
  },
  filters: {
    isInclude(key, value) {
      return value.includes(key);
    }
  },
  computed: {
  }
};
</script>
