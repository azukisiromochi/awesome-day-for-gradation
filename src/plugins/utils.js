export default {
  makeGradation : function(h) {
    const primaryHsl = this.randomHsl(h)
    const secondaryHsl = this.randomHsl()
    const deg = this.randomDegree()
    return 'linear-gradient(' + deg + 'deg, ' + primaryHsl + ', ' + secondaryHsl + ')'
  },
  randomHsl: function(h) {
    return 'hsl(' + this.randomHue(h) + ',' + this.randomSaturation() + '%,' + this.randomLightness() + '%)'
  },
  randomHue: function(h) {
    const hue = +h;
    if (hue || hue === 0) {
      const rand = this.random(0, 30)
      if (hue == 0 && rand < 15) {
        return (360 - 1) - rand
      } else {
        return hue + (rand - 15)
      }
    }
    return this.random(0, 360)
  },
  randomSaturation: function() {
    return this.random(20, 100)
  },
  randomLightness: function() {
    return this.random(10, 90)
  },
  randomDegree: function() {
    return this.random(10, 360)
  },
  random: function(start, end) {
    const range = end - start
    return Math.floor(Math.random() * range) + start
  }
};
