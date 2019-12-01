<template>
  <div>
    <p>value: {{value}}</p>
    <p>
      <Button size="s" @click="value = '#252377'" color="primary">更新 / Update</Button>
    </p>
    <p>
      <p><h-switch small v-model="useConfirm">使用确认按钮变更数据 / use confirm update value</h-switch></p>
      <p><h-switch small v-model="disabled">禁用 / Disabled</h-switch></p>
      <p><SwitchList v-model="colorType" :datas="['hex', 'rgb']" small></SwitchList></p>
    </p>
    <ColorPicker v-model="value" :disabled="disabled" :colorType="colorType" :useConfirm="useConfirm"></ColorPicker>
  </div>
</template>
<script>
export default {
  data() {
    return {
      colorType: 'hex',
      disabled: false,
      useConfirm: false,
      value: null
    };
  }
};
</script>
