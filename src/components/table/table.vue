<template>
  <div :class="tableCls">
    <div class="h-table-header" :style="{'padding-right': (scrollWidth+'px')}">
      <table :style="{'margin-left': (-scrollLeft+'px')}">
        <colgroup>
          <col v-if="checkbox" width="60" />
          <col v-for="c of columns" :width="getWidth(c)" />
        </colgroup>
        <tr>
          <th v-if="checkbox" class="text-center">
            <Checkbox v-if="fixedColumnLeft.length==0" :indeterminate="checks.length>0&&checks.length<datas.length" :checked="checks.length == datas.length" @click.native="checkAll"></Checkbox>
          </th>
          <th v-for="c of columns">{{c.title}}</th>
        </tr>
      </table>
      <div class="h-table-fixed-cover" :style="{'width': (scrollWidth+'px')}"></div>
    </div>
    <div class="h-table-container">
      <div class="h-table-content-empty" v-height="height" v-if="datas.length == 0">
        <slot name='empty'></slot>
        <div v-if="!$slots.empty">暂无数据</div>
      </div>
      <div class="h-table-body" v-show="datas.length" :style="bodyStyle">
        <table>
          <colgroup>
            <col v-if="checkbox" width="60" />
            <col v-for="c of columns" :width="getWidth(c)" />
          </colgroup>
          <tbody class="h-table-tbody">
            <tr v-for="d of datas" @mouseover="mouseover(d)" @mouseout="mouseout(d)" :key="d" :class="isHovered(d)">
              <td v-if="checkbox" class="text-center">
                <Checkbox v-if="fixedColumnLeft.length==0" v-model="checks" :value="d"></Checkbox>
              </td>
              <slot :data="d"></slot>
            </tr>
          </tbody>
        </table>
      </div>
  
      <div v-if="fixedColumnLeft.length" class="h-table-fixed-left" v-width="leftWidth" :style="bodyStyle">
        <table :style="{'margin-top': (-scrollTop+'px')}" v-width="tableWidth">
          <colgroup>
            <col v-if="checkbox" width="60" />
            <col v-for="c of columns" :width="getWidth(c)" />
          </colgroup>
          <tbody class="h-table-tbody">
            <tr v-for="d of datas" @mouseover="mouseover(d)" @mouseout="mouseout(d)" :class="isHovered(d)">
              <td v-if="checkbox" class="text-center">
                <Checkbox v-model="checks" :value="d"></Checkbox>
              </td>
              <slot :data="d"></slot>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-if="fixedColumnRight.length" class="h-table-fixed-right" v-width="rightWidth" :style="{'margin-right': (scrollWidth+'px'), 'height': (height+'px')}">
        <table :style="{'margin-top': (-scrollTop+'px')}" v-width="tableWidth">
          <colgroup>
            <col v-for="c of columns" :width="getWidth(c)" />
          </colgroup>
          <tbody class="h-table-tbody">
            <tr v-for="d of datas" @mouseover="mouseover(d)" @mouseout="mouseout(d)" :class="isHovered(d)">
              <slot :data="d"></slot>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div v-if="fixedColumnLeft.length" class="h-table-fixed-header-left">
      <table v-width="leftWidth">
        <colgroup>
          <col v-if="checkbox" width="60" />
          <col v-for="c of fixedColumnLeft" :width="getWidth(c)" />
        </colgroup>
        <tr>
          <th v-if="checkbox" class="text-center">
            <Checkbox :indeterminate="checks.length>0&&checks.length<datas.length" :checked="checks.length == datas.length" @click.native="checkAll"></Checkbox>
          </th>
          <th v-for="c of fixedColumnLeft">{{c.title}}</th>
        </tr>
      </table>
    </div>
    <div v-if="fixedColumnRight.length" :style="{'margin-right': (scrollWidth+'px')}" class="h-table-fixed-header-right">
      <table v-width="rightWidth">
        <colgroup>
          <col v-for="c of fixedColumnRight" :width="getWidth(c)" />
        </colgroup>
        <tr>
          <th v-for="c of fixedColumnRight">{{c.title}}</th>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import utils from '../../utils/utils';

const prefix = 'h-table';

export default {
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    datas: {
      type: Array,
      default: () => []
    },
    border: {
      type: Boolean,
      default: false
    },
    height: Number,
    checkbox: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scrollWidth: 0,
      scrollLeft: 0,
      scrollTop: 0,
      checks: [],
      hoveredTr: null,
      leftWidth: 0,
      rightWidth: 0,
      tableWidth: 400,
    };
  },
  watch: {
    datas: {
      handler(value, oldValue) {
        if (this.height) {
          this.resize();
        }
        if (value != oldValue) {
          this.checks.splice(0, this.checks.length);
        }
      },
      deep: true
    },
    checks: {
      handler() {
        this.$emit('select', this.checks);
      },
      deep: true
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resize);
  },
  mounted() {
    this.$nextTick(() => {
      let body = this.$el.querySelector(".h-table-body");
      if (body) {
        let scrollEvent = (event) => {
          event.preventDefault();
          event.stopPropagation();
          body.scrollLeft = body.scrollLeft + (event.deltaX);
          body.scrollTop = body.scrollTop + (event.deltaY);
          this.scrollLeft = body.scrollLeft;
          this.scrollTop = body.scrollTop;
        };
        body.addEventListener("scroll", () => {
          this.scrollLeft = body.scrollLeft;
          this.scrollTop = body.scrollTop;
        });
        let fixedright = this.$el.querySelector(".h-table-fixed-right");
        let fixedleft = this.$el.querySelector(".h-table-fixed-left");
        if (fixedright) {
          fixedright.addEventListener("mousewheel", scrollEvent);
        }
        if (fixedleft) {
          fixedleft.addEventListener("mousewheel", scrollEvent);
        }
      }
      if(this.fixedColumnLeft.length||this.fixedColumnRight.length){
        window.addEventListener('resize', this.resize);
      }
      this.resize();
    });
  },
  methods: {
    checkAll() {
      if (this.checks.length == this.datas.length) {
        this.checks.splice(0, this.datas.length);
      } else {
        this.checks = utils.extend([], this.datas);
      }
      this.$emit('selectAll', this.checks);
    },
    getWidth(column) {
      if (utils.isObject(column) && column.width) {
        return column.width;
      } else {
        return "";
      }
    },
    resize() {
      this.$nextTick(() => {
        let body = this.$el.querySelector(".h-table-body");
        if (body) {
          this.scrollWidth = body.offsetWidth - body.clientWidth;
        }
        this.tableWidth = this.$el.querySelector(".h-table-container").clientWidth;
        this.initFixedWidth();
      });
    },
    mouseover(data) {
      this.hoveredTr = data;
    },
    mouseout() {
      this.hoveredTr = null;
    },
    isHovered(d) {
      return { [`${prefix}-hover-tr`]: this.hoveredTr === d };
    },
    initFixedWidth() {
      let ths = this.$el.querySelectorAll(".h-table-header table>tr>th");
      let fixedColumnLeftLength = this.fixedColumnLeft.length + (this.checkbox ? 1 : 0);
      let leftWidth = 0;
      for (let i = 0; i < fixedColumnLeftLength; i++) {
        leftWidth += ths[i].clientWidth || 0;
      }
      this.leftWidth = leftWidth;

      let fixedColumnRightLength = this.fixedColumnRight.length;
      let rightWidth = 0;
      for (let i = ths.length - 1; i > ths.length - fixedColumnRightLength - 1; i--) {
        rightWidth += ths[i].clientWidth || 0;
      }
      this.rightWidth = rightWidth;
    },
  },
  computed: {
    fixedColumnLeft() {
      let columns = [];
      for (let c of this.columns) {
        if (c.fixed == 'left') {
          columns.push(c);
        }
      }
      return columns;
    },
    fixedColumnRight() {
      let columns = [];
      for (let c of this.columns) {
        if (c.fixed == 'right') {
          columns.push(c);
        }
      }
      return columns;
    },
    tableCls() {
      return {
        [prefix]: true,
        [`${prefix}-border`]: !!this.border
      }
    },
    fixedBodyStyle() {
      let s = {};
      if (!!this.height) {
        s.height = `${this.height}px`;
      }
      s['margin-right'] = `${this.scrollWidth}px`;
      return s;
    },
    bodyStyle() {
      let s = {};
      if (!!this.height) {
        s.height = `${this.height}px`;
      }
      return s;
    }
  }
};
</script>