<template>
  <div>
    <p>Selected value:{{select}}</p>
    <div v-width="300">
      <Select v-model="select" :datas="param">
        <template slot="show" slot-scope="{value}">Custom show: {{value.title}}</template>
        <template slot="top"><div class="text-center">Custom head</div></template>
        <template slot-scope="{item}" slot="item"><div>Title: {{item.title}}<span style="float:right" class='gray1-color'>{{item.key}}</span></div><div class='gray1-color'>Description:{{item.title}}</div></template>
        <template slot="bottom"><div class="text-center">Custom bottom</div></template>
      </Select>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      select: null,
      param: [
        { title: 'Option 1', key: 'a1', other: 'Other values' },
        { title: 'Option 2', key: 'a2' },
        { title: 'Choose 3', key: 'a3' }
      ]
    };
  },
  methods: {}
};
</script>
