const isOnePointZero = function (n) {
  return typeof n === 'string' && n.indexOf('.') !== -1 && parseFloat(n) === 1;
};

const isPercentage = function (n) {
  return typeof n === 'string' && n.indexOf('%') !== -1;
};

// Take input from [0, n] and return it as [0, 1]
const bound01 = function (value, max) {
  if (isOnePointZero(value)) value = '100%';

  const processPercent = isPercentage(value);
  value = Math.min(max, Math.max(0, parseFloat(value)));

  // Automatically convert percentage into number
  if (processPercent) {
    value = parseInt(value * max, 10) / 100;
  }

  // Handle floating point rounding errors
  if ((Math.abs(value - max) < 0.000001)) {
    return 1;
  }

  // Convert into [0, 1] range if it isn't already
  return (value % max) / parseFloat(max);
};

const INT_HEX_MAP = { 10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E', 15: 'F' };

export const toHex = function ({ r, g, b }) {
  const hexOne = function (value) {
    value = Math.min(Math.round(value), 255);
    const high = Math.floor(value / 16);
    const low = value % 16;
    return '' + (INT_HEX_MAP[high] || high) + (INT_HEX_MAP[low] || low);
  };

  if (isNaN(r) || isNaN(g) || isNaN(b)) return '';

  return '#' + hexOne(r) + hexOne(g) + hexOne(b);
};

export const genHex = function (h, s, v) {
  return toHex(hsv2rgb(h, s, v));
};

const HEX_INT_MAP = { A: 10, B: 11, C: 12, D: 13, E: 14, F: 15 };

export const parseHexChannel = function (hex) {
  if (hex.length === 2) {
    return (HEX_INT_MAP[hex[0].toUpperCase()] || +hex[0]) * 16 + (HEX_INT_MAP[hex[1].toUpperCase()] || +hex[1]);
  }

  return HEX_INT_MAP[hex[1].toUpperCase()] || +hex[1];
};

export const hsl2hsv = function (hue, sat, light) {
  sat = sat / 100;
  light = light / 100;
  let smin = sat;
  const lmin = Math.max(light, 0.01);
  let sv;
  let v;

  light *= 2;
  sat *= (light <= 1) ? light : 2 - light;
  smin *= lmin <= 1 ? lmin : 2 - lmin;
  v = (light + sat) / 2;
  sv = light === 0 ? (2 * smin) / (lmin + smin) : (2 * sat) / (light + sat);

  return {
    h: hue,
    s: sv * 100,
    v: v * 100
  };
};

export const hsv2hsl = function (hue, sat, val) {
  return [
    hue,
    (sat * val / ((hue = (2 - sat) * val) < 1 ? hue : 2 - hue)) || 0,
    hue / 2
  ];
};

// `rgbToHsv`
// Converts an RGB color value to HSV
// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
// *Returns:* { h, s, v } in [0,1]
export const rgb2hsv = function (r, g, b) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s;
  let v = max;

  const d = max - min;
  s = max === 0 ? 0 : d / max;

  if (max === min) {
    h = 0; // achromatic
  } else {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return { h: h * 360, s: s * 100, v: v * 100 };
};

// `hsvToRgb`
// Converts an HSV color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
export const hsv2rgb = function (h, s, v) {
  h = bound01(h, 360) * 6;
  s = bound01(s, 100);
  v = bound01(v, 100);

  const i = Math.floor(h);
  const f = h - i;
  const p = v * (1 - s);
  const q = v * (1 - f * s);
  const t = v * (1 - (1 - f) * s);
  const mod = i % 6;
  const r = [v, q, p, p, t, v][mod];
  const g = [t, v, v, q, p, p][mod];
  const b = [p, p, t, v, v, q][mod];

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255)
  };
};
