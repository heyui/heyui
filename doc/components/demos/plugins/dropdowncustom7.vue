<style lang="less" scoped>
  .dropdowncustom7-demo{
    height: 100px;
    width: 400px;
    border: 1px solid @gray2-color;
  }
</style>

<template>
  <DropdownCustom ref="dropdown" trigger="contextMenu" :toggleIcon="false">
    <div class="dropdowncustom7-demo">右键点击区域内</div>
    <div slot="content" v-padding="50">
      内容
    </div>
  </DropdownCustom>
</template>
<script>
export default {
  data() {
    return {
    };
  }
};
</script>
