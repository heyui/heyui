<style lang="less">
.custom-dropdown-11 {
  color: red;
  &-dropdown-container .h-dropdown-inner {
    .h-dropdowncustom-group{
      background: red;
      color: #FFF;
      border-radius: 10px;
    }
  }
}
</style>

<template>
  <div>
    <DropdownMenu :datas="param" className="custom-dropdown-11">
      <span>自定义样式</span>
    </DropdownMenu>
  </div>
</template>
<script>

export default {
  data() {
    return {
      param: ['测试1', '测试2', '测试3']
    };
  }
};
</script>
