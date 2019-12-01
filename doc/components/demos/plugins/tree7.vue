<template>
  <Row type="flex">
    <Cell v-height="300" :width="12" class="overflow-y" v-padding="10">
      <p>value: {{value1}}</p>
      <Tree config="simple" v-model="value1"></Tree>
    </Cell>
    <Cell v-height="300" :width="12" class="overflow-y" v-padding="10">
      <p>value: {{value2}}</p>
      <Tree config="simple" multiple v-model="value2"></Tree>
    </Cell>
  </Row>
</template>
<script>

// let list = [
//   { id: 1, title: "一级" },
//   { id: 2, title: "二级" },
//   { id: 3, title: "三级", disabled: true },
//   { id: 10, title: "一级-0", parent: "1" },
//   { id: 11, title: "一级-1", parent: "1" },
//   { id: 12, title: "一级-2", parent: "1" },
//   { id: 13, title: "一级-3", parent: "1" },
//   { id: 14, title: "一级-4", parent: "1" },
//   { id: 101, title: "一级-0-1", parent: "10" },
//   { id: 102, title: "一级-0-2", parent: "10" },
//   { id: 103, title: "一级-0-3", parent: "10" },
//   { id: 20, title: "二级-0", parent: "2" },
//   { id: 21, title: "二级-1", parent: "2" },
//   { id: 22, title: "二级-2", parent: "2" },
//   { id: 23, title: "二级-3", parent: "2" },
//   { id: 24, title: "二级-4", parent: "2" },
//   { id: 30, title: "三级-0", parent: "3" },
//   { id: 31, title: "三级-1", parent: "3" },
//   { id: 32, title: "三级-2", parent: "3" },
//   { id: 33, title: "三级-3", parent: "3" },,
//   { id: 34, title: "二级，三级-4", parent: [3, 2] }
// ];
// HeyUI.config("tree.configs", {
//   simple: {
//     keyName: 'id',
//     parentName: 'parent',
//     titleName: 'title',
//     dataMode: 'list',
//     datas() {
//       return list;
//     }
//   }
// });

export default {
  data() {
    return {
      value1: null,
      value2: []
    };
  }
};
</script>
