import config from 'heyui/src/utils/config';

export default function (value, key, connector) {
  return config.dictMapping(value, key, connector);
};
