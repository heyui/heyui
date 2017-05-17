<template>
  <div :class="cls">
    <i v-if="position=='front'" class="h-icon-search"></i><input type="text" v-model="value" :placeholder="placeholder" @input="inputTrigger(value)" @keyup.enter="search(value)"/> <i v-if="position=='end'" class="h-icon-search" @click="search(value)"></i><i class="h-icon-close" @click="search('')"></i>
  </div>
</template>
<script>
const prefix = 'h-search';

export default {
  props: {
    position: {
      type: String,
      default: 'end'
    },
    placeholder: {
      type: String,
      default: '请输入关键词查询'
    },
    triggerType: {
      type: String,
      default: 'enter'
    }
  },
  data() {
    return {
      value: "",
      oldValue: null,
      searching: false
    };
  },
  methods: {
    search(value) {
      if (value === this.oldValue) {
        return;
      }
      this.oldValue = this.value = value;
      this.searching = this.value !== '';
      this.$emit('search', this.value);
    },
    inputTrigger(value) {
      if (this.triggerType == 'input') {
        this.search(value);
      }
    }
  },
  computed: {
    cls() {
      return {
        [`${prefix}`]: true,
        [`${prefix}-searching`]: this.searching,
        [`${prefix}-${this.position}`]: true,
      }
    }
  }
};
</script>