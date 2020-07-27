<script>
  import Button from 'smelte/src/components/Button';
  import Utils from '../plugins/utils.js';

  export let hue;
  const paletteColorClass = hue ? 'is-hsl-' + hue : '';

  let open;
  let backgroundStyle;
  let histories = [];

  function closePalette() {
    open = false;
    backgroundStyle = null;
  }
  function changeGradation() {
    const gradation = Utils.makeGradation(hue);
    backgroundStyle = gradation;
    histories = [...histories, gradation];
  }
  function viewHistory(gradation) {
    backgroundStyle = gradation;
  }
</script>

<div class="palette--container" class:open>
  <button class="close" on:click="{closePalette}">╳</button>
  <div class="palette {paletteColorClass}" on:click="{() => (open = true)}"></div>
  <div class="gradation-maker" style="background: {backgroundStyle}" on:click="{changeGradation}"></div>
  <div class="flex history--container">
    {#each histories as history, i}
      <Button style="margin: 5px; background: {history}" on:click="{() => viewHistory(history)}" />
    {/each}
  </div>
</div>

<style lang="scss">
  $palette-size: 200px;

  .palette--container {
    position: relative;
    width: $palette-size * 5 / 4;
    height: $palette-size * 3 / 4;
    margin-left: $palette-size * 1 / 4;
  }

  .palette {
    position: fixed;
    width: $palette-size;
    height: $palette-size;
    display: block;
    transform: scale(0.5);
    transition: all 0.3s ease-out;
    animation: reverse-z-index 0.3s both;
    cursor: pointer;
  }
  .open {
    .palette {
      transform: scale(25);
      transition: all 1s ease-out;
      animation: forward-z-index 1s both;
    }
  }

  .close {
    animation: hide-close 1s reverse both;
    display: none;

    &:focus {
      outline: none;
      transform: scale(1.1);
    }
  }
  .open {
    .close {
      display: inline-block;

      border: none;
      background: none;
      position: fixed;
      top: 2em;
      right: 1em;
      font-size: 2em;
      padding: 1em;
      cursor: pointer;
      z-index: 20;

      transition-duration: 0.5s;
      transform: scale(1);

      &:hover {
        outline: none;
        transform: scale(1.5);
      }
    }
  }

  .gradation-maker {
    display: none;
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0px;
    left: 0px;
    z-index: 15;
    cursor: pointer;
  }
  .open {
    .gradation-maker {
      display: block;
    }
  }

  .history--container {
    display: none;
    z-index: 20;
    position: fixed;
    bottom: 4em;
    left: 20vw;
    width: 60vw;
  }
  .open {
    .history--container {
      display: block;
    }
  }

  @keyframes forward-z-index {
    0% {
      z-index: 0;
      border-radius: 25%;
    }
    1% {
      z-index: 10;
    }
    50% {
      border-radius: 50%;
    }
    100% {
      z-index: 10;
      border-radius: 50%;
    }
  }
  @keyframes reverse-z-index {
    0% {
      z-index: 10;
      border-radius: 50%;
    }
    50% {
      border-radius: 50%;
    }
    99% {
      z-index: 10;
    }
    100% {
      z-index: 0;
      border-radius: 25%;
    }
  }
  @keyframes hide-close {
    0% {
      opacity: 1;
      display: inline-block;
    }
    100% {
      display: none;
      opacity: 0;
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
