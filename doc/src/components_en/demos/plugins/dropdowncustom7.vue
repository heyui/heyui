<style lang="less" scoped>
.dropdowncustom7-demo {
  height: 100px;
  width: 400px;
  border: 1px solid @gray2-color;
}
</style>

<template>
  <DropdownCustom ref="dropdown" trigger="contextMenu" :toggleIcon="false">
    <div class="dropdowncustom7-demo">Right click inside the area</div>
    <div slot="content" v-padding="50">
      content
    </div>
  </DropdownCustom>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
