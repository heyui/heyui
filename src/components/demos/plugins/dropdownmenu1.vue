<template>
  <div>
    <p><h-switch v-model="disabled" :small="true">禁用</h-switch></p>
    <DropdownMenu @onclick="trigger" :datas="param" :disabled="disabled">
      <span class="text-hover" :disabled="disabled">菜单menu</span>
    </DropdownMenu>
  </div>
</template>
<script>

export default {
  data() {
    return {
      disabled: false,
      param: ["测试1", "测试2", "测试3"]
    }
  },
  methods: {
    trigger(code) {
      this.$Message.info(`您点击了${code}`);
    }
  },
};
</script>
