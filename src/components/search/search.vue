<template>
  <div :class="cls" :style="widthStyles">
    <i v-if="position=='front'" class="h-icon-search"></i>
    <div class="h-search-container">
      <div class="h-search-input">
        <input type="text" :style="heightStyles" v-model="inputValue" :placeholder="showPlaceholder" @input="inputTrigger(inputValue)" @keyup.enter="search(inputValue)"/>
        <i class="h-icon-close" @click="search('')"></i>
      </div>
      <Button :style="heightStyles" color="primary" v-if="showSearchButton" @click="search(inputValue)">
        <template v-if="$slots.default"><slot></slot></template>
        <template v-else>{{'h.search.searchText' | hlang(null, searchText)}}</template>
      </Button>
    </div>
    <i v-if="position=='end'" class="h-icon-search h-icon-search-end" @click="search(inputValue)"></i>
  </div>
</template>
<script>
const prefix = 'h-search';

export default {
  name: 'hSearch',
  props: {
    position: {
      type: String,
      default: 'end'
    },
    placeholder: {
      type: String
    },
    block: {
      type: Boolean,
      default: false
    },
    triggerType: {
      type: String,
      default: 'enter'
    },
    value: String,
    showSearchButton: {
      type: Boolean,
      default: false
    },
    searchText: {
      type: String
    },
    height: Number,
    width: Number
  },
  data() {
    return {
      inputValue: this.value
    };
  },
  watch: {
    value() {
      this.inputValue = this.value;
    }
  },
  methods: {
    search(value) {
      value = value === null ? '' : value;
      this.inputValue = value;
      this.$emit('input', value);
      this.$emit('onsearch', value.trim());
      this.$emit('search', value.trim());
      this.$emit('change', value.trim());
    },
    inputTrigger(value) {
      if (this.triggerType == 'input') {
        this.search(value);
      } else {
        this.$emit('input', value);
      }
    }
  },
  computed: {
    showPlaceholder() {
      return this.placeholder || this.t('h.search.placeholder');
    },
    widthStyles() {
      let styles = {};
      if (this.width) {
        styles.width = `${this.width}px`;
      }
      return styles;
    },
    heightStyles() {
      let styles = {};
      if (this.height) {
        styles.height = `${this.height}px`;
      }
      return styles;
    },
    cls() {
      return {
        [`${prefix}`]: true,
        [`${prefix}-block`]: this.block,
        [`${prefix}-searching`]: this.value !== '' && this.value !== null && this.value !== undefined,
        [`${prefix}-has-button`]: this.showSearchButton,
        [`${prefix}-${this.position}`]: true
      };
    }
  }
};
</script>
