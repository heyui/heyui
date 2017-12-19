export default {
  component: [{
    path: '',
    name: 'basic',
    component: () => import('../../components/component/basic/grid')
  }, {
    path: 'basic/grid',
    name: 'basicGrid',
    component: () =>
      import ('../../components/component/basic/grid')
  }, {
    path: 'basic/color',
    name: 'basicColor',
    component: () =>
      import ('../../components/component/basic/color')
  }, {
    path: 'basic/icon',
    name: 'basicIcon',
    component: () =>
      import ('../../components/component/basic/icon')
  }, {
    path: 'basic/extend',
    name: 'basicExtend',
    component: () =>
      import ('../../components/component/basic/extend')
  }, {
    path: 'basic/button',
    name: 'basicButton',
    component: () =>
      import ('../../components/component/basic/button')
  }, {
    path: 'form/input',
    name: 'formInput',
    component: () =>
      import ('../../components/component/form/input')
  }, {
    path: 'form/textarea',
    name: 'formTextarea',
    component: () =>
      import ('../../components/component/form/textarea')
  }, {
    path: 'form/radio',
    name: 'formRadio',
    component: () =>
      import ('../../components/component/form/radio')
  }, {
    path: 'form/switchlist',
    name: 'formSwitchlist',
    component: () =>
      import ('../../components/component/form/switchlist')
  }, {
    path: 'form/switch',
    name: 'formSwitch',
    component: () =>
      import ('../../components/component/form/switch')
  }, {
    path: 'form/checkbox',
    name: 'formCheckbox',
    component: () =>
      import ('../../components/component/form/checkbox')
  }, {
    path: 'form/slider',
    name: 'formSlider',
    component: () =>
      import ('../../components/component/form/slider')
  }, {
    path: 'form/rate',
    name: 'formRate',
    component: () =>
      import ('../../components/component/form/rate')
  }, {
    path: 'form/form',
    name: 'formForm',
    component: () =>
      import ('../../components/component/form/form')
  }, {
    path: 'data/plugin/select',
    name: 'pluginSelect',
    component: () =>
      import ('../../components/component/data/plugin/select')
  }, {
    path: 'data/plugin/autocomplete',
    name: 'pluginAuto',
    component: () =>
      import ('../../components/component/data/plugin/autocomplete')
  }, {
    path: 'data/plugin/date',
    name: 'pluginDate',
    component: () =>
      import ('../../components/component/data/plugin/date')
  }, {
    path: 'data/plugin/time',
    name: 'pluginTime',
    component: () =>
      import ('../../components/component/data/plugin/time')
  }, {
    path: 'data/plugin/datetime',
    name: 'pluginDatetime',
    component: () =>
      import ('../../components/component/data/plugin/datetime')
  }, {
    path: 'data/plugin/daterange',
    name: 'pluginDateRange',
    component: () =>
      import ('../../components/component/data/plugin/daterange')
  }, {
    path: 'data/plugin/datefullrange',
    name: 'pluginFullDateRange',
    component: () =>
      import ('../../components/component/data/plugin/datefullrange')
  }, {
    path: 'data/plugin/city',
    name: 'pluginCity',
    component: () =>
      import ('../../components/component/data/plugin/city')
  }, {
    path: 'data/plugin/tree',
    name: 'dataPluginTree',
    component: () =>
      import ('../../components/component/data/plugin/tree')
  }, {
    path: 'data/plugin/taginput',
    name: 'pluginTaginput',
    component: () =>
      import ('../../components/component/data/plugin/taginput')
  }, {
    path: 'data/plugin/numberinput',
    name: 'pluginNumberinput',
    component: () =>
      import ('../../components/component/data/plugin/numberinput')
  }, {
    path: 'data/plugin/upload',
    name: 'pluginUpload',
    component: () =>
      import ('../../components/component/data/plugin/upload')
  }, {
    path: 'data/plugin/valid',
    name: 'pluginValid',
    component: () =>
      import ('../../components/component/data/plugin/valid')
  }, {
    path: 'data/view/searchinput',
    name: 'viewSearchinput',
    component: () =>
      import ('../../components/component/data/view/searchinput')
  }, {
    path: 'data/view/table',
    name: 'viewTable',
    component: () =>
      import ('../../components/component/data/view/table')
  }, {
    path: 'data/view/page',
    name: 'viewPage',
    component: () =>
      import ('../../components/component/data/view/page')
  }, {
    path: 'data/view/loading',
    name: 'viewLoading',
    component: () =>
      import ('../../components/component/data/view/loading')
  }, {
    path: 'data/view/progress',
    name: 'viewProgress',
    component: () =>
      import ('../../components/component/data/view/progress')
  }, {
    path: 'data/view/circle',
    name: 'viewCircle',
    component: () =>
      import ('../../components/component/data/view/circle')
  }, {
    path: 'plugin/tree',
    name: 'pluginTree',
    component: () =>
      import ('../../components/component/plugin/tree')
  }, {
    path: 'plugin/treepicker',
    name: 'pluginTreePicker',
    component: () =>
      import ('../../components/component/plugin/treepicker')
  }, {
    path: 'plugin/dropdowncustom',
    name: 'pluginDropdowncustom',
    component: () =>
      import ('../../components/component/plugin/dropdowncustom')
  }, {
    path: 'plugin/category',
    name: 'pluginCategory',
    component: () =>
      import ('../../components/component/plugin/category')
  }, {
    path: 'plugin/search',
    name: 'pluginSearch',
    component: () =>
      import ('../../components/component/plugin/search')
  }, {
    path: 'plugin/dropdownmenu',
    name: 'pluginDropdownmenu',
    component: () =>
      import ('../../components/component/plugin/dropdownmenu')
  }, {
    path: 'plugin/loadingbar',
    name: 'pluginLoadingbar',
    component: () =>
      import ('../../components/component/plugin/loadingbar')
  }, {
    path: 'plugin/steps',
    name: 'pluginSteps',
    component: () =>
      import ('../../components/component/plugin/steps')
  }, {
    path: 'message/message',
    name: 'messageTip',
    component: () =>
      import ('../../components/component/message/message')
  }, {
    path: 'message/notice',
    name: 'messageNotice',
    component: () =>
      import ('../../components/component/message/notice')
  }, {
    path: 'message/modal',
    name: 'messageModal',
    component: () =>
      import ('../../components/component/message/modal')
  }, {
    path: 'message/tooltip',
    name: 'messageTooltip',
    component: () =>
      import ('../../components/component/message/tooltip')
  }, , {
    path: 'message/poptip',
    name: 'messagePoptip',
    component: () =>
      import ('../../components/component/message/poptip')
  }, {
    path: 'view/badge',
    name: 'viewBadge',
    component: () =>
      import ('../../components/component/view/badge')
  }, {
    path: 'view/panel',
    name: 'viewPanel',
    component: () =>
      import ('../../components/component/view/panel')
  }, {
    path: 'view/collapse',
    name: 'viewCollapse',
    component: () =>
      import ('../../components/component/view/collapse')
  }, {
    path: 'view/tag',
    name: 'viewTag',
    component: () =>
      import ('../../components/component/view/tag')
  }, {
    path: 'view/tabs',
    name: 'viewTabs',
    component: () =>
      import ('../../components/component/view/tabs')
  }, {
    path: 'view/menu',
    name: 'viewMenu',
    component: () =>
      import ('../../components/component/view/menu')
  }, {
    path: 'view/timeline',
    name: 'viewTimeline',
    component: () =>
      import ('../../components/component/view/timeline')
  }, {
    path: 'view/breadcrumb',
    name: 'viewBreadcrumb',
    component: () =>
      import ('../../components/component/view/breadcrumb')
  }, {
    path: 'other/affix',
    name: 'otherAffix',
    component: () =>
      import ('../../components/component/other/affix')
  }, {
    path: 'other/backtop',
    name: 'otherBacktop',
    component: () =>
      import ('../../components/component/other/backtop')
  }],
  guide: [{
    path: '',
    name: 'guide',
    component: () =>
      import ('../../components/guide/guide')
  }, {
    path: 'guide',
    name: 'guideguide',
    component: () =>
      import ('../../components/guide/guide')
  }, {
    path: 'quickstart',
    name: 'quickstart',
    component: () =>
      import ('../../components/guide/quickstart')
  }, {
    path: 'themes',
    name: 'themes',
    component: () =>
      import ('../../components/guide/themes')
  }, {
    path: 'config',
    name: 'config',
    component: () =>
      import ('../../components/guide/config')
  }, {
    path: 'logs',
    name: 'logs',
    component: () =>
      import ('../../components/guide/logs')
  }]
}