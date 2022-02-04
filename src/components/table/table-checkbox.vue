<template>
  <div class="h-table-checkbox-wrap">
    <Checkbox
      :indeterminate="checks.length > 0 && checks.length < checkableDatas.length"
      :checked="checkableDatas.length > 0 && checks.length == checkableDatas.length"
      @click="checkAll"
    />
  </div>
</template>
<script>
import Checkbox from 'heyui/components/checkbox';

export default {
  components: { Checkbox },
  emits: ['checkAll'],
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
  computed: {},
  methods: {
    checkAll() {
      this.$emit('checkAll');
    }
  }
};
</script>
