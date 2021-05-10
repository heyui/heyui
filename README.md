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

visit [heyui.top](http://www.heyui.top).

## Install

```js
npm install heyui --save
```

## Start

### Basic

```html

<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script src="https://cdn.jsdelivr.net/npm/heyui"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/heyui/themes/index.css"></link>

```

#### Basic Online Demo

- [codepen demo](https://codepen.io/vvpvvp/pen/WJYKyq)
- [html demo](https://www.heyui.top/simple.html)

### Advanced

```js
import Vue from 'vue';
import HeyUI from 'heyui';
require('heyui/themes/index.less');

Vue.use(HeyUI);
```

#### Advanced Online Demo

- [Code Sandbox](https://codesandbox.io/s/github/vvpvvp/hey-demos/tree/master/)

## Development

You need install [hey-cli](https://www.npmjs.org/package/hey-cli).

```sh
#build
npm install
# build complete heyui
hey b
# build esm version
hey b -f hey.esm.js
# build lang js
hey b -f hey.lang.js

# develop
cd doc
npm install
hey dev

```

## Admin Template

[HeyUI Admin Template](http://admin.heyui.top)

## Browser Support

Modern browsers and Internet Explorer 9+.

## LICENSE

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2017-present, Lan
