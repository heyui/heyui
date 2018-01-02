<template>
  <li class="h-tree-li"
      :class="{'h-tree-li-opened':data.status.opened}">
    <div class="h-tree-show"
      :class="{'h-tree-show-disabled':data.status.disabled}" v-show="!data.status.hide">
      <span class='h-tree-show-expand'>
        <span @click="toggleTree()"
              v-if="data.status.isWait"><template v-if="!data.status.loading"><i class='h-icon-right'></i></template><template v-else><i class='h-icon-loading'></i></template></span>
        <span @click="toggleTree()"
              v-else-if="data.children&&data.children.length>0"><i class='h-icon-right'></i></span>
      </span>
      <Checkbox :disabled="data.status.disabled" v-if="multiple&&data.status.checkable" v-model="data.status.choose" :indeterminate="data.status.indeterminate" @input="choose(data)"></Checkbox>
      <span class='h-tree-show-desc' :class="{'selected': status.selected == data.key}" @click="select"><span class="h-tree-show-icon" :class="data.icon" v-if="data.icon"></span>{{data.title||'空'}}</span>
    </div>
    <ul v-if="data.children&&data.children.length>0"
        class="h-tree-ul">
      <treeItem v-for="child of data.children"
                  :key="child.key"
                  :data="child"
                  :param="param"
                  :status="status"
                  :multiple="multiple"
                  :choose-mode="chooseMode"
                  @trigger="trigger"
                  :toggleOnSelect="toggleOnSelect"></treeItem>
    </ul>
  </li>
</template>
<script>
import config from '../../utils/config';
import utils from '../../utils/utils';

export default {
  name: 'treeItem',
  props: {
    data: Object,
    param: Object,
    multiple: Boolean,
    status: Object,
    chooseMode: String,
    toggleOnSelect: Boolean
  },
  data() {
    return {
    };
  },
  methods: {
    select() {
      if (this.toggleOnSelect || this.multiple) {
        this.toggleTree();
      }
      if (this.data.status.disabled) return;
      this.$emit("trigger", { type: "selectEvent", data: this.data });
      if (this.multiple && this.data.children.length == 0) {
        this.data.status.choose = !this.data.status.choose;
        this.choose();
      }
    },
    choose() {
      this.data.status.indeterminate = false;
      this.$emit("trigger", { type: "chooseEvent", data: this.data });
    },
    trigger(data) {
      if (data.type == "chooseEvent") {
        if (this.chooseMode != 'independent') {
          if (this.data.children) {
            let chooseStatus = true;
            let indeterminateStatus = false;
            for (let child of this.data.children) {
              if (!child.status.choose && chooseStatus) {
                chooseStatus = false
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
      this.$emit("trigger", data);
    },
    toggleTree() {
      if (this.data.status.isWait) {
        this.loadData();
      } else {
        this.$emit("trigger", { type: "toggleTreeEvent", data: this.data });
      }
    },
    loadData() {
      this.$emit("trigger", { type: "loadDataEvent", data: this.data });
    }
  }
};
</script>
