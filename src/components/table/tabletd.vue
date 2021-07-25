<template>
  <td v-if="tdAttrs.colspan !== 0 && tdAttrs.rowspan !== 0" :class="cls" v-bind="tdAttrs">
    <span v-if="isTreeOpener" class="h-table-tree-expand" :class="{ 'h-table-tree-opened': data._opened }">
      <i v-for="index of level" :key="index" class="h-table-tree-expand-space"></i>
      <template v-if="data.children && data.children.length">
        <i :class="{ 'h-table-tree-icon': true, 'h-icon-plus': !data._opened, 'h-icon-minus': data._opened }" @click="toggleTree"></i>
      </template>
      <i v-else class="h-table-tree-empty"></i>
    </span>
    <template v-if="prop || render">{{ show }}</template
    ><slot :data="data" :index="index"></slot>
  </td>
</template>
<script>
import config from 'heyui/utils/config';

export default {
  name: 'HTableTd',
  emits: ['toggleTree'],
  props: {
    index: Number,
    prop: String,
    dict: String,
    data: [Object, Array],
    align: String,
    attrs: Function,
    unit: String,
    render: Function,
    format: Function,
    isTreeOpener: Boolean,
    className: String
  },
  data() {
    return {};
  },
  computed: {
    tdAttrs() {
      let attrs = {};
      if (this.attrs) {
        attrs = this.attrs.call(null, this.data, this.index);
      }
      return attrs;
    },
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
      if (this.format) {
        return this.format(value);
      }
      return value;
    }
  },
  methods: {
    toggleTree() {
      this.$emit('toggleTree', this.data);
    }
  }
};
</script>
