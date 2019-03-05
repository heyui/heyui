<template>
  <div>
    <p>选中值：{{select}}</p>
    <div v-width="300">
      <Select v-model="select" :datas="param">
        <template slot="top"><div class="text-center">自定义头部</div></template>
        <template slot-scope="{item}" slot="item"><div>标题：{{item.title}}<span style="float:right" class='gray1-color'>{{item.key}}</span></div><div class='gray1-color'>描述：{{item.title}}</div></template>
        <template slot="bottom"><div class="text-center">自定义底部</div></template>
      </Select>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      select: null,
      param: [{ title: '选择1', key: 'a1', other: '其他值' }, { title: '选择2', key: 'a2' }, { title: '选择3', key: 'a3' }]
    };
  },
  methods: {
  }
};
</script>
