<template>
  <div>
    <p>Selected value:{{select}} <button class="h-btn h-btn-text" @click="update">Modified value</button></p>
    <div v-width="300"><Select v-model="select" :datas="param"  :multiple="true"></Select></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      select: [0],
      param: {
        0: 'Option 1',
        2: 'Option 2',
        3: 'Choose 3'
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
