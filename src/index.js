/*
 * HeyUI JavaScript Library
 * https://www.heyui.top/
 *
 * Copyright © Lan 2017-present
 * Released under the MIT license
 *
 */
import Affix from 'heyui/src/components/affix';
import Avatar from 'heyui/src/components/avatar';
import BackTop from 'heyui/src/components/backtop';
import Badge from 'heyui/src/components/badge';
import Breadcrumb from 'heyui/src/components/breadcrumb';
import Checkbox from 'heyui/src/components/checkbox';
import Circle from 'heyui/src/components/circle';
import Category from 'heyui/src/components/category';
import CategoryPicker from 'heyui/src/components/categorypicker';
import DatePicker from 'heyui/src/components/datepicker';
import DateRangePicker from 'heyui/src/components/daterangepicker';
import DateFullRangePicker from 'heyui/src/components/datefullrangepicker';
import DropdownCustom from 'heyui/src/components/dropdowncustom';
import DropdownMenu from 'heyui/src/components/dropdownmenu';
import ImagePreview from 'heyui/src/components/imagepreview';
import Form from 'heyui/src/components/form';
import FormItem from 'heyui/src/components/formitem';
import FormItemList from 'heyui/src/components/formitemlist';
import Menu from 'heyui/src/components/menu';
import Modal from 'heyui/src/components/modal';
import ModalComponent from 'heyui/src/components/modalcomponent';
import Pagination from 'heyui/src/components/pagination';
import Poptip from 'heyui/src/components/poptip';
import Progress from 'heyui/src/components/progress';
import Radio from 'heyui/src/components/radio';
import Rate from 'heyui/src/components/rate';
import Slider from 'heyui/src/components/slider';
import Loading from 'heyui/src/components/loading';
import Steps from 'heyui/src/components/steps';
import Search from 'heyui/src/components/search';
import Select from 'heyui/src/components/select';
import HSwitch from 'heyui/src/components/hswitch';
import SwitchList from 'heyui/src/components/switchlist';
import Skeleton from 'heyui/src/components/skeleton';
import Table from 'heyui/src/components/table';
import TableItem from 'heyui/src/components/tableitem';
import Tabs from 'heyui/src/components/tabs';
import TagInput from 'heyui/src/components/taginput';
import Tree from 'heyui/src/components/tree';
import TreePicker from 'heyui/src/components/treepicker';
import NumberInput from 'heyui/src/components/numberinput';
import Tooltip from 'heyui/src/components/tooltip';
import Uploader from 'heyui/src/components/uploader';
import AutoComplete from 'heyui/src/components/autocomplete';
import Row from 'heyui/src/components/row';
import Cell from 'heyui/src/components/cell';
import HHeader from 'heyui/src/components/hheader';
import HFooter from 'heyui/src/components/hfooter';
import Content from 'heyui/src/components/content';
import Sider from 'heyui/src/components/sider';
import Layout from 'heyui/src/components/layout';
import Timeline from 'heyui/src/components/timeline';
import TimelineItem from 'heyui/src/components/timelineitem';
import Transfer from 'heyui/src/components/transfer';
import Button from 'heyui/src/components/button';
import ButtonGroup from 'heyui/src/components/buttongroup';
import TextEllipsis from 'heyui/src/components/textellipsis';
import Carousel from 'heyui/src/components/carousel';
import Collapse from 'heyui/src/components/collapse';
import CollapseItem from 'heyui/src/components/collapseitem';

import style from 'heyui/src/directives/style';
import tooltip from 'heyui/src/directives/tooltip';
import wordcount from 'heyui/src/directives/wordcount';
import wordlimit from 'heyui/src/directives/wordlimit';
import autosize from 'heyui/src/directives/autosize';
import $Modal from 'heyui/src/plugins/modal';
import $Confirm from 'heyui/src/plugins/confirm';
import $Message from 'heyui/src/plugins/message';
import $Notice from 'heyui/src/plugins/notice';
import $Loading from 'heyui/src/plugins/loading';
import $LoadingBar from 'heyui/src/plugins/loadingBar';
import $ScrollIntoView from 'heyui/src/plugins/scrollIntoView';
import $Clipboard from 'heyui/src/plugins/clipboard';
import $ImagePreview from 'heyui/src/plugins/imagepreview';
import $Dropdown from 'heyui/src/plugins/dropdown';

import dictMapping from 'heyui/src/filters/dictmapping';
import hlang from 'heyui/src/filters/hlang';

import config from 'heyui/src/utils/config';
import locale from 'heyui/src/locale';

const Col = Cell;

const components = {
  Affix,
  Avatar,
  AutoComplete,
  BackTop,
  Badge,
  Button,
  ButtonGroup,
  Breadcrumb,
  Category,
  CategoryPicker,
  Checkbox,
  hCircle: Circle,
  DatePicker,
  DateRangePicker,
  DateFullRangePicker,
  DropdownCustom,
  DropdownMenu,
  Form,
  FormItem,
  FormItemList,
  ImagePreview,
  Menu,
  Modal,
  ModalComponent,
  NumberInput,
  Pagination,
  Poptip,
  Progress,
  Radio,
  Rate,
  Row,
  Col,
  Cell,
  Search,
  Select,
  Slider,
  Steps,
  HSwitch,
  SwitchList,
  Skeleton,
  Timeline,
  TimelineItem,
  Transfer,
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
  Collapse,
  CollapseItem,
  HHeader,
  HFooter,
  Content,
  Sider,
  Layout
};

const directives = {
  width: style.width,
  color: style.color,
  'bg-color': style.bgColor,
  height: style.height,
  padding: style.padding,
  margin: style.margin,
  font: style.font,
  autosize,
  tooltip,
  wordcount,
  wordlimit
};

const prototypes = {
  $Modal,
  $Notice,
  $Message,
  $Confirm,
  $Loading,
  $LoadingBar,
  $ScrollIntoView,
  $Clipboard,
  $ImagePreview,
  $Dropdown
};

const filters = { dictMapping, hlang };

const install = function (Vue, opts = {}) {
  if (install.installed) return;
  if (opts.locale) {
    locale.use(opts.locale);
  }
  if (opts.i18n) {
    locale.i18n(opts.i18n);
  }

  Object.keys(components).forEach(key => {
    let component = components[key];
    Vue.component(key, component);
    Vue.component(`h-${key.toLocaleLowerCase()}`, component);
    if (key.indexOf('h') !== 0) {
      Vue.component(`h${key}`, component);
    }
  });

  Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
  });

  Object.keys(directives).forEach(key => {
    Vue.directive(key, directives[key]);
  });

  Object.keys(prototypes).forEach(key => {
    Vue.prototype[key] = prototypes[key];
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const HeyUI = Object.assign(prototypes, config, { dictMapping });

HeyUI.install = install;

export default HeyUI;
