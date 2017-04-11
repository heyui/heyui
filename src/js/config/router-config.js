export default {
  component: [{
    path: 'basic/grid',
    name: 'basicGrid',
    component: (resolve) => require(['../../components/component/basic/grid'], resolve)
  }, {
    path: 'basic/color',
    name: 'basicColor',
    component: (resolve) => require(['../../components/component/basic/color'], resolve)
  }, {
    path: 'basic/icon',
    name: 'basicIcon',
    component: (resolve) => require(['../../components/component/basic/icon'], resolve)
  }, {
    path: 'basic/extend',
    name: 'basicExtend',
    component: (resolve) => require(['../../components/component/basic/extend'], resolve)
  }, {
    path: 'basic/button',
    name: 'basicButton',
    component: (resolve) => require(['../../components/component/basic/button'], resolve)
  }, {
    path: 'form/input',
    name: 'formInput',
    component: (resolve) => require(['../../components/component/form/input'], resolve)
  }, {
    path: 'form/textarea',
    name: 'formTextarea',
    component: (resolve) => require(['../../components/component/form/textarea'], resolve)
  }, {
    path: 'form/radio',
    name: 'formRadio',
    component: (resolve) => require(['../../components/component/form/radio'], resolve)
  }, {
    path: 'form/switchlist',
    name: 'formSwitchlist',
    component: (resolve) => require(['../../components/component/form/switchlist'], resolve)
  }, {
    path: 'form/switch',
    name: 'formSwitch',
    component: (resolve) => require(['../../components/component/form/switch'], resolve)
  }, {
    path: 'form/checkbox',
    name: 'formCheckbox',
    component: (resolve) => require(['../../components/component/form/checkbox'], resolve)
  }, {
    path: 'form/slider',
    name: 'formSlider',
    component: (resolve) => require(['../../components/component/form/slider'], resolve)
  }, {
    path: 'form/rate',
    name: 'formRate',
    component: (resolve) => require(['../../components/component/form/rate'], resolve)
  }, {
    path: 'form/form',
    name: 'formForm',
    component: (resolve) => require(['../../components/component/form/form'], resolve)
  }, {
    path: 'data/plugin/select',
    name: 'pluginSelect',
    component: (resolve) => require(['../../components/component/data/plugin/select'], resolve)
  }, {
    path: 'data/plugin/auto',
    name: 'pluginAuto',
    component: (resolve) => require(['../../components/component/data/plugin/auto'], resolve)
  }, {
    path: 'data/plugin/date',
    name: 'pluginDate',
    component: (resolve) => require(['../../components/component/data/plugin/date'], resolve)
  }, {
    path: 'data/plugin/city',
    name: 'pluginCity',
    component: (resolve) => require(['../../components/component/data/plugin/city'], resolve)
  }, {
    path: 'data/plugin/tree',
    name: 'dataPluginTree',
    component: (resolve) => require(['../../components/component/data/plugin/tree'], resolve)
  }, {
    path: 'data/plugin/taginput',
    name: 'pluginTaginput',
    component: (resolve) => require(['../../components/component/data/plugin/taginput'], resolve)
  }, {
    path: 'data/plugin/upload',
    name: 'pluginUpload',
    component: (resolve) => require(['../../components/component/data/plugin/upload'], resolve)
  }, {
    path: 'data/plugin/valid',
    name: 'pluginValid',
    component: (resolve) => require(['../../components/component/data/plugin/valid'], resolve)
  }, {
    path: 'data/view/searchinput',
    name: 'viewSearchinput',
    component: (resolve) => require(['../../components/component/data/view/searchinput'], resolve)
  }, {
    path: 'data/view/table',
    name: 'viewTable',
    component: (resolve) => require(['../../components/component/data/view/table'], resolve)
  }, {
    path: 'data/view/page',
    name: 'viewPage',
    component: (resolve) => require(['../../components/component/data/view/page'], resolve)
  }, {
    path: 'data/view/spin',
    name: 'viewSpin',
    component: (resolve) => require(['../../components/component/data/view/spin'], resolve)
  }, {
    path: 'data/view/tag',
    name: 'viewTag',
    component: (resolve) => require(['../../components/component/data/view/tag'], resolve)
  }, {
    path: 'data/view/progress',
    name: 'viewProgress',
    component: (resolve) => require(['../../components/component/data/view/progress'], resolve)
  }, {
    path: 'data/view/circle',
    name: 'viewCircle',
    component: (resolve) => require(['../../components/component/data/view/circle'], resolve)
  }, {
    path: 'plugin/tree',
    name: 'pluginTree',
    component: (resolve) => require(['../../components/component/plugin/tree'], resolve)
  }, {
    path: 'plugin/dialog',
    name: 'pluginDialog',
    component: (resolve) => require(['../../components/component/plugin/dialog'], resolve)
  }, {
    path: 'plugin/dropdown',
    name: 'pluginDropdown',
    component: (resolve) => require(['../../components/component/plugin/dropdown'], resolve)
  }, {
    path: 'plugin/dropdownmenu',
    name: 'pluginDropdownmenu',
    component: (resolve) => require(['../../components/component/plugin/dropdownmenu'], resolve)
  }, {
    path: 'plugin/loadingbar',
    name: 'pluginLoadingbar',
    component: (resolve) => require(['../../components/component/plugin/loadingbar'], resolve)
  }, {
    path: 'message/message',
    name: 'messageTip',
    component: (resolve) => require(['../../components/component/message/message'], resolve)
  }, {
    path: 'message/notice',
    name: 'messageNotice',
    component: (resolve) => require(['../../components/component/message/notice'], resolve)
  }, {
    path: 'message/modal',
    name: 'messageModal',
    component: (resolve) => require(['../../components/component/message/modal'], resolve)
  }, {
    path: 'message/tooltip',
    name: 'messageTooltip',
    component: (resolve) => require(['../../components/component/message/tooltip'], resolve)
  }, {
    path: 'view/badge',
    name: 'viewBadge',
    component: (resolve) => require(['../../components/component/view/badge'], resolve)
  }, {
    path: 'view/card',
    name: 'viewCard',
    component: (resolve) => require(['../../components/component/view/card'], resolve)
  }, {
    path: 'view/collapse',
    name: 'viewCollapse',
    component: (resolve) => require(['../../components/component/view/collapse'], resolve)
  }, {
    path: 'view/tab',
    name: 'viewTab',
    component: (resolve) => require(['../../components/component/view/tab'], resolve)
  }, {
    path: 'view/timeline',
    name: 'viewTimeline',
    component: (resolve) => require(['../../components/component/view/timeline'], resolve)
  }, {
    path: 'view/breadcrumb',
    name: 'viewBreadcrumb',
    component: (resolve) => require(['../../components/component/view/breadcrumb'], resolve)
  }, {
    path: 'other/affix',
    name: 'otherAffix',
    component: (resolve) => require(['../../components/component/other/affix'], resolve)
  }, {
    path: 'other/backtop',
    name: 'otherBacktop',
    component: (resolve) => require(['../../components/component/other/backtop'], resolve)
  }],
  guide: [{
    path: 'guide',
    name: 'guide',
    component: (resolve) => require(['../../components/guide/guide'], resolve)
  }, {
    path: 'quickstart',
    name: 'quickstart',
    component: (resolve) => require(['../../components/guide/quickstart'], resolve)
  }, {
    path: 'themes',
    name: 'themes',
    component: (resolve) => require(['../../components/guide/themes'], resolve)
  }, {
    path: 'logs',
    name: 'logs',
    component: (resolve) => require(['../../components/guide/logs'], resolve)
  }]
}
