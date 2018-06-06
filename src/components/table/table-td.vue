<template>
  <td :class="cls"><template v-if="prop">{{prop=='$index' ? index : data[prop]}}</template><slot :data="data" :index="index"></slot></td>
</template>
<script>
export default {
  name: 'hTableTd',
  props: {
    index: Number,
    prop: String,
    data: [Object, Array],
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

