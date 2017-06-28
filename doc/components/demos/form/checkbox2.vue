<template>
  <div>
    <div class="h-checkbox" disabled>
      <label><input type="checkbox" disabled value="1" v-model="checks"/>测试1</label>
      <label><input type="checkbox" disabled value="2" v-model="checks"/>测试2</label>
      <label><input type="checkbox" disabled value="3" v-model="checks"/>测试3</label>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checks: []
    }
  }
}
</script>