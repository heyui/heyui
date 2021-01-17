<template>
  <div>
    <p>选中值：{{select}}</p>
    <div v-width="300"><Select v-model="select" :datas="param"></Select></div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      select: 'a1',
      param: [
        { title: '分组栏', isLabel: true },
        { title: '选择1', key: 'a1', other: '其他值' },
        { title: '选择3', key: 'a2' },
        { title: '禁用选择', key: 'a3', disabled: true },
        { title: '隐藏选择', key: 'a4', hidden: true }
      ]
    };
  }
};
</script>
