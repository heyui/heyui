<template>
  <Row v-height="300" type="flex">
    <Cell :width="12" class="overflow-y" v-padding="10">
    <p>value: {{value1}}</p>
    <Tree config="simple" v-model="value1"></Tree>
    </Cell>
    <Cell :width="12" class="overflow-y" v-padding="10">
    <p>value: {{value2}}</p>
    <Tree config="simple" multiple v-model="value2"></Tree>
    </Cell>
  </Row>
</template>
<script>
// let list = [
//   { id: 1, title: "First level" },
//   { id: 2, title: "Secondary" },
//   { id: 3, title: "Third level", disabled: true },
//   { id: 10, title: "First level-0", parent: "1" },
//   { id: 11, title: "First level-1", parent: "1" },
//   { id: 12, title: "First level-2", parent: "1" },
//   { id: 13, title: "First level-3", parent: "1" },
//   { id: 14, title: "First level-4", parent: "1" },
//   { id: 101, title: "First level-0-1", parent: "10" },
//   { id: 102, title: "First level-0-2", parent: "10" },
//   { id: 103, title: "First level-0-3", parent: "10" },
//   { id: 20, title: "Secondary-0", parent: "2" },
//   { id: 21, title: "Secondary-1", parent: "2" },
//   { id: 22, title: "Secondary-2", parent: "2" },
//   { id: 23, title: "Secondary-3", parent: "2" },
//   { id: 24, title: "Secondary-4", parent: "2" },
//   { id: 30, title: "Third level-0", parent: "3" },
//   { id: 31, title: "Third level-1", parent: "3" },
//   { id: 32, title: "Third level-2", parent: "3" },
//   { id: 33, title: "Third level-3", parent: "3" },,
//   { id: 34, title: "Secondary，Third level-4", parent: [3, 2] }
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
