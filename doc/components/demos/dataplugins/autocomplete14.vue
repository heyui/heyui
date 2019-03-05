<style lang="less">
// 将输入框文字变成红色
.autocomplete-demo-show{
  .h-autocomplete-input{
    color: @red-color;
  }
}
// 将鼠标移动以及选中的背景色变成红色
.autocomplete-demo-dropdown{
  &.h-autocomplete-group .h-autocomplete-item:hover, &.h-autocomplete-group .h-autocomplete-item.h-autocomplete-item-selected {
    background-color: @red-color;
    color: #FFF;
  }
}
</style>
<template>
  <div>
    <p>value:{{value}}</p>
    <div v-width="300">
      <AutoComplete className="autocomplete-demo" dict="simple" v-model="value" @change="onChange" :show="show">
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
    };
  },
  methods: {
    onChange(data, trigger) {
      log(data, trigger);
    }
  }
};
</script>
