<template>
  <div :class="cls" :style="widthStyles">
    <i v-if="position == 'front'" class="h-icon-search"></i>
    <div class="h-search-container">
      <div class="h-search-input">
        <input
          v-model="inputValue"
          type="text"
          class="h-input"
          :style="heightStyles"
          :placeholder="placeholder"
          @input="inputTrigger(inputValue)"
          @keyup.enter="search(inputValue)"
        />
        <i class="h-icon-close" @click="search('')"></i>
      </div>
      <button v-if="showSearchButton" type="button" :style="heightStyles" :class="`h-btn ${searchButtonTheme}`" @click="search(inputValue)">
        <template v-if="$slots.default"><slot></slot></template>
        <template v-else>{{ searchButtonTextShow }}</template>
      </button>
    </div>
    <i v-if="position == 'end'" class="h-icon-search h-icon-search-end" @click="search(inputValue)"></i>
  </div>
</template>
<script>
import Locale from 'heyui/mixins/locale';
const prefix = 'h-search';

export default {
  name: 'HSearch',
  mixins: [Locale],
  emits: ['change', 'search', 'update:modelValue'],
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
    modelValue: String,
    showSearchButton: {
      type: Boolean,
      default: false
    },
    searchButtonText: {
      type: String
    },
    searchButtonTheme: {
      type: String,
      default: 'h-btn-primary'
    },
    height: Number,
    width: Number
  },
  data() {
    return {
      inputValue: this.modelValue
    };
  },
  computed: {
    searchButtonTextShow() {
      return this.searchButtonText || this.hlang('h.search.searchButtonText');
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
        [`${prefix}-searching`]: this.modelValue !== '' && this.modelValue !== null && this.modelValue !== undefined,
        [`${prefix}-has-button`]: this.showSearchButton,
        [`${prefix}-${this.position}`]: true
      };
    }
  },
  watch: {
    modelValue() {
      this.inputValue = this.modelValue;
    }
  },
  methods: {
    search(value) {
      const computedValue = value === null || value === undefined ? '' : value;
      this.inputValue = computedValue;
      this.$emit('update:modelValue', computedValue);
      this.$emit('search', computedValue.trim());
      this.$emit('change', computedValue.trim());
    },
    inputTrigger(value) {
      if (this.triggerType == 'input') {
        this.search(value);
      } else {
        this.$emit('update:modelValue', value);
      }
    }
  }
};
</script>
