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
import BackTop from 'heyui/src/components/back-top';
import Badge from 'heyui/src/components/badge';
import Breadcrumb from 'heyui/src/components/breadcrumb';
import Checkbox from 'heyui/src/components/checkbox';
import Circle from 'heyui/src/components/circle';
import Category from 'heyui/src/components/category';
import CategoryPicker from 'heyui/src/components/category-picker';
import DatePicker from 'heyui/src/components/date-picker';
import DateRangePicker from 'heyui/src/components/date-range-picker';
import DateFullRangePicker from 'heyui/src/components/date-full-range-picker';
import DropdownCustom from 'heyui/src/components/dropdown-custom';
import DropdownMenu from 'heyui/src/components/dropdown-menu';
import ImagePreview from 'heyui/src/components/image-preview';
import Form from 'heyui/src/components/form';
import FormItem from 'heyui/src/components/form-item';
import FormItemList from 'heyui/src/components/form-item-list';
import Menu from 'heyui/src/components/menu';
import Modal from 'heyui/src/components/modal';
import ModalComponent from 'heyui/src/components/modal-component';
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
import HSwitch from 'heyui/src/components/h-switch';
import SwitchList from 'heyui/src/components/switch-list';
import Skeleton from 'heyui/src/components/skeleton';
import Table from 'heyui/src/components/table';
import TableItem from 'heyui/src/components/table-item';
import Tabs from 'heyui/src/components/tabs';
import TagInput from 'heyui/src/components/tag-input';
import Tree from 'heyui/src/components/tree';
import TreePicker from 'heyui/src/components/tree-picker';
import NumberInput from 'heyui/src/components/number-input';
import Tooltip from 'heyui/src/components/tooltip';
import Uploader from 'heyui/src/components/uploader';
import AutoComplete from 'heyui/src/components/auto-complete';
import Row from 'heyui/src/components/row';
import Cell from 'heyui/src/components/cell';
import HHeader from 'heyui/src/components/h-header';
import HFooter from 'heyui/src/components/h-footer';
import Content from 'heyui/src/components/content';
import Sider from 'heyui/src/components/sider';
import Layout from 'heyui/src/components/layout';
import Timeline from 'heyui/src/components/timeline';
import TimelineItem from 'heyui/src/components/timeline-item';
import Transfer from 'heyui/src/components/transfer';
import Button from 'heyui/src/components/button';
import ButtonGroup from 'heyui/src/components/button-group';
import TextEllipsis from 'heyui/src/components/text-ellipsis';
import Carousel from 'heyui/src/components/carousel';
import Collapse from 'heyui/src/components/collapse';
import CollapseItem from 'heyui/src/components/collapse-item';

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
import $LoadingBar from 'heyui/src/plugins/loading-bar';
import $ScrollIntoView from 'heyui/src/plugins/scroll-into-view';
import $Clipboard from 'heyui/src/plugins/clipboard';
import $ImagePreview from 'heyui/src/plugins/image-preview';
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

const install = function (app, opts = {}) {
  if (install.installed) return;
  if (opts.locale) {
    locale.use(opts.locale);
  }
  if (opts.i18n) {
    locale.i18n(opts.i18n);
  }

  Object.keys(components).forEach(key => {
    let component = components[key];
    app.component(key, component);
    app.component(`h-${key.toLocaleLowerCase()}`, component);
    if (key.indexOf('h') !== 0) {
      app.component(`h${key}`, component);
    }
  });

  Object.keys(directives).forEach(key => {
    app.directive(key, directives[key]);
  });

  app.config.globalProperties.$filters = filters;

  Object.keys(prototypes).forEach(key => {
    app.config.globalProperties[key] = prototypes[key];
  });
};

const HeyUI = Object.assign(prototypes, config, { dictMapping }, { locale: locale.use });

HeyUI.install = install;

export default HeyUI;
