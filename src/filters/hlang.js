import locale from 'heyui/locale';

export default function (...args) {
  return locale.hlang.apply(this, args);
}
