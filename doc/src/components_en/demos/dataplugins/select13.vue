<style lang="less">
// Turn the input box text into red
.select-demo-show {
  .h-select-value-single {
    color: @red-color;
  }
}
// Move the mouse and the selected background color to red
.select-demo-dropdown {
  &.h-select-group .h-select-item {
    &:hover,
    &.h-select-item-selected {
      background-color: @red-color;
      color: #fff;
    }
  }
}
</style>
<template>
  <div>
    <p>Selected value:{{select}}</p>
    <div v-width="300">
      <Select v-model="select" className="select-demo" :datas="param"></Select>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      select: null,
      param: [
        { title: 'Option 1', key: 'a1', other: 'Other values' },
        { title: 'Option 2', key: 'a2' },
        { title: 'Choose 3', key: 'a3' }
      ]
    };
  },
  methods: {}
};
</script>
