<template>
  <td :class="cls">
    <i v-for="index of level" :key="index"></i>
    <span v-if="treeOpener" class="h-table-tree-expand" @click="openTree"><i class="h-table-tree-icon h-icon-angle-right"></i></span>
    <template v-if="prop || render">{{show}}</template><slot :data="data" :index="index"></slot>
  </td>
</template>
<script>
import config from 'heyui/src/utils/config';

export default {
  name: 'hTableTd',
  props: {
    index: Number,
    prop: String,
    dict: String,
    data: [Object, Array],
    align: String,
    unit: String,
    render: Function,
    treeOpener: Boolean,
    className: String
  },
  data() {
    return {};
  },
  methods: {
    openTree() {
      this.$emit('openTree', this.data);
    }
  },
  computed: {
    level() {
      return this.data._level || 0;
    },
    cls() {
      return {
        [`text-${this.align}`]: !!this.align,
        [this.className]: !!this.className
      };
    },
    show() {
      if (this.prop == '$index') return this.index;
      if (this.prop == '$serial') return this.index + 1;
      if (this.render) {
        return this.render.call(null, this.data);
      }
      let value = this.data[this.prop];
      if (this.dict) {
        return config.dictMapping(value, this.dict);
      }
      if (this.unit) {
        return value === '' || value === null || value === undefined ? '' : `${value}${this.unit}`;
      }
      return value;
    }
  }
};
</script>
