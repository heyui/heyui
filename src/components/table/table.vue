<template>
  <div :class="tableCls">
    <div class="h-table-header" :style="{'padding-right': (scrollWidth+'px')}">
      <table class="h-table-header-table" :style="{'margin-left': (-scrollLeft+'px')}">
        <colgroup>
          <col v-if="checkbox||radio" width="60" />
          <col v-for="(c, index) of computeColumns" :width="getWidth(c)" :key="index+update.columns" />
        </colgroup>
        <template v-if="ths">
          <tr v-for="(thdata, thindex) of ths" :key="thindex+update.columns">
            <th v-if="checkbox&&thindex==0" class="h-table-th-checkbox" :rowspan="ths.length">
              <CheckboxAll v-if="fixedColumnLeft.length==0" :checks="checks" :checkableDatas="checkableDatas" @checkAll="checkAll"></CheckboxAll>
            </th>
            <th v-if="radio&&thindex==0" class="h-table-th-radio" :rowspan="ths.length"></th>
            <TableTh v-for="(thdata, index) of thdata" :key="index+update.columns" v-bind="thdata" :sortStatus="sortStatus"></TableTh>
          </tr>
        </template>
        <tr v-else>
          <th v-if="checkbox" class="h-table-th-checkbox">
            <CheckboxAll v-if="fixedColumnLeft.length==0" :checks="checks" :checkableDatas="checkableDatas" @checkAll="checkAll"></CheckboxAll>
          </th>
          <th v-else-if="radio" class="h-table-th-radio"></th>
          <TableTh v-for="(c, index) of computeColumns" :key="index+update.columns" v-bind="c" :sortStatus="sortStatus"></TableTh>
        </tr>
      </table>
      <div class="h-table-fixed-cover" :style="{'width': (scrollWidth+'px')}"></div>
    </div>
    <div class="h-table-container">
      <div class="relative">
        <div class="h-table-body" :style="bodyStyle">
          <template v-if="tableDatas.length == 0">
            <div class="h-table-content-empty" >
              <slot name='empty'></slot>
              <div v-if="!$slots.empty">{{'h.table.empty' | hlang}}</div>
            </div>
            <div class="h-table-content-empty-width" :style="{width: emptyWidth + 'px'}"></div>
          </template>
          <table class="h-table-body-table" v-show="tableDatas.length">
            <colgroup>
              <col v-if="checkbox" width="60" />
              <col v-if="radio" width="60" />
              <col v-for="(c, index) of computeColumns" :width="getWidth(c)" :key="index+update.columns" />
            </colgroup>
            <tbody class="h-table-tbody">
              <template v-for="(d, index) of tableDatas">
                <TableTr @click="triggerTrClicked" @dblclick="triggerTrDblclicked" @toggleTree="toggleTree" :datas="d" :key="d._heyui_uuid"
                  :index="index" :trIndex="d._heyui_uuid" :class="getTrCls(d, index)">
                  <td v-if="checkbox" class="h-table-td-checkbox">
                    <Checkbox v-if="fixedColumnLeft.length==0" :disabled="d._disabledSelect" :key="d._heyui_uuid" v-model="checks" :value="d"></Checkbox>
                  </td>
                  <td v-if="radio" class="h-table-td-radio">
                    <Radio v-if="fixedColumnLeft.length==0" :key="d._heyui_uuid" v-model="rowSelected" :value="d"></Radio>
                  </td>
                  <slot :data="d" :index="index" v-if="isTemplateMode"></slot>
                </TableTr>
                <tr :key="d._heyui_uuid+'expand'" class="h-table-expand-tr" v-if="$scopedSlots.expand && d._expand">
                  <td class="h-table-expand-cell" :colspan="totalCol">
                    <slot :data="d" :index="index" name="expand"></slot>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>

        <div v-if="fixedColumnLeft.length" class="h-table-fixed-left" :style="fixedBodyStyle">
          <table class="h-table-fixed-left-table" :style="{'margin-top': (-scrollTop+'px'), width: (tableWidth + 'px')}">
            <colgroup>
              <col v-if="checkbox" width="60" />
              <col v-if="radio" width="60" />
              <col v-for="(c, index) of computeColumns" :width="getWidth(c)" :key="index+update.columns" />
            </colgroup>
            <tbody class="h-table-tbody">
              <template v-for="(d, index) of tableDatas">
                <TableTr @click="triggerTrClicked" @dblclick="triggerTrDblclicked" @toggleTree="toggleTree" :datas="d" :key="d._heyui_uuid"
                  :index="index" :trIndex="d._heyui_uuid" :class="getTrCls(d, index)">
                  <td v-if="checkbox" class="h-table-td-checkbox">
                    <Checkbox v-model="checks" :key="d._heyui_uuid" :disabled="d._disabledSelect" :value="d"></Checkbox>
                  </td>
                  <td v-if="radio" class="h-table-td-radio">
                    <Radio :key="d._heyui_uuid" v-model="rowSelected" :value="d"></Radio>
                  </td>
                  <slot :data="d" :index="index" v-if="isTemplateMode"></slot>
                </TableTr>
              </template>
            </tbody>
          </table>
        </div>
        <div v-if="fixedColumnRight.length" class="h-table-fixed-right" :style="fixedRightBodyStyle">
          <table class="h-table-fixed-right-table" :style="{'margin-top': (-scrollTop+'px'), width: (tableWidth + 'px')}">
            <colgroup>
              <col v-for="(c, index) of computeColumns" :width="getWidth(c)" :key="index+update.columns" />
            </colgroup>
            <tbody class="h-table-tbody">
              <template v-for="(d, index) of tableDatas">
                <TableTr @click="triggerTrClicked" @dblclick="triggerTrDblclicked" @toggleTree="toggleTree" :datas="d" :key="d._heyui_uuid"
                  :index="index" :trIndex="d._heyui_uuid" :class="getTrCls(d, index)">
                  <slot :data="d" :index="index" v-if="isTemplateMode"></slot>
                </TableTr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
      <Loading :loading="loading"></Loading>
    </div>
    <div v-if="fixedColumnLeft.length" class="h-table-fixed-header-left">
      <table :style="{width: leftWidth + 'px'}">
        <colgroup>
          <col v-if="checkbox" width="60" />
          <col v-if="radio" width="60" />
          <col v-for="(c, index) of fixedColumnLeft" :width="getWidth(c)" :key="index+update.columns" />
        </colgroup>
        <tr>
          <th v-if="checkbox" class="h-table-th-checkbox">
            <CheckboxAll :checks="checks" :checkableDatas="checkableDatas" @checkAll="checkAll"></CheckboxAll>
          </th>
          <th v-if="radio" class="h-table-th-radio"> </th>
          <TableTh v-for="(thdata, index) of fixedColumnLeft" :key="index+update.columns" v-bind="thdata" :sortStatus="sortStatus"></TableTh>
        </tr>
      </table>
    </div>
    <div v-if="fixedColumnRight.length" :style="{'margin-right': (scrollWidth+'px')}" class="h-table-fixed-header-right">
      <table :style="{width: rightWidth + 'px'}">
        <colgroup>
          <col v-for="(c, index) of fixedColumnRight" :width="getWidth(c)" :key="index+update.columns" />
        </colgroup>
        <tr>
          <TableTh v-for="(thdata, index) of fixedColumnRight" :key="index+update.columns" v-bind="thdata" :sortStatus="sortStatus"></TableTh>
        </tr>
      </table>
    </div>
    <div class="h-table-items" v-if="!isTemplateMode"><slot></slot></div>
  </div>
</template>
<script>
import utils from 'heyui/src/utils/utils';
import TableTr from './tabletr';
import TableTh from './tableth';
import debounce from 'heyui/src/utils/debounce';
import Checkbox from 'heyui/src/components/checkbox';
import Radio from 'heyui/src/components/radio';
import Loading from 'heyui/src/components/loading';

import CheckboxAll from './table-checkbox';

const prefix = 'h-table';

export default {
  name: 'hTable',
  components: {
    TableTr,
    TableTh,
    Checkbox,
    Radio,
    Loading,
    CheckboxAll
  },
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
    },
    radio: {
      type: Boolean,
      default: false
    },
    stripe: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    selectWhenClickTr: {
      type: Boolean,
      default: false
    },
    ths: Array,
    selectRow: {
      type: Boolean,
      default: false
    },
    getTrClass: Function
  },
  data() {
    return {
      uuid: `uuid-${utils.uuid()}`,
      isMounted: false,
      update: {
        datas: 0,
        columns: 0
      },
      scrollWidth: 0,
      scrollHeight: 0,
      scrollLeft: 0,
      scrollTop: 0,
      checks: [],
      hoveredTr: null,
      leftWidth: 0,
      rightWidth: 0,
      tableWidth: 400,
      computeColumns: [],
      datasBak: [...this.datas],
      sortStatus: {
        type: null,
        prop: null
      },
      tableDatas: [...this.datas],
      rowSelected: null,
      emptyWidth: 0
    };
  },
  watch: {
    datas: {
      handler() {
        if (this.height || this.fixedColumnLeft.length || this.fixedColumnRight.length) {
          this.resize();
        }
        let changed = this.datasBak.length != this.datas.length;
        let n = 0;
        while (!changed && this.datas.length > n) {
          changed = this.datas[n] !== this.datasBak[n];
          n += 1;
        }
        if (changed) {
          this.labelDatas(this.datas);
          this.update.datas += 1;
          this.checks.splice(0, this.checks.length);
          this.tableDatas = [...this.datas];
        }
        this.datasBak = [...this.datas];
      },
      deep: true
    },
    columns: {
      handler() {
        this.initColumns();
        if (this.height || this.fixedColumnLeft.length || this.fixedColumnRight.length) {
          this.resize();
        }
        this.update.columns += 1;
      },
      deep: true
    },
    checks: {
      handler() {
        this.$emit('select', this.checks);
      },
      deep: true
    },
    checkbox() {
      if (this.height || this.fixedColumnLeft.length || this.fixedColumnRight.length) {
        this.resize();
      }
    },
    radio() {
      if (this.height || this.fixedColumnLeft.length || this.fixedColumnRight.length) {
        this.resize();
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resize);
  },
  beforeMount() {
    this.labelDatas(this.datas);
  },
  mounted() {
    this.isMounted = true;
    this.initColumns();
    this.$nextTick(() => {
      let body = this.$el.querySelector('.h-table-body');
      if (body) {
        let scrollEvent = (event) => {
          // event.preventDefault();
          // event.stopPropagation();
          body.scrollLeft = body.scrollLeft + (event.deltaX);
          body.scrollTop = body.scrollTop + (event.deltaY);
          if (this.scrollTop != body.scrollTop) {
            event.stopPropagation();
            event.preventDefault();
          }
          this.scrollLeft = body.scrollLeft;
          this.scrollTop = body.scrollTop;
        };
        body.addEventListener('scroll', () => {
          this.scrollLeft = body.scrollLeft;
          this.scrollTop = body.scrollTop;
        });
        let fixedright = this.$el.querySelector('.h-table-fixed-right');
        let fixedleft = this.$el.querySelector('.h-table-fixed-left');
        if (fixedright) {
          fixedright.addEventListener('mousewheel', scrollEvent);
        }
        if (fixedleft) {
          fixedleft.addEventListener('mousewheel', scrollEvent);
        }
      }
      if (this.fixedColumnLeft.length || this.fixedColumnRight.length) {
        window.addEventListener('resize', this.resize);
      }
      this.resize();
      setTimeout(() => {
        this.resize();
      }, 100);

      let tbodys = this.$el.querySelectorAll('.h-table-tbody');
      for (let tbody of tbodys) {
        tbody.addEventListener('mouseover', (event) => {
          let tr = null;
          let target = event.target;
          while (target.parentNode != window.document.body) {
            if (target.tagName == 'TH') {
              return;
            } else if (target.tagName == 'TR') {
              tr = target;
              break;
            }
            target = target.parentNode;
          }
          if (tr) {
            utils.addClass(tr, 'h-table-tr-hovered');
            let index = tr.getAttribute('trIndex');
            for (let el of this.$el.querySelectorAll(`.h-table-tbody>tr[trIndex='${index}']`) || []) {
              utils.addClass(el, 'h-table-tr-hovered');
            }
          }
        }, false);
        tbody.addEventListener('mouseout', (event) => {
          for (let el of this.$el.querySelectorAll('.h-table-tr-hovered') || []) {
            utils.removeClass(el, 'h-table-tr-hovered');
          }
        }, false);
      }
    });
  },
  methods: {
    labelDatas(datas) {
      for (let d of datas) {
        if (!d._heyui_uuid) {
          this.$set(d, '_heyui_uuid', utils.uuid());
        }
      }
    },
    toggleTree(data, fold) {
      if (data.children && data.children.length) {
        if (data._opened || fold) {
          data.children.forEach(item => {
            this.toggleTree(item, true);
            let cindex = this.tableDatas.indexOf(item);
            let checkIndex = this.checks.indexOf(item);
            if (cindex > -1) {
              this.tableDatas.splice(cindex, 1);
            }
            if (checkIndex > -1) {
              this.checks.splice(checkIndex, 1);
            }
          });
          this.$set(data, '_opened', false);
        } else {
          this.labelDatas(data.children);
          data.children.forEach(item => {
            this.$set(item, '_level', (data._level || 0) + 1);
          });
          this.$set(data, '_opened', true);
          let index = this.tableDatas.indexOf(data);
          this.tableDatas.splice(index + 1, 0, ...data.children);
        }
      }
    },
    getTrCls(d, index) {
      let cls = {
        'h-table-tr-selected': this.isChecked(d),
        // eslint-disable-next-line comma-dangle
        'h-table-tr-select-disabled': d._disabledSelect,
      };
      if (this.getTrClass) {
        let trClass = this.getTrClass(d, index);
        if (utils.isString(trClass)) {
          cls[trClass] = true;
        } else if (utils.isArray(trClass)) {
          trClass.forEach(item => {
            cls[item] = true;
          });
        }
      }
      return cls;
    },
    isChecked(d) {
      return this.checks.indexOf(d) > -1 || (this.selectRow && d == this.rowSelected);
    },
    setRowSelect(data) {
      this.rowSelected = data;
    },
    clearRowSelect() {
      this.rowSelected = null;
    },
    invereSelection() {
      this.checks = this.tableDatas.filter(item => this.checks.indexOf(item) == -1);
    },
    clearSelection() {
      this.checks = [];
    },
    clearSort() {
      this.sortStatus.prop = null;
      this.sortStatus.type = null;
    },
    triggerSort(sortStatus, triggerType) {
      this.sortStatus.prop = sortStatus.prop;
      this.sortStatus.type = sortStatus.type;
      if (triggerType === true) {
        this.$emit('sort', utils.copy(sortStatus));
      } else if (triggerType == 'auto') {
        this.tableDatas.sort((a, b) => {
          let ad = a[sortStatus.prop];
          let bd = b[sortStatus.prop];
          let index = ad == bd ? 0 : (ad > bd) ? 1 : -1;
          return sortStatus.type == 'asc' ? index : -index;
        });
      }
    },
    setSelection(data) {
      if (utils.isArray(data)) {
        this.checks = [...data];
      }
    },
    getSelection() {
      return [...(this.checks || [])];
    },
    checkAll() {
      if (this.checks.length == this.checkableDatas.length) {
        this.checks.splice(0, this.checkableDatas.length);
      } else {
        this.checks = utils.extend([], this.checkableDatas);
      }
      this.$emit('selectAll', this.checks);
    },
    getWidth(column) {
      if (utils.isObject(column) && column.width) {
        return column.width;
      } else {
        return '';
      }
    },
    resize() {
      this.$nextTick(() => {
        let body = this.$el.querySelector('.h-table-body');
        if (body) {
          this.scrollWidth = body.offsetWidth - body.clientWidth;
          this.scrollHeight = body.offsetHeight - body.clientHeight;
        }
        this.emptyWidth = this.$el.querySelector('.h-table-header-table').clientWidth;
        this.tableWidth = this.$el.querySelector('.h-table-container').clientWidth;
        this.initFixedWidth();
      });
    },
    mouseover(data) {
      this.hoveredTr = data;
    },
    mouseout() {
      this.hoveredTr = null;
    },
    initFixedWidth() {
      let ths = this.$el.querySelectorAll('.h-table-header table>tr>th');
      let fixedColumnLeftLength = this.fixedColumnLeft.length + (this.checkbox || this.radio ? 1 : 0);
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
    refresh() {
      if (this.isMounted) {
        debounce(() => {
          this.initColumns();
          this.$nextTick(() => {
            this.resize();
          });
        }, 10)();
      }
    },
    initColumns() {
      if (this.columns.length) {
        this.computeColumns = this.columns;
        return;
      }
      let columns = [];
      if (this.$slots.default) {
        for (let slot of this.$slots.default) {
          let option = slot.componentOptions;
          if (option && (option.tag == 'TableItem' || option.tag == 'h-table-item' || option.tag == 'h-tableitem')) {
            columns.push(slot.componentOptions.propsData);
          }
        }
      }
      this.computeColumns = columns;
    },
    triggerTrClicked(data, index, event) {
      if (this.selectRow && !data._disabledSelect) {
        this.rowSelected = data;
        this.$emit('rowSelect', data);
      }

      if (this.checkbox && this.selectWhenClickTr && !utils.hasClass(event.target, 'h-checkbox-native') && !data._disabledSelect) {
        let list = this.checks;
        if (list.some(item => item == data)) {
          list.splice(list.indexOf(data), 1);
        } else {
          list.push(data);
        }
      }

      this.$emit('trclick', data, event, index);
    },
    triggerTrDblclicked(data, index, event) {
      this.$emit('trdblclick', data, event, index);
    }
  },
  computed: {
    checkableDatas() {
      return this.tableDatas.filter(item => !item._disabledSelect);
    },
    isTemplateMode() {
      let defaultSlot = this.$scopedSlots.default;
      return defaultSlot && (defaultSlot.name == 'normalized' || !this.$slots.default);
    },
    totalCol() {
      return (this.checkbox || this.radio ? 1 : 0) + this.computeColumns.length;
    },
    fixedColumnLeft() {
      let columns = [];
      for (let c of this.computeColumns) {
        if (c.fixed == 'left') {
          columns.push(c);
        }
      }
      return columns;
    },
    fixedColumnRight() {
      let columns = [];
      for (let c of this.computeColumns) {
        if (c.fixed == 'right') {
          columns.push(c);
        }
      }
      return columns;
    },
    tableCls() {
      return {
        [prefix]: true,
        [`${prefix}-border`]: !!this.border,
        [`${prefix}-stripe`]: this.stripe
      };
    },
    fixedBodyStyle() {
      let s = {};
      s['bottom'] = `${this.scrollHeight}px`;
      if (this.height) {
        s.maxHeight = `${this.height}px`;
      }
      if (this.leftWidth) {
        s.width = `${this.leftWidth}px`;
      }
      return s;
    },
    fixedRightBodyStyle() {
      let s = {};
      s['margin-right'] = `${this.scrollWidth}px`;
      s['bottom'] = `${this.scrollHeight}px`;
      if (this.height) {
        s.maxHeight = `${this.height}px`;
      }
      if (this.rightWidth) {
        s.width = `${this.rightWidth}px`;
      }
      return s;
    },
    bodyStyle() {
      let s = {};
      if (this.height) {
        s.maxHeight = `${this.height}px`;
        // s.overflow = 'auto';
      }
      return s;
    }
  }
};
</script>
