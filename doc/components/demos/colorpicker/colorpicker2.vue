<template>
  <div>
    <p>value: {{value}}</p>
    <p>
      <Button size="s" @click="value = 'rgba(64, 168, 165, 0.49)'" color="primary">更新 / Update</Button>
    </p>
    <p>
      <h-switch small v-model="useConfirm">使用确认按钮变更数据 / use confirm update value</h-switch>
    </p>
    <ColorPicker v-model="value" enableAlpha :useConfirm="useConfirm"></ColorPicker>
  </div>
</template>
<script>
export default {
  data() {
    return {
      useConfirm: false,
      value: null
    };
  }
};
</script>
