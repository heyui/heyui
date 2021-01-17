<template>
  <div>
    <div class="h-input-group" v-width="500">
      <div class="h-input-addon"><Select v-model="select1" :datas="param1" :no-border="true"></Select></div>
      <input type="text" placeholder="Starting amount" />
      <span class="h-input-addon">-</span>
      <input type="text" placeholder="End amount" />
      <span class="h-input-addon">K</span>
    </div>
    <br>
    <div class="h-input-group" v-width="500">
      <span class="h-input-addon">Company welfare</span>
      <input type="text" placeholder="Starting amount" />
      <span class="h-input-addon">-</span>
      <input type="text" placeholder="End amount" />
      <span class="h-input-addon">K</span>
    </div>
    <br>
    <div class="h-input-group" v-width="500">
      <input type="text" placeholder="Input" />
      <Button color="primary">determine</Button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      select1: 1,
      param1: { 1: 'Renminbi', 2: 'US dollar', 3: 'Ruble' }
    };
  },
  methods: {},
  components: {}
};
</script>
