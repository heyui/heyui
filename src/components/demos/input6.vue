<template>
  <div>
    <div class="h-input-group" v-width="500">
      <div class="h-input-addon"><Select v-model="select1" :datas="param1" :no-border="true" :null-option="false"></Select></div>
      <input type="text" placeholder="起始金额" />
      <span class="h-input-addon">-</span>
      <input type="text" placeholder="结束金额" />
      <span class="h-input-addon">美元</span>
    </div>
    <br>
    <div class="h-input-group" v-width="500">
      <input type="text" placeholder="起始日期" />
      <span class="h-input-addon">-</span>
      <input type="text" placeholder="结束日期" />
    </div>
    <br>
    <div class="h-input-group" v-width="500">
      <div class="h-input">
        <input type="text" placeholder="起始日期" />
        <i class="h-icon-search"></i>
      </div>
      <span class="h-input-addon">-</span>
      <div class="h-input">
        <input type="text" placeholder="结束日期" />
        <i class="h-icon-search"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      select1: '人民币',
      param1: ['美金', '人民币', '卢布']
    }
  },
  methods: {
  },
  components: {}
}
</script>
