<template>
  <div>
    <p>
      value:{{value}}
      <button class="h-btn h-btn-text" @click="update">修改值</button>
    </p>
    <div v-width="300">
      <AutoComplete
        dict="simple"
        v-model="value"
        @change="onChange"
        :showDropdownWhenNoResult="false"
      ></AutoComplete>
    </div>
    <p>
      value:{{value2}}
      <button class="h-btn h-btn-text" @click="update2">修改值</button>
    </p>
    <div v-width="300">
      <AutoComplete
        dict="simple"
        multiple
        v-model="value2"
        @change="onChange"
        :showDropdownWhenNoResult="false"
      ></AutoComplete>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: '1',
      value2: ['1']
    };
  },
  methods: {
    onChange(data, trigger) {
      log(data, trigger);
    },
    update() {
      this.value = '2';
    },
    update2() {
      this.value2 = ['1', '2'];
    }
  }
};
</script>
