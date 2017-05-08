<template>
  <div class="doc">
    <h2>Tree 树</h2>
  
    <h3>基本调用</h3>
    <Tree :options="param1"></Tree>
    <Tree :options="param2"></Tree>
  </div>
</template>

<script>
const genList = (title, parent, size, keyName, parentName, titleName) => {
  let list = [];
  for (let i = 0; i < size; i++) {
    list.push({
      [keyName]: `${parent}${i}`,
      [titleName]: `${title}-${i}`,
      [parentName]: `${parent}`,
    })
  }
  return list;
}
export default {
  data() {
    return {
      data1: [],
      param1: {
        key: 'id',
        parent: 'parent',
        title: 'title',
        dataMode: 'list',
        getTotalDatas(resolve) {
          setTimeout(() => {
            let list = [];
            list.push(
              { id: 1, title: '一级' },
              { id: 2, title: '二级' },
              { id: 2, title: '三级' },
              ...genList('一级', 1, 5, 'id', 'parent', 'title'),
              ...genList('二级', 2, 5, 'id', 'parent', 'title'),
              ...genList('三级', 3, 5, 'id', 'parent', 'title')
            );
            resolve(list);
          }, 2000);
        }
      },
      param2: {
        key: 'id',
        parent: 'parent',
        title: 'title',
        dataMode: 'list',
        getDatas(parent, resolve) {
          setTimeout(() => {
            if (!parent) {
              resolve([
                { id: 1, title: '一级' },
                { id: 2, title: '二级' },
                { id: 2, title: '三级' }])
            } else {
              resolve(genList(parent.title, parent.id, 5, 'id', 'parent', 'title'));
            }
          }, 2000);
        }
      }
    }
  },
  methods: {
  }
}
</script>
