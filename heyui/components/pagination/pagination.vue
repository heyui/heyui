<template>
  <div :class="pageCls"
       :style="pageStyle">
    <span :class="prefix+'-total'"
          :style="{order:orders.total}"
          v-if="orders.total!=-1">总 <span :class="prefix+'-total-num'">{{total}}</span> 条</span>
    <Select :no-border="small"
            :autosize="true"
            :null-option="false"
            :datas="sizesShow"
            @input="changesize"
            v-model="sizeNow"
            :style="{order:orders.sizes}"
            v-if="orders.sizes!=-1"></Select>
    <span class="h-page-pager-container"
          :style="{order:orders.pager}"
          v-if="orders.pager!=-1 && this.count>0">
                      <span :class="prevCls" @click="prev()"><i class="h-icon-left"></i></span>
    <span @click="change(1)"
          :class="genPagerCls(1)">1</span>
    <span v-if="curNow > 4"
          class="h-page-pager h-page-ellipsis">...</span>
    <span v-for="pager of pagerSize"
          @click="change(pager)"
          :class="genPagerCls(pager)">{{pager}}</span>
    <span class="h-page-pager h-page-ellipsis"
          v-if="count - curNow > 3">...</span>
    <span @click="change(count)"
          :class="genPagerCls(count)"
          v-if="this.count>1">{{count}}</span>
    <span :class="nextCls"
          @click="next()"><i class="h-icon-right"></i></span>
    </span>
    <input type="text"
           :style="{order:orders.jumper}"
           v-if="orders.jumper!=-1"
           v-width="40"
           :value="curNow"
           @blur="jump" />
  </div>
</template>
<script>
import config from '../../utils/config';

const prefix = 'h-page';

const pageConfig = config.getOption('page');
const keyField = config.getOption('dict', 'key_field');
const titleField = config.getOption('dict', 'title_field');

export default {
  props: {
    size: {
      type: Number,
      default: pageConfig.size
    },
    sizes: {
      type: Array,
      default: () => pageConfig.sizes
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
    small: {
      type: Boolean,
      default: pageConfig.small
    },
    layout: {
      type: String,
      default: pageConfig.layout
    }
  },
  data() {
    let layoutList = this.layout.replace(' ', '').split(',');
    let orders = { total: -1, pager: -1, jumper: -1, sizes: -1 }
    for (let o in orders) {
      orders[o] = layoutList.indexOf(o);
    }
    return {
      sizesShow: this.sizes.map((item) => {
        return {
          [keyField]: item,
          [titleField]: `${item} 条/页`
        }
      }),
      sizeNow: this.size,
      curNow: this.cur,
      orders
    };
  },
  watch: {
    cur() {
      // this.curNow = this.cur;
    }
  },
  methods: {
    prev() {
      this.change(this.curNow - 1);
    },
    next() {
      this.change(this.curNow + 1);
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
      if (this.curNow == cur) return;
      this.curNow = cur;
      this.$emit("change", { cur: this.curNow, size: this.sizeNow });
    },
    changesize() {
      this.curNow = 1;
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
    pageStyle() {
      return {
        "justify-content": {
          left: "flex-start",
          center: "center",
          right: "flex-end",
        }[this.align]
      }
    },
    count() {
      return Math.ceil(this.total / this.sizeNow);
    },
    pagerSize() {
      if (this.count < 3) {
        return [];
      }
      let pageStart = this.curNow < 4 ? 2 : (this.curNow - 2)
      let size = this.count > 6 ? 5 : (this.count - 2);
      // log(size);
      // if (this.curNow == 1 || this.curNow == this.count) size -= 1;
      if (pageStart + size >= this.count) {
        pageStart = this.count - size;
      }
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
        [`${prefix}-pager-disabled`]: this.curNow == 1,
        ['h-page-pager']: true
      }
    },
    nextCls() {
      return {
        [`${prefix}-pager-disabled`]: this.curNow == this.count,
        ['h-page-pager']: true
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
