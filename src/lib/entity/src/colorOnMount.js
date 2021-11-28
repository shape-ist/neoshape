import {
    getAverageRGB,
    rgbToHsl,
    generateCSSAccent,
    blend,
    hslToHex,
    rgbToHex,
} from './color';

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
        hsl = [270, 80, 50]
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
    doc
        .getElementById('theme-meta')
        .setAttribute('content', blendedAccent);

    var lastKnown = window.scrollY;
    var scrollThreshold = 120;
    doc.addEventListener('scroll', function (e) {
        let y = window.scrollY;
        if (y > scrollThreshold && lastKnown < scrollThreshold) {
            doc
                .getElementById('theme-meta')
                .setAttribute('content', bgColor);
            bgEl.style.opacity = 0;
        } else if (y < scrollThreshold && lastKnown > scrollThreshold) {
            doc
                .getElementById('theme-meta')
                .setAttribute('content', blendedAccent);
            bgEl.style.opacity = 1;
        }
        lastKnown = y;
    });
}