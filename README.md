<p align="center">
  <img height="100"  width="100" src="https://www.heyui.top/static/images/logo.png"/>
</p>

# HeyUI

[![npm package](https://img.shields.io/npm/v/heyui.svg?style=flat-square)](https://www.npmjs.org/package/heyui)
![JS gzip size](http://img.badgesize.io/https://unpkg.com/heyui/dist/heyui.esm.js?style=flat-square&compression=gzip&label=gzip%20size:%20JS)
![CSS gzip size](http://img.badgesize.io/https://unpkg.com/heyui/themes/index.css?style=flat-square&compression=gzip&label=gzip%20size:%20CSS)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

> An UI components library.

## Components

<img src="https://raw.githubusercontent.com/heyui/heyui/master/doc/static/images/mindmap.png" style="max-width: 700px"/>

## Documentation

visit [heyui.top](http://v2.heyui.top).

## Install

```js
npm install heyui@next --save
```

## Start

### Basic

```html

<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script src="https://cdn.jsdelivr.net/npm/heyui"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/heyui/themes/index.css"></link>

```
### Advanced

```js
import { createApp } from 'vue';
import heyui from 'heyui';
require('heyui/themes/index.less');

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

[HeyUI Admin Template](http://admin-v2.heyui.top)

## Browser Support

Modern browsers and Internet Explorer 11+.

## LICENSE

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2017-present, Lan
