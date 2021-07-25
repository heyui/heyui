import config from 'heyui/utils/config';

export default function (value, key, connector) {
  return config.dictMapping(value, key, connector);
}
