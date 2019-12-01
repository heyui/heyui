<template>
  <div class="h-menu-show" v-tooltip="inlineCollapsed&&!data.children.length" :content="data.title" placement="right"
      @click="togglemenu(data)"
      :class="{'h-menu-show-disabled':data.status.disabled, 'h-menu-li-selected': data.key&&status.selected == data.key}">
      <span class='h-menu-show-icon' v-show='data.icon'><i :class="data.icon"></i></span>
      <span class='h-menu-show-desc'>{{data.title}}</span>
      <span class='h-menu-show-count' v-if="data.count"><Badge :count="data.count" :max-count="99"></Badge></span>
      <span class='h-menu-show-expand' v-if="mode!='horizontal'&&data.children&&data.children.length>0">
        <i class='h-icon-angle-down'></i>
      </span>
  </div>
</template>
<script>

export default {
  name: 'hMenuItemShow',
  props: {
    data: Object,
    param: Object,
    status: Object,
    inlineCollapsed: {
      type: Boolean,
      default: false
    },
    mode: String
  },
  data() {
    return {
    };
  },
  methods: {
    togglemenu(data) {
      this.$emit('trigger', { type: 'togglemenuEvent', data });
    }
  }
};
</script>
