<template>
  <div>
      <TagInput v-model="value" :limit="10"></TagInput>
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