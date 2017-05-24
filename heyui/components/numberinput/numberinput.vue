<template>
  <div :class="numberinputCls">
  </div>
</template>
<script>
import config from '../../utils/config';
import utils from '../../utils/utils';

const prefix = 'h-numberinput';

export default {
  props: {
  },
  data() {
    return {
    };
  },
  mounted() {
    this.initnumberinputDatas();
  },
  methods: {
  },
  computed: {
    numberinputDataShow() {
    },
    numberinputCls() {
      return {
        [prefix]: true
      }
    }
  }
};
</script>
