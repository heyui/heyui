<style lang="less">
.tree4-demo-vue {
  .h-tree-show {
    .h-tree-show-desc {
      display: none;
    }
    .tree-show-custom {
      display: inline;
      .tree-show-title {
        font-size: 13px;
      }
    }
    .tree-edit-part {
      position: absolute;
      right: 5px;
      top: 2px;
      opacity: 0;
      i {
        font-size: 12px;
        vertical-align: middle;
        margin-right: 10px;
        cursor: pointer;
        &:hover {
          color: @primary-color;
        }
      }
    }
    &:hover {
      .tree-edit-part {
        opacity: 1;
      }
    }
  }
}
</style>

<template>
  <div v-width="300" class="tree4-demo-vue">
    <Tree :option="param" ref="demo" :filterable="true" selectOnClick className="h-tree-theme-row-selected">
      <template slot="item" slot-scope="{item}">
        <div class="tree-show-custom">
          <span class="tree-show-title" v-if="!item.editing">{{item.title}}</span>
          <input v-else type="text" v-model="item.editValue" @blur="updateValue(item)" @keyup.enter="updateValue(item)">
          <span class="tree-edit-part" v-if="!item.editing">
            <i class="h-icon-plus" @click.stop="append(item)"></i>
            <i class="h-icon-edit" @click.stop="edit(item)"></i>
            <i class="h-icon-trash" @click.stop="remove(item)"></i>
          </span>
        </div>
      </template>
    </Tree>
  </div>
</template>
<script>
import utils from 'hey-utils';

export default {
  data() {
    let list = [
      { id: 1, title: 'First level' },
      { id: 2, title: 'Secondary' },
      { id: 3, title: 'Third level', disabled: true },
      { id: 10, title: 'First level-0', parent: '1' },
      { id: 11, title: 'First level-1', parent: '1' },
      { id: 12, title: 'First level-2', parent: '1' },
      { id: 13, title: 'First level-3', parent: '1' },
      { id: 14, title: 'First level-4', parent: '1' },
      { id: 20, title: 'Secondary-0', parent: '2' },
      { id: 21, title: 'Secondary-1', parent: '2' },
      { id: 22, title: 'Secondary-2', parent: '2' },
      { id: 23, title: 'Secondary-3', parent: '2' },
      { id: 24, title: 'Secondary-4', parent: '2' },
      { id: 30, title: 'Third level-0', parent: '3' },
      { id: 31, title: 'Third level-1', parent: '3' },
      { id: 32, title: 'Third level-2', parent: '3' },
      { id: 33, title: 'Third level-3', parent: '3' },
      { id: 34, title: 'Third level-4', parent: '3' }
    ];
    return {
      param: {
        keyName: 'id',
        parentName: 'parent',
        titleName: 'title',
        dataMode: 'list',
        datas: list
      }
    };
  },
  methods: {
    edit(item) {
      this.$set(item, 'editValue', item.title);
      this.$set(item, 'editing', true);
    },
    updateValue(item) {
      this.$set(item, 'editing', false);
      this.$refs.demo.updateTreeItem(item.id, { title: item.editValue });
    },
    append(item) {
      this.$refs.demo.appendTreeItem(item.id, { id: utils.uuid(), title: 'test' });
    },
    remove(item) {
      this.$refs.demo.removeTreeItem(item.id);
    }
  }
};
</script>
