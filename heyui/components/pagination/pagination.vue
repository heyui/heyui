<template>
  <div :class="pageCls">
    <span :class="prefix+'-total'"
          :order="getOrder('total')"
          v-if="getOrder('total')!=-1">总 <span :class="prefix+'-total-num'">{{total}}</span> 条</span>
    <Select :no-border="small"
            :autosize="true"
            :null-option="false"
            :datas="sizesShow"
            @input="changesize"
            v-model="sizeNow"
            :order="getOrder('sizes')"
            v-if="getOrder('sizes')!=-1"></Select>
    <template v-if="getOrder('pager')!=-1">
      <span :order="getOrder('pager')">
        <span :class="prevCls"><i class="h-icon-left"></i></span>
      <span @click="change(1)"
            :class="genPagerCls(1)">1</span>
      <span class="h-page-pager"
            v-if="curNow > 4">...</span>
      <span v-for="pager of pagerSize"
            @click="change(pager)"
            :class="genPagerCls(pager)">{{pager}}</span>
      <span class="h-page-pager"
            v-if="count - curNow > 3">...</span>
      <span @click="change(count)"
            :class="genPagerCls(count)">{{count}}</span>
      <span :class="nextCls"><i class="h-icon-right"></i></span>
      </span>
    </template>
    <input type="text"
           :order="getOrder('jumper')"
           v-if="getOrder('jumper')!=-1"
           v-width="40"
           :value="curNow"
           @blur="jump" />
  </div>
</template>
<script>
import config from '../../utils/config';
import utils from '../../utils/utils';

const prefix = 'h-page';

export default {
  props: {
    size: {
      type: Number,
      default: utils.getKeyValue(config, "page.size")
    },
    sizes: {
      type: Array,
      default: () => utils.getKeyValue(config, "page.sizes")
    },
    cur: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    small: {
      type: Boolean,
      default: utils.getKeyValue(config, "page.small")
    },
    layout: {
      type: String,
      default: utils.getKeyValue(config, "page.layout.default") //small
    }
  },
  data() {
    return {
      sizesShow: this.sizes.map((item) => {
        return {
          [config.key_field]: item,
          [config.title_field]: `${item} 条/页`
        }
      }),
      sizeNow: this.size,
      curNow: this.cur,
      layoutList: this.layout.replace(' ', '').split(',')
    };
  },
  watch: {
    cur() {
      // this.curNow = this.cur;
    }
  },
  methods: {
    getOrder(type) {
      return this.layoutList.indexOf(type);
    },
    jump(event) {
      let value = parseInt(event.target.value, 10);
      log(value);
      if (isNaN(value)) {
        this.$Message.error("您输入的值格式不正确");
        return;
      }
      if (value > this.count || value < 1) {
        this.$Message.error("您输入的值超过范围");
        return;
      }
      this.curNow = parseInt(event.target.value, 10);
      this.$emit("change", { cur: this.curNow, size: this.sizeNow });
    },
    change(cur) {
      this.curNow = cur;
      this.$emit("change", { cur: this.curNow, size: this.sizeNow });
    },
    changesize() {
      this.$emit("change", { cur: 1, size: this.sizeNow });
    },
    genPagerCls(num) {
      return {
        [`${prefix}-pager`]: true,
        [`${prefix}-pager-selected`]: this.curNow == num
      }
    }
  },
  computed: {
    count() {
      return Math.ceil(this.total / this.size);
    },
    pagerSize() {
      let pageStart = this.curNow < 4 ? 2 : (this.curNow - 2)
      let size = this.count > 6 ? 5 : (this.count - 2);
      if (pageStart + size >= this.count) {
        pageStart = this.count - size + (this.count == this.curNow ? 1 : 0);
      }
      if (this.curNow == 1 || this.curNow == this.count) size -= 1;
      let list = [];
      for (let i = 0; i < size; i++) {
        list.push(i + pageStart);
      }
      return list;
    },
    prefix() {
      return prefix;
    },
    prevCls() {
      return {
        [`${prefix}-prev`]: true,
        [`${prefix}-prev-disabled`]: this.curNow == 1
      }
    },
    nextCls() {
      return {
        [`${prefix}-prev`]: true,
        [`${prefix}-prev-disabled`]: this.curNow == this.count
      }
    },
    pagerCls() {
      return {
        [`${prefix}-pager`]: true
      }
    },
    pageCls() {
      return {
        [`${prefix}`]: true,
        [`${prefix}-small`]: this.small
      }
    },
    containerCls() {
      return {
      }
    },
    noticeCls() {
      return {
      }
    }
  }
};
</script>
