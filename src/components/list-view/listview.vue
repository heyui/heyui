<template>
  <div class="h-list-view">
    <div @click="onSelect(item)" class="h-list-view-item"
         :class="{'h-list-view-item-selected':selected[keyField]===item[keyField],'h-list-view-action-hover':hoverAction}"
         v-for="item in datas" :key="item[keyField]">
      <div class="h-list-view-content">
        <template v-if="!$scopedSlots.title">
          {{item[nameField]}}
        </template>
        <slot v-else name="title" :data="item"></slot>
      </div>
      <div v-if="$scopedSlots.actions" class="h-list-view-action" @click.stop>
        <slot name="actions" :data="item"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  const prefix = 'h-list-view';

  export default {
    name: 'hListView',
    props: {
      datas: Array,
      hoverAction: {
        type: Boolean,
        default: true
      },
      value: Object,
      keyField: {
        type: String,
        default: 'id'
      },
      nameField: {
        type: String,
        default: 'name'
      }
    },
    data() {
      return {
        selected: {}
      };
    },
    watch: {
      value(val) {
        this.selected = val || {};
      }
    },
    methods: {
      onSelect(item) {
        this.selected = item;
        this.$emit('input', item);
      }
    },
    mounted() {
      this.selected = this.value || {};
    }
  };
</script>
