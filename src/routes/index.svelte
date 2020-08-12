<script>
  import Palette from '../components/Palette.svelte';
  import { stores } from '@sapper/app';
  import { onMount } from 'svelte';

  const { page } = stores();
  const query = $page.query;

  let palette = {};
  onMount(() => {
    if (query.h && palette[query.h]) {
      setTimeout(()=> palette[query.h].openPalette(), 500);
      setTimeout(()=> palette[query.h].viewHistory(query.g), 1500);
    }
  });
</script>

<div class="container h-full items-center flex flex-wrap justify-around">
  <Palette hue="000" bind:this="{palette['000']}" />
  <Palette hue="030" bind:this="{palette['030']}" />
  <Palette hue="060" bind:this="{palette['060']}" />
  <Palette hue="090" bind:this="{palette['090']}" />
  <Palette hue="120" bind:this="{palette['120']}" />
  <Palette hue="150" bind:this="{palette['150']}" />
  <Palette hue="180" bind:this="{palette['180']}" />
  <Palette hue="210" bind:this="{palette['210']}" />
  <Palette hue="240" bind:this="{palette['240']}" />
  <Palette hue="270" bind:this="{palette['270']}" />
  <Palette hue="300" bind:this="{palette['300']}" />
  <Palette hue="330" bind:this="{palette['330']}" />
</div>
