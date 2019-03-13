<style lang="less">
.custom-dropdown-en-11 {
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
    <DropdownMenu :datas="param" className="custom-dropdown-en-11">
      <span>custom style</span>
    </DropdownMenu>
  </div>
</template>
<script>

export default {
  data() {
    return {
      param: ['test1', 'test2', 'test3']
    };
  }
};
</script>
