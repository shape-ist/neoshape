export function getAverageRGB(imgEl) {
  var blockSize = 10, // only visit every 5 pixels
    defaultRGB = {
      r: 0,
      g: 0,
      b: 0,
    }, // for non-supporting envs
    canvas = document.createElement('canvas'),
    context = canvas.getContext && canvas.getContext('2d'),
    data,
    width,
    height,
    i = -4,
    length,
    rgb = {
      r: 0,
      g: 0,
      b: 0,
    },
    count = 0;

  if (!context) {
    return defaultRGB;
  }

  height = canvas.height =
    imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
  width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

  context.drawImage(imgEl, 0, 0);

  try {
    data = context.getImageData(0, 0, width, height);
  } catch (e) {
    /* security error, img on diff domain */
    console.log('image cors');
    return defaultRGB;
  }

  length = data.data.length;

  while ((i += blockSize * 4) < length) {
    ++count;
    rgb.r += data.data[i];
    rgb.g += data.data[i + 1];
    rgb.b += data.data[i + 2];
  }

  // ~~ used to floor values
  return [~~(rgb.r / count), ~~(rgb.g / count), ~~(rgb.b / count)];
}

export function rgbToHsl(r, g, b) {
  (r /= 255), (g /= 255), (b /= 255);
  var max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  var h,
    s,
    l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
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

  let hslOut = [h * 3.6, s, l].map(function (e) {
    return Number(e.toFixed(2) * 100);
  });
  return hslOut;
}

export function generateCSSAccent(hsla, alpha = '1') {
  hsla[1] = Math.round(hsla[1]).toString() + '%';
  hsla[2] = Math.round(hsla[2]).toString() + '%';
  hsla.push(alpha);
  hsla = hsla.join(', ');
  return `hsla(${hsla})`;
}

const r = Math.round;

function toRGBA(d) {
  const l = d.length;
  const rgba = {};
  if (d.slice(0, 3).toLowerCase() === 'rgb') {
    d = d.replace(' ', '').split(',');
    rgba[0] = parseInt(d[0].slice(d[3].toLowerCase() === 'a' ? 5 : 4), 10);
    rgba[1] = parseInt(d[1], 10);
    rgba[2] = parseInt(d[2], 10);
    rgba[3] = d[3] ? parseFloat(d[3]) : -1;
  } else {
    if (l < 6)
      d = parseInt(
        String(d[1]) +
          d[1] +
          d[2] +
          d[2] +
          d[3] +
          d[3] +
          (l > 4 ? String(d[4]) + d[4] : ''),
        16
      );
    else d = parseInt(d.slice(1), 16);
    rgba[0] = (d >> 16) & 255;
    rgba[1] = (d >> 8) & 255;
    rgba[2] = d & 255;
    rgba[3] =
      l === 9 || l === 5 ? r((((d >> 24) & 255) / 255) * 10000) / 10000 : -1;
  }
  return rgba;
}

export function blend(from, to, p = 0.5) {
  from = from.trim();
  to = to.trim();
  const b = p < 0;
  p = b ? p * -1 : p;
  const f = toRGBA(from);
  const t = toRGBA(to);
  if (to[0] === 'r') {
    return (
      'rgb' +
      (to[3] === 'a' ? 'a(' : '(') +
      r((t[0] - f[0]) * p + f[0]) +
      ',' +
      r((t[1] - f[1]) * p + f[1]) +
      ',' +
      r((t[2] - f[2]) * p + f[2]) +
      (f[3] < 0 && t[3] < 0
        ? ''
        : ',' +
          (f[3] > -1 && t[3] > -1
            ? r(((t[3] - f[3]) * p + f[3]) * 10000) / 10000
            : t[3] < 0
            ? f[3]
            : t[3])) +
      ')'
    );
  }

  return (
    '#' +
    (
      0x100000000 +
      (f[3] > -1 && t[3] > -1
        ? r(((t[3] - f[3]) * p + f[3]) * 255)
        : t[3] > -1
        ? r(t[3] * 255)
        : f[3] > -1
        ? r(f[3] * 255)
        : 255) *
        0x1000000 +
      r((t[0] - f[0]) * p + f[0]) * 0x10000 +
      r((t[1] - f[1]) * p + f[1]) * 0x100 +
      r((t[2] - f[2]) * p + f[2])
    )
      .toString(16)
      .slice(f[3] > -1 || t[3] > -1 ? 1 : 3)
  );
}

export function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
}

export function rgbToHex(r, g, b) {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export function hslToHex(h, s, l) {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, '0'); // convert to Hex and prefix "0" if needed
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

export default function colorOnMount(doc) {
  let mainElement = doc.getElementsByTagName('main')[0];
  let mainStyle = window.getComputedStyle(mainElement);
  let bgColor = mainStyle.getPropertyValue('background-color');
  const gOpacity = 0.25;

  bgColor = rgbToHex(
    ...bgColor
      .replace('rgb', '')
      .replace('(', '')
      .replace(')', '')
      .split(',')
      .map(function (item) {
        return parseInt(item, 10);
      })
  );

  let el = doc.getElementById('entity-icon');
  let bgEl = doc.getElementById('bg-grad');

  el.setAttribute('crossOrigin', 'anonymous');

  let rgb = getAverageRGB(el);
  let hsl = rgbToHsl(...rgb);

  // parse grayscales
  if (hsl[0] == 0 && parseFloat(hsl[1]) < 10) {
    // grayscale,
    // use default purple
    hsl = [270, 80, 50];
  } else {
    // colorful,
    // increase saturation and lightness
    hsl[1] = 100;
    hsl[2] = 35;
  }

  let hslFormatted = [];
  hslFormatted.push(hsl[0]);
  hslFormatted.push(hsl[1]);
  hslFormatted.push(hsl[2]);

  // entity icon
  let cssAccent = generateCSSAccent(hsl, gOpacity);
  let cssAccentHex = hslToHex(...hslFormatted);
  let cssBgProp = `linear-gradient(${cssAccent}, transparent)`;
  bgEl.style.display = 'none';
  bgEl.style.background = cssBgProp;
  bgEl.style.display = 'block';

  let blendedAccent = blend(bgColor, cssAccentHex, gOpacity);
  doc.getElementById('theme-meta').setAttribute('content', blendedAccent);

  var lastKnown = window.scrollY;
  var scrollThreshold = 120;
  doc.addEventListener('scroll', function (e) {
    let y = window.scrollY;
    if (y > scrollThreshold && lastKnown < scrollThreshold) {
      doc.getElementById('theme-meta').setAttribute('content', bgColor);
      bgEl.style.opacity = 0;
    } else if (y < scrollThreshold && lastKnown > scrollThreshold) {
      doc.getElementById('theme-meta').setAttribute('content', blendedAccent);
      bgEl.style.opacity = 1;
    }
    lastKnown = y;
  });
}
