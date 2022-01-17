/*
 * HeyUI JavaScript Library
 * https://www.heyui.top/
 *
 * Copyright © Lan 2017-present
 * Released under the MIT license
 *
 */
import Affix from 'heyui/components/affix';
import Avatar from 'heyui/components/avatar';
import BackTop from 'heyui/components/back-top';
import Badge from 'heyui/components/badge';
import Breadcrumb from 'heyui/components/breadcrumb';
import Checkbox from 'heyui/components/checkbox';
import Circle from 'heyui/components/circle';
import CategoryPicker from 'heyui/components/category-picker';
import DatePicker from 'heyui/components/date-picker';
import DateRangePicker from 'heyui/components/date-range-picker';
import DateFullRangePicker from 'heyui/components/date-full-range-picker';
import DropdownCustom from 'heyui/components/dropdown-custom';
import DropdownMenu from 'heyui/components/dropdown-menu';
import ImageList from 'heyui/components/image-list';
import Icon from 'heyui/components/icon';
import Input from 'heyui/components/input';
import Textarea from 'heyui/components/textarea';
import Form from 'heyui/components/form';
import FormItem from 'heyui/components/form-item';
// import FormItemList from 'heyui/components/form-item-list';
import Menu from 'heyui/components/menu';
import Modal from 'heyui/components/modal';
import Notice from 'heyui/components/notice';
// import ModalComponent from 'heyui/components/modal-component';
import Pagination from 'heyui/components/pagination';
import Poptip from 'heyui/components/poptip';
import Progress from 'heyui/components/progress';
import Radio from 'heyui/components/radio';
import Rate from 'heyui/components/rate';
import Slider from 'heyui/components/slider';
import Loading from 'heyui/components/loading';
import Steps from 'heyui/components/steps';
import Search from 'heyui/components/search';
import Select from 'heyui/components/select';
import Switch from 'heyui/components/h-switch';
import SwitchList from 'heyui/components/switch-list';
import Skeleton from 'heyui/components/skeleton';
import Table from 'heyui/components/table';
import TableItem from 'heyui/components/table-item';
import Tabs from 'heyui/components/tabs';
import Tag from 'heyui/components/tag';
import TagInput from 'heyui/components/tag-input';
import Tree from 'heyui/components/tree';
import TreePicker from 'heyui/components/tree-picker';
import NumberInput from 'heyui/components/number-input';
import Tooltip from 'heyui/components/tooltip';
import Uploader from 'heyui/components/uploader';
import AutoComplete from 'heyui/components/auto-complete';
import Row from 'heyui/components/row';
import Cell from 'heyui/components/cell';
import HHeader from 'heyui/components/h-header';
import HFooter from 'heyui/components/h-footer';
import Content from 'heyui/components/content';
import Sider from 'heyui/components/sider';
import Space from 'heyui/components/space';
import Layout from 'heyui/components/layout';
import Timeline from 'heyui/components/timeline';
import TimelineItem from 'heyui/components/timeline-item';
import Transfer from 'heyui/components/transfer';
import Button from 'heyui/components/button';
import ButtonGroup from 'heyui/components/button-group';
import TextEllipsis from 'heyui/components/text-ellipsis';
import Carousel from 'heyui/components/carousel';
// import Collapse from 'heyui/components/collapse';
// import CollapseItem from 'heyui/components/collapse-item';

import wordcount from 'heyui/directives/wordcount';
import wordlimit from 'heyui/directives/wordlimit';
import autosize from 'heyui/directives/autosize';

import modal from 'heyui/plugins/modal';
import confirm from 'heyui/plugins/confirm';
import message from 'heyui/plugins/message';
import notice from 'heyui/plugins/notice';
import loading from 'heyui/plugins/loading';
import loadingBar from 'heyui/plugins/loading-bar';
import scrollIntoView from 'heyui/plugins/scroll-into-view';
import clipboard from 'heyui/plugins/clipboard';
import imagePreview from 'heyui/plugins/image-preview';
import dropdown from 'heyui/plugins/dropdown';

import dictMapping from 'heyui/filters/dictmapping';
import hlang from 'heyui/filters/hlang';

import heyuiConfig from 'heyui/utils/config';
import locale from 'heyui/locale';

// import Locale from 'heyui/mixins/locale';

const components = {
  Affix,
  Avatar,
  AutoComplete,
  BackTop,
  Badge,
  Button,
  ButtonGroup,
  Breadcrumb,
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
  // FormItemList,
  ImageList,
  Input,
  Textarea,
  Icon,
  Menu,
  Modal,
  Notice,
  // ModalComponent,
  NumberInput,
  Pagination,
  Poptip,
  Progress,
  Radio,
  Rate,
  Row,
  Cell,
  Search,
  Select,
  Slider,
  Steps,
  HSwitch: Switch,
  Switch: Switch,
  SwitchList,
  Skeleton,
  Space,
  Tag,
  TagInput,
  Timeline,
  TimelineItem,
  Transfer,
  Loading,
  Table,
  TableItem,
  Tabs,
  Tooltip,
  Tree,
  TreePicker,
  Uploader,
  TextEllipsis,
  Carousel,
  // Collapse,
  // CollapseItem,
  HHeader,
  HFooter,
  Content,
  Sider,
  Layout
};

const directives = {
  autosize,
  wordcount,
  wordlimit
};

const filters = {
  dictMapping,
  hlang
};

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
  });

  Object.keys(directives).forEach(key => {
    app.directive(key, directives[key]);
  });
  Object.keys(filters).forEach(key => {
    app.config.globalProperties[key] = filters[key];
  });

  // app.mixin(Locale);
};

const HeyUI = { install };

export {
  modal,
  notice,
  message,
  confirm,
  loading,
  loadingBar,
  scrollIntoView,
  clipboard,
  imagePreview,
  dropdown,
  heyuiConfig,
  dictMapping,
  hlang,
  install
};

export default HeyUI;
