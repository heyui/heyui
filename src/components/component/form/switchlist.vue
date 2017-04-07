<template>
  <div class="doc">
    <div><SwitchList v-model="value1" :datas="param1" @input="onchange"></SwitchList></div>
    <p v-color:gray>{{value1}}</p>
    <div><SwitchList v-model="value1" :datas="param1" :small="true"></SwitchList></div>
    <p v-color:gray>{{value2}}</p>
    <div><SwitchList v-model="value2" :datas="param2"></SwitchList></div>
    <p v-color:gray>{{value2}}</p>
    <div><SwitchList v-model="value2" :datas="param2" :disabled="true"></SwitchList></div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      value1: '选择1',
      param1: ['选择1', '选择2', '选择3'],
      value2: '1',
      param2: { 1: '选择1', 2: '选择2', 3: '选择3' }
    }
  },
  methods: {
    onchange(value) {
      log(value);
    }
  }
}
</script>
