<template>
  <div class="doc">
    <h2>Select 下拉菜单</h2>
    <div>
      <p>{{select1}}</p>
      <div v-width="300"><Select v-model="select1" :datas="param1"></Select></div>
    </div>
    <div>
      <p>{{select4}}</p>
      <div v-width="300"><Select v-model="select4" :datas="param4" type="object"></Select></div>
    </div>
    <div>
      <p>{{select2}}</p>
      <div v-width="300"><Select v-model="select2" :datas="param2" :mutiple="true"></Select></div>
    </div>
    <div>
      <p>{{select3}}</p>
      <div v-width="'50%'"><Select v-model="select3" :datas="param3" :mutiple="true" type="object"></Select></div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      select1: '',
      param1: ['选择1', '选择2', '选择3'],
      select2: [],
      param2: [{ title: '选择1', key: 'a1' }, { title: '选择2', key: 'a2' }, { title: '选择3', key: 'a3' }],
      select3: [],
      param3: [{ title: '选择1', key: 'a1' }, { title: '选择2', key: 'a2' }, { title: '选择3', key: 'a3' }],
      select4: [],
      param4: [{ title: '选择1', key: 'a1' }, { title: '选择2', key: 'a2' }, { title: '选择3', key: 'a3' }]
    }
  },
  methods: {
  },
  components: {}
}
</script>
