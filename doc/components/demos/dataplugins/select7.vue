<template>
  <div>
    <p>选中值：{{select}}</p>
    <div v-width="300"><Select v-model="select" :datas="param" :render="gen"></Select></div>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        select: null,
        param: [{ title: '选择1', key: 'a1', other: '其他值' }, { title: '选择2', key: 'a2' }, { title: '选择3', key: 'a3' }]
      }
    },
    methods: {
      gen(data) {
        return `<p>标题：${data.title}<span style="float:right" class='gray1-color'>补充</span></p><p class='gray1-color'>描述：${data.title}</p>`;
      }
    },
  }
</script>
