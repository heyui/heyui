<template>
  <div>
    <Checkbox v-model="value">选中的状态：{{value}}</Checkbox>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: false
    }
  }
}
</script>