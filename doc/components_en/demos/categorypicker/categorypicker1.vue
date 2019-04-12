<template>
  <div>
    <p>Value：{{value}}</p>
    <p>
      Value type：<SwitchList v-model="type" :datas="{key: 'id', object: 'object'}" small @change="value=null"></SwitchList>
    </p>
    <p>
      <h-switch v-model="multiple" small @change="value=null">multiple</h-switch>
    </p>
    <p>
      <h-switch v-model="showAllLevels" small @change="value=null">showAllLevels</h-switch>
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
  }
};
</script>
