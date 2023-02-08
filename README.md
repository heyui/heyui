# HeyUI.ext 夏悸增强bug修复扩展版本

![npm (tag)](https://img.shields.io/npm/v/heyui.ext)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/heyui.ext)
![npm](https://img.shields.io/npm/dm/heyui.ext)
![NPM](https://img.shields.io/npm/l/heyui.ext)

> An UI components library.

## [2.2.0](https://github.com/heyui/heyui/compare/v1.26.1...v2.2.0) (2023-02-08)

### Features

* **AutoComplete:** AutoComplete增加deletable属性 ([163bce2](https://github.com/heyui/heyui/commit/163bce2cd1d741938b73d6be6f1d35a31e62c032))
* **Confirm:** Confirm增加cancelText和okText属性，可以自定义按钮文本 ([46f8fd9](https://github.com/heyui/heyui/commit/46f8fd92319de73c51a80329f986b592c80b9409))
* **Confirm:** Confirm显示优化，文字换行后，依然可以左对齐 ([86734f3](https://github.com/heyui/heyui/commit/86734f3f46598e160222b4c666aaa740c826673f))
* **Confirm:** Confirm的onConfirm提供异步操作功能，在onConfirm中如果返回Promise对象，可以实现异步关闭。 ([9285cc4](https://github.com/heyui/heyui/commit/9285cc4efec01a503c3bf0a0b238d6074f497174))
* **Poptip:** Poptip增加trigger属性，实现触发方式自定义 ([8ccbc48](https://github.com/heyui/heyui/commit/8ccbc484f6a87ae8e378e8f5bb5db2aba0128650))
* **Select:** Select增加filter属性，实现自定义过滤器 ([a386459](https://github.com/heyui/heyui/commit/a386459338c7c467fb31b542ba2113be7bec07b7))
* **Select:** 增强filter属性 ([0508b5a](https://github.com/heyui/heyui/commit/0508b5aa3b405287398409dc8144cdbd3b1b4378))
* **Uploader:** Uploader增加showFileList属性，控制是否显示上传列表 ([209c21a](https://github.com/heyui/heyui/commit/209c21a00b6b99c42be0a0ef2d9c85aa08f4440e))
* **Uploader:** Uploader组件功能优化 ([e1409dc](https://github.com/heyui/heyui/commit/e1409dc6284b345b2c6e613ca9f3bef47f01d84b))

### Bug Fixes

* **CategoryPicker:** 修复CategoryPicker初始值modelValue有值，datas未赋值时，组件初始错误bug ([1e396ed](https://github.com/heyui/heyui/commit/1e396ed5d225247462ac509c3b3a8f8e1e1a82cb))
* **Confirm:** 修复onConfrim非异步模式下未调用onConfrim执行 ([df447b6](https://github.com/heyui/heyui/commit/df447b68345c276e7030c92c9eb7a35f1d980161))
* **DateRangePicker:** 修复DateRangePicker快速选择日期时未触发confirm事件的问题 ([f777072](https://github.com/heyui/heyui/commit/f77707210e1f295ecb88744c7dcb512a8721db71))
* **NumberInput:** 修复value修改无效的问题 ([683da10](https://github.com/heyui/heyui/commit/683da10d3e0e85aaf37ba405ca8aadd47f28c641))
* **Select:** 修复Select的filterable下不支持slot="show"的bug ([14368b8](https://github.com/heyui/heyui/commit/14368b823499c22e7d089ca8671218b69dc06b9e))
* **Select:** 修复多选同时有placeholder时，出现两个提示语的bug ([49eadff](https://github.com/heyui/heyui/commit/49eadff01a56e2a3d6ced77225b53d5d7a672a57))

## Documentation

visit [heyui.top](http://v2.heyui.top).

## Install

```js
npm install heyui.ext --save
```

## Start

### Basic

```html

<script src="https://cdn.jsdelivr.net/npm/vue@next"></script>
<script src="https://cdn.jsdelivr.net/npm/heyui@next"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/heyui@next/themes/index.css"></link>

```
### Advanced

```js
import { createApp } from 'vue';
import heyui from 'heyui.ext';
require('heyui.ext/themes/index.less');

app.use(heyui);
app.mount('#app');
```

## Development

```sh

npm install

# build
npm run build

```

## Admin Template

[HeyUI Admin Template](http://admin.heyui.top)

## Browser Support

Modern browsers and Internet Explorer 11+.

## LICENSE

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2017-present, Lan
