const router = [{
  path: '/en',
  name: 'en_Home',
  meta: {
    title: 'Home',
  },
  component: (resolve) => require(['components_en/home'], resolve)
}, {
  path: '/en/component',
  title: 'Component',
  component: (resolve) => require(['components_en/component'], resolve),
  children: [{
    path: '',
    name: 'en_Component',
    meta: {
      title: 'Guide',
    },    component: () =>
      import ('components_en/guide/guide')
  }, {
    path: 'basic/grid',
    name: 'en_basicGrid',
    meta: {
      title: 'Grid',
    },
    component: () =>
      import ('components_en/component/basic/grid')
  }, {
    path: 'basic/layout',
    name: 'en_basicLayout',
    meta: {
      title: 'Layout',
    },
    component: () =>
      import ('components_en/component/basic/layout')
  }, {
    path: 'basic/color',
    name: 'en_basicColor',
    meta: {
      title: 'Color',
    },
    component: () =>
      import ('components_en/component/basic/color')
  }, {
    path: 'basic/icon',
    name: 'en_basicIcon',
    meta: {
      title: 'Icon',
    },
    component: () =>
      import ('components_en/component/basic/icon')
  }, {
    path: 'basic/extend',
    name: 'en_basicExtend',
    meta: {
      title: 'Extend',
    },
    component: () =>
      import ('components_en/component/basic/extend')
  }, {
    path: 'basic/button',
    name: 'en_basicButton',
    meta: {
      title: 'Button',
    },
    component: () =>
      import ('components_en/component/basic/button')
  }, {
    path: 'form/input',
    name: 'en_formInput',
    meta: {
      title: 'Input',
    },
    component: () =>
      import ('components_en/component/form/input')
  }, {
    path: 'form/textarea',
    name: 'en_formTextarea',
    meta: {
      title: 'Textarea',
    },
    component: () =>
      import ('components_en/component/form/textarea')
  }, {
    path: 'form/radio',
    name: 'en_formRadio',
    meta: {
      title: 'Radio',
    },
    component: () =>
      import ('components_en/component/form/radio')
  }, {
    path: 'form/switchlist',
    name: 'en_formSwitchlist',
    meta: {
      title: 'Switchlist',
    },
    component: () =>
      import ('components_en/component/form/switchlist')
  }, {
    path: 'form/switch',
    name: 'en_formSwitch',
    meta: {
      title: 'Switch',
    },
    component: () =>
      import ('components_en/component/form/switch')
  }, {
    path: 'form/checkbox',
    name: 'en_formCheckbox',
    meta: {
      title: 'Checkbox',
    },
    component: () =>
      import ('components_en/component/form/checkbox')
  }, {
    path: 'form/slider',
    name: 'en_formSlider',
    meta: {
      title: 'Slider',
    },
    component: () =>
      import ('components_en/component/form/slider')
  }, {
    path: 'form/rate',
    name: 'en_formRate',
    meta: {
      title: 'Rate',
    },
    component: () =>
      import ('components_en/component/form/rate')
  }, {
    path: 'form/form',
    name: 'en_formForm',
    meta: {
      title: 'Form',
    },
    component: () =>
      import ('components_en/component/form/form')
  }, {
    path: 'data/plugin/select',
    name: 'en_pluginSelect',
    meta: {
      title: 'Select',
    },
    component: () =>
      import ('components_en/component/data/plugin/select')
  }, {
    path: 'data/plugin/autocomplete',
    name: 'en_pluginAuto',
    meta: {
      title: 'AutoComplete',
    },
    component: () =>
      import ('components_en/component/data/plugin/autocomplete')
  }, {
    path: 'data/plugin/date',
    name: 'en_pluginDate',
    meta: {
      title: 'Date',
    },
    component: () =>
      import ('components_en/component/data/plugin/date')
  }, {
    path: 'data/plugin/time',
    name: 'en_pluginTime',
    meta: {
      title: 'Time',
    },
    component: () =>
      import ('components_en/component/data/plugin/time')
  }, {
    path: 'data/plugin/datetime',
    name: 'en_pluginDatetime',
    meta: {
      title: 'DateTime',
    },
    component: () =>
      import ('components_en/component/data/plugin/datetime')
  }, {
    path: 'data/plugin/daterange',
    name: 'en_pluginDateRange',
    meta: {
      title: 'DateRange',
    },
    component: () =>
      import ('components_en/component/data/plugin/daterange')
  }, {
    path: 'data/plugin/datefullrange',
    name: 'en_pluginFullDateRange',
    meta: {
      title: 'DateFullRange',
    },
    component: () =>
      import ('components_en/component/data/plugin/datefullrange')
  }, {
    path: 'data/plugin/city',
    name: 'en_pluginCity',
    component: () =>
      import ('components_en/component/data/plugin/city')
  }, {
    path: 'data/plugin/tree',
    name: 'en_dataPluginTree',
    meta: {
      title: 'Tree',
    },
    component: () =>
      import ('components_en/component/data/plugin/tree')
  }, {
    path: 'data/plugin/taginput',
    name: 'en_pluginTaginput',
    meta: {
      title: 'TagInput',
    },
    component: () =>
      import ('components_en/component/data/plugin/taginput')
  }, {
    path: 'data/plugin/numberinput',
    name: 'en_pluginNumberinput',
    meta: {
      title: 'NumberInput',
    },
    component: () =>
      import ('components_en/component/data/plugin/numberinput')
  }, {
    path: 'data/plugin/upload',
    name: 'en_pluginUpload',
    meta: {
      title: 'Upload',
    },
    component: () =>
      import ('components_en/component/data/plugin/upload')
  }, {
    path: 'data/plugin/valid',
    name: 'en_pluginValid',
    meta: {
      title: 'Valid',
    },
    component: () =>
      import ('components_en/component/data/plugin/valid')
  }, {
    path: 'data/view/searchinput',
    name: 'en_viewSearchinput',
    meta: {
      title: 'SearchInput',
    },
    component: () =>
      import ('components_en/component/data/view/searchinput')
  }, {
    path: 'data/view/table',
    name: 'en_viewTable',
    meta: {
      title: 'Table',
    },
    component: () =>
      import ('components_en/component/data/view/table')
  }, {
    path: 'data/view/page',
    name: 'en_viewPage',
    meta: {
      title: 'Page',
    },
    component: () =>
      import ('components_en/component/data/view/page')
  }, {
    path: 'data/view/loading',
    name: 'en_viewLoading',
    meta: {
      title: 'Loading',
    },
    component: () =>
      import ('components_en/component/data/view/loading')
  }, {
    path: 'data/view/progress',
    name: 'en_viewProgress',
    meta: {
      title: 'Progress',
    },
    component: () =>
      import ('components_en/component/data/view/progress')
  }, {
    path: 'data/view/circle',
    name: 'en_viewCircle',
    meta: {
      title: 'Circle',
    },
    component: () =>
      import ('components_en/component/data/view/circle')
  }, {
    path: 'plugin/tree',
    name: 'en_pluginTree',
    meta: {
      title: 'Tree',
    },
    component: () =>
      import ('components_en/component/plugin/tree')
  }, {
    path: 'plugin/treepicker',
    name: 'en_pluginTreePicker',
    meta: {
      title: 'TreePicker',
    },
    component: () =>
      import ('components_en/component/plugin/treepicker')
  }, {
    path: 'plugin/dropdowncustom',
    name: 'en_pluginDropdowncustom',
    meta: {
      title: 'DropdownCustom',
    },
    component: () =>
      import ('components_en/component/plugin/dropdowncustom')
  }, {
    path: 'plugin/category',
    name: 'en_pluginCategory',
    meta: {
      title: 'Category',
    },
    component: () =>
      import ('components_en/component/plugin/category')
  }, {
    path: 'plugin/search',
    name: 'en_pluginSearch',
    meta: {
      title: 'Search',
    },
    component: () =>
      import ('components_en/component/plugin/search')
  }, {
    path: 'plugin/dropdownmenu',
    name: 'en_pluginDropdownmenu',
    meta: {
      title: 'DropdownMenu',
    },
    component: () =>
      import ('components_en/component/plugin/dropdownmenu')
  }, {
    path: 'plugin/loadingbar',
    name: 'en_pluginLoadingbar',
    meta: {
      title: 'LoadingBar',
    },
    component: () =>
      import ('components_en/component/plugin/loadingbar')
  }, {
    path: 'plugin/steps',
    name: 'en_pluginSteps',
    meta: {
      title: 'Steps',
    },
    component: () =>
      import ('components_en/component/plugin/steps')
  }, {
    path: 'message/message',
    name: 'en_messageTip',
    meta: {
      title: 'Tip',
    },
    component: () =>
      import ('components_en/component/message/message')
  }, {
    path: 'message/notice',
    name: 'en_messageNotice',
    meta: {
      title: 'Notice',
    },
    component: () =>
      import ('components_en/component/message/notice')
  }, {
    path: 'message/modal',
    name: 'en_messageModal',
    meta: {
      title: 'Modal',
    },
    component: () =>
      import ('components_en/component/message/modal')
  }, {
    path: 'message/tooltip',
    name: 'en_messageTooltip',
    meta: {
      title: 'Tooltip',
    },
    component: () =>
      import ('components_en/component/message/tooltip')
  }, , {
    path: 'message/poptip',
    name: 'en_messagePoptip',
    meta: {
      title: 'Poptip',
    },
    component: () =>
      import ('components_en/component/message/poptip')
  }, {
    path: 'view/badge',
    name: 'en_viewBadge',
    meta: {
      title: 'Badge',
    },
    component: () =>
      import ('components_en/component/view/badge')
  }, {
    path: 'view/panel',
    name: 'en_viewPanel',
    meta: {
      title: 'Panel',
    },
    component: () =>
      import ('components_en/component/view/panel')
  }, {
    path: 'view/collapse',
    name: 'en_viewCollapse',
    meta: {
      title: 'Collapse',
    },
    component: () =>
      import ('components_en/component/view/collapse')
  }, {
    path: 'view/tag',
    name: 'en_viewTag',
    meta: {
      title: 'Tag',
    },
    component: () =>
      import ('components_en/component/view/tag')
  }, {
    path: 'view/tabs',
    name: 'en_viewTabs',
    meta: {
      title: 'Tabs',
    },
    component: () =>
      import ('components_en/component/view/tabs')
  }, {
    path: 'view/menu',
    name: 'en_viewMenu',
    meta: {
      title: 'Menu',
    },
    component: () =>
      import ('components_en/component/view/menu')
  }, {
    path: 'view/timeline',
    name: 'en_viewTimeline',
    meta: {
      title: 'Timeline',
    },
    component: () =>
      import ('components_en/component/view/timeline')
  }, {
    path: 'view/imagepreview',
    name: 'en_viewImagePreview',
    meta: {
      title: 'viewImagePreview',
    },
    component: () =>
      import('components_en/component/view/imagepreview')
  }, {
    path: 'view/carousel',
    name: 'en_viewCarousel',
    meta: {
      title: 'viewCarousel',
    },
    component: () =>
      import('components_en/component/view/carousel')
  }, {
    path: 'view/breadcrumb',
    name: 'en_viewBreadcrumb',
    meta: {
      title: 'Breadcrumb',
    },
    component: () =>
      import ('components_en/component/view/breadcrumb')
  }, {
    path: 'view/avatar',
    name: 'en_viewAvatar',
    meta: {
      title: 'Avatar',
    },
    component: () =>
      import('components_en/component/view/avatar')
  }, {
    path: 'view/transfer',
    name: 'en_viewTransfer',
    meta: {
      title: 'Transfer',
    },
    component: () =>
      import ('components_en/component/view/transfer')
  }, {
    path: 'other/affix',
    name: 'en_otherAffix',
    meta: {
      title: 'Affix',
    },
    component: () =>
      import ('components_en/component/other/affix')
  }, {
    path: 'other/backtop',
    name: 'en_otherBacktop',
    meta: {
      title: 'Backtop',
    },
    component: () =>
      import ('components_en/component/other/backtop')
  }, {
    path: 'other/scrollintoview',
    name: 'en_otherScrollintoview',
    meta: {
      title: 'ScrollIntoView',
    },
    component: () =>
      import ('components_en/component/other/scrollintoview')
  }, {
    path: 'other/clipboard',
    name: 'en_otherClipboard',
    meta: {
      title: 'Clipboard',
    },
    component: () =>
      import ('components_en/component/other/clipboard')
  },
  {
    path: 'other/textellipsis',
    name: 'en_otherTextellipsis',
    meta: {
      title: 'TextEllipsis',
    },
    component: () =>
      import ('components_en/component/other/textellipsis')
  }, 
  {
    path: '',
    name: 'en_guide',
    meta: {
      title: 'Guide',
    },
    component: () =>
      import ('components_en/guide/guide')
  }, {
    path: 'guide',
    name: 'en_guideguide',
    meta: {
      title: 'Guide',
    },
    component: () =>
      import ('components_en/guide/guide')
  }, {
    path: 'quickstart',
    name: 'en_quickstart',
    meta: {
      title: 'QuickStart',
    },
    component: () =>
      import ('components_en/guide/quickstart')
  }, {
    path: 'themes',
    name: 'en_themes',
    meta: {
      title: 'Themes',
    },
    component: () =>
      import ('components_en/guide/themes')
  }, {
    path: 'i18n',
    name: 'en_i18n',
    meta: {
      title: 'I18n',
    },
    component: () =>
      import ('components_en/guide/i18n')
  }, {
    path: 'config',
    name: 'en_config',
    meta: {
      title: 'Config',
    },
    component: () =>
      import ('components_en/guide/config')
  },{
    path: 'methods',
    name: 'en_methods',
    meta: {
      title: 'Methods',
    },
    component: () =>
      import ('components_en/guide/methods')
  },{
    path: 'guideheysnippets',
    name: 'en_guideheysnippets',
    meta: {
      title: 'heyui-snippets',
    },
    component: () =>
      import ('components_en/resource/heysnippets')
  }],
}, {
  path: '/en/resource',
  component: (resolve) => require(['components_en/resource'], resolve),
  children: [{
    path: '',
    name: 'en_resourceheycli',
    meta: {
      title: 'HeyCli',
    },
    component: () =>
      import ('components_en/resource/heycli')
  },{
    path: 'heycli',
    name: 'en_heycli',
    meta: {
      title: 'HeyCli',
    },
    component: () =>
      import ('components_en/resource/heycli')
  },{
    path: 'heyutils',
    name: 'en_heyutils',
    meta: {
      title: 'HeyUtils',
    },
    component: () =>
      import ('components_en/resource/heyutils')
  },{
    path: 'heyvalidator',
    name: 'en_heyvalidator',
    meta: {
      title: 'HeyValidator',
    },
    component: () =>
      import ('components_en/resource/heyvalidator')
  },{
    path: 'manba',
    name: 'en_manba',
    meta: {
      title: 'manba',
    },
    component: () =>
      import ('components_en/resource/manba')
  },{
    path: 'model',
    name: 'en_model',
    meta: {
      title: 'model',
    },
    component: () =>
      import ('components_en/resource/model')
  },{
    path: 'umock',
    name: 'en_umock',
    meta: {
      title: 'umock',
    },
    component: () =>
      import ('components_en/resource/umock')
  },{
    path: 'heysnippets',
    name: 'en_heysnippets',
    meta: {
      title: 'heyui-snippets',
    },
    component: () =>
      import ('components_en/resource/heysnippets')
  }]
}];


export default router;