/*
 * HeyUI JavaScript Library
 * https://www.heyui.top/
 *
 * Copyright © Lan 2017-present
 * Released under the MIT license
 *
 */

import dictMapping from 'heyui/filters/dictmapping';
import hlang from 'heyui/filters/hlang';

import config from 'heyui/utils/config';
import locale from 'heyui/locale';
import tooltip from 'heyui/directives/tooltip';

const directives = {
  tooltip
};

const filters = { dictMapping, hlang };

const install = function (app, opts = {}) {
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
      app.component(key, component);
    });
  }

  app.config.globalProperties.$filters = filters;

  Object.keys(directives).forEach(key => {
    app.directive(key, directives[key]);
  });

  if (opts.prototypes) {
    Object.keys(opts.prototypes).forEach(key => {
      app.config.globalProperties[key] = opts.prototypes[key];
    });
  }
};

const HeyUI = Object.assign(config, { dictMapping });

HeyUI.install = install;

export default HeyUI;
