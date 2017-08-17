<template>
  <th :class="{[`text-${align}`]: !!align}">{{title}}</th>
</template>
<script>
export default {
  name: 'tableItem',
  props: {
    title: String,
    width: Number,
    fixed: String,
    label: String,
    prop: String,
    align: String
  },
  data(){
    return {};
  },
  beforeMount(){
    this.init();
  },
  beforeDestroy(){
    this.init();
  },
  methods: {
    init() {
      let parent = this.$parent;
      if (parent.$options._componentTag == 'Table') {
        parent.refresh();
      }
    }
  },
  watch: {
    title(){
      this.init();
    },
    width(){
      this.init();
    },
    fixed(){
      this.init();
    },
    label(){
      this.init();
    },
    prop(){
      this.init();
    },
    align(){
      this.init();
    },
  }
}
</script>

