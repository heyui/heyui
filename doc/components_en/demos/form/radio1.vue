<template>
  <div>
    <p v-color:gray>{{value1}}</p>
    <div><Radio v-model="value1" :datas="param1" @change="change"></Radio></div>
    <p v-color:gray>{{value2}}</p>
    <div><Radio v-model="value2" :datas="param2"></Radio></div>
    <p v-color:gray>{{value3}}</p>
    <div><Radio v-model="value3" :datas="param3"></Radio></div>
    <div>Disable</div>
    <div><Radio v-model="value3" :datas="param3" :disabled="true"></Radio></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 'Option 1',
      value2: '1',
      value3: null,
      param1: ['Option 1', 'Option 2', 'Choose 3'],
      param2: { 1: 'Option 1', 2: 'Option 2', 3: 'Choose 3' },
      param3: [
        { title: 'Option 1', key: 'a1', other: 'Other values' },
        { title: 'Option 2', key: 'a2' },
        { title: 'Choose 3', key: 'a3' }
      ]
    };
  },
  methods: {
    change(data) {
      log('change', data);
    }
  }
};
</script>
