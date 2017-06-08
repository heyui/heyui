<template>
  <div :class="sliderCls">
    
  </div>
</template>
<script>
import utils from '../../utils/utils';

const prefix = 'h-slider';

export default {
  props: {
    readonly: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
    };
  },
  watch: {
  },
  beforeMount() {
  },
  mounted() {
  },
  methods: {
    
  },
  filters: {
    
  },
  computed: {
    sliderCls() {
      return {
        [`${prefix}`]: true
      }
    }
  }
};
</script>