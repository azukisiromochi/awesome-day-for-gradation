<script>
  export let hue;
  const bgColorClass = hue ? 'is-hsl-' + hue : null;

  let open = false;
</script>

<div class="palette--container" class:open>
  <div class="palette {bgColorClass}" on:click="{() => (open = !open)}"></div>
</div>

<style lang="scss">
  $palette-size: 200px;

  .palette--container {
    position: relative;
    width: $palette-size * 1.5;
    height: $palette-size;
  }

  .palette {
    position: fixed;
    width: $palette-size;
    height: $palette-size;
    display: block;
    background: black;
    border-radius: 25%;
    backface-visibility: hidden;
    transform: scale(0.5);
    transition: all 0.3s ease-out;
    animation: reverse-z-index 0.3s both;
  }
  .open {
    .palette {
      border-radius: 50%;
      transform: scale(25);
      transition: all 0.6s ease-out;
      animation: forward-z-index 0.6s both;
    }
  }

  @keyframes forward-z-index {
    0% {
      z-index: 0;
    }
    1% {
      z-index: 10;
    }
    100% {
      z-index: 10;
    }
  }
  @keyframes reverse-z-index {
    0% {
      z-index: 10;
    }
    99% {
      z-index: 10;
    }
    100% {
      z-index: 0;
    }
  }

  @function getHsl($hue) {
    @return hsl($hue, 90%, 70%);
  }
  .is-hsl-000 {
    background-color: getHsl(0);
  }
  .is-hsl-030 {
    background-color: getHsl(30);
  }
  .is-hsl-060 {
    background-color: getHsl(60);
  }
  .is-hsl-090 {
    background-color: getHsl(90);
  }
  .is-hsl-120 {
    background-color: getHsl(120);
  }
  .is-hsl-150 {
    background-color: getHsl(150);
  }
  .is-hsl-180 {
    background-color: getHsl(180);
  }
  .is-hsl-210 {
    background-color: getHsl(210);
  }
  .is-hsl-240 {
    background-color: getHsl(240);
  }
  .is-hsl-270 {
    background-color: getHsl(270);
  }
  .is-hsl-300 {
    background-color: getHsl(300);
  }
  .is-hsl-330 {
    background-color: getHsl(330);
  }
</style>
