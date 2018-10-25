
 /*
 * HeyUI JavaScript Library
 * https://heyui.top/
 *
 * Copyright (C) Lan 2017-2018
 * Released under the MIT license
 *
 */
import Affix from './components/affix';
import BackTop from './components/backtop';
import Badge from './components/badge';
import Breadcrumb from './components/breadcrumb';
import Checkbox from './components/checkbox';
import Circle from './components/circle';
import Category from './components/category';
import Datetime from './components/datetime';
import Dropdown from './plugins/dropdown';
import DropdownCustom from './components/dropdowncustom';
import DropdownMenu from './components/dropdownmenu';
import Form from './components/form';
import Menu from './components/menu';
import modal from './components/modal';
import Pagination from './components/pagination';
import Poptip from './components/poptip';
import Progress from './components/progress';
import Radio from './components/radio';
import Rate from './components/rate';
import Slider from './components/slider';
import Loading from './components/loading';
import Steps from './components/steps';
import Search from './components/search';
import Select from './components/select';
import Switch from './components/switch';
import SwitchList from './components/switchlist';
import { Table, TableItem } from './components/table';
import Tabs from './components/tabs';
import TagInput from './components/taginput';
import Tree from './components/tree';
import TreePicker from './components/treepicker';
import NumberInput from './components/numberinput';
import Tooltip from './components/tooltip';
import Uploader from './components/uploader';
import AutoComplete from './components/autocomplete';
import {
  Row,
  Col
} from './components/layout';
import Timeline from './components/timeline';
import { Button, ButtonGroup } from './components/button';
import TextEllipsis from './components/textellipsis';
import Carousel from './components/carousel';

import style from './directives/style';
import tooltip from './directives/tooltip';
import wordcount from './directives/wordcount';
import wordlimit from './directives/wordlimit';
import autosize from './directives/autosize';
import $Modal from './plugins/modal';
import $Confirm from './plugins/confirm';
import $Message from './plugins/message';
import $Notice from './plugins/notice';
import $Loading from './plugins/loading';
import $LoadingBar from './plugins/loadingBar';
import $ScrollIntoView from './plugins/scrollIntoView';

import filters from './filters';
import config from './utils/config';
import locale from './locale';
import LocaleMinxin from './mixins/locale';

const components = {
  Affix,
  AutoComplete,
  BackTop,
  Badge,
  Button,
  ButtonGroup,
  Breadcrumb,
  Category,
  Checkbox,
  hCircle: Circle,
  DatePicker: Datetime.DatePicker,
  DateRangePicker: Datetime.DateRangePicker,
  DateFullRangePicker: Datetime.DateFullRangePicker,
  DropdownCustom,
  DropdownMenu,
  Form,
  FormItem: Form.Item,
  FormItemList: Form.ItemList,
  Menu,
  Modal: modal.Modal,
  ModalComponent: modal.ModalComponent,
  NumberInput,
  Pagination,
  Poptip,
  Progress,
  Radio,
  Rate,
  Row,
  Search,
  Select,
  Slider,
  Steps,
  hSwitch: Switch,
  SwitchList,
  Col,
  Timeline,
  TimelineItem: Timeline.Item,
  Loading,
  TagInput,
  Table,
  TableItem,
  Tabs,
  Tooltip,
  Tree,
  TreePicker,
  Uploader,
  TextEllipsis,
  Carousel,
  CarouselItem: Carousel.CarouselItem,
};

const directives = {
  width: style.width,
  color: style.color,
  "bg-color": style.bgColor,
  height: style.height,
  padding: style.padding,
  margin: style.margin,
  font: style.font,
  autosize,
  tooltip,
  wordcount,
  wordlimit
}

let prototypes = {
  $Message,
  // $Modal,
  $Confirm,
  $Loading,
  $LoadingBar
}

const HeyUI = Object.assign({}, components, { $Modal: $Modal(), $Notice: $Notice(), locale: locale.use, i18n: locale.i18n }, prototypes, config, { Dropdown }, filters);

const install = function (Vue, opts) {
  if (install.installed) return;
  if (opts) {
    if (opts.locale) {
      locale.use(opts.locale);
    }
  }

  Vue.mixin(LocaleMinxin);

  Object.keys(components).forEach((key) => {
    Vue.component(key, components[key]);
    Vue.component(`h-${key.toLocaleLowerCase()}`, components[key]);
    if (key.indexOf('h') !== 0) {
      Vue.component(`h${key}`, components[key]);
    }
  });

  Object.keys(filters).forEach((key) => {
    Vue.filter(key, filters[key]);
  });

  Object.keys(directives).forEach((key) => {
    Vue.directive(key, directives[key]);
    // that[key] = directives[key];
  });

  Object.keys(prototypes).forEach((key) => {
    Vue.prototype[key] = prototypes[key];
  });

  HeyUI.$Modal = Vue.prototype.$Modal = $Modal(Vue);
  HeyUI.$Notice = Vue.prototype.$Notice = $Notice(Vue);
  HeyUI.$ScrollIntoView = Vue.prototype.$ScrollIntoView = $ScrollIntoView;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

HeyUI.install = install;

module.exports = HeyUI;
