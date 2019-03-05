import enRouters from './router-config-en';

const router = {
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        title: 'Home'
      },
      component: resolve => require(['components/home'], resolve)
    },
    {
      path: '/component',
      title: 'Component',
      component: resolve => require(['components/component'], resolve),
      children: [
        {
          path: '',
          name: 'Component',
          meta: {
            title: 'Guide'
          },
          component: () => import('components/guide/guide')
        },
        {
          path: 'basic/grid',
          name: 'basicGrid',
          meta: {
            title: 'Grid'
          },
          component: () => import('components/component/basic/grid')
        },
        {
          path: 'basic/layout',
          name: 'basicLayout',
          meta: {
            title: 'Layout'
          },
          component: () => import('components/component/basic/layout')
        },
        {
          path: 'basic/color',
          name: 'basicColor',
          meta: {
            title: 'Color'
          },
          component: () => import('components/component/basic/color')
        },
        {
          path: 'basic/icon',
          name: 'basicIcon',
          meta: {
            title: 'Icon'
          },
          component: () => import('components/component/basic/icon')
        },
        {
          path: 'basic/extend',
          name: 'basicExtend',
          meta: {
            title: 'Extend'
          },
          component: () => import('components/component/basic/extend')
        },
        {
          path: 'basic/button',
          name: 'basicButton',
          meta: {
            title: 'Button'
          },
          component: () => import('components/component/basic/button')
        },
        {
          path: 'form/input',
          name: 'formInput',
          meta: {
            title: 'Input'
          },
          component: () => import('components/component/form/input')
        },
        {
          path: 'form/textarea',
          name: 'formTextarea',
          meta: {
            title: 'Textarea'
          },
          component: () => import('components/component/form/textarea')
        },
        {
          path: 'form/radio',
          name: 'formRadio',
          meta: {
            title: 'Radio'
          },
          component: () => import('components/component/form/radio')
        },
        {
          path: 'form/switchlist',
          name: 'formSwitchlist',
          meta: {
            title: 'Switchlist'
          },
          component: () => import('components/component/form/switchlist')
        },
        {
          path: 'form/switch',
          name: 'formSwitch',
          meta: {
            title: 'Switch'
          },
          component: () => import('components/component/form/switch')
        },
        {
          path: 'form/checkbox',
          name: 'formCheckbox',
          meta: {
            title: 'Checkbox'
          },
          component: () => import('components/component/form/checkbox')
        },
        {
          path: 'form/slider',
          name: 'formSlider',
          meta: {
            title: 'Slider'
          },
          component: () => import('components/component/form/slider')
        },
        {
          path: 'form/rate',
          name: 'formRate',
          meta: {
            title: 'Rate'
          },
          component: () => import('components/component/form/rate')
        },
        {
          path: 'form/form',
          name: 'formForm',
          meta: {
            title: 'Form'
          },
          component: () => import('components/component/form/form')
        },
        {
          path: 'data/plugin/select',
          name: 'pluginSelect',
          meta: {
            title: 'Select'
          },
          component: () => import('components/component/data/plugin/select')
        },
        {
          path: 'data/plugin/autocomplete',
          name: 'pluginAuto',
          meta: {
            title: 'AutoComplete'
          },
          component: () => import('components/component/data/plugin/autocomplete')
        },
        {
          path: 'data/plugin/date',
          name: 'pluginDate',
          meta: {
            title: 'Date'
          },
          component: () => import('components/component/data/plugin/date')
        },
        {
          path: 'data/plugin/time',
          name: 'pluginTime',
          meta: {
            title: 'Time'
          },
          component: () => import('components/component/data/plugin/time')
        },
        {
          path: 'data/plugin/datetime',
          name: 'pluginDatetime',
          meta: {
            title: 'DateTime'
          },
          component: () => import('components/component/data/plugin/datetime')
        },
        {
          path: 'data/plugin/daterange',
          name: 'pluginDateRange',
          meta: {
            title: 'DateRange'
          },
          component: () => import('components/component/data/plugin/daterange')
        },
        {
          path: 'data/plugin/datefullrange',
          name: 'pluginFullDateRange',
          meta: {
            title: 'DateFullRange'
          },
          component: () => import('components/component/data/plugin/datefullrange')
        },
        {
          path: 'data/plugin/city',
          name: 'pluginCity',
          component: () => import('components/component/data/plugin/city')
        },
        {
          path: 'data/plugin/taginput',
          name: 'pluginTaginput',
          meta: {
            title: 'TagInput'
          },
          component: () => import('components/component/data/plugin/taginput')
        },
        {
          path: 'data/plugin/numberinput',
          name: 'pluginNumberinput',
          meta: {
            title: 'NumberInput'
          },
          component: () => import('components/component/data/plugin/numberinput')
        },
        {
          path: 'data/plugin/upload',
          name: 'pluginUpload',
          meta: {
            title: 'Upload'
          },
          component: () => import('components/component/data/plugin/upload')
        },
        {
          path: 'data/plugin/valid',
          name: 'pluginValid',
          meta: {
            title: 'Valid'
          },
          component: () => import('components/component/data/plugin/valid')
        },
        {
          path: 'data/view/searchinput',
          name: 'viewSearchinput',
          meta: {
            title: 'SearchInput'
          },
          component: () => import('components/component/data/view/searchinput')
        },
        {
          path: 'data/view/table',
          name: 'viewTable',
          meta: {
            title: 'Table'
          },
          component: () => import('components/component/data/view/table')
        },
        {
          path: 'data/view/page',
          name: 'viewPage',
          meta: {
            title: 'Page'
          },
          component: () => import('components/component/data/view/page')
        },
        {
          path: 'data/view/loading',
          name: 'viewLoading',
          meta: {
            title: 'Loading'
          },
          component: () => import('components/component/data/view/loading')
        },
        {
          path: 'data/view/progress',
          name: 'viewProgress',
          meta: {
            title: 'Progress'
          },
          component: () => import('components/component/data/view/progress')
        },
        {
          path: 'data/view/circle',
          name: 'viewCircle',
          meta: {
            title: 'Circle'
          },
          component: () => import('components/component/data/view/circle')
        },
        {
          path: 'plugin/tree',
          name: 'pluginTree',
          meta: {
            title: 'Tree'
          },
          component: () => import('components/component/plugin/tree')
        },
        {
          path: 'plugin/treepicker',
          name: 'pluginTreePicker',
          meta: {
            title: 'TreePicker'
          },
          component: () => import('components/component/plugin/treepicker')
        },
        {
          path: 'plugin/dropdowncustom',
          name: 'pluginDropdowncustom',
          meta: {
            title: 'DropdownCustom'
          },
          component: () => import('components/component/plugin/dropdowncustom')
        },
        {
          path: 'plugin/category',
          name: 'pluginCategory',
          meta: {
            title: 'Category'
          },
          component: () => import('components/component/plugin/category')
        },
        {
          path: 'plugin/search',
          name: 'pluginSearch',
          meta: {
            title: 'Search'
          },
          component: () => import('components/component/plugin/search')
        },
        {
          path: 'plugin/dropdownmenu',
          name: 'pluginDropdownmenu',
          meta: {
            title: 'DropdownMenu'
          },
          component: () => import('components/component/plugin/dropdownmenu')
        },
        {
          path: 'plugin/loadingbar',
          name: 'pluginLoadingbar',
          meta: {
            title: 'LoadingBar'
          },
          component: () => import('components/component/plugin/loadingbar')
        },
        {
          path: 'plugin/steps',
          name: 'pluginSteps',
          meta: {
            title: 'Steps'
          },
          component: () => import('components/component/plugin/steps')
        },
        {
          path: 'message/message',
          name: 'messageTip',
          meta: {
            title: 'Tip'
          },
          component: () => import('components/component/message/message')
        },
        {
          path: 'message/notice',
          name: 'messageNotice',
          meta: {
            title: 'Notice'
          },
          component: () => import('components/component/message/notice')
        },
        {
          path: 'message/modal',
          name: 'messageModal',
          meta: {
            title: 'Modal'
          },
          component: () => import('components/component/message/modal')
        },
        {
          path: 'message/tooltip',
          name: 'messageTooltip',
          meta: {
            title: 'Tooltip'
          },
          component: () => import('components/component/message/tooltip')
        },
        {
          path: 'message/poptip',
          name: 'messagePoptip',
          meta: {
            title: 'Poptip'
          },
          component: () => import('components/component/message/poptip')
        },
        {
          path: 'view/badge',
          name: 'viewBadge',
          meta: {
            title: 'Badge'
          },
          component: () => import('components/component/view/badge')
        },
        {
          path: 'view/panel',
          name: 'viewPanel',
          meta: {
            title: 'Panel'
          },
          component: () => import('components/component/view/panel')
        },
        {
          path: 'view/collapse',
          name: 'viewCollapse',
          meta: {
            title: 'Collapse'
          },
          component: () => import('components/component/view/collapse')
        },
        {
          path: 'view/tag',
          name: 'viewTag',
          meta: {
            title: 'Tag'
          },
          component: () => import('components/component/view/tag')
        },
        {
          path: 'view/tabs',
          name: 'viewTabs',
          meta: {
            title: 'Tabs'
          },
          component: () => import('components/component/view/tabs')
        },
        {
          path: 'view/menu',
          name: 'viewMenu',
          meta: {
            title: 'Menu'
          },
          component: () => import('components/component/view/menu')
        },
        {
          path: 'view/timeline',
          name: 'viewTimeline',
          meta: {
            title: 'Timeline'
          },
          component: () => import('components/component/view/timeline')
        },
        {
          path: 'view/imagepreview',
          name: 'viewImagePreview',
          meta: {
            title: 'viewImagePreview'
          },
          component: () => import('components/component/view/imagepreview')
        },
        {
          path: 'view/carousel',
          name: 'viewCarousel',
          meta: {
            title: 'viewCarousel'
          },
          component: () => import('components/component/view/carousel')
        },
        {
          path: 'view/transfer',
          name: 'viewTransfer',
          meta: {
            title: 'Tranfer'
          },
          component: () => import('components/component/view/transfer')
        },
        {
          path: 'view/breadcrumb',
          name: 'viewBreadcrumb',
          meta: {
            title: 'Breadcrumb'
          },
          component: () => import('components/component/view/breadcrumb')
        },
        {
          path: 'view/avatar',
          name: 'viewAvatar',
          meta: {
            title: 'Avatar'
          },
          component: () => import('components/component/view/avatar')
        },
        {
          path: 'other/affix',
          name: 'otherAffix',
          meta: {
            title: 'Affix'
          },
          component: () => import('components/component/other/affix')
        },
        {
          path: 'other/backtop',
          name: 'otherBacktop',
          meta: {
            title: 'Backtop'
          },
          component: () => import('components/component/other/backtop')
        },
        {
          path: 'other/scrollintoview',
          name: 'otherScrollintoview',
          meta: {
            title: 'ScrollIntoView'
          },
          component: () => import('components/component/other/scrollintoview')
        },
        {
          path: 'other/clipboard',
          name: 'otherClipboard',
          meta: {
            title: 'Clipboard'
          },
          component: () => import('components/component/other/clipboard')
        },
        {
          path: 'other/textellipsis',
          name: 'otherTextellipsis',
          meta: {
            title: 'TextEllipsis'
          },
          component: () => import('components/component/other/textellipsis')
        },
        {
          path: '',
          name: 'guide',
          meta: {
            title: 'Guide'
          },
          component: () => import('components/guide/guide')
        },
        {
          path: 'guide',
          name: 'guideguide',
          meta: {
            title: 'Guide'
          },
          component: () => import('components/guide/guide')
        },
        {
          path: 'quickstart',
          name: 'quickstart',
          meta: {
            title: 'QuickStart'
          },
          component: () => import('components/guide/quickstart')
        },
        {
          path: 'themes',
          name: 'themes',
          meta: {
            title: 'Themes'
          },
          component: () => import('components/guide/themes')
        },
        {
          path: 'i18n',
          name: 'i18n',
          meta: {
            title: 'I18n'
          },
          component: () => import('components/guide/i18n')
        },
        {
          path: 'config',
          name: 'config',
          meta: {
            title: 'Config'
          },
          component: () => import('components/guide/config')
        },
        {
          path: 'methods',
          name: 'methods',
          meta: {
            title: 'Methods'
          },
          component: () => import('components/guide/methods')
        },
        {
          path: 'guideheysnippets',
          name: 'guideheysnippets',
          meta: {
            title: 'hey-snippets'
          },
          component: () => import('components/resource/heysnippets')
        }
      ]
    },
    {
      path: '/resource',
      component: resolve => require(['components/resource'], resolve),
      children: [
        {
          path: '',
          name: 'resourceheycli',
          meta: {
            title: 'HeyCli'
          },
          component: () => import('components/resource/heycli')
        },
        {
          path: 'heycli',
          name: 'heycli',
          meta: {
            title: 'HeyCli'
          },
          component: () => import('components/resource/heycli')
        },
        {
          path: 'heyutils',
          name: 'heyutils',
          meta: {
            title: 'HeyUtils'
          },
          component: () => import('components/resource/heyutils')
        },
        {
          path: 'heyvalidator',
          name: 'heyvalidator',
          meta: {
            title: 'HeyValidator'
          },
          component: () => import('components/resource/heyvalidator')
        },
        {
          path: 'manba',
          name: 'manba',
          meta: {
            title: 'manba'
          },
          component: () => import('components/resource/manba')
        },
        {
          path: 'model',
          name: 'model',
          meta: {
            title: 'model'
          },
          component: () => import('components/resource/model')
        },
        {
          path: 'umock',
          name: 'umock',
          meta: {
            title: 'umock'
          },
          component: () => import('components/resource/umock')
        },
        {
          path: 'heysnippets',
          name: 'heysnippets',
          meta: {
            title: 'hey-snippets'
          },
          component: () => import('components/resource/heysnippets')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: resolve => require(['components/about'], resolve)
    },
    {
      path: '/frame/example',
      name: 'frameExample',
      component: resolve => require(['components/common/example-html'], resolve)
    },
    ...enRouters
  ]
};

export default router;
