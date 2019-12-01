<template>
  <div>
    <p>值：{{value}} <Button @click="getFullData">获取完整数据</Button></p>
    <p>
      值类型：<SwitchList v-model="type" :datas="{key: 'id', object: 'object'}" small @change="changeValue"></SwitchList>
    </p>
    <p>
      <h-switch v-model="multiple" small @change="changeValue">多选</h-switch>
    </p>
    <p>
      <h-switch v-model="showAllLevels" small @change="changeValue">显示所有的层级</h-switch>
    </p>
    <p>
      <h-switch v-model="showChildCount" small>展示子集数量</h-switch>
    </p>
    <p v-width="300">
      <CategoryPicker ref="CategoryPicker" :option="param" :type="type" :showAllLevels="showAllLevels" :multiple="multiple" :showChildCount="showChildCount" v-model="value"></CategoryPicker>
    </p>
  </div>
</template>
<script>

import { getTotalData } from 'js/locations/district';

export default {
  data() {
    return {
      value: 330185,
      type: 'key',
      showChildCount: false,
      showAllLevels: true,
      multiple: false,
      param: {
        keyName: 'id',
        titleName: 'title',
        dataMode: 'list',
        parentName: 'parentId',
        datas: [],
        // 单选控制
        selectable(data, level) {
          return !data.children || data.children.length == 0;
        },
        // 多选控制
        checkable(data, level) {
          return !data.children || data.children.length == 0;
        }
      }
    };
  },
  mounted() {
    this.param.datas = getTotalData();
  },
  methods: {
    getFullData() {
      console.log(this.$refs.CategoryPicker.getFullData());
    },
    changeValue() {
      if (this.type == 'key') {
        this.value = this.multiple ? [110117, 110101] : 110101;
      } else {
        this.value = this.multiple ? [ { 'id': '310101', 'title': '黄浦', 'traditionalTitle': '黃浦', 'pinyinTitle': 'Huangpu', 'parentId': 310000 }, { 'id': '310104', 'title': '徐汇', 'traditionalTitle': '徐匯', 'pinyinTitle': 'Xuhui', 'parentId': 310000 } ] : { 'id': '340102', 'title': '瑶海', 'traditionalTitle': '瑤海', 'pinyinTitle': 'Yaohai', 'parentId': '340100' };
      }
    }
  }
};
</script>
