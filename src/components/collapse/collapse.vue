<template>
  <div class="h-collapse">
    <slot></slot>
  </div>
</template>
<script>

export default {
  name: 'hCollapse',
  props: {
    value: {
      type: [Array, String],
      default() {
        return [];
      }
    },
    accordion: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  data() {
    return {
      activedKeys: [].concat(this.value)
    };
  },
  watch: {
    value(newVal, oldVal) {
      this.activedKeys = newVal;
    },
    activedKeys(newVal, oldVal) {
      this.setActives();
    }
  },
  provide() {
    return {
      collapse: this
    };
  },
  mounted() {
    this.setActives();
  },
  methods: {
    setActives() {
      this.$children.forEach(($item, index) => {
        let name = $item.name || index;
        $item.isActive = this.activedKeys.indexOf(name) > -1;
        $item.index = index;
      });
    },
    toggle(value) {
      if (this.accordion) {
        let index = this.activedKeys.indexOf(value);
        if (index > -1) {
          this.activedKeys = [];
        } else {
          this.activedKeys = [].concat(value);
        }
      } else {
        let index = this.activedKeys.indexOf(value);
        if (index > -1) {
          this.activedKeys.splice(index, 1);
        } else {
          this.activedKeys.push(value);
        }
      }
      this.$emit('input', this.activedKeys);
      this.$emit('change', this.activedKeys);
    }
  }
};
</script>
