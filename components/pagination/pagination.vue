<template>
  <div :class="pageCls">
        <span :class="prefix+'-total'">总 <span :class="prefix+'-total-num'">{{total}}</span> 条</span>
        <Select :no-border="small"
                :autosize = "true"
                :null-option = "false"
                :datas="sizesShow"
                @input="changesize"
                v-model="sizeNow"></Select>
        <span :class="prevCls"><i class="h-icon-left"></i></span>
        <span :class="nextCls"><i class="h-icon-right"></i></span>
        <span @click="change(1)" :class="genPagerCls(1)">1</span>
        <span class="h-page-pager" v-if="curNow > 3">...</span>
        <span v-for="pager of pagerSize" @click="change(pager)" :class="genPagerCls(pager)">{{pager}}</span>
        <span class="h-page-pager" v-if="count - curNow > 3">...</span>
        <span @click="change(count)" :class="genPagerCls(count)">{{count}}</span>
        <input type="text" v-width="40" v-model="curNow" @blur="jump"/>
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
      this.curNow = this.cur;
    }
  },
  methods: {
    jump() {
      if (this.curNow > this.total) {
        this.$Message.error("您输入的值超过范围");
        return;
      }
      this.$emit("curChange", this.curNow);
    },
    change(cur) {
      this.curNow = cur;
      this.$emit("curChange", cur);
    },
    changesize() {
      this.$emit("sizeChange", this.sizeNow);
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
      let pageStart = this.curNow < 2 ? 2 : (this.curNow - 2);
      let size = this.count > 5 ? 4 : (this.count - 1);
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
