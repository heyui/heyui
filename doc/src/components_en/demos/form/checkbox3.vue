<template>
  <div>
    <p>value：{{value1}}</p>
    <p>
      <Checkbox :indeterminate="value1.length>0&&value1.length<3" :checked="value1.length == 3" @click.native="checkAll">Check all</Checkbox>
    </p>
    <p><Checkbox v-model="value1" :datas="param1" ></Checkbox></p>
    <p>value：{{value2}}</p>
    <p><Checkbox v-model="value2" :datas="param2" ></Checkbox></p>
    <p>value：{{value3}}</p>
    <p><Checkbox v-model="value3" :datas="param3" ></Checkbox></p>
    <p>Disable</p>
    <p><Checkbox v-model="value4" :datas="param2" :disabled="true"></Checkbox></p>
    <p>Custom key, title field name</p>
    <p><Checkbox v-model="value8" :datas="param4"  keyName="code" titleName="name"></Checkbox></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: [],
      value2: null,
      value3: ['a1'],
      value4: [1],
      value5: false,
      value6: null,
      value7: null,
      value8: null,
      param1: ['Option 1', 'Option 2', 'Choose 3'],
      param2: { 1: 'Option 1', 2: 'Option 2', 3: 'Choose 3' },
      param3: [
        { title: 'Option 1', key: 'a1', other: 'Other values' },
        { title: 'Option 2', key: 'a2' },
        { title: 'Choose 3', key: 'a3' }
      ],
      param4: [
        { name: 'Choose 0', code: 0 },
        { name: 'Option 1', code: 'a1', other: 'Other values' },
        { name: 'Option 2', code: 'a2' },
        { name: 'Choose 3', code: 'a3' }
      ]
    };
  },
  methods: {
    checkAll() {
      if (this.value1.length == 3) {
        this.value1.splice(0, 3);
      } else {
        this.value1 = ['Select 1', 'Select 2', 'Select 3'];
      }
    }
  }
};
</script>
