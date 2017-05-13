<template>
  <div>
    <p>value:{{value}}
      <button class="h-btn h-btn-text" @click="update">修改值</button></p>
    <AutoComplete dict="simple"
                  v-model="value" @change="onChange" :show="show"></AutoComplete>
  </div>
</template>
<script>

export default {
  data() {
    return {
      value: '1',
      show: '选择1'
    }
  },
  methods: {
    onChange(data) {
      log(data);
    },
    update() {
      this.value = '2';
      this.show = '选择2';
    }
  }
};
</script>
