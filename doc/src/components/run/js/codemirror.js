require('codemirror/lib/codemirror.js');
require('codemirror/lib/codemirror.css');

require('codemirror/mode/javascript/javascript.js');
require('codemirror/mode/css/css.js');
require('codemirror/mode/vue/vue.js');
require('codemirror/mode/htmlmixed/htmlmixed.js');

// groovy代码高亮
require('codemirror/mode/groovy/groovy.js');

// 引入css文件，用以支持主题
require('codemirror/theme/dracula.css');

require('codemirror/addon/fold/foldgutter.css');
require('codemirror/addon/fold/foldcode.js');
require('codemirror/addon/fold/foldgutter.js');
require('codemirror/addon/fold/brace-fold.js');
require('codemirror/addon/fold/comment-fold.js');

require('codemirror/addon/edit/closebrackets.js');
require('codemirror/addon/edit/closetag.js');
require('codemirror/addon/edit/matchbrackets.js');
require('codemirror/addon/edit/matchtags.js');

// 自动补全
require('codemirror/addon/hint/show-hint.css');
require('codemirror/addon/hint/show-hint.js');
require('codemirror/addon/hint/css-hint.js');
require('codemirror/addon/hint/html-hint.js');
require('codemirror/addon/hint/javascript-hint.js');

// codeMirror样式覆盖
require('../../../css/codemirror.less');
