<template>
  <td><template v-if="prop"></template><slot></slot></td>
</template>
<script>
export default {
  name: 'tableItem',
  props: {
    title: String,
    width: Number,
    fixed: String,
    label: String,
    prop: String
  },
  data(){
    return {};
  },
  computed: {
    datas() {
      return this.$parent.datas;
    }
  }
}
</script>

