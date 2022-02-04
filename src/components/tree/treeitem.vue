<template>
  <li class="h-tree-li" :class="{ 'h-tree-li-opened': data.status.opened }">
    <div
      v-show="!data.status.hide"
      class="h-tree-show"
      :class="{
        'h-tree-show-disabled': data.status.disabled,
        'h-tree-show-choose': data.status.choose,
        'h-tree-show-indeterminate': data.status.indeterminate,
        'h-tree-show-selected': status.selected == data.key
      }"
      @click="clickShow"
    >
      <span v-for="l in level" :key="l" class="h-tree-show-space"></span>
      <span class="h-tree-show-expand">
        <span v-if="data.status.isWait" @click.stop="toggleTree()">
          <template v-if="!data.status.loading">
            <i class="h-icon-angle-right"></i>
          </template>
          <template v-else>
            <i class="h-icon-loading"></i>
          </template>
        </span>
        <span v-else-if="data.children && data.children.length > 0" @click.stop="toggleTree()">
          <i class="h-icon-angle-right"></i>
        </span>
      </span>
      <Checkbox
        v-if="multiple && data.status.checkable"
        :modelValue="data.status.choose"
        :disabled="data.status.disabled"
        :indeterminate="data.status.indeterminate"
        @change="choose"
      ></Checkbox>
      <div class="h-tree-show-desc" :class="{ selected: status.selected == data.key }" @click="select">
        <span v-if="data.icon" class="h-tree-show-icon" :class="data.icon"></span>
        <span v-if="data.title != null">{{ data.title }}</span>
        <span v-else>{{ hlang('h.common.empty') }}</span>
      </div>
      <TreeSlot :data="data.value"></TreeSlot>
    </div>
    <ul v-if="data.children && data.children.length > 0" class="h-tree-ul">
      <hTreeItem
        v-for="child of data.children"
        :key="child.key"
        :data="child"
        :param="param"
        :status="status"
        :multiple="multiple"
        :choose-mode="chooseMode"
        :toggle-on-select="toggleOnSelect"
        :select-on-click="selectOnClick"
        :level="level + 1"
        @trigger="trigger"
      ></hTreeItem>
    </ul>
  </li>
</template>
<script>
import TreeSlot from './treeslot';
import Checkbox from 'heyui/components/checkbox';
import Locale from 'heyui/mixins/locale';

export default {
  name: 'HTreeItem',
  components: { TreeSlot, Checkbox },
  emits: ['trigger'],
  mixins: [Locale],
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
        this.choose();
      }
    },
    choose() {
      Object.assign(this.data.status, { choose: !this.data.status.choose, indeterminate: false });
      this.$emit('trigger', { type: 'chooseEvent', data: this.data });
    },
    trigger({ type, data }) {
      if (type == 'chooseEvent') {
        if (this.chooseMode != 'independent') {
          if (this.data.children) {
            let chooseStatus = true;
            let indeterminateStatus = false;
            for (let child of this.data.children) {
              if (!child.status.choose && chooseStatus) {
                chooseStatus = false;
              }
              if (child.status.choose || child.status.indeterminate) {
                indeterminateStatus = true;
              }
            }
            if (this.chooseMode == 'all') {
              Object.assign(this.data.status, { choose: chooseStatus, indeterminate: indeterminateStatus && !chooseStatus });
            } else if (this.chooseMode == 'some') {
              Object.assign(this.data.status, { choose: indeterminateStatus, indeterminate: false });
            }
          }
        }
      }
      this.$emit('trigger', { type, data });
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
