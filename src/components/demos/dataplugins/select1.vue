<template>
  <div>
    <p>选中值：{{select}}
      <button class="h-btn h-btn-text" @click="update">修改值</button>
    </p>
    <div v-width="300">
      <Select v-model="select" :datas="param" placeholder="请选择您的内容"></Select>
    </div>
    <br/>
    <p>选中值：{{select2}}
      <button class="h-btn h-btn-text" @click="update2">修改值</button>
    </p>
    <div v-width="300">
      <Select v-model="select2" :datas="param2" placeholder="请选择您的内容2"></Select>
    </div>
    <br/>
    <p>选中值：{{select3}}
      <button class="h-btn h-btn-text" @click="update3">修改值</button>
    </p>
    <div v-width="300">
      <Select v-model="select3" :datas="param3" placeholder="请选择您的内容3"></Select>
    </div>
  </div>
</template>
<script>
// HeyUI.config('dict.key_field', "code");
// HeyUI.config('dict.title_field', "title");
export default {
  data() {
    return {
      select: null,
      param: ['选择1', '选择2', '选择3'],
      select2: null,
      param2: [{ title: '选择0', key: 0 }, { title: '选择1', key: 'a1', other: '其他值' }, { title: '选择2', key: 'a2' }, { title: '选择3', key: 'a3' }],
      select3: null,
      param3: { 0: '选择0', a1: '选择1', a2: '选择2', a3: '选择3' },
    }
  },
  methods: {
    update() {
      this.select = '选择2';
    },
    update2() {
      this.select2 = 'a2';
    },
    update3() {
      this.select3 = 'a2';
    }
  }
}
</script>
