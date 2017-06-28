<template>
  <div>
      <TagInput v-model="value"></TagInput>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ['测试']
    }
  }
}
</script>