import Affix from './components/affix';
import BackTop from './components/backtop';
import Badge from './components/badge';
// import Breadcrumb from './components/breadcrumb';
// import Carousel from './components/carousel';
// import Cascader from './components/cascader';
import Checkbox from './components/checkbox';
import Circle from './components/circle';
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
import Loading from './components/Loading';
// import Steps from './components/steps';
import Search from './components/search';
import Select from './components/select';
import Switch from './components/switch';
import SwitchList from './components/switchlist';
import Table from './components/table';
import Tabs from './components/tabs';
import Tag from './components/tag';
import TagInput from './components/taginput';
import NumberInput from './components/numberinput';

// import TimePicker from './components/time-picker';
import Tooltip from './components/tooltip';
// import Transfer from './components/transfer';
import Tree from './components/tree';
// import Upload from './components/upload';
import AutoComplete from './components/autocomplete';
import {
  Row,
  Col
} from './components/layout';
import Timeline from './components/timeline';
import { Button, ButtonGroup } from './components/button';
// import locale from './locale';

import style from './directives/style';
import tooltip from './directives/tooltip';
import autosize from './directives/autosize';
import $Modal from './plugins/modal';
import $Confirm from './plugins/confirm';
import $Message from './plugins/message';
import $Notice from './plugins/notice';
import $Loading from './plugins/loading';
import $LoadingBar from './plugins/loadingbar';

import filters from './filters';

import config from './utils/config';


const components = {
  Affix,
  // Alert,
  AutoComplete,
  BackTop,
  Badge,
  // Breadcrumb,
  // BreadcrumbItem: Breadcrumb.Item,
  Button,
  hButton: Button,
  ButtonGroup,
  // Card,
  // Carousel,
  // CarouselItem: Carousel.Item,
  // Cascader,
  Checkbox,
  // CheckboxGroup: Checkbox.Group,
  hCircle: Circle,
  // DatePicker,
  DropdownCustom,
  DropdownMenu,
  DatePicker: Datetime.DatePicker,
  DateRangePicker: Datetime.DateRangePicker,
  hForm: Form,
  Form,
  FormItem: Form.Item,
  FormItemList: Form.ItemList,
  // Collapse,
  // Icon,
  // InputNumber,
  // LoadingBar,
  Menu,
  // MenuGroup: Menu.Group,
  // MenuItem: Menu.Item,
  // Submenu: Menu.Sub,
  // Message,
  Modal: modal.Modal,
  ModalComponent: modal.ModalComponent,
  NumberInput,
  // Notice,
  // iOption: Option,
  // OptionGroup,
  Pagination,
  // Panel: Collapse.Panel,
  Poptip,
  Progress,
  Radio,
  // RadioGroup: Radio.Group,
  Rate,
  Row,
  hCol: Col,
  Col,
  Timeline,
  TimelineItem: Timeline.Item,
  hSelect: Select,
  Select,
  Search,
  Slider,
  Loading,
  // Step: Steps.Step,
  // Steps,
  hSwitch: Switch,
  SwitchList,
  TagInput,
  Table,
  hTable: Table,
  Tabs,
  // TabPane: Tabs.Pane,
  Tag,
  // TimePicker,
  Tooltip,
  // Transfer,
  Tree,
  // Upload
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
  tooltip
}

const prototypes = {
  $Message,
  $Modal,
  $Confirm,
  $Notice,
  $Loading,
  $LoadingBar
}

const install = function (Vue) {
  // locale.use(opts.locale);
  // locale.i18n(opts.i18n);

  if (install.installed) return;
  // if (opts) {

  // }

  Object.keys(components).forEach((key) => {
    Vue.component(key, components[key]);
  });

  Object.keys(filters).forEach((key) => {
    Vue.filter(key, filters[key]);
  });

  Object.keys(directives).forEach((key) => {
    Vue.directive(key, directives[key]);
  });

  Object.keys(prototypes).forEach((key) => {
    Vue.prototype[key] = prototypes[key];
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const HeyUI = Object.assign(components, {
  install
}, prototypes, config, { Dropdown });

module.exports = HeyUI;
