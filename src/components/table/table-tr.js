import TableTd from './table-td';
import utils from '../../utils/utils';

export default {
  props: {
    datas: Object
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
          let param = { props };
          if (td.data.scopedSlots) {
            param.scopedSlots = td.data.scopedSlots;
          }
          tds.push(h(TableTd, param));
        }
      }
    } else if (!this.$parent.$scopedSlots.default && this.$parent.columns) {
      for (let td of this.$parent.columns || []) {
        let index = this.$parent.columns.indexOf(td);
        let param = utils.copy({ props: td });
        param.props.data = this.datas;
        param.props.index = index;
        tds.push(h(TableTd, param));
      }
    }
    return h(
      'tr', {}, tds
    )
  }
}
