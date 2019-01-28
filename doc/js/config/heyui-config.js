
import HeyUI from '../../../src/index';
import utils from 'hey-utils';
import jsonp from 'fetch-jsonp';

const loadData = function (filter, callback) {
  log("传递的参数", this.orgId);
  jsonp(`https://suggest.taobao.com/sug?code=utf-8&q=${filter}`)
    .then(response => response.json())
    .then((d) => {
      const result = d.result;
      const data = [];
      result.forEach((r) => {
        data.push({
          name: r[0],
          id: r[1] + Math.random(),
        });
      });
      callback(data);
    });
}
const menus = utils.toArray({
  basicGrid: 'Grid 栅格',
  basicLayout: 'Layout 布局',
  basicColor: 'Color 色彩',
  basicIcon: 'Icon 图标',
  basicExtend: 'Extend 扩展',
  basicButton: 'Button 按钮',
  formInput: 'Input 输入框',
  formRadio: 'Radio 单选',
  formSwitchlist: 'SwitchList 选项切换',
  formSwitch: 'Switch 开关',
  formCheckbox: 'Checkbox 多选',
  formSlider: 'Slider 滑块',
  formRate: 'Rate 评分',
  formForm: 'Form 表单',
  pluginSelect: 'Select 下拉选择',
  pluginAuto: 'AutoComplete 模糊匹配',
  pluginDate: 'DatePicker 日期选择',
  pluginTime: 'TimePicker 时间选择',
  pluginDatetime: 'DatetimePicker 日期时间选择',
  pluginDateRange: 'DateRangePicker 日期范围选择',
  pluginFullDateRange: 'DateFullRangePicker 超级日期范围选择',
  // pluginCity: 'CityPicker 城市选择',
  pluginCategory: 'Category 分类选择',
  otherScrollintoview: 'ScrollIntoView 滚动至视图内',
  otherClipboard: 'Clipboard 复制剪切板',
  pluginTreePicker: 'TreePicker 树选择',
  pluginTaginput: 'TagInput 标签输入框',
  pluginNumberinput: 'NumberInput 数字输入框',
  pluginUpload: 'Uploader 上传',
  // pluginValid: 'Valid 数据验证',
  // viewSearchinput: 'SearchInput 搜索框',
  viewTable: 'Table 表格',
  viewPage: 'Pagination 分页',
  viewLoading: 'Loading 加载中',
  viewTag: 'Tag 标签',
  viewProgress: 'Progress 进度条',
  viewCircle: 'Circle 进度环',
  viewCollapse: 'Collapse 折叠面板',
  pluginTree: 'Tree 树',
  // pluginDialog: 'Dialog 弹框',
  pluginSearch: 'Search 搜索框',
  pluginDropdowncustom: 'DropdownCustom 自定义下拉控件',
  pluginDropdownmenu: 'DropdownMenu 下拉菜单',
  pluginLoadingbar: 'LoadingBar 加载进度条',
  pluginSteps: 'Steps 步骤条',
  messageTip: 'Message 提示',
  messageNotice: 'Notice 通知',
  messageModal: 'Modal 弹出框',
  messageTooltip: 'Tooltip 气泡提示',
  messagePoptip: 'Poptip 确定提示',
  viewBadge: 'Badge 微标数',
  viewMenu: 'Menu 菜单',
  viewPanel: 'Panel 面板',
  // viewCollapse: 'Collapse 折叠面板',
  viewTabs: 'Tabs 标签页',
  viewTimeline: 'Timeline 时间轴',
  viewTransfer: 'Transfer 穿梭框',
  viewBreadcrumb: 'Breadcrumb 面包屑',
  viewAvatar: 'Avatar 头像信息',
  otherAffix: 'Affix 图钉',
  otherBacktop: 'BackTop 返回顶部',
  otherTextellipsis: 'TextEllipsis 超出文本省略',
  viewCarousel: 'Carousel 走马灯',
  viewImagePreview: 'ImagePreview 图片预览',
}, 'key', 'title').sort((a, b) => a.title > b.title ? 1 : -1);

const enMenus = menus.map(item => ({ key: item.key, title: item.title.split(' ')[0] }));

// HeyUI.config('dict.keyName', "code");
// HeyUI.config('dict.titleName', "name");
export default () => {
  HeyUI.initDict({
    select: [{ title: '选择1', key: 'a1', other: '其他值' }, { title: '选择2', key: 'a2' }, { title: '选择3', key: 'a3' }],
    simple: { 1: '苹果', 2: '梨子', 3: '香蕉', 4: '橙子', 5: '樱桃', 6: '超长超长超长超长超长超长超长超长超长超长超长超长超长' },
    menus,
    enMenus
  });

  HeyUI.config("autocomplete.default", {
    keyName: 'key',
  });

  HeyUI.config("autocomplete.configs", {
    simple: {
      loadData,
      keyName: 'id',
      titleName: 'name',
      minWord: 1
    },
    pageFilter: {
      keyName: 'key',
      titleName: 'title',
    }
  });

  let list = [
    { id: 1, title: "一级" },
    { id: 2, title: "二级" },
    { id: 3, title: "三级", disabled: true },
    { id: 10, title: "一级-0", parent: "1" },
    { id: 11, title: "一级-1", parent: "1" },
    { id: 12, title: "一级-2", parent: "1" },
    { id: 13, title: "一级-3", parent: "1" },
    { id: 14, title: "一级-4", parent: "1" },
    { id: 101, title: "一级-0-1", parent: "10" },
    { id: 102, title: "一级-0-2", parent: "10" },
    { id: 103, title: "一级-0-3", parent: "10" },
    { id: 20, title: "二级-0", parent: "2" },
    { id: 21, title: "二级-1", parent: "2" },
    { id: 22, title: "二级-2", parent: "2" },
    { id: 23, title: "二级-3", parent: "2" },
    { id: 24, title: "二级-4", parent: "2" },
    { id: 30, title: "三级-0", parent: "3" },
    { id: 31, title: "三级-1", parent: "3" },
    { id: 32, title: "三级-2", parent: "3" },
    { id: 33, title: "三级-3", parent: "3" }
  ];
  HeyUI.config("tree.configs", {
    simple: {
      keyName: 'id',
      parentName: 'parent',
      titleName: 'title',
      dataMode: 'list',
      datas() {
        return list;
      }
    }
  });
  HeyUI.config("category.configs", {
    simple: {
      title: '测试',
      keyName: 'id',
      parentName: 'parent',
      titleName: 'title',
      dataMode: 'list',
      datas() {
        return list;
      }
    }
  });
}
