<template>
  <div>
    <p>value:{{value}}
      <button class="h-btn h-btn-text" @click="update">修改值</button>
    </p>
    <div v-width="300">
      <AutoComplete dict="simple" v-model="value" @change="onChange" :show="show">
        <div slot="top" class="text-center">自定义头部</div>
        <div slot="bottom" class="text-center">自定义底部</div>
      </AutoComplete>
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
    onChange(data) {
      log(data);
    },
    update() {
      this.value = '2';
      this.show = '梨子';
    }
  }
};
</script>
