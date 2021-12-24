<template>
  <div :class="pageCls">
    <span v-if="orders.total != -1" :class="prefix + '-total'" :style="{ order: orders.total }">
      {{ hlang('h.pagination.totalBefore') }}
      <span :class="prefix + '-total-num'">{{ totalNow }}</span>
      {{ hlang('h.pagination.totalAfter') }}
    </span>
    <Select
      v-if="orders.sizes != -1"
      v-model="sizeNow"
      :no-border="small"
      :autosize="true"
      :deletable="false"
      :datas="sizesShow"
      :style="{ order: orders.sizes }"
      class="h-page-select-size"
      @change="changeSize"
    ></Select>
    <span v-if="orders.pager != -1 && this.count > 0" class="h-page-pager-container" :style="{ order: orders.pager }">
      <span :class="prevCls" @click="prev()">
        <i class="h-icon-angle-left"></i>
      </span>
      <span :class="genPagerCls(1)" @click="change(1)">1</span>
      <span v-if="pagers.length > 0 && 1 < pagers[0] - 1" class="h-page-pager h-page-ellipsis">...</span>
      <span v-for="pager of pagers" :key="pager" :class="genPagerCls(pager)" @click="change(pager)">{{ pager }}</span>
      <span v-if="pagers.length > 0 && count > pagers[pagers.length - 1] + 1" class="h-page-pager h-page-ellipsis">...</span>
      <span v-if="this.count > 1" :class="genPagerCls(count)" @click="change(count)">{{ count }}</span>
      <span :class="nextCls" @click="next()">
        <i class="h-icon-angle-right"></i>
      </span>
    </span>
    <input
      v-if="orders.jumper != -1 && count > 0"
      type="text"
      :style="{ order: orders.jumper }"
      class="h-page-jumper-input h-input"
      :value="curNow"
      @blur="jump"
      @keyup.enter="jump"
    />
  </div>
</template>
<script>
import config from 'heyui/utils/config';
import utils from 'heyui/utils/utils';
import Locale from 'heyui/mixins/locale';
import Message from 'heyui/plugins/message';
import Select from 'heyui/components/select';

const prefix = 'h-page';

export default {
  name: 'HPagination',
  components: {
    Select
  },
  emits: ['input', 'change', 'update:modelValue', 'changeSize'],
  mixins: [Locale],
  props: {
    size: {
      type: Number,
      default: () => config.getOption('page.size')
    },
    sizes: {
      type: Array,
      default: () => config.getOption('page.sizes')
    },
    align: {
      type: String,
      default: 'left'
    },
    cur: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    pagerSize: {
      type: Number,
      default: 5
    },
    small: {
      type: Boolean,
      default: () => config.getOption('page.small')
    },
    layout: {
      type: String,
      default: () => config.getOption('page.layout')
    },
    modelValue: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    let layoutList = this.layout.replace(' ', '').split(',');
    let orders = { total: -1, pager: -1, jumper: -1, sizes: -1 };
    for (let o in orders) {
      orders[o] = layoutList.indexOf(o);
    }
    return {
      sizeNow: this.modelValue.size || this.size,
      orders,
      curValue: null
    };
  },
  computed: {
    sizesShow() {
      const keyField = config.getOption('dict', 'keyName');
      const titleField = config.getOption('dict', 'titleName');
      return this.sizes.map(item => {
        return {
          [keyField]: item,
          [titleField]: this.hlang('h.pagination.sizeOfPage', { size: item })
        };
      });
    },
    curNow() {
      return this.curValue || this.modelValue.page || this.cur;
    },
    totalNow() {
      return this.modelValue.total || this.total || 0;
    },
    count() {
      return Math.ceil(this.totalNow / this.sizeNow);
    },
    pagers() {
      if (this.count < 3) {
        return [];
      }
      let pageStart = this.curNow - Math.floor(this.pagerSize / 2);
      pageStart = Math.max(2, pageStart);
      let pageEnd = pageStart + this.pagerSize - 1;
      pageEnd = Math.min(this.count - 1, pageEnd);
      pageStart = Math.min(pageStart, pageEnd - this.pagerSize + 1);
      pageStart = Math.max(2, pageStart);
      let list = [];
      for (let i = pageStart; i <= pageEnd; i++) {
        list.push(i);
      }
      return list;
    },
    prefix() {
      return prefix;
    },
    prevCls() {
      return {
        [`${prefix}-pager-disabled`]: this.curNow == 1,
        'h-page-pager': true
      };
    },
    nextCls() {
      return {
        [`${prefix}-pager-disabled`]: this.curNow == this.count,
        'h-page-pager': true
      };
    },
    pagerCls() {
      return {
        [`${prefix}-pager`]: true
      };
    },
    pageCls() {
      return {
        [`${prefix}`]: true,
        [`${prefix}-small`]: this.small,
        [`${prefix}-align-${this.align}`]: !!this.align
      };
    },
    containerCls() {
      return {};
    },
    noticeCls() {
      return {};
    }
  },
  watch: {
    cur() {
      this.curValue = null;
    },
    size() {
      this.sizeNow = this.modelValue.size || this.size;
    },
    'modelValue.page'() {
      this.curValue = null;
    },
    'modelValue.size'() {
      this.sizeNow = this.modelValue.size || this.size;
    }
  },
  methods: {
    prev() {
      if (this.curNow == 1) return;
      this.change(this.curNow - 1);
    },
    next() {
      if (this.curNow == this.count) return;
      this.change(this.curNow + 1);
    },
    jump(event) {
      let value = parseInt(event.target.value, 10);

      if (isNaN(value)) {
        Message.error(this.hlang('h.pagination.incorrectFormat'));
        return;
      }
      if (value > this.count || value < 1) {
        Message.error(this.hlang('h.pagination.overSize'));
        return;
      }
      let cur = parseInt(event.target.value, 10);
      if (cur == (this.modelValue.page || this.cur)) {
        return;
      }
      this.setvalue({ cur: cur, size: this.sizeNow });
    },
    change(cur) {
      if (this.curNow == cur) return;
      let onChange = config.getOption('page.onChange');
      if (utils.isFunction(onChange)) {
        onChange({ cur: cur, size: this.sizeNow });
      }
      this.setvalue({ cur: cur, size: this.sizeNow });
    },
    setvalue(params) {
      let value = { page: params.cur, total: this.totalNow };
      Object.assign(value, params);
      this.curValue = params.cur;
      let inputvalue = { ...value };
      delete inputvalue.cur;
      this.$emit('input', inputvalue);
      this.$emit('update:modelValue', inputvalue);
      this.$emit('change', value);
    },
    changeSize() {
      this.setvalue({ cur: 1, size: this.sizeNow });
      this.$emit('changeSize', this.sizeNow);
      let onChangeSize = config.getOption('page.onChangeSize');
      if (utils.isFunction(onChangeSize)) {
        onChangeSize(this.sizeNow);
      }
    },
    genPagerCls(num) {
      return {
        [`${prefix}-pager`]: true,
        [`${prefix}-pager-selected`]: this.curNow == num
      };
    }
  }
};
</script>
