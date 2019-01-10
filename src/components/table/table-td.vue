<template>
  <td :class="cls"><template v-if="prop">{{show}}</template><slot :data="data" :index="index"></slot></td>
</template>
<script>
import utils from '../../utils/utils';
import hutils from 'hey-utils';

export default {
  name: 'hTableTd',
  props: {
    index: Number,
    prop: String,
    dict: String,
    data: [Object, Array],
    align: String,
    unit: String,
  },
  data(){
    return {};
  },
  computed: {
    cls() {
      return {
        [`text-${this.align}`]: !!this.align
      }
    },
    show() {
      if (this.prop=='$index') return this.index;
      let value = hutils.getKeyValue(this.data, this.prop);
      if (this.dict) {
        return utils.dictMapping(value, this.dict);
      }
      if (this.unit) {
        return value === '' || value === null || value === undefined ? '' : `${value}${this.unit}`
      }
      return value;
    }
  }
}
</script>

