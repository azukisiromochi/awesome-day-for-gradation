export default {
  calcBreakpoint: function(width) {
    if (width > 1279) {
      return 'xl';
    }
    if (width > 1023) {
      return 'lg';
    }
    if (width > 600) {
      return 'md';
    }
    if (width > 350) {
      return 'sm';
    }
    return 'xs';
  },
  makeShareUrl: function(url, hue, gradation) {
    if (!hue || !gradation) {
      return url;
    }
    const encode = encodeURI(gradation);
    return url + '?h=' + hue + '&g=' + encode;
  },
  makeGradation: function(hue) {
    const primaryHsl = this.randomHsl(hue)
    const secondaryHsl = this.randomHsl();
    const deg = this.randomDegree();
    return 'linear-gradient(' + deg + 'deg,' + primaryHsl + ',' + secondaryHsl + ')';
  },
  makeHsl: function(h, s, l) {
    return 'hsl(' + h + ',' + s + '%,' + l + '%)';
  },
  randomHsl: function(hue) {
    const h = this.randomHue(hue);
    const s = this.randomSaturation();
    const l = this.randomLightness();
    return this.makeHsl(h, s, l);
  },
  randomHue: function(hue) {
    hue = +hue;
    if (hue || hue === 0) {
      const rand = this.random(0, 30);
      if (hue == 0 && rand < 15) {
        return (360 - 1) - rand;
      } else {
        return hue + (rand - 15);
      }
    }
    return this.random(0, 360);
  },
  randomSaturation: function() {
    return this.random(20, 100);
  },
  randomLightness: function() {
    return this.random(10, 90);
  },
  randomDegree: function() {
    return this.random(10, 360);
  },
  random: function(start, end) {
    const range = end - start;
    return Math.floor(Math.random() * range) + start;
  }
};
