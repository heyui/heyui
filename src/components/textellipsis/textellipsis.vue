<template>
  <div>
    <span name="before"></span>
    <span>{{text}}</span>
    <span name="more" v-if="oversize"></span>
    <span name="after"></span>
  </div>
</template>
<script>
import utils from '../../utils/utils';

export default {
  name: 'hTextellipsis',
  props: {
    text: String,
    height: Number
  },
  data() {
    return {
      oversize: false
    };
  },
  methods: {
    
  },
  computed: {
  }
};
</script>