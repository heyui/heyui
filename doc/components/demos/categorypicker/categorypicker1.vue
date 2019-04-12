<template>
  <div>
    <p>值：{{value}}</p>
    <p>
      值类型：<SwitchList v-model="type" :datas="{key: 'id', object: 'object'}" small @change="value=null"></SwitchList>
    </p>
    <p>
      <h-switch v-model="multiple" small @change="value=null">多选</h-switch>
    </p>
    <p>
      <h-switch v-model="showAllLevels" small @change="value=null">显示所有的层级</h-switch>
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
  }
};
</script>
