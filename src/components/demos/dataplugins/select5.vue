<template>
  <div>
    <p>选中值：{{select}}</p>
    <div v-width="300"><Select v-model="select" :datas="param"  type="object"  :multiple="true"></Select></div>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        select: [{ title: '选择1', key: 'a1', other: '其他值' }],
        param: [{ title: '选择1', key: 'a1', other: '其他值' }, { title: '选择2', key: 'a2' }, { title: '选择3', key: 'a3' }]
      }
    }
  }
</script>
