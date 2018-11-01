<style lang='less'>
</style>
<template>
  <div class="">
    <Collapse v-model="value" accordion>
      <CollapseItem title="title1">
        <template slot='title'>hahaha <i class="h-icon-bell"></i></template>
        我是内容1
      </CollapseItem>
      <CollapseItem title="title2">
        我是内容2
      </CollapseItem>
      <CollapseItem title="title3">
        我是内容3
      </CollapseItem>
    </Collapse>
  </div>
</template>
<script>
export default {
  components: {
      
  },
  data() {
    return {
      value: [0]
    }
  },
  computed: {
    
  },
  created() {
    
  },
  methods: {
      
  },
}
</script>