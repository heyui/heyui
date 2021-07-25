<template>
  <tr>
    <slot></slot>
    
  </tr>
</template>

<script>
import TableTd from './tabletd';

export default {
  name: 'HTableTr',
  components: {TableTd},
  props: {
    datas: [Object, Array],
    index: Number,
    computeColumns: Array
  },
  data() {

    let tds = [];
    if (this.$slots.default) {
      tds.push(...this.$slots.default());
    }
    if (this.$parent.$slots.default) {
      for (let td of this.$parent.$slots.default() || []) {
        if (td.type.name === 'HTableItem') {
          let props = { ...td.props };
          props.data = this.datas;
          props.index = this.index;
          props.toggleTree = data => {
            this.$emit('toggleTree', data);
          };
          const slots = {};
          if (td.children && td.children.default) {
            slots.default = td.children.default;
          }

          tds.push(h(TableTd, props, slots));
        }
      }
    } else if (this.computeColumns) {
      for (let td of this.computeColumns || []) {
        let props = { ...td };
        props.data = this.datas;
        props.index = this.index;
        props.toggleTree = data => {
          this.$emit('toggleTree', data);
        };
        tds.push(h(TableTd, props));
      }
    }
    return {
      
    };
  },
  methods: {
    clickHandler(event) {
      this.$emit('trClick', this.datas, this.index, event);
    },
    dblclickHandler(event) {
      this.$emit('trDblclick', this.datas, this.index, event);
    }
  }
};
</script>
