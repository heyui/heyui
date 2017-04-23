<template>
  <div>
    <p>选中值：{{select}}</p>
    <div v-width="300"><Select v-model="select" :datas="param" placeholder="请选择您的内容"></Select></div>
    <br/>
    <p>选中值：{{select2}}</p>
    <div v-width="300"><Select v-model="select2" :datas="param2" placeholder="请选择您的内容2"></Select></div>
    <br/>
    <p>选中值：{{select3}}</p>
    <div v-width="300"><Select v-model="select3" :datas="param3" placeholder="请选择您的内容3"></Select></div>
  </div>
</template>
<script>
// HeyUI.config('dict.key_field', "code");
// HeyUI.config('dict.title_field', "title");
  export default {
    data: function () {
      return {
        select: '',
        param: ['选择1', '选择2', '选择3'],
        select2: '',
        param2: [{ title: '选择1', key: 'a1', other: '其他值' }, { title: '选择2', key: 'a2' }, { title: '选择3', key: 'a3' }],
        select3: '',
        param3: { 1:'选择1', 2:'选择2', 3:'选择3' },
      }
    }
  }
</script>
