<template>
  <td :class="cls"><template v-if="prop">{{data[prop]}}</template><slot :data="data"></slot></td>
</template>
<script>
export default {
  name: 'tableTd',
  props: {
    prop: String,
    data: Object,
    align: String
  },
  data(){
    return {};
  },
  computed: {
    cls() {
      return {
        [`text-${this.align}`]: !!this.align
      }
    }
  }
}
</script>

