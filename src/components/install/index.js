/*
 * HeyUI JavaScript Library
 * https://www.heyui.top/
 *
 * Copyright © Lan 2017-present
 * Released under the MIT license
 *
 */

import dictMapping from 'heyui/src/filters/dictmapping';
import hlang from 'heyui/src/filters/hlang';

import config from 'heyui/src/utils/config';
import locale from 'heyui/src/locale';
import tooltip from 'heyui/src/directives/tooltip';

const directives = {
  tooltip
};

const filters = { dictMapping, hlang };

const install = function (Vue, opts = {}) {
  if (install.installed) return;
  if (opts.locale) {
    locale.use(opts.locale);
  }
  if (opts.i18n) {
    locale.i18n(opts.i18n);
  }
  if (opts.components) {
    Object.keys(opts.components).forEach(key => {
      let component = opts.components[key];
      Vue.component(key, component);
    });
  }

  Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
  });

  Object.keys(directives).forEach(key => {
    Vue.directive(key, directives[key]);
  });

  if (opts.prototypes) {
    Object.keys(opts.prototypes).forEach(key => {
      Vue.prototype[key] = opts.prototypes[key];
    });
  }
};

const HeyUI = Object.assign(config, { dictMapping });

HeyUI.install = install;

export default HeyUI;
