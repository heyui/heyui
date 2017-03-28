[Vue.js](https://vuejs.org/) syntax highlighting made easy, using [highlight.js](https://highlightjs.org/).

## Quickstart

### Installation

    npm install --save vue-highlightjs

### Using vue-highlightjs

In your main JavaScript file (eg. `main.js`):

```javascript
// Import Vue and vue-highlgihtjs
import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'

// Tell Vue.js to use vue-highlightjs
Vue.use(VueHighlightJS)
```

In your template, in order to highlight javascript code:

```html
<!-- If your source-code lives in a variable called 'sourcecode' -->
<pre v-highlightjs="sourcecode"><code class="javascript"></code></pre>

<!-- If you want to highlight hardcoded source-code -->
<pre v-highlightjs><code class="javascript">const s = new Date().toString()</code></pre>
```
---

* You can see a live example here: https://jsfiddle.net/metachris/1vz9oobc/
* See this blog post for more information: https://www.metachris.com/2017/02/vuejs-syntax-highlighting-with-highlightjs/


## Contributing

Any sort of contributions and feedback is much appreciated. Just
leave an issue or pull-request!

This project uses the [AirBnB code style](https://github.com/airbnb/javascript).

Please run `npm run lint` and `npm run test` before you submit a pull request! <3


## About

Author: Chris Hager <chris@linuxuser.at> (https://www.metachris.com)

License: MIT

Contributors:

* Chris Hager
* [mr-krille](https://github.com/mr-krille)
* [Duoc Nguyen](https://github.com/nguyenvanduocit)


## Changelog

v1.2.1

* Fixed displaying and highlighting HTML tags passed as value to the directive (thanks @nguyenvanduocit)
