<template>
  <div>
    <div class="bottom-line"><label><input type="checkbox" value="3" :indeterminate="checks.length>0&&checks.length<3" :checked="checks.length==3" @click="checkAll"/>全选</label></div>
    <div class="h-checkbox">
      <label><input type="checkbox" value="1" v-model="checks"/>测试1</label>
      <label><input type="checkbox" value="2" v-model="checks"/>测试2</label>
      <label><input type="checkbox" value="3" v-model="checks"/>测试3</label>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checks: []
    }
  },
  methods: {
    checkAll(){
      if (this.checks.length == 3) {
        this.checks.splice(0, 3);
      } else {
        this.checks = ['1', '2', '3'];
      }
    }
  }
}
</script>