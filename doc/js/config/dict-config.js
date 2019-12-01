
const menus = [
  {
    category: 'Style',
    components: {
      basicGrid: 'Grid 栅格',
      basicLayout: 'Layout 布局',
      basicColor: 'Color 色彩',
      basicIcon: 'Icon 图标',
      basicExtend: 'Extend 扩展',
      basicButton: 'Button 按钮'
    }
  },
  {
    category: 'Form',
    components: {
      formInput: 'Input 输入框',
      formRadio: 'Radio 单选',
      formCheckbox: 'Checkbox 多选',
      pluginSelect: 'Select 下拉选择',
      pluginAuto: 'AutoComplete 模糊匹配',
      pluginNumberinput: 'NumberInput 数字输入',
      pluginTaginput: 'TagInput 标签输入框',
      formSwitch: 'HSwitch 开关',
      formSlider: 'Slider 滑块',
      formRate: 'Rate 评分',
      formSwitchlist: 'SwitchList 选项切换',
      formForm: 'Form 表单'
    }
  },
  {
    category: 'Date',
    components: {
      pluginDate: 'DatePicker 日期选择',
      pluginTime: 'TimePicker 时间选择',
      pluginDatetime: 'DatetimePicker 日期时间选择',
      pluginDateRange: 'DateRangePicker 日期范围选择',
      pluginFullDateRange: 'DateFullRangePicker 超级日期'
    }
  },
  {
    category: 'Data Plugin',
    components: {
      pluginSearch: 'Search 搜索框',
      pluginUpload: 'Uploader 上传',
      pluginTree: 'Tree 树',
      pluginTreePicker: 'TreePicker 树选择',
      pluginCategory: 'Category 分类选择',
      otherCategoryPicker: 'CategoryPicker 选择',
      viewTransfer: 'Transfer 穿梭框',
      otherColorPicker: 'ColorPicker 颜色选择器'
      // pluginCascader: 'Cascader 级联选择'
    }
  },
  {
    category: 'Navigation',
    components: {
      viewBreadcrumb: 'Breadcrumb 面包屑',
      viewMenu: 'Menu 菜单',
      viewPage: 'Pagination 分页',
      viewTabs: 'Tabs 标签页',
      pluginSteps: 'Steps 步骤条',
      pluginDropdownmenu: 'DropdownMenu 下拉菜单',
      pluginDropdowncustom: 'DropdownCustom 自定义下拉'
    }
  },
  {
    category: 'Data View',
    components: {
      viewTable: 'Table 表格',
      viewAvatar: 'Avatar 头像信息',
      viewBadge: 'Badge 微标数',
      viewCarousel: 'Carousel 走马灯',
      viewCollapse: 'Collapse 折叠面板',
      viewCircle: 'Circle 进度环',
      viewProgress: 'Progress 进度条',
      viewLoading: 'Loading 加载中',
      pluginLoadingbar: 'LoadingBar 加载进度条',
      otherSkeleton: 'Skeleton 加载占位图',
      viewTimeline: 'Timeline 时间轴',
      viewImagePreview: 'ImagePreview 图片预览',
      otherTextellipsis: 'TextEllipsis 超出文本省略'
    }
  },
  {
    category: 'Message',
    components: {
      messageTip: 'Message 提示',
      messageNotice: 'Notice 通知',
      messageModal: 'Modal 弹出框',
      messageTooltip: 'Tooltip 气泡提示',
      messagePoptip: 'Poptip 确定提示'
    }
  },
  {
    category: 'Plugin',
    components: {
      otherScrollintoview: 'ScrollIntoView 滚动至视图内',
      otherClipboard: 'Clipboard 复制剪切板',
      otherAffix: 'Affix 图钉',
      otherBacktop: 'BackTop 返回顶部'
    }
  },
  {
    category: 'View',
    components: {
      viewPanel: 'Panel 面板',
      viewTag: 'Tag 标签'
    }
  }
];

let components = {};

for (let menu of menus) {
  Object.assign(components, menu.components);
}
export default {
  menus,
  components
};
