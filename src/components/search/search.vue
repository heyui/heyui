<template>
  <div :class="cls">
    <i v-if="position=='front'" class="h-icon-search"></i><input type="text" v-model="inputValue" :placeholder="placeholder" @input="inputTrigger(inputValue)" @keyup.enter="search(inputValue)"/> <i v-if="position=='end'" class="h-icon-search" @click="search(inputValue)"></i><i class="h-icon-close" @click="search('')"></i>
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
    },
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      inputValue: this.value,
      oldValue: null,
      searching: false
    };
  },
  watch: {
    value() {
      this.inputValue = this.value;
    }
  },
  methods: {
    search(value) {
      if (value === this.oldValue) {
        return;
      }
      this.oldValue = this.inputValue = value;
      this.searching = value !== '';
      this.$emit('input', value);
      this.$emit('onsearch', value);
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