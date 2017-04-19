<template>
  <div class="doc">
    <h2>Select 下拉选择</h2>
    <h3>普通下拉选择</h3>
    <div>
      <p>选中值：{{select6}}</p>
      <div v-width="300"><Select v-model="select6" :datas="param6"></Select></div>
    </div>
    <h3>没有默认请选择选项</h3>
    <div>
      <p>选中值：{{select1}}</p>
      <div v-width="300"><Select v-model="select1" :datas="param1" :null-option="false"></Select></div>
    </div>
    <h3>多选</h3>
    <div>
      <p>选中值：{{select5}}</p>
      <div v-width="300"><Select v-model="select5" :datas="param5" :mutiple="true"></Select></div>
    </div>

    <h3>选择对象值</h3>
    <div>
      <p>选中值：{{select4}}</p>
      <div v-width="300"><Select v-model="select4" :datas="param4" type="object"></Select></div>
    </div>

    <h3>多选对象值</h3>
    <div>
      <p>选中值：{{select3}}</p>
      <div v-width="300"><Select v-model="select3" :datas="param3" :mutiple="true" type="object"></Select></div>
    </div>

    <h3>限制数量</h3>
    <p>最多选中2个</p>
    <div>
      <p>选中值：{{select2}}</p>
      <div v-width="300"><Select v-model="select2" :datas="param2" :mutiple="true" :limit="2"></Select></div>
    </div>

    <h3>自定义</h3>
    <div>
      <p>选中值：{{select6}}</p>
      <div v-width="300"><Select v-model="select6" :datas="param6" :render="gen"></Select></div>
    </div>

    <h3>使用全局Dict</h3>
    <div>
      <p>选中值：{{select8}}</p>
      <div v-width="300"><Select v-model="select8" dict="select1" :mutiple="true" type="object"></Select></div>
    </div>

    <h3>文本类型的下拉</h3>
    <p></p>
    <div>
      <p>选中值：{{select7}}</p>
      <div>状态：<Select v-model="select7" :datas="param7" :no-border="true" :null-option="false"></Select>&nbsp;&nbsp;<span class='text-hover'>下载</span></div>
    </div>
    
  </div>
</template>

<script>

export default {
  data() {
    return {
      select7: '',
      select8: '',
      param7: ['选择1', '选择2', '选择3'],
      select1: '',
      param1: ['选择1', '选择2', '选择3'],
      select2: [],
      param2: [{ title: '选择1', key: 'a1', other: '其他值' }, { title: '选择2', key: 'a2' }, { title: '选择3', key: 'a3' }],
      select3: [],
      param3: [{ title: '选择1', key: 'a1', other: '其他值' }, { title: '选择2', key: 'a2' }, { title: '选择3', key: 'a3' }],
      select4: null,
      param4: [{ title: '选择1', key: 'a1', other: '其他值' }, { title: '选择2', key: 'a2' }, { title: '选择3', key: 'a3' }],
      select5: [],
      param5: [{ title: '选择1', key: 'a1', other: '其他值' }, { title: '选择2', key: 'a2' }, { title: '选择3', key: 'a3' }],
      select6: '',
      param6: ['选择1', '选择2', '选择3'],
    }
  },
  methods: {
    gen(data) {
      return `<p>标题：${data.title}<span style="float:right" class='gray1-color'>补充</span></p><p class='gray1-color'>描述：${data.title}</p>`;
    }
  },
  components: {}
}
</script>
