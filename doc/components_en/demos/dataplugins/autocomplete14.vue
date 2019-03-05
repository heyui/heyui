<style lang="less">
// Turn the input box text into red
.autocomplete-demo-show {
  .h-autocomplete-input {
    color: @red-color;
  }
}
// Move the mouse and the selected background color to red
.autocomplete-demo-dropdown {
  &.h-autocomplete-group .h-autocomplete-item:hover,
  &.h-autocomplete-group .h-autocomplete-item.h-autocomplete-item-selected {
    background-color: @red-color;
    color: #fff;
  }
}
</style>
<template>
  <div>
    <p>value:{{value}}</p>
    <div v-width="300">
      <AutoComplete className="autocomplete-demo" dict="simple" v-model="value" @change="onChange" :show="show">
        <div slot="top" class="text-center">Custom head</div>
        <div slot="bottom" class="text-center">Custom bottom</div>
      </AutoComplete>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: '1',
      show: 'apple'
    };
  },
  methods: {
    onChange(data, trigger) {
      log(data, trigger);
    }
  }
};
</script>
