<template>
  <li class="h-cascader-li" :class="{ 'h-cascader-li-opened': data.status.opened }">
    <div
      v-show="!data.status.hide"
      class="h-cascader-show"
      :class="{
        'h-cascader-show-disabled': data.status.disabled,
        'h-cascader-show-choose': data.status.choose,
        'h-cascader-show-selected': status.selected == data.key
      }"
      @click="clickShow"
    >
      <div class="h-cascader-show-desc" :class="{ selected: status.selected == data.key }" @click="select">
        <span v-if="data.icon" class="h-cascader-show-icon" :class="data.icon"></span>
        <span v-if="data.title != null">{{ data.title }}</span>
        <span v-else>{{ hlang('h.common.empty') }}</span>
      </div>
      <span class="h-cascader-show-expand">
        <span v-if="data.status.isWait" @click.stop="toggleCascader()">
          <template v-if="!data.status.loading">
            <i class="h-icon-right"></i>
          </template>
          <template v-else>
            <i class="h-icon-loading"></i>
          </template>
        </span>
        <span v-else-if="data.children && data.children.length > 0" @click.stop="toggleCascader()">
          <i class="h-icon-right"></i>
        </span>
      </span>
    </div>
    <template v-if="data.children && data.children.length > 0">
      <transition v-if="data.status.opened" name="h-cascader-transition">
        <ul class="h-cascader-ul">
          <hCascaderItem
            v-for="child of data.children"
            :key="child.key"
            :data="child"
            :param="param"
            :multiple="multiple"
            :status="status"
            :level="level + 1"
            @trigger="trigger"
          ></hCascaderItem>
        </ul>
      </transition>
    </template>
  </li>
</template>
<script>
export default {
  name: 'HCascaderItem',
  emits: ['trigger'],
  props: {
    data: Object,
    param: Object,
    multiple: Boolean,
    status: Object,
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
        this.toggleCascader();
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
    toggleCascader() {
      if (this.data.status.isWait) {
        this.loadData();
      } else {
        this.$emit('trigger', { type: 'toggleCascaderEvent', data: this.data });
      }
    },
    loadData() {
      this.$emit('trigger', { type: 'loadDataEvent', data: this.data });
    }
  }
};
</script>
