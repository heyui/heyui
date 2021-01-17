<template>
  <div>
    <p>value：{{value1}}</p>
    <p>
      <Checkbox :indeterminate="value1.length>0&&value1.length<3" :checked="value1.length == 3" @click.native="checkAll">全选 / Choose All</Checkbox>
    </p>
    <p><Checkbox v-model="value1" :datas="param1" ></Checkbox></p>

    <blockquote>基础 / Basic</blockquote>
    <p>value：{{value2}}</p>
    <p><Checkbox v-model="value2" :limit="2" :datas="param3" ></Checkbox></p>

    <blockquote>全部禁用 / Disabled</blockquote>
    <p><Checkbox v-model="value2" :datas="param3" disabled></Checkbox></p>

    <blockquote>自定义key, title字段名 / Custom key, title field name</blockquote>
    <p>value：{{value8}}</p>
    <p><Checkbox v-model="value8" :datas="param2"  keyName="code" titleName="name"></Checkbox></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: [],
      param1: ['choose1', 'choose2', 'choose3'],
      value2: ['a1'],
      value8: ['0'],
      param3: [{ title: 'choose1', key: 'a1', other: 'other value' }, { title: 'choose2', key: 'a2' }, { title: 'choose3', key: 'a3' }],
      param2: [{ name: 'choose0', code: 0 }, { name: 'choose1', code: 'a1', other: 'other value' }, { name: 'choose2', code: 'a2' }, { name: 'choose3', code: 'a3', disabled: true }]
    };
  },
  methods: {
    checkAll() {
      if (this.value1.length == 3) {
        this.value1.splice(0, 3);
      } else {
        this.value1 = ['choose1', 'choose2', 'choose3'];
      }
    }
  }
};
</script>
