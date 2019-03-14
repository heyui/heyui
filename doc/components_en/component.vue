<template>
  <div class="page-component">
    <com-head></com-head>
    <com-frame class="page-body">
      <div slot="left-frame">
        <ul>
          <ul>
            <li><router-link to="/en/component/guide" :class="{'router-link-active': $route.name =='en_Component'}">Getting Start</router-link></li>
            <li><router-link to="/en/component/quickstart">Quick Start</router-link></li>
            <li><router-link to="/en/component/themes">Themes</router-link></li>
            <li><router-link to="/en/component/i18n">Internationalization</router-link></li>
            <li><router-link to="/en/component/config">Configuration</router-link></li>
            <li><Badge :count="1" :dot="true"><router-link to="/en/component/methods">Global Methods</router-link></Badge></li>
            <li><router-link to="/en/component/guideheysnippets">Snippets for vscode</router-link></li>
          </ul>
          <li class="title">Style</li>
          <ul>
            <li>
              <router-link to="/en/component/basic/grid">Grid</router-link>
            </li>
            <li>
              <router-link to="/en/component/basic/layout">Layout</router-link>
            </li>
            <li>
              <router-link to="/en/component/basic/color">Color</router-link>
            </li>
            <li>
              <router-link to="/en/component/basic/icon">Icon</router-link>
            </li>
            <li>
              <router-link to="/en/component/basic/extend">Extend</router-link>
            </li>
            <li>
              <router-link to="/en/component/basic/button">Button</router-link>
            </li>
          </ul>
          <li class="title">Form</li>
          <ul>
            <li>
              <router-link to="/en/component/form/input">Input / Textarea</router-link>
            </li>
            <li>
              <router-link to="/en/component/form/radio">Radio</router-link>
            </li>
            <li>
              <router-link to="/en/component/form/checkbox">Checkbox</router-link>
            </li>
            <li>
              <router-link to="/en/component/data/plugin/select">Select</router-link>
            </li>
            <li>
              <router-link to="/en/component/data/plugin/autocomplete">AutoComplete</router-link>
            </li>
            <li>
              <router-link to="/en/component/data/plugin/numberinput">NumberInput</router-link>
            </li>
            <li>
              <router-link to="/en/component/data/plugin/taginput">TagInput</router-link>
            </li>
            <li>
              <router-link to="/en/component/form/switch">Switch</router-link>
            </li>
            <li>
              <router-link to="/en/component/form/slider">Slider</router-link>
            </li>
            <li>
              <router-link to="/en/component/form/rate">Rate</router-link>
            </li>
            <li>
              <router-link to="/en/component/form/switchlist">SwitchList</router-link>
            </li>
            <li>
              <router-link to="/en/component/form/form">Form</router-link>
            </li>
          </ul>
          <li class="title">Plugin</li>
          <ul>
            <li class="title">Date</li>
            <li>
              <router-link to="/en/component/data/plugin/date">DatePicker</router-link>
            </li>
            <li>
              <router-link to="/en/component/data/plugin/time">TimePicker</router-link>
            </li>
            <li>
              <router-link to="/en/component/data/plugin/datetime">DatetimePicker</router-link>
            </li>
            <li>
              <router-link to="/en/component/data/plugin/daterange">DateRangePicker</router-link>
            </li>
            <li>
              <router-link to="/en/component/data/plugin/datefullrange">DateFullRangePicker</router-link>
            </li>
          </ul>
          <ul>
            <li class="title">Advance</li>
            <!--<li><router-link to="/en/component/data/plugin/city">CityPicker 城市选择</router-link></li>-->
            <li>
              <router-link to="/en/component/data/plugin/upload">Uploader</router-link>
            </li>
            <li>
              <router-link to="/en/component/plugin/tree">Tree</router-link>
            </li>
            <li>
              <router-link to="/en/component/plugin/treepicker">TreePicker</router-link>
            </li>
            <li>
              <router-link to="/en/component/plugin/category">Category</router-link>
            </li>
            <li>
              <router-link to="/component/view/transfer">Transfer</router-link>
            </li>
            <!--<li><router-link to="/en/component/data/plugin/valid">Valid 数据验证</router-link></li>-->
          </ul>
          <ul>
            <li class="title">View</li>
            <li>
              <router-link to="/en/component/data/view/table">Table</router-link>
            </li>
            <li>
              <router-link to="/en/component/view/menu">Menu</router-link>
            </li>
            <li>
              <router-link to="/en/component/data/view/page">Pagination</router-link>
            </li>
            <li>
              <router-link to="/en/component/plugin/search">Search</router-link>
            </li>
            <li>
              <router-link to="/en/component/view/badge">Badge</router-link>
            </li>
            <li>
              <router-link to="/en/component/data/view/progress">Progress</router-link>
            </li>
            <li>
              <router-link to="/en/component/data/view/circle">Circle</router-link>
            </li>
            <li>
              <router-link to="/en/component/plugin/steps">Steps</router-link>
            </li>
            <li>
              <router-link to="/en/component/view/tabs">Tabs</router-link>
            </li>
            <li>
              <router-link to="/en/component/view/breadcrumb">Breadcrumb</router-link>
            </li>
            <li>
              <router-link to="/en/component/view/avatar">Avatar</router-link>
            </li>
            <li>
              <router-link to="/en/component/view/timeline">Timeline</router-link>
            </li>
            <li>
              <router-link to="/en/component/view/imagepreview">ImagePreview</router-link>
            </li>
            <li>
              <router-link to="/en/component/view/carousel">Carousel</router-link>
            </li>
          </ul>
          <ul>
            <li class="title">Other</li>
            <li>
              <router-link to="/en/component/plugin/dropdowncustom">DropdownCustom</router-link>
            </li>
            <li>
              <router-link to="/en/component/plugin/dropdownmenu">DropdownMenu</router-link>
            </li>
            <li>
              <router-link to="/en/component/data/view/loading">Loading</router-link>
            </li>
            <li>
              <router-link to="/en/component/plugin/loadingbar">LoadingBar</router-link>
            </li>
            <li>
              <router-link to="/en/component/other/skeleton">Skeleton</router-link>
            </li>
            <li>
              <router-link to="/en/component/other/affix">Affix</router-link>
            </li>
            <li>
              <router-link to="/en/component/other/backtop">BackTop</router-link>
            </li>
            <li>
              <router-link to="/en/component/other/scrollintoview">ScrollIntoView</router-link>
            </li>
            <li>
              <router-link to="/en/component/other/clipboard">Clipboard</router-link>
            </li>
            <li>
              <router-link to="/en/component/other/textellipsis">TextEllipsis</router-link>
            </li>
          </ul>
          <li class="title">Message</li>
          <ul>
            <li>
              <router-link to="/en/component/message/message">Message</router-link>
            </li>
            <li>
              <router-link to="/en/component/message/notice">Notice</router-link>
            </li>
            <li>
              <router-link to="/en/component/message/modal">Modal</router-link>
            </li>
            <li>
              <router-link to="/en/component/message/tooltip">Tooltip</router-link>
            </li>
            <li>
              <router-link to="/en/component/message/poptip">Poptip</router-link>
            </li>
          </ul>
          <li class="title">View</li>
          <ul>
            <li>
              <router-link to="/en/component/view/tag">Tag</router-link>
            </li>
            <li>
              <router-link to="/en/component/view/panel">Panel</router-link>
            </li>
          </ul>
        </ul>
      </div>
      <div slot="right-frame" v-if="$route.matched.length>0">
        <router-view></router-view>
      </div>
    </com-frame>
  </div>
</template>
<script>
import comHead from './common/header.vue';
import comFrame from './common/frame.vue';
export default {
  data() {
    return {
      pass: '',
      error: false
    };
  },
  methods: {},
  components: {
    comHead,
    comFrame
  }
};
</script>
