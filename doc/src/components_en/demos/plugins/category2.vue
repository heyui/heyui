<template>
  <div>
    <p>{{value}}</p>
    <p v-width="300">
      <Category :option="param" type="object" multiple v-model="value"></Category>
    </p>
  </div>
</template>
<script>

const genList = (parentTitle, parentId, size, keyName, titleName) => {
  let list = [];
  for (let i = 0; i < size; i++) {
    list.push({
      [keyName]: parseInt(`${parentId}${i}`),
      [titleName]: `${parentTitle}-${i}`
    });
  }
  return list;
};

export default {
  data() {
    return {
      value: [{ id: 34, title: 'Third level-4', parent: 3 }],
      param: {
        keyName: 'id',
        titleName: 'title',
        dataMode: 'list',
        getDatas: (parent, resolve) => {
          setTimeout(() => {
            if (!parent) {
              resolve([
                { id: 1, title: 'First level', disabled: true },
                { id: 2, title: 'Secondary' },
                { id: 3, title: 'Third level' }]);
            } else if (parent.id % 2 == 0) {
              resolve([]);
            } else {
              resolve(genList(parent.title, parent.id, 5, 'id', 'title'));
            }
          }, 100);
        }
      }
    };
  },
  methods: {
  }
};
</script>
