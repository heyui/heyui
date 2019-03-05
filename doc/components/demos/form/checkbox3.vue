<template>
  <div>
    <p>值：{{value1}}</p>
    <p>
      <Checkbox :indeterminate="value1.length>0&&value1.length<3" :checked="value1.length == 3" @click.native="checkAll">全选</Checkbox>
    </p>
    <p><Checkbox v-model="value1" :datas="param1" ></Checkbox></p>
    <p>值：{{value2}}</p>
    <p><Checkbox v-model="value2" :datas="param2" ></Checkbox></p>
    <p>值：{{value3}}</p>
    <p><Checkbox v-model="value3" :datas="param3" ></Checkbox></p>
    <p>禁用</p>
    <p><Checkbox v-model="value4" :datas="param2" :disabled="true"></Checkbox></p>
    <p>自定义key, title字段名</p>
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
      param1: ['选择1', '选择2', '选择3'],
      param2: { 1: '选择1', 2: '选择2', 3: '选择3' },
      param3: [{ title: '选择1', key: 'a1', other: '其他值' }, { title: '选择2', key: 'a2' }, { title: '选择3', key: 'a3' }],
      param4: [{ name: '选择0', code: 0 }, { name: '选择1', code: 'a1', other: '其他值' }, { name: '选择2', code: 'a2' }, { name: '选择3', code: 'a3' }]
    };
  },
  methods: {
    checkAll() {
      if (this.value1.length == 3) {
        this.value1.splice(0, 3);
      } else {
        this.value1 = ['选择1', '选择2', '选择3'];
      }
    }
  }
};
</script>
