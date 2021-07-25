<template>
  <textarea class="h-textarea" v-bind="$attrs" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"></textarea>
</template>
<script>
export default {
  name: 'HTextarea',
  props: {
    modelValue: String
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>
