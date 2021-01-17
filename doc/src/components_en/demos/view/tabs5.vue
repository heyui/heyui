<template>
  <div v-width="150">
    <Tabs :datas="param" class-name="h-tabs-menu" v-model="selected" @change="change">
      <template slot-scope="{tab}" slot="item"><span>{{tab.title}}</span><Badge :count="tab.count" :max-count="99" position="right"></Badge></template>
    </Tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      param: [{
        key: 'module1',
        title: 'module1',
        count: 12
      }, {
        key: 'module2',
        title: 'module2',
        count: 14
      }, {
        key: 'module3',
        title: 'module3',
        count: 2
      }],
      selected: 'module1'
    };
  },
  methods: {
    change(data) {
      this.$Message.info(`change to ${data.title}`, 1000);
    }
  }
};
</script>
