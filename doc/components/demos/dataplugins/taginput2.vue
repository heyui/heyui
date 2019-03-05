<template>
  <div>
      <TagInput v-model="value" :readonly="true"></TagInput>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ['测试1', '测试2', '测试3', '测试4']
    };
  }
};
</script>
