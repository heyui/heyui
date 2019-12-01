import {
  toHex,
  parseHexChannel,
  hsl2hsv,
  hsv2hsl,
  rgb2hsv,
  hsv2rgb
} from './color-base';

export default class Color {
  constructor(options) {
    this.hue = 0;
    this.saturation = 100;
    this.value = 100;
    this.alpha = 100;

    this.enableAlpha = false;
    this.format = 'hex';
    this.string = options.string;

    options = options || {};

    for (let option in options) {
      if (options.hasOwnProperty(option)) {
        this[option] = options[option];
      }
    }
    if (this.string) {
      this.calculate();
    }
  }

  set(prop, value) {
    if (arguments.length === 1 && typeof prop === 'object') {
      for (let p in prop) {
        if (prop.hasOwnProperty(p)) {
          this[p] = prop[p];
        }
      }
    } else {
      this[prop] = value;
    }
    this.calculate();
  }

  get(prop) {
    return this[prop];
  }

  getHex() {
    return toHex(hsv2rgb(this.hue, this.saturation, this.value));
  }

  clear() {
    this.hue = 0;
    this.saturation = 100;
    this.alpha = 100;
    this.value = 100;
    this.string = null;
  }

  parse(value) {
    if (!value) {
      this.clear();
      return;
    }

    const fromHSV = (h, s, v) => {
      this.hue = Math.max(0, Math.min(360, h));
      this.saturation = Math.max(0, Math.min(100, s));
      this.value = Math.max(0, Math.min(100, v));

      this.calculate();
    };

    if (value.indexOf('hsl') !== -1) {
      const parts = value.replace(/hsla|hsl|\(|\)/gm, '')
        .split(/\s|,/g).filter((val) => val !== '').map((val, index) => index > 2 ? parseFloat(val) : parseInt(val, 10));

      if (parts.length === 4) {
        this.alpha = Math.floor(parseFloat(parts[3]) * 100);
      } else if (parts.length === 3) {
        this.alpha = 100;
      }
      if (parts.length >= 3) {
        const { h, s, v } = hsl2hsv(parts[0], parts[1], parts[2]);
        fromHSV(h, s, v);
      }
    } else if (value.indexOf('hsv') !== -1) {
      const parts = value.replace(/hsva|hsv|\(|\)/gm, '')
        .split(/\s|,/g).filter((val) => val !== '').map((val, index) => index > 2 ? parseFloat(val) : parseInt(val, 10));

      if (parts.length === 4) {
        this.alpha = Math.floor(parseFloat(parts[3]) * 100);
      } else if (parts.length === 3) {
        this.alpha = 100;
      }
      if (parts.length >= 3) {
        fromHSV(parts[0], parts[1], parts[2]);
      }
    } else if (value.indexOf('rgb') !== -1) {
      const parts = value.replace(/rgba|rgb|\(|\)/gm, '')
        .split(/\s|,/g).filter((val) => val !== '').map((val, index) => index > 2 ? parseFloat(val) : parseInt(val, 10));

      if (parts.length === 4) {
        this.alpha = Math.floor(parseFloat(parts[3]) * 100);
      } else if (parts.length === 3) {
        this.alpha = 100;
      }
      if (parts.length >= 3) {
        const { h, s, v } = rgb2hsv(parts[0], parts[1], parts[2]);
        fromHSV(h, s, v);
      }
    } else if (value.indexOf('#') !== -1) {
      const hex = value.replace('#', '').trim();
      if (!/^(?:[0-9a-fA-F]{3}){1,2}$/.test(hex)) return;
      let r, g, b;

      if (hex.length === 3) {
        r = parseHexChannel(hex[0] + hex[0]);
        g = parseHexChannel(hex[1] + hex[1]);
        b = parseHexChannel(hex[2] + hex[2]);
      } else if (hex.length === 6 || hex.length === 8) {
        r = parseHexChannel(hex.substring(0, 2));
        g = parseHexChannel(hex.substring(2, 4));
        b = parseHexChannel(hex.substring(4, 6));
      }

      if (hex.length === 8) {
        this.alpha = Math.floor(parseHexChannel(hex.substring(6)) / 255 * 100);
      } else if (hex.length === 3 || hex.length === 6) {
        this.alpha = 100;
      }

      const { h, s, v } = rgb2hsv(r, g, b);
      fromHSV(h, s, v);
    }
  }

  compare(color) {
    return Math.abs(color.hue - this.hue) < 2 &&
      Math.abs(color.saturation - this.saturation) < 1 &&
      Math.abs(color.value - this.value) < 1 &&
      Math.abs(color.alpha - this.alpha) < 1;
  }

  calculate() {
    const { hue, saturation, value, alpha, format } = this;
    switch (format) {
      case 'hsl':
        const hsl = hsv2hsl(hue, saturation / 100, value / 100);
        this.string = `hsl(${hue}, ${Math.round(hsl[1] * 100)}%, ${Math.round(hsl[2] * 100)}%)`;
        break;
      case 'hsv':
        this.string = `hsv(${hue}, ${Math.round(saturation)}%, ${Math.round(value)}%)`;
        break;
      case 'rgb':
        const { r, g, b } = hsv2rgb(hue, saturation, value);
        this.string = `rgb(${r}, ${g}, ${b})`;
        break;
      default:
        if (this.enableAlpha) {
          const { r, g, b } = hsv2rgb(hue, saturation, value);
          this.string = `rgba(${r}, ${g}, ${b}, ${alpha / 100})`;
        } else {
          this.string = toHex(hsv2rgb(hue, saturation, value));
        }
    }
  }

  toString() {
    return this.string;
  }
};
