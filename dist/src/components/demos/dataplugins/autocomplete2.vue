<template>
  <div>
    <p>
    <h-switch v-model="disabled"
                :small="true">禁用</h-switch> value:{{value}}
    </p>
    <AutoComplete dict="simple"
                  :disabled="disabled"
                  v-model="value" @change="onChange"></AutoComplete>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: '',
      disabled: true
    }
  },
  methods: {
    onChange(data) {
      log(data);
    },
  }
};
</script>
