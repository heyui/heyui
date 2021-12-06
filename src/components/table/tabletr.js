import TableTd from './tabletd';
import { h } from 'vue';

export default {
  name: 'hTableTr',
  emits: ['toggleTree', 'trClick', 'trDblClick'],
  props: {
    datas: [Object, Array],
    index: Number,
    computeColumns: Array
  },
  render() {
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
          props.onToggleTree = data => {
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
        props.onToggleTree = data => {
          this.$emit('toggleTree', data);
        };
        tds.push(h(TableTd, props));
      }
    }
    return h(
      'tr',
      {
        onClick: this.clickHandler,
        onDblClick: this.dblclickHandler
      },
      tds
    );
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
