<template>
  <Tooltip v-bind="tooltipParam">
    <th :rowspan="rowspan" :colspan="colspan" @click="triggerSort()" :class="cls">
      <div class="h-table-th-container">
        <div :class="{ [`text-${this.align}`]: !!this.align, 'h-table-th-title': true }">{{ title }}</div>
        <span v-if="sort" class="h-table-sort-handler"
          ><i
            :class="{
              'h-table-sort-asc': true,
              'h-table-sort-selected': sortStatus.type == 'asc' && sortStatus.prop == sortUseProp,
              'h-icon-triangle-up': true
            }"
          ></i
          ><i
            :class="{
              'h-table-sort-desc': true,
              'h-table-sort-selected': sortStatus.type == 'desc' && sortStatus.prop == sortUseProp,
              'h-icon-triangle-down': true
            }"
          ></i
        ></span>
      </div>
    </th>
  </Tooltip>
</template>

<script>
import utils from 'heyui/utils/utils';
import Tooltip from 'heyui/components/tooltip';

export default {
  name: 'HTableTh',
  components: { Tooltip },
  props: {
    rowspan: Number,
    colspan: Number,
    title: String,
    width: Number,
    className: String,
    fixed: String,
    label: String,
    prop: String,
    dict: String,
    align: String,
    format: Function,
    render: Function,
    unit: String,
    tooltip: {
      type: [Boolean, Object],
      default: false
    },
    sortProp: String,
    sort: {
      type: [Boolean, String],
      default: false
    },
    sortStatus: {
      type: Object,
      default: () => ({ type: null, prop: null })
    },
    placement: String,
    content: String
  },
  data() {
    return {
      // sortStatus: {type: null, prop: null}
    };
  },
  computed: {
    tooltipParam() {
      if (this.tooltip === true) {
        return {
          disabled: false,
          content: this.title
        };
      } else if (utils.isObject(this.tooltip)) {
        return {
          disabled: false,
          content: this.title,
          ...this.tooltip
        };
      }
      return {
        disabled: true
      };
    },
    cls() {
      return {
        'h-table-th': true,
        [this.className]: !!this.className,
        'h-table-th-active': this.sort
      };
    },
    sortUseProp() {
      return this.sortProp || this.prop;
    }
  },
  methods: {
    triggerSort() {
      if (!this.sort) return false;
      let sortStatus = utils.copy(this.sortStatus);
      const { type } = this.sortStatus;
      if (type && this.sortStatus.prop == this.sortUseProp) {
        sortStatus.type = type === 'desc' ? 'asc' : type === 'asc' ? null : 'desc';
      } else {
        sortStatus.type = 'desc';
        sortStatus.prop = this.sortUseProp;
      }
      let parent = this.$parent;
      if (parent.$options.name == 'HTable') {
        parent.triggerSort(sortStatus, this.sort);
      }
    }
  }
};
</script>
