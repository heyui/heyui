<template>
  <li class="h-tree-li"
      :class="{'h-tree-li-opened':status.opens.includes(data[param.key])}">
    <div class="h-tree-show">
      <span class='h-tree-show-expand'
            @click="loadData(data)"
            v-if="data.hasChildren"><i class='h-icon-right'></i></span>
      <span class='h-tree-show-expand'
            @click="toggleTree(data)"
            v-else-if="data.children&&data.children.length>0"><i class='h-icon-right'></i><i class='h-icon-down'></i></span>
      <input type="checkbox" v-if="multiple" v-model="status.selects" :value="data[param.key]"/>
      <span class='h-tree-show-desc'>{{data.title}}</span>
    </div>
    <ul v-if="data.children&&data.children.length>0"
        class="h-tree-ul">
      <treeOption v-for="child of data.children"
                  :key="child"
                  :data="child"
                  :param="param"
                  :multiple="multiple"
                  :status="status"
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
    trigger(data) {
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
