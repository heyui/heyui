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
      select: '选择1',
      param: [
        { title: '分组1', isLabel: true },
        { title: '选择0', key: '23' },
        { title: '选择1', key: 'a1', other: '其他值' },
        { title: '分组3', isLabel: true },
        { title: '选择2', key: 'a2' },
        { title: '分组3', isLabel: true },
        { title: '选择3', key: 'a3' }
      ]
    };
  }
};
</script>
