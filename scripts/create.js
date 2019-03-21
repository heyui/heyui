#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var template = require('art-template');

const name = process.argv[ 2 ];
const moduleName = process.argv[ 3 ];

if (name === undefined) {
  console.error('Error: Please provide the component name.');
  return;
}

if (moduleName === undefined) {
  console.error('Error: Please provide the component moduleName.');
  return;
}

// # touch themes/components/$1.less
// # mkdir src/components/$1
// # touch src/components/$1/$1.vue
// # touch src/components/$1/index.js

// # touch doc/components/component/${moduleName}/$1.vue
// # touch doc/components_en/component/${moduleName}/$1.vue

// # touch doc/components/demos/${moduleName}/$11.vue
// # touch doc/components/demos/${moduleName}/$12.vue

// # touch doc/components_en/demos/${moduleName}/$11.vue
// # touch doc/components_en/demos/${moduleName}/$12.vue

let params = {
  name: name,
  lowerName: name.toLowerCase(),
  upperName: name.toUpperCase()
};

const files = [{
  template: './scripts/create-template/less.art',
  path: `themes/components/${params.lowerName}.less`
}, {
  template: './scripts/create-template/index.art',
  path: `src/components/${params.lowerName}/index.js`
}, {
  template: './scripts/create-template/component.art',
  path: `src/components/${params.lowerName}/${params.lowerName}.vue`
}, {
  template: './scripts/create-template/doc.art',
  path: `doc/components/component/${moduleName}/${params.lowerName}.vue`
}, {
  template: './scripts/create-template/doc_en.art',
  path: `doc/components/component_en/${moduleName}/${params.lowerName}.vue`
}, {
  template: './scripts/create-template/demo.art',
  path: `doc/components/demos/${moduleName}/${params.lowerName}1.vue`
}, {
  template: './scripts/create-template/demo.art',
  path: `doc/components/demos/${moduleName}/${params.lowerName}2.vue`
}, {
  template: './scripts/create-template/demo.art',
  path: `doc/components_en/demos/${moduleName}/${params.lowerName}1.vue`
}, {
  template: './scripts/create-template/demo.art',
  path: `doc/components_en/demos/${moduleName}/${params.lowerName}2.vue`
}];

fs.mkdirSync(`src/components/${params.lowerName}`);

for (let f of files) {
  fs.writeFile(f.path, template(path.resolve(f.template), params));
}
