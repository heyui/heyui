<template>
  <div>
    <p>Selected value:{{select}} <button class="h-btn h-btn-text" @click="update">Modified value</button></p>
    <div v-width="300"><Select v-model="select" :datas="param"  type="object"  :multiple="true"></Select></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      select: [{ title: 'Option 1', key: 'a1', other: 'Other values' }],
      param: [
        { title: 'Option 1', key: 'a1', other: 'Other values' },
        { title: 'Option 2', key: 'a2' },
        { title: 'Choose 3', key: 'a3' }
      ]
    };
  },
  methods: {
    update() {
      this.select = [
        { title: 'Option 1', key: 'a1', other: 'Other values' },
        { title: 'Option 2', key: 'a2' }
      ];
    }
  }
};
</script>
