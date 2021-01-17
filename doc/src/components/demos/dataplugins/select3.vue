<template>
  <div>
    <p>选中值：{{select}} <button class="h-btn h-btn-text" @click="update">修改值</button></p>
    <div v-width="300"><Select v-model="select" :datas="param"  :multiple="true"></Select></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      select: [0],
      param: {
        0: '选择1',
        2: '选择2',
        3: '选择3'
      }
    };
  },
  methods: {
    update() {
      this.select = [0, 4];
    }
  }
};
</script>
