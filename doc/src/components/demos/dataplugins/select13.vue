<style lang="less">
// 将输入框文字变成红色
.select-demo-show{
  .h-select-value-single{
    color: @red-color;
  }
}
// 将鼠标移动以及选中的背景色变成红色
.select-demo-dropdown{
  &.h-select-group .h-select-item{
    &:hover, &.h-select-item-selected {
      background-color: @red-color;
      color: #FFF;
    }
  }
}
</style>
<template>
  <div>
    <p>选中值：{{select}}</p>
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
      param: [{ title: '选择1', key: 'a1', other: '其他值' }, { title: '选择2', key: 'a2' }, { title: '选择3', key: 'a3' }]
    };
  },
  methods: {
  }
};
</script>
