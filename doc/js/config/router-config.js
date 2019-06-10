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
          component: () => import('components/component/guide')
        },
        {
          path: 'basic/grid',
          name: 'basicGrid',
          meta: {
            title: 'Grid'
          },
          component: () => import('components/component/grid')
        },
        {
          path: 'basic/layout',
          name: 'basicLayout',
          meta: {
            title: 'Layout'
          },
          component: () => import('components/component/layout')
        },
        {
          path: 'basic/color',
          name: 'basicColor',
          meta: {
            title: 'Color'
          },
          component: () => import('components/component/color')
        },
        {
          path: 'basic/icon',
          name: 'basicIcon',
          meta: {
            title: 'Icon'
          },
          component: () => import('components/component/icon')
        },
        {
          path: 'basic/extend',
          name: 'basicExtend',
          meta: {
            title: 'Extend'
          },
          component: () => import('components/component/extend')
        },
        {
          path: 'basic/button',
          name: 'basicButton',
          meta: {
            title: 'Button'
          },
          component: () => import('components/component/button')
        },
        {
          path: 'form/input',
          name: 'formInput',
          meta: {
            title: 'Input'
          },
          component: () => import('components/component/input')
        },
        {
          path: 'form/textarea',
          name: 'formTextarea',
          meta: {
            title: 'Textarea'
          },
          component: () => import('components/component/textarea')
        },
        {
          path: 'form/radio',
          name: 'formRadio',
          meta: {
            title: 'Radio'
          },
          component: () => import('components/component/radio')
        },
        {
          path: 'form/switchlist',
          name: 'formSwitchlist',
          meta: {
            title: 'Switchlist'
          },
          component: () => import('components/component/switchlist')
        },
        {
          path: 'form/switch',
          name: 'formSwitch',
          meta: {
            title: 'HSwitch'
          },
          component: () => import('components/component/switch')
        },
        {
          path: 'form/checkbox',
          name: 'formCheckbox',
          meta: {
            title: 'Checkbox'
          },
          component: () => import('components/component/checkbox')
        },
        {
          path: 'form/slider',
          name: 'formSlider',
          meta: {
            title: 'Slider'
          },
          component: () => import('components/component/slider')
        },
        {
          path: 'form/rate',
          name: 'formRate',
          meta: {
            title: 'Rate'
          },
          component: () => import('components/component/rate')
        },
        {
          path: 'form/form',
          name: 'formForm',
          meta: {
            title: 'Form'
          },
          component: () => import('components/component/form')
        },
        {
          path: 'data/plugin/select',
          name: 'pluginSelect',
          meta: {
            title: 'Select'
          },
          component: () => import('components/component/select')
        },
        {
          path: 'data/plugin/autocomplete',
          name: 'pluginAuto',
          meta: {
            title: 'AutoComplete'
          },
          component: () => import('components/component/autocomplete')
        },
        {
          path: 'data/plugin/date',
          name: 'pluginDate',
          meta: {
            title: 'Date'
          },
          component: () => import('components/component/date')
        },
        {
          path: 'data/plugin/time',
          name: 'pluginTime',
          meta: {
            title: 'Time'
          },
          component: () => import('components/component/time')
        },
        {
          path: 'data/plugin/datetime',
          name: 'pluginDatetime',
          meta: {
            title: 'DateTime'
          },
          component: () => import('components/component/datetime')
        },
        {
          path: 'data/plugin/daterange',
          name: 'pluginDateRange',
          meta: {
            title: 'DateRange'
          },
          component: () => import('components/component/daterange')
        },
        {
          path: 'data/plugin/datefullrange',
          name: 'pluginFullDateRange',
          meta: {
            title: 'DateFullRange'
          },
          component: () => import('components/component/datefullrange')
        },
        {
          path: 'data/plugin/city',
          name: 'pluginCity',
          component: () => import('components/component/city')
        },
        {
          path: 'data/plugin/taginput',
          name: 'pluginTaginput',
          meta: {
            title: 'TagInput'
          },
          component: () => import('components/component/taginput')
        },
        {
          path: 'data/plugin/numberinput',
          name: 'pluginNumberinput',
          meta: {
            title: 'NumberInput'
          },
          component: () => import('components/component/numberinput')
        },
        {
          path: 'data/plugin/upload',
          name: 'pluginUpload',
          meta: {
            title: 'Upload'
          },
          component: () => import('components/component/upload')
        },
        {
          path: 'data/plugin/valid',
          name: 'pluginValid',
          meta: {
            title: 'Valid'
          },
          component: () => import('components/component/valid')
        },
        {
          path: 'data/view/searchinput',
          name: 'viewSearchinput',
          meta: {
            title: 'SearchInput'
          },
          component: () => import('components/component/searchinput')
        },
        {
          path: 'data/view/table',
          name: 'viewTable',
          meta: {
            title: 'Table'
          },
          component: () => import('components/component/table')
        },
        {
          path: 'data/view/page',
          name: 'viewPage',
          meta: {
            title: 'Page'
          },
          component: () => import('components/component/page')
        },
        {
          path: 'data/view/loading',
          name: 'viewLoading',
          meta: {
            title: 'Loading'
          },
          component: () => import('components/component/loading')
        },
        {
          path: 'data/view/progress',
          name: 'viewProgress',
          meta: {
            title: 'Progress'
          },
          component: () => import('components/component/progress')
        },
        {
          path: 'data/view/circle',
          name: 'viewCircle',
          meta: {
            title: 'Circle'
          },
          component: () => import('components/component/circle')
        },
        {
          path: 'plugin/tree',
          name: 'pluginTree',
          meta: {
            title: 'Tree'
          },
          component: () => import('components/component/tree')
        },
        {
          path: 'plugin/treepicker',
          name: 'pluginTreePicker',
          meta: {
            title: 'TreePicker'
          },
          component: () => import('components/component/treepicker')
        },
        {
          path: 'plugin/dropdowncustom',
          name: 'pluginDropdowncustom',
          meta: {
            title: 'DropdownCustom'
          },
          component: () => import('components/component/dropdowncustom')
        },
        {
          path: 'plugin/category',
          name: 'pluginCategory',
          meta: {
            title: 'Category'
          },
          component: () => import('components/component/category')
        },
        {
          path: 'plugin/search',
          name: 'pluginSearch',
          meta: {
            title: 'Search'
          },
          component: () => import('components/component/search')
        },
        {
          path: 'plugin/cascader',
          name: 'pluginCascader',
          meta: {
            title: 'Cascader'
          },
          component: () => import('components/component/cascader')
        },
        {
          path: 'other/categorypicker',
          name: 'otherCategoryPicker',
          meta: {
            title: 'CategoryPicker'
          },
          component: () => import('components/component/categorypicker')
        },
        {
          path: 'plugin/dropdownmenu',
          name: 'pluginDropdownmenu',
          meta: {
            title: 'DropdownMenu'
          },
          component: () => import('components/component/dropdownmenu')
        },
        {
          path: 'plugin/loadingbar',
          name: 'pluginLoadingbar',
          meta: {
            title: 'LoadingBar'
          },
          component: () => import('components/component/loadingbar')
        },
        {
          path: 'plugin/steps',
          name: 'pluginSteps',
          meta: {
            title: 'Steps'
          },
          component: () => import('components/component/steps')
        },
        {
          path: 'message/message',
          name: 'messageTip',
          meta: {
            title: 'Tip'
          },
          component: () => import('components/component/message')
        },
        {
          path: 'message/notice',
          name: 'messageNotice',
          meta: {
            title: 'Notice'
          },
          component: () => import('components/component/notice')
        },
        {
          path: 'message/modal',
          name: 'messageModal',
          meta: {
            title: 'Modal'
          },
          component: () => import('components/component/modal')
        },
        {
          path: 'message/tooltip',
          name: 'messageTooltip',
          meta: {
            title: 'Tooltip'
          },
          component: () => import('components/component/tooltip')
        },
        {
          path: 'message/poptip',
          name: 'messagePoptip',
          meta: {
            title: 'Poptip'
          },
          component: () => import('components/component/poptip')
        },
        {
          path: 'view/badge',
          name: 'viewBadge',
          meta: {
            title: 'Badge'
          },
          component: () => import('components/component/badge')
        },
        {
          path: 'view/panel',
          name: 'viewPanel',
          meta: {
            title: 'Panel'
          },
          component: () => import('components/component/panel')
        },
        {
          path: 'view/collapse',
          name: 'viewCollapse',
          meta: {
            title: 'Collapse'
          },
          component: () => import('components/component/collapse')
        },
        {
          path: 'view/tag',
          name: 'viewTag',
          meta: {
            title: 'Tag'
          },
          component: () => import('components/component/tag')
        },
        {
          path: 'view/tabs',
          name: 'viewTabs',
          meta: {
            title: 'Tabs'
          },
          component: () => import('components/component/tabs')
        },
        {
          path: 'view/menu',
          name: 'viewMenu',
          meta: {
            title: 'Menu'
          },
          component: () => import('components/component/menu')
        },
        {
          path: 'view/timeline',
          name: 'viewTimeline',
          meta: {
            title: 'Timeline'
          },
          component: () => import('components/component/timeline')
        },
        {
          path: 'view/imagepreview',
          name: 'viewImagePreview',
          meta: {
            title: 'ImagePreview'
          },
          component: () => import('components/component/imagepreview')
        },
        {
          path: 'view/carousel',
          name: 'viewCarousel',
          meta: {
            title: 'Carousel'
          },
          component: () => import('components/component/carousel')
        },
        {
          path: 'view/transfer',
          name: 'viewTransfer',
          meta: {
            title: 'Tranfer'
          },
          component: () => import('components/component/transfer')
        },
        {
          path: 'view/breadcrumb',
          name: 'viewBreadcrumb',
          meta: {
            title: 'Breadcrumb'
          },
          component: () => import('components/component/breadcrumb')
        },
        {
          path: 'view/avatar',
          name: 'viewAvatar',
          meta: {
            title: 'Avatar'
          },
          component: () => import('components/component/avatar')
        },
        {
          path: 'other/affix',
          name: 'otherAffix',
          meta: {
            title: 'Affix'
          },
          component: () => import('components/component/affix')
        },
        {
          path: 'other/backtop',
          name: 'otherBacktop',
          meta: {
            title: 'Backtop'
          },
          component: () => import('components/component/backtop')
        },
        {
          path: 'other/colorpicker',
          name: 'otherColorPicker',
          meta: {
            title: 'ColorPicker'
          },
          component: () => import('components/component/colorpicker')
        },
        {
          path: 'other/scrollintoview',
          name: 'otherScrollintoview',
          meta: {
            title: 'ScrollIntoView'
          },
          component: () => import('components/component/scrollintoview')
        },
        {
          path: 'other/clipboard',
          name: 'otherClipboard',
          meta: {
            title: 'Clipboard'
          },
          component: () => import('components/component/clipboard')
        },
        {
          path: 'other/textellipsis',
          name: 'otherTextellipsis',
          meta: {
            title: 'TextEllipsis'
          },
          component: () => import('components/component/textellipsis')
        },
        {
          path: 'other/skeleton',
          name: 'otherSkeleton',
          meta: {
            title: 'Skeleton'
          },
          component: () => import('components/component/skeleton')
        },
        {
          path: '',
          name: 'guide',
          meta: {
            title: 'Guide'
          },
          component: () => import('components/component/guide')
        },
        {
          path: 'guide',
          name: 'guideguide',
          meta: {
            title: 'Guide'
          },
          component: () => import('components/component/guide')
        },
        {
          path: 'quickstart',
          name: 'quickstart',
          meta: {
            title: 'QuickStart'
          },
          component: () => import('components/component/quickstart')
        },
        {
          path: 'themes',
          name: 'themes',
          meta: {
            title: 'Themes'
          },
          component: () => import('components/component/themes')
        },
        {
          path: 'i18n',
          name: 'i18n',
          meta: {
            title: 'I18n'
          },
          component: () => import('components/component/i18n')
        },
        {
          path: 'config',
          name: 'config',
          meta: {
            title: 'Config'
          },
          component: () => import('components/component/config')
        },
        {
          path: 'methods',
          name: 'methods',
          meta: {
            title: 'Methods'
          },
          component: () => import('components/component/methods')
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
      path: '/theme',
      name: 'systheme',
      component: resolve => require(['components/theme/index'], resolve)
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
      path: '/frame/example',
      name: 'frameExample',
      component: resolve => require(['components/common/example-html'], resolve)
    },
    ...enRouters
  ]
};

export default router;
