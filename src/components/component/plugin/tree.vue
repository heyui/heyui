<template>
  <div class="doc">
    <h2>Tree 树</h2>
  
    <h3>基本调用</h3>

    <p><Button @click="expandAll" size="xs">全部展开</Button><Button @click="foldAll" size="xs">全部收起</Button><Button @click="updateSelect" size="xs">设置选中值</Button><Button @click="getSelect" size="xs">获得选中值</Button></p>
    <Tree :options="param1" ref="demo1"></Tree>
  
    <h3>多选，选择模式为ALL</h3>
    <p>只有子集全选的时候，才会选中父级，如果父级选择，返回数据则只返回父级，子集不返回。</p>
    <p><Button @click="updateChoose" size="xs">设置checkbox选中值</Button><Button @click="getChoose" size="xs">获得checkbox选中值</Button><Button @click="getFullChoose" size="xs">获得所有checkbox选中值</Button></p>
    <Tree :options="param1" :multiple="true" data-mode="all" ref="demo2"></Tree>
  
    <h3>多选，选择模式为SOME</h3>
    <p>只要子集选中，父级即选中，返回数据为所有选中数据。</p>
    <p><Button @click="updateChoose2" size="xs">设置checkbox选中值</Button><Button @click="getChoose2" size="xs">获得checkbox选中值</Button></p>
    <Tree :options="param1" :multiple="true" data-mode="some" ref="demo3"></Tree>
  
    <h3>搜索</h3>
    <Tree :options="param1" :filterable="true"></Tree>
  
    <h3>全部数据异步加载</h3>
    <Tree :options="param2"></Tree>

    <h3>分步异步加载</h3>
    <p>分步异步加载不推荐有<code>multiple</code>模式，分步异步加载请尽量使用在单个选择模式下。</p>
    <Tree :options="param3"></Tree>

  </div>
</template>

<script>
const genList = (title, parent, size, keyName, parentName, titleName) => {
  let list = [];
  for (let i = 0; i < size; i++) {
    list.push({
      [keyName]: parseInt(`${parent}${i}`),
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
      { id: 3, title: '三级', disabled: true },
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
              { id: 2, title: '二级', disabled: true },
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
                { id: 1, title: '一级', disabled: true },
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
    expandAll() {
      this.$refs.demo1.expandAll();
    },
    foldAll() {
      this.$refs.demo1.foldAll();
    },
    updateSelect() {
      this.$refs.demo1.updateSelect(2);
      this.$Message.info("选中二级");
    },
    getSelect() {
      let option = this.$refs.demo1.getSelect();
      if (option == null) {
        this.$Message.info(`当前未选中`);
      } else {
        this.$Message.info(`当前选中: ${option.title}`);
      }
    },
    updateChoose() {
      this.$refs.demo2.updateChoose([1, 23, 31]);
    },
    getChoose() {
      let options = this.$refs.demo2.getChoose();
      if (options.length == 0) {
        this.$Message.info(`当前未选中`);
      } else {
        this.$Message.info(`当前选中: ${options.length}个`);
      }
    },
    getFullChoose() {
      let options = this.$refs.demo2.getFullChoose();
      log(options);
      if (options.length == 0) {
        this.$Message.info(`当前未选中`);
      } else {
        this.$Message.info(`当前选中: ${options.length}个`);
      }
    },
    updateChoose2() {
      this.$refs.demo3.updateChoose([1, 23, 31]);
    },
    getChoose2() {
      let options = this.$refs.demo3.getChoose();
      log(options);
      if (options.length == 0) {
        this.$Message.info(`当前未选中`);
      } else {
        this.$Message.info(`当前选中: ${options.length}个`);
      }
    },
  }
}
</script>
