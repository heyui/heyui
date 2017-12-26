<template>
  <div>
    <p>value:{{value}}
      <button class="h-btn h-btn-text" @click="update">修改值</button>
    </p>
    <div v-width="300">
      <AutoComplete dict="simple" v-model="value" @change="onChange" :show="show"></AutoComplete>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      value: '1',
      show: '苹果'
    }
  },
  methods: {
    onChange(data, trigger) {
      log(data, trigger);
    },
    update() {
      this.value = '2';
      this.show = '梨子';
    }
  }
};
</script>
