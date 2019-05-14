<template>
  <li class="h-tree-li" :class="{'h-tree-li-opened':data.status.opened}">
    <div
      class="h-tree-show"
      @click="clickShow"
      :class="{'h-tree-show-disabled':data.status.disabled, 'h-tree-show-choose': data.status.choose, 'h-tree-show-indeterminate': data.status.indeterminate, 'h-tree-show-selected': status.selected == data.key}"
      v-show="!data.status.hide"
    >
      <span v-for="l in level" :key="l" class="h-tree-show-space"></span>
      <span class="h-tree-show-expand">
        <span @click.stop="toggleTree()" v-if="data.status.isWait">
          <template v-if="!data.status.loading">
            <i class="h-icon-angle-right"></i>
          </template>
          <template v-else>
            <i class="h-icon-loading"></i>
          </template>
        </span>
        <span @click.stop="toggleTree()" v-else-if="data.children&&data.children.length>0">
          <i class="h-icon-angle-right"></i>
        </span>
      </span>
      <Checkbox
        :disabled="data.status.disabled"
        v-if="multiple&&data.status.checkable"
        v-model="data.status.choose"
        :indeterminate="data.status.indeterminate"
        @input="choose(data)"
      ></Checkbox>
      <div class="h-tree-show-desc" :class="{'selected': status.selected == data.key}" @click="select">
        <span class="h-tree-show-icon" :class="data.icon" v-if="data.icon"></span>
        <span v-if="data.title != null">{{data.title}}</span>
        <span v-else>{{'h.common.empty' | hlang}}</span>
      </div>
      <TreeSlot :data="data.value"></TreeSlot>
    </div>
    <ul v-if="data.children&&data.children.length>0" class="h-tree-ul">
      <hTreeItem
        v-for="child of data.children"
        :key="child.key"
        :data="child"
        :param="param"
        :status="status"
        :multiple="multiple"
        :choose-mode="chooseMode"
        @trigger="trigger"
        :toggleOnSelect="toggleOnSelect"
        :selectOnClick="selectOnClick"
        :level="level+1"
      ></hTreeItem>
    </ul>
  </li>
</template>
<script>
import TreeSlot from './treeslot';
import Checkbox from 'heyui/src/components/checkbox';

export default {
  name: 'hTreeItem',
  components: { TreeSlot, Checkbox },
  props: {
    data: Object,
    param: Object,
    multiple: Boolean,
    status: Object,
    chooseMode: String,
    toggleOnSelect: Boolean,
    selectOnClick: Boolean,
    level: Number
  },
  data() {
    return {};
  },
  methods: {
    clickShow() {
      if (this.selectOnClick) {
        this.select();
      }
    },
    select() {
      if (this.toggleOnSelect || this.multiple) {
        this.toggleTree();
      }
      if (this.data.status.disabled) return;
      this.$emit('trigger', { type: 'selectEvent', data: this.data });
      if (this.multiple && this.data.children.length == 0) {
        this.data.status.choose = !this.data.status.choose;
        this.choose();
      }
    },
    choose() {
      this.data.status.indeterminate = false;
      this.$emit('trigger', { type: 'chooseEvent', data: this.data });
    },
    trigger(data) {
      if (data.type == 'chooseEvent') {
        if (this.chooseMode != 'independent') {
          if (this.data.children) {
            let chooseStatus = true;
            let indeterminateStatus = false;
            for (let child of this.data.children) {
              if (!child.status.choose && chooseStatus) {
                chooseStatus = false;
              }
              if (child.status.choose) {
                indeterminateStatus = true;
              }
            }
            if (this.chooseMode == 'all') {
              this.data.status.choose = chooseStatus;
              this.data.status.indeterminate = indeterminateStatus && !chooseStatus;
            } else if (this.chooseMode == 'some') {
              this.data.status.choose = indeterminateStatus;
              this.data.status.indeterminate = false;
            }
          }
        }
      }
      this.$emit('trigger', data);
    },
    toggleTree() {
      if (this.data.status.isWait) {
        this.loadData();
      } else {
        this.$emit('trigger', { type: 'toggleTreeEvent', data: this.data });
      }
    },
    loadData() {
      this.$emit('trigger', { type: 'loadDataEvent', data: this.data });
    }
  }
};
</script>
