
<template>
  <div class="h-transfer">
    <div class="h-transfer-source">
      <slot name="sourceHeader">
        <div class="h-transfer-header" v-if="option&&option.ltHeadText">{{option.ltHeadText}}</div>
      </slot>
      <div v-if="option.filterable && ( sources.length || ltSearchText)" class="h-transfer-filter">
        <Search position="front" :placeholder="option?option.placeholder:'搜索'" v-model="ltSearchText" />
      </div>
      <div class="h-transfer-list" :style="transferListStyle">
        <div class="h-transfer-item" v-for="op in sources" :key="op[key]">
          <Checkbox v-model="ltChecked" :value="op[key]" :checked="false">
            <slot name="item" :option="op" type="source">
              <template v-if="option&&option.render">{{option.render(op)}}</template>
              <template v-else>{{op.text}}</template>
            </slot>
          </Checkbox>
        </div>
        <div class="h-transfer-item text-center" v-if="sources.length===0">无数据</div>
      </div>
    </div>

    <div class="h-transfer-switch">
      <button class="h-btn h-btn-s" type="button" @click="move(-1)">
        <template v-if="option&&option.ltText">{{option.ltText}}</template>
        <i v-else-if="option&&option.ltIcon" :class="option.ltIcon"></i>
        <i v-else class="h-icon-left"></i>
      </button>
      <button class="h-btn h-btn-s" type="button" @click="move(1)">
        <template v-if="option&&option.rtText">{{option.rtText}}</template>
        <i v-else-if="option&&option.rtIcon" :class="option.rtIcon"></i>
        <i v-else class="h-icon-right"></i>
      </button>
    </div>

    <div class="h-transfer-target">
      <slot name="targetHeader">
        <div class="h-transfer-header" v-if="option&&option.rtHeadText">{{option.rtHeadText}}</div>
      </slot>
      <div v-if="option.filterable && ( targets.length || rtSearchText)" class="h-transfer-filter">
        <Search position="front" :placeholder="option?option.placeholder:'搜索'" v-model="rtSearchText" />
      </div>
      <div class="h-transfer-list" :style="transferListStyle">
        <div class="h-transfer-item" v-for="op in targets" :key="op[key]">
          <label>
            <Checkbox v-model="rtChecked" :value="op[key]" >
              <slot name="item" :option="op" type="target">
                <template v-if="option&&option.render">{{option.render(op)}}</template>
                <template v-else>{{op.text}}</template>
              </slot>
            </Checkbox>
          </label>
        </div>
        <div class="h-transfer-item text-center" v-if="targets.length===0">无数据</div>
      </div>
    </div>
  </div>
</template>

<script>
import Checkbox from 'heyui/src/components/checkbox';
import Search from 'heyui/src/components/search';

export default {
  name: 'hTransfer',
  components: { Checkbox, Search },
  props: {
    value: {
      type: Array,
      default: () => []
    },
    datas: {
      type: Array,
      default: () => []
    },
    keyName: {
      type: String,
      default: 'key'
    },
    height: Number,
    option: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      ltChecked: [],
      rtChecked: [],
      ltSearchText: '',
      rtSearchText: '',
      key: this.keyName || 'key'
    };
  },
  created() {
    this.$emit('init', this.sources, this.targets);
  },
  methods: {
    move(direction) {
      this.$emit('transfer', direction, this.sources, this.targets);
      let value = this.value ? [...this.value] : [];
      if (direction === 1 && this.ltChecked.length > 0) {
        this.rtSearchText = null;
        value.push(...this.ltChecked);
        this.ltChecked.length = 0;
      } else if (direction === -1 && this.rtChecked.length > 0) {
        this.ltSearchText = null;
        this.rtChecked.forEach(d => {
          value.splice(value.indexOf(d), 1);
        });
        this.rtChecked.length = 0;
      }
      this.$emit('input', value);
      this.$emit('change', value);
    }
  },
  computed: {
    transferListStyle() {
      let param = {};
      if (this.height) {
        param['height'] = `${this.height}px`;
      }
      return param;
    },
    sources() {
      let value = this.value || [];
      let key = this.keyName || 'key';
      let result = this.datas.filter(d => value.indexOf(d[key]) == -1);
      if (this.ltSearchText && this.ltSearchText.trim()) {
        return result.filter(d => d.text.indexOf(this.ltSearchText.trim()) != -1);
      }
      return result;
    },
    targets() {
      let value = this.value || [];
      let key = this.keyName || 'key';
      let result = this.datas.filter(d => value.indexOf(d[key]) != -1);
      if (this.rtSearchText && this.rtSearchText.trim()) {
        return result.filter(d => d.text.indexOf(this.rtSearchText.trim()) != -1);
      }
      return result;
    }
  }
};
</script>
