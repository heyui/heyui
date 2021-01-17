// import enRouters from './router-config-en';
import { defineAsyncComponent } from 'vue';

const routeConfig = {
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        title: 'Home'
      },
      component: defineAsyncComponent(() => import('@/components/home'))
    },
    {
      path: '/component',
      title: 'Component',
      component: defineAsyncComponent(() => import('@/components/component')),
      children: [
        {
          path: '',
          name: 'Component',
          meta: {
            title: 'Guide'
          },
          component: defineAsyncComponent(() => import('@/components/component/guide'))
        }
        //   {
        //     path: 'basic/grid',
        //     name: 'basicGrid',
        //     meta: {
        //       title: 'Grid'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/grid'))
        //   },
        //   {
        //     path: 'basic/layout',
        //     name: 'basicLayout',
        //     meta: {
        //       title: 'Layout'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/layout'))
        //   },
        //   {
        //     path: 'basic/color',
        //     name: 'basicColor',
        //     meta: {
        //       title: 'Color'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/color'))
        //   },
        //   {
        //     path: 'basic/icon',
        //     name: 'basicIcon',
        //     meta: {
        //       title: 'Icon'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/icon'))
        //   },
        //   {
        //     path: 'basic/extend',
        //     name: 'basicExtend',
        //     meta: {
        //       title: 'Extend'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/extend'))
        //   },
        //   {
        //     path: 'basic/button',
        //     name: 'basicButton',
        //     meta: {
        //       title: 'Button'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/button'))
        //   },
        //   {
        //     path: 'form/input',
        //     name: 'formInput',
        //     meta: {
        //       title: 'Input'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/input'))
        //   },
        //   {
        //     path: 'form/textarea',
        //     name: 'formTextarea',
        //     meta: {
        //       title: 'Textarea'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/textarea'))
        //   },
        //   {
        //     path: 'form/radio',
        //     name: 'formRadio',
        //     meta: {
        //       title: 'Radio'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/radio'))
        //   },
        //   {
        //     path: 'form/switchlist',
        //     name: 'formSwitchlist',
        //     meta: {
        //       title: 'Switchlist'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/switchlist'))
        //   },
        //   {
        //     path: 'form/switch',
        //     name: 'formSwitch',
        //     meta: {
        //       title: 'HSwitch'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/switch'))
        //   },
        //   {
        //     path: 'form/checkbox',
        //     name: 'formCheckbox',
        //     meta: {
        //       title: 'Checkbox'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/checkbox'))
        //   },
        //   {
        //     path: 'form/slider',
        //     name: 'formSlider',
        //     meta: {
        //       title: 'Slider'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/slider'))
        //   },
        //   {
        //     path: 'form/rate',
        //     name: 'formRate',
        //     meta: {
        //       title: 'Rate'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/rate'))
        //   },
        //   {
        //     path: 'form/form',
        //     name: 'formForm',
        //     meta: {
        //       title: 'Form'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/form'))
        //   },
        //   {
        //     path: 'data/plugin/select',
        //     name: 'pluginSelect',
        //     meta: {
        //       title: 'Select'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/select'))
        //   },
        //   {
        //     path: 'data/plugin/autocomplete',
        //     name: 'pluginAuto',
        //     meta: {
        //       title: 'AutoComplete'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/autocomplete'))
        //   },
        //   {
        //     path: 'data/plugin/date',
        //     name: 'pluginDate',
        //     meta: {
        //       title: 'Date'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/date'))
        //   },
        //   {
        //     path: 'data/plugin/time',
        //     name: 'pluginTime',
        //     meta: {
        //       title: 'Time'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/time'))
        //   },
        //   {
        //     path: 'data/plugin/datetime',
        //     name: 'pluginDatetime',
        //     meta: {
        //       title: 'DateTime'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/datetime'))
        //   },
        //   {
        //     path: 'data/plugin/daterange',
        //     name: 'pluginDateRange',
        //     meta: {
        //       title: 'DateRange'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/daterange'))
        //   },
        //   {
        //     path: 'data/plugin/datefullrange',
        //     name: 'pluginFullDateRange',
        //     meta: {
        //       title: 'DateFullRange'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/datefullrange'))
        //   },
        //   {
        //     path: 'data/plugin/city',
        //     name: 'pluginCity',
        //     component: defineAsyncComponent(() => import('@/components/component/city'))
        //   },
        //   {
        //     path: 'data/plugin/taginput',
        //     name: 'pluginTaginput',
        //     meta: {
        //       title: 'TagInput'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/taginput'))
        //   },
        //   {
        //     path: 'data/plugin/numberinput',
        //     name: 'pluginNumberinput',
        //     meta: {
        //       title: 'NumberInput'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/numberinput'))
        //   },
        //   {
        //     path: 'data/plugin/upload',
        //     name: 'pluginUpload',
        //     meta: {
        //       title: 'Upload'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/upload'))
        //   },
        //   {
        //     path: 'data/plugin/valid',
        //     name: 'pluginValid',
        //     meta: {
        //       title: 'Valid'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/valid'))
        //   },
        //   {
        //     path: 'data/view/searchinput',
        //     name: 'viewSearchinput',
        //     meta: {
        //       title: 'SearchInput'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/searchinput'))
        //   },
        //   {
        //     path: 'data/view/table',
        //     name: 'viewTable',
        //     meta: {
        //       title: 'Table'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/table'))
        //   },
        //   {
        //     path: 'data/view/page',
        //     name: 'viewPage',
        //     meta: {
        //       title: 'Page'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/page'))
        //   },
        //   {
        //     path: 'data/view/loading',
        //     name: 'viewLoading',
        //     meta: {
        //       title: 'Loading'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/loading'))
        //   },
        //   {
        //     path: 'data/view/progress',
        //     name: 'viewProgress',
        //     meta: {
        //       title: 'Progress'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/progress'))
        //   },
        //   {
        //     path: 'data/view/circle',
        //     name: 'viewCircle',
        //     meta: {
        //       title: 'Circle'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/circle'))
        //   },
        //   {
        //     path: 'plugin/tree',
        //     name: 'pluginTree',
        //     meta: {
        //       title: 'Tree'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/tree'))
        //   },
        //   {
        //     path: 'plugin/treepicker',
        //     name: 'pluginTreePicker',
        //     meta: {
        //       title: 'TreePicker'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/treepicker'))
        //   },
        //   {
        //     path: 'plugin/dropdowncustom',
        //     name: 'pluginDropdowncustom',
        //     meta: {
        //       title: 'DropdownCustom'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/dropdowncustom'))
        //   },
        //   {
        //     path: 'plugin/category',
        //     name: 'pluginCategory',
        //     meta: {
        //       title: 'Category'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/category'))
        //   },
        //   {
        //     path: 'plugin/search',
        //     name: 'pluginSearch',
        //     meta: {
        //       title: 'Search'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/search'))
        //   },
        //   {
        //     path: 'plugin/cascader',
        //     name: 'pluginCascader',
        //     meta: {
        //       title: 'Cascader'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/cascader'))
        //   },
        //   {
        //     path: 'other/categorypicker',
        //     name: 'otherCategoryPicker',
        //     meta: {
        //       title: 'CategoryPicker'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/categorypicker'))
        //   },
        //   {
        //     path: 'plugin/dropdownmenu',
        //     name: 'pluginDropdownmenu',
        //     meta: {
        //       title: 'DropdownMenu'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/dropdownmenu'))
        //   },
        //   {
        //     path: 'plugin/loadingbar',
        //     name: 'pluginLoadingbar',
        //     meta: {
        //       title: 'LoadingBar'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/loadingbar'))
        //   },
        //   {
        //     path: 'plugin/steps',
        //     name: 'pluginSteps',
        //     meta: {
        //       title: 'Steps'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/steps'))
        //   },
        //   {
        //     path: 'message/message',
        //     name: 'messageTip',
        //     meta: {
        //       title: 'Tip'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/message'))
        //   },
        //   {
        //     path: 'message/notice',
        //     name: 'messageNotice',
        //     meta: {
        //       title: 'Notice'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/notice'))
        //   },
        //   {
        //     path: 'message/modal',
        //     name: 'messageModal',
        //     meta: {
        //       title: 'Modal'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/modal'))
        //   },
        //   {
        //     path: 'message/tooltip',
        //     name: 'messageTooltip',
        //     meta: {
        //       title: 'Tooltip'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/tooltip'))
        //   },
        //   {
        //     path: 'message/poptip',
        //     name: 'messagePoptip',
        //     meta: {
        //       title: 'Poptip'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/poptip'))
        //   },
        //   {
        //     path: 'view/badge',
        //     name: 'viewBadge',
        //     meta: {
        //       title: 'Badge'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/badge'))
        //   },
        //   {
        //     path: 'view/panel',
        //     name: 'viewPanel',
        //     meta: {
        //       title: 'Panel'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/panel'))
        //   },
        //   {
        //     path: 'view/collapse',
        //     name: 'viewCollapse',
        //     meta: {
        //       title: 'Collapse'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/collapse'))
        //   },
        //   {
        //     path: 'view/tag',
        //     name: 'viewTag',
        //     meta: {
        //       title: 'Tag'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/tag'))
        //   },
        //   {
        //     path: 'view/tabs',
        //     name: 'viewTabs',
        //     meta: {
        //       title: 'Tabs'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/tabs'))
        //   },
        //   {
        //     path: 'view/menu',
        //     name: 'viewMenu',
        //     meta: {
        //       title: 'Menu'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/menu'))
        //   },
        //   {
        //     path: 'view/timeline',
        //     name: 'viewTimeline',
        //     meta: {
        //       title: 'Timeline'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/timeline'))
        //   },
        //   {
        //     path: 'view/imagepreview',
        //     name: 'viewImagePreview',
        //     meta: {
        //       title: 'ImagePreview'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/imagepreview'))
        //   },
        //   {
        //     path: 'view/carousel',
        //     name: 'viewCarousel',
        //     meta: {
        //       title: 'Carousel'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/carousel'))
        //   },
        //   {
        //     path: 'view/transfer',
        //     name: 'viewTransfer',
        //     meta: {
        //       title: 'Tranfer'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/transfer'))
        //   },
        //   {
        //     path: 'view/breadcrumb',
        //     name: 'viewBreadcrumb',
        //     meta: {
        //       title: 'Breadcrumb'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/breadcrumb'))
        //   },
        //   {
        //     path: 'view/avatar',
        //     name: 'viewAvatar',
        //     meta: {
        //       title: 'Avatar'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/avatar'))
        //   },
        //   {
        //     path: 'other/affix',
        //     name: 'otherAffix',
        //     meta: {
        //       title: 'Affix'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/affix'))
        //   },
        //   {
        //     path: 'other/backtop',
        //     name: 'otherBacktop',
        //     meta: {
        //       title: 'Backtop'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/backtop'))
        //   },
        //   {
        //     path: 'other/colorpicker',
        //     name: 'otherColorPicker',
        //     meta: {
        //       title: 'ColorPicker'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/colorpicker'))
        //   },
        //   {
        //     path: 'other/scrollintoview',
        //     name: 'otherScrollintoview',
        //     meta: {
        //       title: 'ScrollIntoView'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/scrollintoview'))
        //   },
        //   {
        //     path: 'other/clipboard',
        //     name: 'otherClipboard',
        //     meta: {
        //       title: 'Clipboard'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/clipboard'))
        //   },
        //   {
        //     path: 'other/textellipsis',
        //     name: 'otherTextellipsis',
        //     meta: {
        //       title: 'TextEllipsis'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/textellipsis'))
        //   },
        //   {
        //     path: 'other/skeleton',
        //     name: 'otherSkeleton',
        //     meta: {
        //       title: 'Skeleton'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/skeleton'))
        //   },
        //   {
        //     path: '',
        //     name: 'guide',
        //     meta: {
        //       title: 'Guide'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/guide'))
        //   },
        //   {
        //     path: 'guide',
        //     name: 'guideguide',
        //     meta: {
        //       title: 'Guide'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/guide'))
        //   },
        //   {
        //     path: 'quickstart',
        //     name: 'quickstart',
        //     meta: {
        //       title: 'QuickStart'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/quickstart'))
        //   },
        //   {
        //     path: 'themes',
        //     name: 'themes',
        //     meta: {
        //       title: 'Themes'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/themes'))
        //   },
        //   {
        //     path: 'i18n',
        //     name: 'i18n',
        //     meta: {
        //       title: 'I18n'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/i18n'))
        //   },
        //   {
        //     path: 'config',
        //     name: 'config',
        //     meta: {
        //       title: 'Config'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/config'))
        //   },
        //   {
        //     path: 'methods',
        //     name: 'methods',
        //     meta: {
        //       title: 'Methods'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/component/methods'))
        //   },
        //   {
        //     path: 'guideheysnippets',
        //     name: 'guideheysnippets',
        //     meta: {
        //       title: 'hey-snippets'
        //     },
        //     component: defineAsyncComponent(() => import('@/components/resource/heysnippets'))
        //   }
      ]
    },
    {
      path: '/theme',
      name: 'systheme',
      component: resolve => require(['@/components/theme/index'], resolve)
    },
    {
      path: '/run',
      name: 'sysrun',
      component: resolve => require(['@/components/run/index'], resolve)
    },
    {
      path: '/resource',
      component: resolve => require(['@/components/resource'], resolve),
      children: [
        {
          path: '',
          name: 'resourceheycli',
          meta: {
            title: 'HeyCli'
          },
          component: defineAsyncComponent(() => import('@/components/resource/heycli'))
        },
        {
          path: 'heycli',
          name: 'heycli',
          meta: {
            title: 'HeyCli'
          },
          component: defineAsyncComponent(() => import('@/components/resource/heycli'))
        },
        {
          path: 'heyutils',
          name: 'heyutils',
          meta: {
            title: 'HeyUtils'
          },
          component: defineAsyncComponent(() => import('@/components/resource/heyutils'))
        },
        {
          path: 'heyvalidator',
          name: 'heyvalidator',
          meta: {
            title: 'HeyValidator'
          },
          component: defineAsyncComponent(() => import('@/components/resource/heyvalidator'))
        },
        {
          path: 'manba',
          name: 'manba',
          meta: {
            title: 'manba'
          },
          component: defineAsyncComponent(() => import('@/components/resource/manba'))
        },
        {
          path: 'model',
          name: 'model',
          meta: {
            title: 'model'
          },
          component: defineAsyncComponent(() => import('@/components/resource/model'))
        },
        {
          path: 'umock',
          name: 'umock',
          meta: {
            title: 'umock'
          },
          component: defineAsyncComponent(() => import('@/components/resource/umock'))
        },
        {
          path: 'heysnippets',
          name: 'heysnippets',
          meta: {
            title: 'hey-snippets'
          },
          component: defineAsyncComponent(() => import('@/components/resource/heysnippets'))
        }
      ]
    },
    {
      path: '/frame/example',
      name: 'frameExample',
      component: defineAsyncComponent(() => import('@/components/common/example-html'))
    }
    // ...enRouters
  ]
};

const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHistory(),
  routes: routeConfig.routes // short for `routes: routes`
});

export default router;
