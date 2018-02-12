import TableTd from './table-td';
import utils from '../../utils/utils';

export default {
  name: 'TableTr',
  props: {
    datas: [Object, Array],
    index: Number
  },
  render(h) {
    let tds = [];
    if (this.$slots && this.$slots.default) {
      tds.push(...this.$slots.default)
    }
    if (this.$parent.$slots.default) {
      for (let td of this.$parent.$slots.default || []) {
        if (td.data) {
          let props = {};
          if (td.componentOptions.propsData) {
            Object.assign(props, td.componentOptions.propsData);
          }
          props.data = this.datas;
          props.index = this.index;
          let param = { props };
          if (td.data.scopedSlots) {
            param.scopedSlots = td.data.scopedSlots;
          }
          tds.push(h(TableTd, param));
        }
      }
    } else if (!this.$parent.$scopedSlots.default && this.$parent.columns) {
      for (let td of this.$parent.columns || []) {
        let param = utils.copy({ props: td });
        param.props.data = this.datas;
        param.props.index = this.index;
        tds.push(h(TableTd, param));
      }
    }
    return h(
      'tr', {}, tds
    )
  }
}
