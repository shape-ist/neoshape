export function getAverageRGB(imgEl) {
    var blockSize = 5, // only visit every 5 pixels
        defaultRGB = {
            r: 0,
            g: 0,
            b: 0
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
            b: 0
        },
        count = 0;

    if (!context) {
        return defaultRGB;
    }

    height = canvas.height =
        imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
    width = canvas.width =
        imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

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
    return [
        ~~(rgb.r / count),
        ~~(rgb.g / count),
        ~~(rgb.b / count),
    ]
}

export function rgbToHsl(r, g, b) {
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b),
        min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

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

    let hslOut = [(h * 3.6), s, l].map(function(e){
        return Number(e.toFixed(2) * 100);
    });
    return hslOut
}

export function generateCSSAccent(hsla, alpha = '1') {
    hsla[1] = hsla[1] + '%'
    hsla[2] = hsla[2] + '%'
    hsla.push(alpha)
    hsla = hsla.join(", ");
    return `hsla(${hsla})`
}