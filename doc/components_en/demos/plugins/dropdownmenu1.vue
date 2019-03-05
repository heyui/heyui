<template>
  <div>
    <p>
      <h-switch v-model="disabled" :small="true">Disable</h-switch>
    </p>
    <DropdownMenu @click="trigger" :datas="param" :disabled="disabled" class-name="h-text-dropdown">
      <span :disabled="disabled">Menu menu</span>
    </DropdownMenu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      disabled: false,
      param: ['Test 1', 'Test 2', 'Test 3']
    };
  },
  methods: {
    trigger(code, data, event) {
      this.$Message.info(`You clicked ${code}`);
      log(data, event);
    }
  }
};
</script>
