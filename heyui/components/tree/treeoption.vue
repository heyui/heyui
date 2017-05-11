<template>
  <li class="h-tree-li"
      :class="{'h-tree-li-opened':data.status.opened}">
    <div class="h-tree-show">
      <span class='h-tree-show-expand'>
        <span @click="loadData(data)"
              v-if="data.status.isWait"><template v-if="!data.status.loading"><i class='h-icon-right'></i></template><template v-else><i class='h-icon-loading'></i></template></span>
        <span @click="toggleTree(data)"
              v-else-if="data.children&&data.children.length>0"><i class='h-icon-right'></i><i class='h-icon-down'></i></span>
      </span>
      <Checkbox v-if="multiple" v-model="data.status.choose" :indeterminate="data.status.indeterminate" @input="choose(data)"></Checkbox>
      <span class='h-tree-show-desc' :class="{'selected': status.selected == data.key}" @click="select">{{data.title}}</span>
    </div>
    <ul v-if="data.children&&data.children.length>0"
        class="h-tree-ul">
      <treeOption v-for="child of data.children"
                  :key="child"
                  :data="child"
                  :param="param"
                  :status="status"
                  :multiple="multiple"
                  @trigger="trigger"></treeOption>
    </ul>
  </li>
</template>
<script>
import config from '../../utils/config';
import utils from '../../utils/utils';

export default {
  name: 'treeOption',
  props: {
    data: Object,
    param: Object,
    multiple: Boolean,
    status: Object
  },
  data() {
    return {
    };
  },
  methods: {
    select() {
      this.$emit("trigger", { type: "selectEvent", data: this.data });
    },
    choose() {
      this.data.status.indeterminate = false;
      this.$emit("trigger", { type: "chooseEvent", data: this.data });
    },
    trigger(data) {
      if (data.type == "chooseEvent") {
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
          this.data.status.choose = chooseStatus;
          this.data.status.indeterminate = indeterminateStatus && !chooseStatus;
        }
      }
      this.$emit("trigger", data);
    },
    toggleTree(data) {
      this.$emit("trigger", { type: "toggleTreeEvent", data });
    },
    clickOnShow(data) {
      if (this.multiple) {
        // return;
      } else {
        this.toggleTree(data);
      }
    },
    loadData(data) {
      this.$emit("trigger", { type: "loadDataEvent", data });
    }
  }
};
</script>
