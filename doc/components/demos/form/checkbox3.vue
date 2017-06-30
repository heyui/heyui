<template>
  <div>
    <div class="bottom-line"><Checkbox v-model="value5">{{value5}}</Checkbox></div>
    <div class="bottom-line">
      <Checkbox :indeterminate="value1.length>0&&value1.length<3" :checked="value1.length == 3" @click.native="checkAll">全选</Checkbox>
    </div>
    <div>{{value1}}</div>
    <div><Checkbox v-model="value1" :datas="param1" ></Checkbox></div>
    <div>{{value2}}</div>
    <div><Checkbox v-model="value2" :datas="param2" ></Checkbox></div>
    <div>{{value3}}</div>
    <div><Checkbox v-model="value3" :datas="param3" ></Checkbox></div>
    <div>禁用</div>
    <div><Checkbox v-model="value4" :datas="param2" :disabled="true"></Checkbox></div>
    <div>{{value6}}</div>
    <div>
      <Checkbox v-model="value6" :value="param3[0]">自定义1</Checkbox>
      <Checkbox v-model="value6" :value="param3[1]">自定义2</Checkbox>
    </div>
    <div>{{value7}}</div>
    <div>
      <Checkbox v-model="value7" :value="1">自定义1</Checkbox>
      <Checkbox v-model="value7" :value="2">自定义2</Checkbox>
    </div>

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
      param1: ['选择1', '选择2', '选择3'],
      param2: { 1: '选择1', 2: '选择2', 3: '选择3' },
      param3: [{ title: '选择1', key: 'a1', other: '其他值' }, { title: '选择2', key: 'a2' }, { title: '选择3', key: 'a3' }]
    }
  },
  methods: {
    checkAll() {
      if (this.value1.length == 3) {
        this.value1.splice(0, 3);
      } else {
        this.value1 = ["选择1", "选择2", "选择3"];
      }
    }
  }
};
</script>
