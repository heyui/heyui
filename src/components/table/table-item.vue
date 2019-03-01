<template>
<div></div>
</template>
<script>

export default {
  name: 'hTableItem',
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
    unit: String,
    render: Function,
    sortProp: String,
    tooltip: {
      type: Boolean,
      default: false
    },
    sort: {
      type: [Boolean, String],
      default: false
    },
    placement: String,
    content: String
  },
  beforeMount() {
    this.init();
  },
  beforeDestroy() {
    this.init();
  },
  data() {
    return {};
  },
  methods: {
    init() {
      let parent = this.$parent;
      if (parent.$options._componentTag == 'Table' || parent.$options._componentTag == 'h-table') {
        parent.refresh();
      }
    }
  },
  watch: {
    title() {
      this.init();
    },
    width() {
      this.init();
    },
    fixed() {
      this.init();
    },
    label() {
      this.init();
    },
    prop() {
      this.init();
    },
    align() {
      this.init();
    }
  }
};
</script>
