<template>
  <div class="doc">
    <h2>Tree 树</h2>
  
    <h3>基本调用</h3>
    <Tree :options="param1"></Tree>
  
    <h3>多选</h3>
    <Tree :options="param1" :multiple="true"></Tree>
  
    <h3>全部数据加载</h3>
    <Tree :options="param2"></Tree>

    <h3>异步加载</h3>
    <Tree :options="param3"></Tree>
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
    let list1 = [];
    list1.push(
      { id: 1, title: '一级' },
      { id: 2, title: '二级' },
      { id: 3, title: '三级' },
      ...genList('一级', 1, 5, 'id', 'parent', 'title'),
      ...genList('二级', 2, 5, 'id', 'parent', 'title'),
      ...genList('三级', 3, 5, 'id', 'parent', 'title')
    );
    return {
      data1: [],
      param1: {
        keyName: 'id',
        parentName: 'parent',
        titleName: 'title',
        dataMode: 'list',
        datas: list1
      },
      param2: {
        keyName: 'id',
        parentName: 'parent',
        titleName: 'title',
        dataMode: 'list',
        getTotalDatas(resolve) {
          setTimeout(() => {
            let list = [];
            list.push(
              { id: 1, title: '一级' },
              { id: 2, title: '二级' },
              { id: 3, title: '三级' },
              ...genList('一级', 1, 5, 'id', 'parent', 'title'),
              ...genList('二级', 2, 5, 'id', 'parent', 'title'),
              ...genList('三级', 3, 5, 'id', 'parent', 'title')
            );
            resolve(list);
          }, 1000);
        }
      },
      param3: {
        keyName: 'id',
        parentName: 'parent',
        titleName: 'title',
        dataMode: 'list',
        getDatas(parent, resolve) {
          setTimeout(() => {
            if (!parent) {
              resolve([
                { id: 1, title: '一级' },
                { id: 2, title: '二级' },
                { id: 3, title: '三级' }])
            } else if (parent.id == 3) {
              resolve([]);
            } else {
              resolve(genList(parent.title, parent.id, 5, 'id', 'parent', 'title'));
            }
          }, 1000);
        }
      }
    }
  },
  methods: {
  }
}
</script>
