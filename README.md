
<p align="left">
  <img height="100"  width="100" src="http://www.heyui.top/static/images/logo.png"/>
</p>

# HeyUI
[![npm package](https://img.shields.io/npm/v/heyui.svg)](https://www.npmjs.org/package/heyui)
![JS gzip size](http://img.badgesize.io/https://unpkg.com/heyui/dist/heyui.esm.js?compression=gzip&label=gzip%20size:%20JS)
![CSS gzip size](http://img.badgesize.io/https://unpkg.com/heyui/themes/index.css?compression=gzip&label=gzip%20size:%20CSS)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

>A UI components Library.

## Website
[http://www.heyui.top](http://www.heyui.top)

## Install
```js
npm install heyui --save
```
## Start

### Basic
``` html

<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script src="https://cdn.jsdelivr.net/npm/heyui"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/heyui/themes/index.css"></link>

```
你可以通过 [在线示例 CODEPEN ](https://codepen.io/vvpvvp/pen/WJYKyq)查看具体用例，也可以通过直接查看 [HTML示例](https://www.heyui.top/simple.html) 的源码学习应用方式。

### Advanced

```js
import Vue from 'vue'
import HeyUI from 'heyui'
require("heyui/themes/index.less");

Vue.use(HeyUI)
```
### Online Demo
[Code Sandbox](https://codesandbox.io/s/github/vvpvvp/hey-demos/tree/master/) 在线示例，是一个使用<code>vue-cli</code>脚手架启动的项目。
你可以通过这个示例，掌握一些基本的调用方式。


## Admin

[http://admin.heyui.top](http://admin.heyui.top) 是一个基本的企业级应用框架，集成了一系列的配置文件，以及应用处理，是一套完整的架构体系。  
如果，你想快速的搭建一个中大型系统，推荐你直接使用 <code>git clone</code> 的方式，开始你的开发。

## Ecosystem
<table>
  <thead>
    <tr>
      <th>Project</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://www.npmjs.com/package/hey-cli" rel="nofollow">hey-cli</a></td>
      <td>Webpack Scaffolding</td>
    </tr>
    <tr>
      <td><a href="https://www.npmjs.com/package/hey-validator" rel="nofollow">hey-validator</a></td>
      <td>Validate Form Data</td>
    </tr>
    <tr>
      <td><a href="https://www.npmjs.com/package/hey-utils" rel="nofollow">hey-utils</a></td>
      <td>Javascript Utils</td>
    </tr>
  </tbody>
</table>

## Browser Support
Modern browsers and Internet Explorer 9+.

## LICENSE
MIT

