<template>
  <div class="h-switchlist" :class="{'h-switchlist-small':small}" :disabled="disabled">
    <span :checked="option[key]==value" :disabled="disabled" v-for="option of arr" :key="option[key]" @click="setvalue(option)"><i v-if="option.icon" :class="option.icon"></i>{{option[title]}}</span>
  </div>
</template>
<script>
import config from 'heyui/src/utils/config';

export default {
  name: 'HSwitchList',
  props: {
    small: {
      type: Boolean,
      default: false
    },
    datas: [Object, Array],
    disabled: {
      type: Boolean,
      default: false
    },
    dict: String,
    value: [String, Boolean, Number],
    keyName: {
      type: String,
      default: () => config.getOption('dict', 'keyName')
    },
    titleName: {
      type: String,
      default: () => config.getOption('dict', 'titleName')
    }
  },
  data() {
    return {
      key: this.keyName,
      title: this.titleName
    };
  },
  methods: {
    setvalue(option) {
      let key = option[this.key];
      if (this.disabled) return;
      if (key == this.value) return;
      this.$emit('input', key);
      this.$emit('change', option);
      let event = document.createEvent('CustomEvent');
      event.initCustomEvent('setvalue', true, true, this.value);
      this.$el.dispatchEvent(event);
    }
  },
  computed: {
    arr() {
      if (!this.datas && !this.dict) {
        console.error('[HeyUI Error] Switchlist Component: Datas or dict parameters need to be defined at least.');
        return [];
      }
      let datas = this.datas;
      if (this.dict) {
        datas = config.getDict(this.dict);
      }

      return config.initOptions(datas, this);
    }
  }
};
</script>
