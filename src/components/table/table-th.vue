<template>
  <th :class="cls" @click="triggerSort()" :rowspan="rowspan" :colspan="colspan">
    <div v-tooltip="tooltip" :placement="placement" :content="content || title">
      <span>{{title}}</span>
      <span class="h-table-sort-handler" v-if="sort">
        <span class="h-table-sort-asc" v-if="sortStatus.type == 'asc' && sortStatus.prop == prop" :class="{'h-table-sort-selected': sortStatus.type == 'asc' && sortStatus.prop == prop}"><i class="h-icon-top"></i></span>
        <span class="h-table-sort-desc" v-else :class="{'h-table-sort-selected': sortStatus.type == 'desc' && sortStatus.prop == prop}"><i class="h-icon-down"></i></span>
      </span>
    </div>
  </th>
</template>

<script>
import utils from '../../utils/utils';
export default {
  name: 'hTableTh',
  props: {
    rowspan: Number,
    colspan: Number,
    title: String,
    width: Number,
    fixed: String,
    label: String,
    prop: String,
    dict: String,
    align: String,
    render: Function,
    unit: String,
    tooltip: {
      type: Boolean,
      default: false
    },
    sort: {
      type: [Boolean, String],
      default: false
    },
    placement: String,
    content: String,
  },
  data(){
    return {
      sortStatus: {type: null, prop: null}
    };
  },
  methods: {
    triggerSort() {
      if(!this.sort) return false;
      let sortStatus = utils.copy(this.sortStatus);
      if(this.sortStatus.type && this.sortStatus.prop == this.prop) {
        sortStatus.type = this.sortStatus.type == 'asc' ? 'desc' : 'asc';
      } else {
        sortStatus.type = 'desc';
        sortStatus.prop = this.prop
      }
      let parent = this.$parent;
      if (parent.$options._componentTag == 'Table' || parent.$options._componentTag == 'h-table') {
        this.sortStatus = parent.triggerSort(sortStatus, this.sort);
      }
    }
  },
  computed: {
    cls() {
      return {
        [`text-${this.align}`]: !!this.align,
        pointer: this.sort
      };
    }
  }
}
</script>

