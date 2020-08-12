<script>
  import Button from 'smelte/src/components/Button';
  import Utils from '../plugins/utils.js';
  import { hueStore, gradationStore } from '../store/stores.js';

  export let hue;
  const paletteColorClass = hue ? 'is-hsl-' + hue : '';

  let open;
  let close;
  let backgroundStyle;
  let histories = [];

  export const openPalette = () => {
    open = true;
    close = false;
    hueStore.set(hue);
  };
  const closePalette = () => {
    open = false;
    close = true;
    backgroundStyle = null;
    hueStore.clear();
    gradationStore.clear();
  };
  const changeGradation = () => {
    const gradation = Utils.makeGradation(hue);
    backgroundStyle = gradation;
    histories = [...histories, gradation];
    gradationStore.set(gradation);
  };
  export const viewHistory = (history) => {
    backgroundStyle = history;
    gradationStore.set(history);
  };
</script>

<div class="palette--container" class:open class:close>
  <button class="close-button" on:click="{closePalette}">╳</button>
  <div class="palette {paletteColorClass}" on:click="{openPalette}"></div>
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
    height: $palette-size * 7 / 8;
    margin-left: $palette-size * 1 / 4;
  }

  .palette {
    position: fixed;
    width: $palette-size;
    height: $palette-size;
    display: block;
    animation: init-palette 0.5s both;
    cursor: pointer;
  }
  .close {
    .palette {
      animation: close-palette 0.5s both;
    }
  }
  .open {
    .palette {
      animation: open-palette 1s both;
    }
  }

  .close-button {
    animation: hide-close-button 1s reverse both;
    display: none;
    color: white;

    &:focus {
      outline: none;
      transform: scale(1.1);
    }
  }
  .open {
    .close-button {
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

  @keyframes init-palette {
    0% {
      z-index: 10;
      border-radius: 50%;
      transform: scale(1);
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
      transform: scale(0.5);
    }
  }
  @keyframes open-palette {
    0% {
      z-index: 0;
      border-radius: 25%;
      transform: scale(0.5);
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
      transform: scale(25);
    }
  }
  @keyframes close-palette {
    0% {
      z-index: 10;
      border-radius: 50%;
      transform: scale(25);
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
      transform: scale(0.5);
    }
  }
  @keyframes hide-close-button {
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
