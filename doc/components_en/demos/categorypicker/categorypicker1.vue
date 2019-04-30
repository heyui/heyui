<template>
  <div>
    <p>Value：{{value}}</p>
    <p>
      Value type：<SwitchList v-model="type" :datas="{key: 'id', object: 'object'}" small @change="changeValue"></SwitchList>
    </p>
    <p>
      <h-switch v-model="multiple" small @change="changeValue">multiple</h-switch>
    </p>
    <p>
      <h-switch v-model="showAllLevels" small @change="changeValue">showAllLevels</h-switch>
    </p>
    <p>
      <h-switch v-model="showChildCount" small>showChildCount</h-switch>
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
        titleName: 'pinyinTitle',
        dataMode: 'list',
        parentName: 'parentId',
        datas: [],
        selectable(data, level) {
          return !data.children || data.children.length == 0;
        },
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
