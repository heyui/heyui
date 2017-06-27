<template>
  <div>
    <p>选中值：{{select}}<i class="h-split"></i>
      <button class="h-btn h-btn-s" @click="update">修改值</button>
    </p>
    <div v-width="300">
      <Select v-model="select" :datas="param" placeholder="请选择您的内容" null-option-text="自定义请选择项"></Select>
    </div>
    <br/>
    <p>选中值：{{select2}}<i class="h-split"></i>
      <button class="h-btn h-btn-s" @click="update2">修改值</button>
    </p>
    <div v-width="300">
      <Select v-model="select2" :datas="param2" placeholder="请选择您的内容2"></Select>
    </div>
    <br/>
    <p>根据内容自适应长度，选中值：{{select3}} <i class="h-split"></i>
      <button class="h-btn h-btn-s" @click="update3">修改值</button>
    </p>
    <div v-width="300">
      <Select v-model="select3" autosize :datas="param3" placeholder="请选择您的内容3"></Select>
    </div>
  </div>
</template>
<script>
// HeyUI.config('dict.keyName', "code");
// HeyUI.config('dict.titleName', "title");
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
