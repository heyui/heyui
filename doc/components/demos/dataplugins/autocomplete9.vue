<template>
  <div >
    <p> value:{{value1}} <button class="h-btn h-btn-text" @click="update1">修改值</button></p>
    <div v-width="300">
      <AutoComplete :option="param" type="title" v-model="value1" :must-match="false" @change="onChange"></AutoComplete>
    </div>
    <p> 多选：value:{{value2}} <button class="h-btn h-btn-text" @click="update2">修改值</button></p>
    <div v-width="300">
      <AutoComplete :option="param" type="title" v-model="value2" :must-match="false" multiple @change="onChange"></AutoComplete>
    </div>
    <p>保存对象：value:{{value3}} <button class="h-btn h-btn-text" @click="update3">修改值</button></p>
    <div v-width="300">
      <AutoComplete :option="param" v-model="value3" type="object" :must-match="false" @change="onChange"></AutoComplete>
    </div>
    <p>保存对象多选：value:{{value4}} <button class="h-btn h-btn-text" @click="update4">修改值</button></p>
    <div v-width="300">
      <AutoComplete :option="param" v-model="value4" type="object" :must-match="false" multiple @change="onChange"></AutoComplete>
    </div>
  </div>
</template>
<script>
import jsonp from 'fetch-jsonp'

const loadData = function(filter, callback) {
  jsonp(`https://suggest.taobao.com/sug?code=utf-8&q=${filter}`)
    .then(response => response.json())
    .then(d => {
      callback(
        d.result.map(r => {
          return {
            title: r[0],
            key: r[1] + Math.random()
          }
        })
      )
    })
}

export default {
  data() {
    return {
      value1: '23',
      value4: ['23','45'],
      value2: null,
      value3: [],
      param: {
        loadData,
        minWord: 1
      }
    }
  },
  methods: {
    onChange(data, trigger) {
      log(data, trigger)
    },
    update1() {
      this.value1 = 'new value'
    },
    update2() {
      this.value2 = ['value1','value2']
    },
    update3() {
      this.value3 = { key: 123, title: '修改' }
    },
    update4() {
      this.value4 = [{ key: 123, title: '修改' }]
    }
  }
}
</script>
