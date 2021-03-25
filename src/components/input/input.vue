<template>
  <input class="h-input" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
</template>
<script>
export default {
  name: 'hInput',
  props: {
    modelValue: String
  }
};
</script>
