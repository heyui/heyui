<template>
  <div>
    <p><h-switch v-model="disabled" :small="true">禁用</h-switch></p>
    <DropdownMenu @click="trigger" :datas="param" :disabled="disabled" class-name="h-text-dropdown">
      <span :disabled="disabled">菜单menu</span>
    </DropdownMenu>
  </div>
</template>
<script>

export default {
  data() {
    return {
      disabled: false,
      param: ['测试1', '测试2', '测试3']
    };
  },
  methods: {
    trigger(code, data, event) {
      this.$Message.info(`您点击了${code}`);
      log(data, event);
    }
  }
};
</script>
