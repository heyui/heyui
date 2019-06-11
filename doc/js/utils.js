import utils from 'hey-utils';
module.exports = utils.extend({}, utils, {
  dynamicLoadCss(type) {
    let old = document.getElementById('loadcss');
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = `/themes/${type}/index.css`;
    link.id = 'loadcss';
    link.onload = () => {
      if (old) {
        head.removeChild(old);
      }
    };
    head.appendChild(link);
    let globalConfig = G.get('globalConfig');
    globalConfig.theme = type;
  }
});
