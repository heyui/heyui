// es6 polyfill
// import 'core-js/fn/array/find-index';

// import Affix from './components/affix';
// import Alert from './components/alert';
// import BackTop from './components/back-top';
// import Badge from './components/badge';
// import Breadcrumb from './components/breadcrumb';
// import Button from './components/button';
// import Card from './components/card';
// import Carousel from './components/carousel';
// import Cascader from './components/cascader';
import Checkbox from './components/checkbox';
import SwitchList from './components/switchlist';
// import Circle from './components/circle';
// import Collapse from './components/collapse';
// import DatePicker from './components/date-picker';
// import Dropdown from './components/dropdown';
// import Form from './components/form';
// import Icon from './components/icon';
// import Input from './components/input';
// import InputNumber from './components/input-number';
// import LoadingBar from './components/loading-bar';
// import Menu from './components/menu';
// import Message from './components/message';
// import Modal from './components/modal';
// import Notice from './components/notice';
// import Page from './components/page';
// import Poptip from './components/poptip';
// import Progress from './components/progress';
import Radio from './components/radio';
// import Rate from './components/rate';
// import Slider from './components/slider';
// import Spin from './components/spin';
// import Steps from './components/steps';
import Switch from './components/switch';
// import Table from './components/table';
// import Tabs from './components/tabs';
// import Tag from './components/tag';
// import TimePicker from './components/time-picker';
// import Tooltip from './components/tooltip';
// import Transfer from './components/transfer';
// import Tree from './components/tree';
// import Upload from './components/upload';
import {
  Row,
  Col
} from './components/layout';
import Timeline from './components/timeline';
import { Button, ButtonGroup } from './components/button';
// import { Select, Option, OptionGroup } from './components/select';
// import locale from './locale';

import style from './directives/style';
import autosize from './directives/autosize';


const components = {
  // Affix,
  // Alert,
  // BackTop,
  // Badge,
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
  // Circle,
  // DatePicker,
  // Dropdown,
  // DropdownItem: Dropdown.Item,
  // DropdownMenu: Dropdown.Menu,
  // iForm: Form,
  // FormItem: Form.Item,
  // Collapse,
  // Icon,
  // InputNumber,
  // LoadingBar,
  // Menu,
  // MenuGroup: Menu.Group,
  // MenuItem: Menu.Item,
  // Submenu: Menu.Sub,
  // Message,
  // Modal,
  // Notice,
  // iOption: Option,
  // OptionGroup,
  // Page,
  // Panel: Collapse.Panel,
  // Poptip,
  // Progress,
  Radio,
  // RadioGroup: Radio.Group,
  // Rate,
  Row,
  hCol: Col,
  Col,
  Timeline,
  TimelineItem: Timeline.Item,
  // iSelect: Select,
  // Slider,
  // Spin,
  // Step: Steps.Step,
  // Steps,
  hSwitch: Switch,
  SwitchList,
  // iTable: Table,
  // Tabs: Tabs,
  // TabPane: Tabs.Pane,
  // Tag,
  // Timeline,
  // TimelineItem: Timeline.Item,
  // TimePicker,
  // Tooltip,
  // Transfer,
  // Tree,
  // Upload
};

const directives = {
  width: style.width,
  color: style.color,
  "bg-color": style.bgColor,
  height: style.height,
  font: style.font,
  autosize
}


const install = function (Vue, opts = {}) {
  // locale.use(opts.locale);
  // locale.i18n(opts.i18n);

  if (install.installed) return;
  if (opts) {

  }

  Object.keys(components).forEach((key) => {
    Vue.component(key, components[key]);
  });


  Object.keys(directives).forEach((key) => {
    Vue.directive(key, directives[key]);
  });

  // Vue.prototype.$Loading = LoadingBar;
  // Vue.prototype.$Message = Message;
  // Vue.prototype.$Modal = Modal;
  // Vue.prototype.$Notice = Notice;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default Object.assign(components, {
  install
});
