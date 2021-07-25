<template>
  <div class="h-category-modal">
    <header v-if="params.title" class="relative">{{ params.title }}</header>
    <div>
      <div class="h-panel-bar">
        <div v-if="param.multiple" class="h-category-modal-multiple-tags">
          <span v-for="tag of param.objects" :key="tag.key"
            ><span>{{ tag.title }}</span
            ><i class="h-icon-close-min" @click.stop="remove(tag)"></i
          ></span>
        </div>
        <div v-else class="h-category-modal-single-tag">
          <span v-if="param.object">{{ param.object.title }}</span>
        </div>
        <Search v-if="param.filterable" v-model="searchText" trigger="input" class="h-panel-right"></Search>
      </div>
      <Tabs v-if="searchText == ''" v-model="tab" :datas="tabs" key-name="key" title-name="title" @change="focusTab"></Tabs>
      <div class="h-panel-body">
        <Row :space="10">
          <template v-if="searchText == ''">
            <Cell v-for="data of list" :key="data.key" :width="8">
              <div class="text-ellipsis h-category-item" @click="openNew(data)">
                <i v-if="data.status.loading" class="h-icon-loading"></i>
                <Checkbox v-else-if="data.status.checkable" :checked="isChecked(data)" @click.native="change(data, $event)"></Checkbox
                ><i class="h-split"></i>{{ data.title }} <span v-if="data.children.length">({{ data.children.length }})</span>
              </div>
            </Cell>
          </template>
          <Cell v-for="data of searchlist" v-else :key="data.key" :width="8">
            <div class="text-ellipsis h-category-item" @click.stop="change(data)">
              <Checkbox v-if="data.status.checkable" :checked="isChecked(data)" @click.native="change(data, $event)"></Checkbox><i class="h-split"></i
              >{{ data.title }}
            </div>
          </Cell>
        </Row>
      </div>
    </div>
    <footer>
      <button class="h-btn h-btn-primary" type="button" @click="confirm">{{ hlang('h.common.confirm') }}</button>
      <button class="h-btn" type="button" @click="close">{{ hlang('h.common.cancel') }}</button>
    </footer>
  </div>
</template>
<script>
import utils from 'heyui/utils/utils';
import Locale from 'heyui/mixins/locale';
import Message from 'heyui/plugins/message';
import Search from 'heyui/components/search';
import Checkbox from 'heyui/components/checkbox';
const topMenu = '-------';

export default {
  name: 'HCategoryModal',
  components: { Search, Checkbox },
  mixins: [Locale],
  props: {
    param: Object
  },
  data() {
    return {
      params: this.param.param,
      list: this.param.categoryDatas,
      searchText: '',
      tabs: [
        {
          title: this.t('h.categoryModal.total'),
          key: topMenu
        }
      ],
      tab: topMenu,
      tabIndex: 0
    };
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
  },
  mounted() {},
  methods: {
    isChecked(data) {
      if (this.param.multiple) {
        return this.param.objects.some(item => item.key == data.key);
      } else {
        return this.param.object ? this.param.object.key == data.key : false;
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
          Message.error(
            this.t('h.categoryModal.limitWords', {
              size: this.param.limit
            })
          );
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
          }
        });
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
  }
};
</script>
