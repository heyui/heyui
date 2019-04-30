<template>
  <div class="h-category-modal">
    <header class="relative" v-if="params.title">{{params.title}}</header>
    <div>
      <div class="h-panel-bar">
        <div class="h-category-modal-multiple-tags" v-if="param.multiple">
          <span v-for="tag of param.objects" :key="tag.key"><span>{{tag.title}}</span><i class="h-icon-close"
              @click.stop="remove(tag)"></i></span>
        </div>
        <div v-else class="h-category-modal-single-tag">
          <span v-if="param.object">{{param.object.title}}</span>
        </div>
        <Search v-if="param.filterable" v-model="searchText" trigger="input" class="h-panel-right"></Search>
      </div>
      <Tabs v-if="searchText == ''" :datas="tabs" v-model="tab" keyName="key" titleName="title" @change="focusTab"></Tabs>
      <div class="h-panel-body">
        <Row :space="10">
          <template v-if="searchText==''">
            <Cell :width="8" v-for="data of list" :key="data.key">
            <div class="text-ellipsis h-category-item" @click="openNew(data)">
              <i class="h-icon-loading" v-if="data.status.loading"></i>
              <Checkbox v-else-if="data.status.checkable" :checked="isChecked(data)" @click.native="change(data, $event)"></Checkbox><i
                class="h-split"></i>{{data.title}} <span v-if="data.children.length">({{data.children.length}})</span>
            </div>
            </Cell>
          </template>
          <Cell v-else :width="8" v-for="data of searchlist" :key="data">
          <div class="text-ellipsis h-category-item" @click.stop="change(data)">
            <Checkbox v-if="data.status.checkable" :checked="isChecked(data)" @click.native="change(data, $event)"></Checkbox><i
              class="h-split"></i>{{data.title}}
          </div>
          </Cell>
        </Row>
      </div>
    </div>
    <footer>
      <Button color="primary" @click="confirm">{{'h.common.confirm' | hlang}}</Button>
      <Button @click="close">{{'h.common.cancel' | hlang}}</Button>
    </footer>
  </div>
</template>
<script>
import utils from '../../utils/utils';
const topMenu = '-------';

export default {
  name: 'hCategoryModal',
  props: {
    param: Object
  },
  data() {
    return {
      params: this.param.param,
      list: this.param.categoryDatas,
      searchText: '',
      tabs: [{
        title: this.t('h.categoryModal.total'),
        key: topMenu
      }],
      tab: topMenu,
      tabIndex: 0
    };
  },
  mounted() {},
  methods: {
    isChecked(data) {
      if (this.param.multiple) {
        return this.param.objects.some(item => item.key == data.key);
      } else {
        return this.param.object ? (this.param.object.key == data.key) : false;
      }
    },
    change(data, event) {
      if (event) {
        event.stopPropagation();
        event.preventDefault();
      }
      if (data.status.checkable === false) {
        return;
      }
      if (this.param.multiple) {
        if (this.param.objects.length >= this.param.limit && !this.param.objects.some(item => item.key === data.key)) {
          this.$Message.error(this.t('h.categoryModal.limitWords', {
            size: this.param.limit
          }));
          return;
        }
        utils.toggleValueByKey(this.param.objects, 'key', data);
      } else {
        this.param.object = data;
      }
    },
    openNew(data) {
      if (data.children && data.children.length) {
        this.tabIndex = this.tabIndex + 1;
        this.tabs.splice(this.tabIndex);
        this.tabs.push(data);
        this.tab = data.key;
        this.list = data.children;
      } else if (data.status.isWait) {
        this.$emit('event', 'load', {
          data: data,
          callback: () => {
            this.openNew(data);
          } });
      } else {
        this.change(data);
      }
    },
    remove(obj) {
      this.param.objects.splice(this.param.objects.indexOf(obj), 1);
    },
    focusTab(tab, index) {
      this.tab = tab.key;
      this.tabIndex = index;
      if (tab.key === topMenu) {
        this.list = this.param.categoryDatas;
      } else {
        this.list = tab.children;
      }
    },
    confirm() {
      this.$emit('event', 'setvalue', this.param);
      this.close();
    },
    close() {
      this.$emit('close');
    }
  },
  computed: {
    cancelWord() {
      return this.t('h.common.cancel');
    },
    confirmWord() {
      return this.t('h.common.confirm');
    },
    showEmptyContent() {
      return this.t('h.categoryModal.emptyContent');
    },
    searchlist() {
      let list = [];
      for (let key in this.param.categoryObj) {
        let item = this.param.categoryObj[key];
        if (item.status.checkable && item.title.indexOf(this.searchText) != -1) {
          list.push(item);
        }
      }
      return list;
    }
  }
};

</script>
