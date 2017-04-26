<template>
  <div class="doc">
    <h2>TagInput 标签输入</h2>
    <h3>基本</h3>
    <TagInput v-model="value1"></TagInput>
  
    <h3>只读</h3>
    <TagInput v-model="value2" :readonly="true"></TagInput>
  
  </div>
</template>

<script>

export default {
  data() {
    return {
      value1: [],
      value2: ['测试1', '测试2', '测试3', '测试4']
    }
  }
}
</script>
