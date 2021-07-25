<template>
  <div></div>
</template>
<script>
export default {
  name: 'HTableItem',
  props: {
    rowspan: Number,
    colspan: Number,
    title: String,
    width: Number,
    fixed: String,
    label: String,
    prop: String,
    attrs: Function,
    dict: String,
    align: String,
    className: String,
    isTreeOpener: Boolean,
    unit: String,
    format: Function,
    render: Function,
    sortProp: String,
    tooltip: {
      type: [Boolean, Object],
      default: false
    },
    sort: {
      type: [Boolean, String],
      default: false
    },
    placement: String,
    content: String
  },
  data() {
    return {};
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
  },
  beforeMount() {
    this.init();
  },
  beforeUnmount() {
    this.init();
  },
  methods: {
    init() {
      let parent = this.$parent;
      if (parent.$options.name == 'HTable') {
        parent.refresh();
      }
    }
  }
};
</script>
