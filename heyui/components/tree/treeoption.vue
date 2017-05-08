<template>
  <ul class="h-tree-option">
    <li>
      <span class='h-tree-option-expand-icon' v-if="data.children&&data.children.length>0"><i class='h-icon-right'></i><i class='h-icon-down'></i></span>
      <Checkbox v-if="param.multiple"></Checkbox>
      <span class='h-tree-option-desc'>{{data.title}}</span>
      <ul v-if="data.children&&data.children.length>0">
        <treeOption v-for="child of data.children" :key="child" :data="child" :param="param"></treeOption>
      </ul>
    </li>
  </ul>
</template>
<script>
import config from '../../utils/config';
import utils from '../../utils/utils';

export default {
  name: 'treeOption',
  props: {
    data: Object,
    param: Object
  },
  data() {
    return {
    };
  },
  methods: {
    setvalue(option) {
      if (this.disabled) return;
    }
  }
};
</script>
