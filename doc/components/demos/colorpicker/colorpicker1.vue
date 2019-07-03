<template>
  <div>
    <p>value: {{value}}</p>
    <p>
      <Button size="s" @click="value = '#252377'" color="primary">更新值 / Update Value</Button>
    </p>
    <p>
      <h-switch small v-model="useConfirm">使用确认按钮变更数据 / use confirm update value</h-switch>
      <h-switch small v-model="disabled">禁用 / Disabled</h-switch>
    </p>
    <ColorPicker v-model="value" :disabled="disabled" :useConfirm="useConfirm"></ColorPicker>
  </div>
</template>
<script>
export default {
  data() {
    return {
      disabled: false,
      useConfirm: false,
      value: null
    };
  }
};
</script>
