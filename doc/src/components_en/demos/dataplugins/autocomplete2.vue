<template>
  <div>
    <p>
    <h-switch v-model="disabled"
                :small="true">Disable</h-switch> value: {{value}}
    </p>
    <div v-width="300"><AutoComplete dict="simple"
                  :disabled="disabled"
                  v-model="value" @change="onChange"></AutoComplete></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: '',
      disabled: true
    };
  },
  methods: {
    onChange(data, trigger) {
      log(data, trigger);
    }
  }
};
</script>
