<style lang="less" scoped>
  .dropdowncustom7-demo{
    height: 100px;
    width: 400px;
    border: 1px solid @gray2-color;
  }
</style>

<template>
  <DropdownCustom ref="dropdown" trigger="rightclick" :toggleIcon="false">
    <div class="dropdowncustom7-demo">右键点击区域内</div>
    <div slot="content" v-width="200" v-height="100">
      内容
    </div>
  </DropdownCustom>
</template>
<script>
export default {
  data() {
    return {
    }
  }
}
</script>

