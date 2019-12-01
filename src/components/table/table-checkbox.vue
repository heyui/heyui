<template>
  <Checkbox
    :indeterminate="checks.length>0&&checks.length<checkableDatas.length"
    :checked="checkableDatas.length > 0 && checks.length == checkableDatas.length"
    @click.native="checkAll"
  ></Checkbox>
</template>
<script>
import Checkbox from 'heyui/src/components/checkbox';

export default {
  components: { Checkbox },
  props: {
    checks: {
      type: Array,
      default: () => []
    },
    checkableDatas: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  methods: {
    checkAll() {
      this.$emit('checkAll');
    }
  },
  computed: {}
};
</script>
