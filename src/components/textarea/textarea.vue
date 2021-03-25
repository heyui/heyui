<template>
  <textarea class="h-textarea" v-bind="$attrs" @input="$emit('update:modelValue', $event.target.value)" :value="modelValue"></textarea>
</template>
<script>
export default {
  name: 'hTextarea',
  props: {
    modelValue: String
  },
  data() {
    return {};
  },
  methods: {},
  computed: {}
};
</script>
