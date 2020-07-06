<script>
  export let hue;
  const bgColorClass = 'is-hsl-' + hue;

  let open = false;
</script>

<div class="palette--container" class:open={open}>
  <div
    class="palette {bgColorClass}"
    on:click={() => open = !open} />
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
    transition: all .3s ease-out;
    backface-visibility: hidden;
    transform: scale(.5);
  }
  .open {
    .palette {
      transform: scale(25);
      transition: all .6s ease-out;
      border-radius: 50%;
    }
  }

  @function getHsl($hue) {
     @return hsl($hue, 95%, 65%);
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
