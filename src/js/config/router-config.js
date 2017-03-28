export default {
  component: [{
      path: 'basic/grid',
      component: (resolve) => require(['../../components/component/basic/grid'], resolve)
    }, {
      path: 'basic/color',
      component: (resolve) => require(['../../components/component/basic/color'], resolve)
    }, {
      path: 'basic/icon',
      component: (resolve) => require(['../../components/component/basic/icon'], resolve)
    }, {
      path: 'basic/extend',
      component: (resolve) => require(['../../components/component/basic/extend'], resolve)
    }, {
      path: 'basic/button',
      component: (resolve) => require(['../../components/component/basic/button'], resolve)
    }, {
      path: 'form/input',
      component: (resolve) => require(['../../components/component/form/input'], resolve)
    }, {
      path: 'form/textarea',
      component: (resolve) => require(['../../components/component/form/textarea'], resolve)
    }, {
      path: 'form/radio',
      component: (resolve) => require(['../../components/component/form/radio'], resolve)
    }, {
      path: 'form/switchlist',
      component: (resolve) => require(['../../components/component/form/switchlist'], resolve)
    }, {
      path: 'form/switch',
      component: (resolve) => require(['../../components/component/form/switch'], resolve)
    }, {
      path: 'form/checkbox',
      component: (resolve) => require(['../../components/component/form/checkbox'], resolve)
    }, {
      path: 'form/slider',
      component: (resolve) => require(['../../components/component/form/slider'], resolve)
    }, {
      path: 'form/rate',
      component: (resolve) => require(['../../components/component/form/rate'], resolve)
    }, {
      path: 'form/form',
      component: (resolve) => require(['../../components/component/form/form'], resolve)
    }, {
      path: 'data/plugin/select',
      component: (resolve) => require(['../../components/component/data/plugin/select'], resolve)
    }, {
      path: 'data/plugin/auto',
      component: (resolve) => require(['../../components/component/data/plugin/auto'], resolve)
    }, {
      path: 'data/plugin/date',
      component: (resolve) => require(['../../components/component/data/plugin/date'], resolve)
    }, {
      path: 'data/plugin/city',
      component: (resolve) => require(['../../components/component/data/plugin/city'], resolve)
    }, {
      path: 'data/plugin/tree',
      component: (resolve) => require(['../../components/component/data/plugin/tree'], resolve)
    }, {
      path: 'data/plugin/taginput',
      component: (resolve) => require(['../../components/component/data/plugin/taginput'], resolve)
    }, {
      path: 'data/plugin/upload',
      component: (resolve) => require(['../../components/component/data/plugin/upload'], resolve)
    }, {
      path: 'data/plugin/valid',
      component: (resolve) => require(['../../components/component/data/plugin/valid'], resolve)
    }, {
      path: 'data/view/searchinput',
      component: (resolve) => require(['../../components/component/data/view/searchinput'], resolve)
    }, {
      path: 'data/view/table',
      component: (resolve) => require(['../../components/component/data/view/table'], resolve)
    }, {
      path: 'data/view/page',
      component: (resolve) => require(['../../components/component/data/view/page'], resolve)
    }, {
      path: 'data/view/spin',
      component: (resolve) => require(['../../components/component/data/view/spin'], resolve)
    }, {
      path: 'data/view/tag',
      component: (resolve) => require(['../../components/component/data/view/tag'], resolve)
    }, {
      path: 'data/view/progress',
      component: (resolve) => require(['../../components/component/data/view/progress'], resolve)
    }, {
      path: 'data/view/circle',
      component: (resolve) => require(['../../components/component/data/view/circle'], resolve)
    }, {
      path: 'plugin/tree',
      component: (resolve) => require(['../../components/component/plugin/tree'], resolve)
    }, {
      path: 'plugin/dialog',
      component: (resolve) => require(['../../components/component/plugin/dialog'], resolve)
    }, {
      path: 'plugin/dropdown',
      component: (resolve) => require(['../../components/component/plugin/dropdown'], resolve)
    }, {
      path: 'plugin/dropdownmenu',
      component: (resolve) => require(['../../components/component/plugin/dropdownmenu'], resolve)
    }, {
      path: 'plugin/loadingbar',
      component: (resolve) => require(['../../components/component/plugin/loadingbar'], resolve)
    }, {
      path: 'message/tip',
      component: (resolve) => require(['../../components/component/message/tip'], resolve)
    }, {
      path: 'message/notice',
      component: (resolve) => require(['../../components/component/message/notice'], resolve)
    }, {
      path: 'message/modal',
      component: (resolve) => require(['../../components/component/message/modal'], resolve)
    }, {
      path: 'message/tooltip',
      component: (resolve) => require(['../../components/component/message/tooltip'], resolve)
    }, {
      path: 'message/poptip',
      component: (resolve) => require(['../../components/component/message/poptip'], resolve)
    }, {
      path: 'view/badge',
      component: (resolve) => require(['../../components/component/view/badge'], resolve)
    }, {
      path: 'view/card',
      component: (resolve) => require(['../../components/component/view/card'], resolve)
    }, {
      path: 'view/collapse',
      component: (resolve) => require(['../../components/component/view/collapse'], resolve)
    }, {
      path: 'view/tab',
      component: (resolve) => require(['../../components/component/view/tab'], resolve)
    }, {
      path: 'view/timeline',
      component: (resolve) => require(['../../components/component/view/timeline'], resolve)
    }, {
      path: 'view/breadcrumb',
      component: (resolve) => require(['../../components/component/view/breadcrumb'], resolve)
    }, {
      path: 'other/affix',
      component: (resolve) => require(['../../components/component/other/affix'], resolve)
    }, {
      path: 'other/backtop',
      component: (resolve) => require(['../../components/component/other/backtop'], resolve)
    }
  ],
  guide: [{
    path: 'guide',
    component: (resolve) => require(['../../components/guide/guide'], resolve)
  }, {
    path: 'quickstart',
    component: (resolve) => require(['../../components/guide/quickstart'], resolve)
  }, {
    path: 'themes',
    component: (resolve) => require(['../../components/guide/themes'], resolve)
  }, {
    path: 'logs',
    component: (resolve) => require(['../../components/guide/logs'], resolve)
  }]
}
