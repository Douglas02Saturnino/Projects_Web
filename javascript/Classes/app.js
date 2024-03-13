class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
        this.calcHSL();
    }

    innerRGB() {
        const { r, g, b } = this;
        return `${r}, ${g}, ${b}`;
    }

    rgb() {
        return `rgb(${this.innerRGB()})`;
    }

    hex() {
        const { r, g, b } = this;
        return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
    }

    rbga(a = 1.0) {
        return `rgba(${this.innerRGB()}, ${a})`;
    }

    hsl() {
        const { h, s, l } = this;
        return `hsl(${h}, ${s}%, ${l}%)`;
    }

    fullySaturated() {
        const { h, l } = this;
        return `hsl(${h}, 100%, ${l}%)`;
    }

    oposite() {
        const { h, s, l } = this;
        return `hsl(${(h + 180) % 360}, ${s}%, ${l}%)`;
    }

    calcHSL() {
        let { r, g, b } = this;
        r /= 255;
        g /= 255;
        b /= 255;

        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let h = 0;
        let s = 0;
        let l = (max + min) / 2;
        const delta = max - min;

        if (delta !== 0) {
            s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);
            switch (max) {
                case r:
                    h = (g - b) / delta + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / delta + 2;
                    break;
                case b:
                    h = (r - g) / delta + 4;
                    break;
            }
            h = Math.round(h * 60);
        }
        return [h, s, l];
    }
}