<template>
  <div>
    <div class="h-input-group" v-width="500">
      <div class="h-input-addon"><Select v-model="select1" :datas="param1" :no-border="true"></Select></div>
      <input type="text" placeholder="起始金额" />
      <span class="h-input-addon">-</span>
      <input type="text" placeholder="结束金额" />
      <span class="h-input-addon">K</span>
    </div>
    <br>
    <div class="h-input-group" v-width="500">
      <span class="h-input-addon">公司福利</span>
      <NumberInput v-model="value1" />
      <span class="h-input-addon">-</span>
      <Select v-model="value2" dict="simple" />
      <span class="h-input-addon">K</span>
    </div>
    <br>
    <div class="h-input-group" v-width="500">
      <input type="text" placeholder="输入" />
      <Button color="primary">确定</Button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: null,
      value2: null,
      select1: 1,
      param1: { 1: '人民币', 2: '美金', 3: '卢布' }
    };
  },
  methods: {
  },
  components: {}
};
</script>
