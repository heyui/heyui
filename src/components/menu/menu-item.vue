<template>
  <li class="h-menu-li" :class="{ 'h-menu-li-opened': status.opened.indexOf(data.key) != -1 }">
    <a v-if="data.value.href" :target="data.value.target" class="h-menu-link" :href="href" @click="triggerClick">
      <MenuItemShow v-bind="$props" @clickItem="clickItem"></MenuItemShow>
    </a>
    <Tooltip v-else-if="mode === 'collapse' && !data.children.length" :content="data.title" placement="right">
      <MenuItemShow v-bind="$props" @clickItem="clickItem"></MenuItemShow>
    </Tooltip>
    <MenuItemShow v-else v-bind="$props" @clickItem="clickItem"></MenuItemShow>
    <ul v-if="data.children && data.children.length > 0" class="h-menu-other-levels">
      <hMenuItem v-for="child of data.children" :key="child.key" :data="child" :param="param" :status="status" @trigger="clickItem"></hMenuItem>
    </ul>
  </li>
</template>
<script>
import utils from 'heyui/utils/utils';
import MenuItemShow from './menu-item-show';
import Tooltip from 'heyui/components/tooltip';

export default {
  name: 'HMenuItem',
  components: {
    MenuItemShow,
    Tooltip
  },
  emits: ['trigger'],
  props: {
    data: Object,
    param: Object,
    status: Object,
    mode: String
  },
  data() {
    return {};
  },
  computed: {
    href() {
      let href = this.data.value.href;
      if (href) {
        if (utils.isString(href)) {
          return href;
        } else if (this.$router) {
          return this.$router.resolve(href).href;
        }
      }
      return null;
    }
  },
  methods: {
    clickItem(data) {
      this.$emit('trigger', data);
    },
    triggerClick(event) {
      if (this.data.value.nativeLink !== true && !(event.altKey || event.ctrlKey || event.shiftKey || event.metaKey)) {
        event.preventDefault();
      }
    }
  }
};
</script>
