<template>
  <div :class="tableCls">
    <div class="h-table-header"
         :style="{'padding-right': (scrollWidth+'px')}">
      <table :style="{'margin-left': (-scrollLeft+'px')}">
        <colgroup>
          <col v-if="checkbox && fixedColumnLeft.length==0" width="60"/>
          <col v-for="c of columns"
               :width="getWidth(c)" />
        </colgroup>
        <tr>
          <th v-if="checkbox && fixedColumnLeft.length==0" class="text-center"><Checkbox :indeterminate="checks.length>0&&checks.length<datas.length" :checked="checks.length == datas.length" @click.native="checkAll"></Checkbox></th>
          <th v-for="c of columns">{{c.title}}</th>
        </tr>
      </table>
      <div class="h-table-fixed-cover":style="{'width': (scrollWidth+'px')}"></div>
    </div>
    <div class="h-table-container">
      <div class="h-table-body"
           :style="bodyStyle">
        <table>
          <colgroup>
          <col v-if="checkbox && fixedColumnLeft.length==0" width="60"/>
            <col v-for="c of columns"
                 :width="getWidth(c)" />
          </colgroup>
          <tbody class="h-table-tbody">
            <tr v-for="d of datas" @mouseover="mouseover(d)"  @mouseout="mouseout(d)" :key="d" :class="isHovered(d)">
              <td v-if="checkbox && fixedColumnLeft.length==0"  class="text-center">
                <Checkbox v-model="checks" :value="d"></Checkbox>
              </td>
              <slot name="fixed-left"
                    :data="d"></slot>
              <slot name="tr"
                    :data="d"></slot>
              <slot name="fixed-right"
                    :data="d"></slot>
            </tr>
          </tbody>
        </table>
      </div>
  
      <div v-if="fixedColumnLeft.length"
           class="h-table-fixed-left"
           :style="bodyStyle">
        <table :style="{'margin-top': (-scrollTop+'px')}">
          <colgroup>
            <col v-if="checkbox && fixedColumnLeft.length>0" width="60"/>
            <col v-for="c of fixedColumnLeft"
                 :width="getWidth(c)" />
          </colgroup>
          <tbody class="h-table-tbody">
            <tr v-for="d of datas" @mouseover="mouseover(d)"  @mouseout="mouseout(d)" :class="isHovered(d)">
              <td v-if="checkbox && fixedColumnLeft.length>0"  class="text-center"><Checkbox v-model="checks" :value="d"></Checkbox></td>
              <slot name="fixed-left"
                    :data="d"></slot>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-if="fixedColumnRight.length"
           class="h-table-fixed-right"
           :style="fixedBodyStyle">
        <table :style="{'margin-top': (-scrollTop+'px')}">
          <colgroup>
            <col v-for="c of fixedColumnRight"
                 :width="getWidth(c)" />
          </colgroup>
          <tbody class="h-table-tbody">
            <tr v-for="d of datas" @mouseover="mouseover(d)"  @mouseout="mouseout(d)" :class="isHovered(d)">
              <slot name="fixed-right"
                    :data="d"></slot>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div v-if="fixedColumnLeft.length"
         class="h-table-fixed-header-left">
      <table>
        <colgroup>
          <col v-if="checkbox && fixedColumnLeft.length>0" width="60"/>
          <col v-for="c of fixedColumnLeft"
               :width="getWidth(c)" />
        </colgroup>
        <tr>
          <th v-if="checkbox && fixedColumnLeft.length>0"  class="text-center"><Checkbox :indeterminate="checks.length>0&&checks.length<datas.length" :checked="checks.length == datas.length" @click.native="checkAll"></Checkbox></th>
          <th v-for="c of fixedColumnLeft">{{c.title}}</th>
        </tr>
      </table>
    </div>
    <div v-if="fixedColumnRight.length"
         :style="{'margin-right': (scrollWidth+'px')}"
         class="h-table-fixed-header-right">
      <table>
        <colgroup>
          <col v-for="c of fixedColumnRight"
               :width="getWidth(c)" />
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
      default: []
    },
    datas: {
      type: Array,
      default: []
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
      hoveredTr: null
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
    }
  },
  mounted() {
    this.resize();
    this.$nextTick(() => {
      let body = this.$el.querySelector(".h-table-body");
      if (body) {
        body.addEventListener("scroll", () => {
          this.scrollLeft = body.scrollLeft;
          this.scrollTop = body.scrollTop;
        });
      }
    });
  },
  methods: {
    checkAll() {
      if (this.checks.length == this.datas.length) {
        this.checks.splice(0, this.datas.length);
      } else {
        this.checks = utils.extend([], this.datas);
      }
      this.$emit("check", this.checks);
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
    }
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