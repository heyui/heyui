<template>
  <div class="page-component">
    <com-head></com-head>
    <com-frame class="page-body">
      <div slot="left-frame">
        <ul>
          <ul>
            <li><router-link to="/component/guide" :class="{'router-link-active': $route.name =='Component'}">入门</router-link></li>
            <li><router-link to="/component/quickstart">快速上手</router-link></li>
            <li><router-link to="/component/themes">更换主题</router-link></li>
            <li><router-link to="/component/i18n">国际化</router-link></li>
            <li><router-link to="/component/config">全局配置</router-link></li>
            <li><Badge :count="1" :dot="true"><router-link to="/component/methods">全局方法</router-link></Badge></li>
            <li><router-link to="/component/guideheysnippets">插件 for vscode</router-link></li>
            <!-- <li><router-link to="/guide/logs">更新日志</router-link></li> -->
          </ul>
          <li class="title">样式</li>
          <ul>
            <li>
              <router-link to="/component/basic/grid">Grid 栅格</router-link>
            </li>
            <li>
              <router-link to="/component/basic/layout">Layout 布局</router-link>
            </li>
            <li>
              <router-link to="/component/basic/color">Color 色彩</router-link>
            </li>
            <li>
              <router-link to="/component/basic/icon">Icon 图标</router-link>
            </li>
            <li>
              <router-link to="/component/basic/extend">Extend 扩展</router-link>
            </li>
            <li>
              <router-link to="/component/basic/button">Button 按钮</router-link>
            </li>
          </ul>
          <li class="title">Form</li>
          <ul>
            <li>
              <router-link to="/component/form/input">Input / Textarea 输入框</router-link>
            </li>
            <li>
              <router-link to="/component/form/radio">Radio 单选</router-link>
            </li>
            <li>
              <router-link to="/component/form/checkbox">Checkbox 多选</router-link>
            </li>
            <li>
              <router-link to="/component/data/plugin/select">Select 下拉选择</router-link>
            </li>
            <li>
              <router-link to="/component/data/plugin/autocomplete">AutoComplete 模糊匹配</router-link>
            </li>
            <li>
              <router-link to="/component/data/plugin/numberinput">NumberInput 数字输入框</router-link>
            </li>
            <li>
              <router-link to="/component/data/plugin/taginput">TagInput 标签输入框</router-link>
            </li>
            <li>
              <router-link to="/component/form/switch">Switch 开关</router-link>
            </li>
            <li>
              <router-link to="/component/form/slider">Slider 滑块</router-link>
            </li>
            <li>
              <router-link to="/component/form/rate">Rate 评分</router-link>
            </li>
            <li>
              <router-link to="/component/form/form">Form 表单</router-link>
            </li>
          </ul>
          <li class="title">Plugin</li>
          <ul>
            <li class="title">Date</li>
            <li>
              <router-link to="/component/data/plugin/date">DatePicker 日期选择</router-link>
            </li>
            <li>
              <router-link to="/component/data/plugin/time">TimePicker 时间选择</router-link>
            </li>
            <li>
              <router-link to="/component/data/plugin/datetime">DatetimePicker 日期时间选择</router-link>
            </li>
            <li>
              <router-link to="/component/data/plugin/daterange">DateRangePicker 日期范围选择</router-link>
            </li>
            <li>
              <router-link to="/component/data/plugin/datefullrange">DateFullRangePicker 超级日期</router-link>
            </li>
          </ul>
          <ul>
            <li class="title">Advance</li>
            <!--<li><router-link to="/component/data/plugin/city">CityPicker 城市选择</router-link></li>-->
            <li>
              <router-link to="/component/data/plugin/upload">Upload 上传</router-link>
            </li>
            <li>
              <router-link to="/component/plugin/tree">Tree 树</router-link>
            </li>
            <li>
              <router-link to="/component/plugin/treepicker">TreePicker 树选择</router-link>
            </li>
            <li>
              <router-link to="/component/plugin/category">Category 分类选择</router-link>
            </li>
            <!--<li><router-link to="/component/data/plugin/valid">Valid 数据验证</router-link></li>-->
          </ul>
          <ul>
            <li class="title">View</li>
            <li>
              <router-link to="/component/data/view/table">Table 表格</router-link>
            </li>
            <li>
              <router-link to="/component/view/menu">Menu 菜单</router-link>
            </li>
            <li>
              <router-link to="/component/data/view/page">Pagination 分页</router-link>
            </li>
            <li>
              <router-link to="/component/plugin/search">Search 搜索框</router-link>
            </li>
            <li>
              <router-link to="/component/view/badge">Badge 微标数</router-link>
            </li>
            <li>
              <router-link to="/component/data/view/progress">Progress 进度条</router-link>
            </li>
            <li>
              <router-link to="/component/data/view/circle">Circle 进度环</router-link>
            </li>
            <li>
              <router-link to="/component/plugin/steps">Steps 步骤条</router-link>
            </li>
            <li>
              <router-link to="/component/view/tabs">Tabs 标签页</router-link>
            </li>
            <li>
              <router-link to="/component/view/breadcrumb">Breadcrumb 面包屑</router-link>
            </li>
            <li>
              <router-link to="/component/view/avatar">Avatar 头像信息</router-link>
            </li>
            <li>
              <router-link to="/component/form/switchlist">SwitchList 选项</router-link>
            </li>
            <li>
              <router-link to="/component/view/timeline">Timeline 时间轴</router-link>
            </li>
            <li>
              <router-link to="/component/view/carousel">Carousel 跑马灯</router-link>
            </li>
            <li>
              <router-link to="/component/view/transfer">Transfer 穿梭框</router-link>
            </li>
            <li>
              <router-link to="/component/view/collapse">Collapse 折叠面板</router-link>
            </li>
          </ul>
          <ul>
            <li class="title">Other</li>
            <li>
              <router-link to="/component/plugin/dropdowncustom">DropdownCustom 下拉控件</router-link>
            </li>
            <li>
              <router-link to="/component/plugin/dropdownmenu">DropdownMenu 下拉菜单</router-link>
            </li>
            <li>
              <router-link to="/component/data/view/loading">Loading 加载中</router-link>
            </li>
            <li>
              <router-link to="/component/plugin/loadingbar">LoadingBar 加载进度条</router-link>
            </li>
            <li>
              <router-link to="/component/other/affix">Affix 图钉</router-link>
            </li>
            <li>
              <router-link to="/component/other/backtop">BackTop 返回顶部</router-link>
            </li>
            <li>
              <router-link to="/component/other/scrollintoview">ScrollIntoView 滚动至视图内</router-link>
            </li>
            <li>
              <router-link to="/component/other/clipboard">Clipboard 复制剪切板</router-link>
            </li>
            <li>
              <router-link to="/component/other/textellipsis">TextEllipsis 超出文本省略</router-link>
            </li>
          </ul>
          <li class="title">Message</li>
          <ul>
            <li>
              <router-link to="/component/message/message">Message 提示</router-link>
            </li>
            <li>
              <router-link to="/component/message/notice">Notice 通知</router-link>
            </li>
            <li>
              <router-link to="/component/message/modal">Modal 弹出框</router-link>
            </li>
            <li>
              <router-link to="/component/message/tooltip">Tooltip 气泡提示</router-link>
            </li>
            <li>
              <router-link to="/component/message/poptip">Poptip 确认提示</router-link>
            </li>
          </ul>
          <li class="title">View</li>
          <ul>
            <li>
              <router-link to="/component/view/tag">Tag 标签</router-link>
            </li>
            <li>
              <router-link to="/component/view/panel">Panel 面板</router-link>
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
import comFoot from './common/footer.vue';
import comFrame from './common/frame.vue';
export default {
  data() {
    return {
      pass: "",
      error: false
    };
  },
  methods: {},
  components: {
    comHead,
    comFoot,
    comFrame
  }
};
</script>
