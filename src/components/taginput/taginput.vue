<template>
  <div :class="taginputCls">
    <span v-for="(v, index) of values" :key="v+index">
      <span>{{v}}</span>
      <i v-if="!readonly" class="h-icon-close" @click.stop="remove(index)"></i>
    </span>
    <input v-if="!readonly" type="text" class="h-taginput-input" @focus="focusing=true" v-model="tagvalue" @blur="blur" @keyup.enter="add"  @keydown.delete="removeLast" v-wordlimit="wordlimit" :placeholder="placeholder" />
  </div>
</template>
<script>
import utils from '../../utils/utils';

const prefix = 'h-taginput';

export default {
  name: 'hTagInput',
  props: {
    readonly: {
      type: Boolean,
      default: false
    },
    noBorder: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
    },
    type: {
      type: String,
      default: "Array" //String
    },
    split: {
      type: String,
      default: ","
    },
    wordlimit: {
      type: Number,
      default: 50
    },
    limit: {
      type: Number,
      default: 10000
    },
    value: [Array, String, Number]
  },
  data() {
    return {
      focusing: false,
      tagvalue: ''
    };
  },
  methods: {
    removeLast(event) {
      if (event.target.value === '' && this.values.length){
        this.remove(this.values.length - 1);
      }
    },
    remove(index) {
      if (this.readonly) return;
      let value = utils.copy(this.values);
      value.splice(index, 1);
      this.setvalue(value);
    },
    add() {
      if (this.limit <= this.values.length) {
        this.$Message.error(this.t('h.taginput.limitWords'));
        return false;
      }
      if (this.readonly) return false;
      if (this.tagvalue === '') return false;
      let value = utils.copy(this.values);
      value.push(this.tagvalue);
      this.setvalue(value);
    },
    setvalue(value) {
      if (this.type == 'string') {
        if (value.length == 0){
          value = null;
        } else {
          value = value.join(this.split);
        }
      }
      this.$emit('input', value);
      this.$emit('change', value);
      let event = document.createEvent("CustomEvent");
      event.initCustomEvent("setvalue", true, true, value);
      this.$el.dispatchEvent(event);
      this.tagvalue = '';
    },
    blur() {
      let result = this.add();
      this.focusing = false;
    }
  },
  computed: {
    taginputCls() {
      return {
        [`${prefix}`]: true,
        [`${prefix}-input-border`]: !this.noBorder && !this.readonly,
        [`${prefix}-readonly`]: this.readonly,
        focusing: this.focusing
      }
    },
    values() {
      if (this.type == 'Array') {
        return this.value || [];
      } else {
        if (utils.isNull(this.value) || this.value === ''){
          return [];
        }
        return new String(this.value).split(this.split);
      }
    }
  }
};
</script>